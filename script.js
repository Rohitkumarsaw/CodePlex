/* ============================================================
   SCRIPT.JS — DevVault Application Logic
   Updated category-managed version
   ============================================================ */

// ============================================================
// STATE
// ============================================================
const state = {
  activeCategory: '',
  searchQuery: '',
  typeFilter: '',
  sortOrder: 'newest',
  unlockedProducts: new Set(),
  deleteTarget: null,
  currentTheme: localStorage.getItem('devvault-theme') || 'dark',
  mobileMenuOpen: false,
};

// ============================================================
// CATEGORY HELPERS
// ============================================================
function getSafeCategories() {
  return Array.isArray(categories) ? categories : [];
}

function getCategoryById(categoryId) {
  return getSafeCategories().find(c => c.id === categoryId) || null;
}

function getCategoryByName(categoryName) {
  return getSafeCategories().find(c => c.name === categoryName) || null;
}

function getCategoryMeta(categoryValue) {
  if (!categoryValue) return null;
  return getCategoryById(categoryValue) || getCategoryByName(categoryValue);
}

function getProductCategoryId(product) {
  if (!product) return '';

  if (product.categoryId && getCategoryById(product.categoryId)) {
    return product.categoryId;
  }

  const matched = getCategoryByName(product.category);
  return matched ? matched.id : '';
}

function getProductCategoryName(product) {
  if (!product) return 'Uncategorized';

  const meta = getCategoryById(product.categoryId) || getCategoryByName(product.category);
  if (meta) return meta.name;

  return product.category || 'Uncategorized';
}

function getProductCategoryIcon(product) {
  const meta = getCategoryById(product.categoryId) || getCategoryByName(product.category);
  return meta?.icon || '📦';
}

function getDisplayCategoryList() {
  const productCounts = getCategoryCountsById();

  const managed = getSafeCategories().map(cat => ({
    id: cat.id,
    name: cat.name,
    icon: cat.icon || '📦',
    count: productCounts[cat.id] || 0,
  }));

  const uncategorizedCount = products.filter(p => {
    const categoryId = getProductCategoryId(p);
    const categoryName = getProductCategoryName(p);
    return !categoryId && categoryName === 'Uncategorized';
  }).length;

  if (uncategorizedCount > 0) {
    managed.push({
      id: 'uncategorized',
      name: 'Uncategorized',
      icon: '📦',
      count: uncategorizedCount,
    });
  }

  return managed;
}

function getCategoryCountsById() {
  const counts = {};

  products.forEach(product => {
    const categoryId = getProductCategoryId(product);

    if (categoryId) {
      counts[categoryId] = (counts[categoryId] || 0) + 1;
    }
  });

  return counts;
}

function normalizeProductsCategoryData() {
  if (!Array.isArray(products)) return;

  products.forEach(product => {
    const matched = getCategoryById(product.categoryId) || getCategoryByName(product.category);

    if (matched) {
      product.categoryId = matched.id;
      product.category = matched.name;
    }
  });
}

// ============================================================
// INIT
// ============================================================
function initApp() {
  normalizeProductsCategoryData();
  applyTheme(state.currentTheme);
  renderStats();
  renderCategories();
  renderFeaturedProducts();
  renderProducts(getFilteredProducts());
  populateCategoryFilter();
  setupEventListeners();
  updateFooterYear();
  initScrollAnimations();
  initNavActiveState();
  initBackToTop();
}

// ============================================================
// THEME
// ============================================================
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('devvault-theme', theme);
  state.currentTheme = theme;
}

function toggleTheme() {
  const newTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
}

// ============================================================
// STATS
// ============================================================
function renderStats() {
  const total = products.length;
  const free = products.filter(p => p.type === 'free').length;
  const paid = products.filter(p => p.type === 'paid').length;
  const cats = getDisplayCategoryList().filter(c => c.count > 0).length;

  const container = document.getElementById('hero-stats');
  if (!container) return;

  const stats = [
    { value: total, label: 'Products' },
    { value: free, label: 'Free' },
    { value: paid, label: 'Paid' },
    { value: cats, label: 'Categories' },
  ];

  container.innerHTML = stats.map(s => `
    <div class="stat-card" role="listitem">
      <span class="stat-value">${s.value}</span>
      <span class="stat-label">${s.label}</span>
    </div>
  `).join('');
}

// ============================================================
// CATEGORIES
// ============================================================
function renderCategories() {
  const container = document.getElementById('categories-grid');
  if (!container) return;

  const counts = {};
  products.forEach(p => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });

  const cats = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  const allChip = `
    <button class="category-chip ${state.activeCategory === '' ? 'active' : ''}" 
            data-category="" role="listitem" aria-pressed="${state.activeCategory === ''}">
      <span class="category-chip-icon" aria-hidden="true">🏠</span>
      <span>All</span>
      <span class="category-chip-count">${products.length}</span>
    </button>
  `;

  container.innerHTML = allChip + cats.map(([cat, count]) => {
    // ✅ FIXED: Trim + exact match
    const catObj = categories?.find(c => c.name.trim() === cat.trim()) || null;
    const icon = catObj?.icon || '📦';
    
    return `
      <button class="category-chip ${state.activeCategory === cat ? 'active' : ''}" 
              data-category="${cat}" role="listitem" aria-pressed="${state.activeCategory === cat}">
        <span class="category-chip-icon" aria-hidden="true">${icon}</span>
        <span>${cat}</span>
        <span class="category-chip-count">${count}</span>
      </button>
    `;
  }).join('');
}


function populateCategoryFilter() {
  const sel = document.getElementById('category-filter');
  if (!sel) return;

  const cats = (typeof categories !== 'undefined' && Array.isArray(categories))
    ? categories.map(c => c.name)
    : [...new Set(products.map(p => p.category))].sort();

  sel.innerHTML =
    `<option value="">All Categories</option>` +
    cats.map(c => `<option value="${escAttr(c)}">${escHtml(c)}</option>`).join('');

  sel.value = state.activeCategory || '';
}

function handleCategoryFilter(cat) {
  state.activeCategory = cat;
  renderCategories();
  syncCategorySelect();
  renderProducts(getFilteredProducts());
  updateProductCount();
}

function syncCategorySelect() {
  const sel = document.getElementById('category-filter');
  if (sel) sel.value = state.activeCategory;
}
// ============================================================
// RENDER FEATURED
// ============================================================
function renderFeaturedProducts() {
  const featured = products.filter(p => p.featured);
  const container = document.getElementById('featured-grid');
  const empty = document.getElementById('featured-empty');
  const section = document.getElementById('featured-section');
  if (!container) return;

  if (!featured.length) {
    container.innerHTML = '';
    if (empty) empty.hidden = false;
    if (section) section.hidden = true;
    return;
  }

  if (empty) empty.hidden = true;
  if (section) section.hidden = false;
  container.innerHTML = featured.map(p => renderProductCard(p, true)).join('');
}

// ============================================================
// RENDER ALL PRODUCTS
// ============================================================
function renderProducts(list) {
  const container = document.getElementById('products-grid');
  const empty = document.getElementById('products-empty');
  if (!container) return;

  updateProductCount(list.length);

  if (!list.length) {
    container.innerHTML = '';
    if (empty) empty.hidden = false;
    return;
  }

  if (empty) empty.hidden = true;
  container.innerHTML = list.map(p => renderProductCard(p, false)).join('');
}

function renderProductCard(product, isFeatured) {
  const isFree = product.type === 'free';
  const priceLabel = isFree ? 'Free' : `₹${product.price}`;
  const priceCls = isFree ? 'free' : '';
  const featuredBadge = (isFeatured || product.featured)
    ? '<span class="card-featured-badge" aria-label="Featured">★ Featured</span>' : '';
  const tags = (product.tags || []).slice(0, 3).map(t =>
    `<span class="tag-chip">${escHtml(t)}</span>`).join('');
  const imgSrc = product.image || defaultImages.product;
  const categoryName = getProductCategoryName(product);

  return `
    <article class="product-card${(isFeatured || product.featured) ? ' featured-card' : ''}"
      data-id="${escAttr(product.id)}" role="listitem" tabindex="0"
      aria-label="${escAttr(product.title)}">
      <div class="card-image-wrap">
        <img src="${escAttr(imgSrc)}" alt="${escAttr(product.title)}"
          loading="lazy" onerror="this.src='${defaultImages.product}'">
        ${featuredBadge}
        <span class="card-type-badge badge-${product.type}">${isFree ? 'Free' : 'Paid'}</span>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-category">${escHtml(categoryName)}</span>
          <span class="card-price ${priceCls}">${priceLabel}</span>
        </div>
        <h3 class="card-title">${escHtml(product.title)}</h3>
        <p class="card-desc">${escHtml(product.shortDescription)}</p>
        ${tags ? `<div class="card-tags">${tags}</div>` : ''}
        <div class="card-footer">
          <div class="card-stats">
            ${product.rating ? `<span class="card-stat" title="Rating">⭐ ${product.rating}</span>` : ''}
            ${product.downloads ? `<span class="card-stat" title="Downloads">↓ ${product.downloads}</span>` : ''}
          </div>
          <div class="card-actions">
            <button class="btn btn-primary card-view-btn view-product-btn"
              data-id="${escAttr(product.id)}" aria-label="View details for ${escAttr(product.title)}">
              Details
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

// ============================================================
// PRODUCT MODAL
// ============================================================
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const overlay = document.getElementById('product-modal-overlay');
  const body = document.getElementById('product-modal-body');
  if (!overlay || !body) return;

  body.innerHTML = renderProductDetails(product);
  overlay.setAttribute('aria-hidden', 'false');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  const closeBtn = document.getElementById('product-modal-close');
  if (closeBtn) closeBtn.focus();

  bindModalEvents(product);
}

function closeProductModal() {
  const overlay = document.getElementById('product-modal-overlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function renderProductDetails(product) {
  const isFree = product.type === 'free';
  const isUnlocked = state.unlockedProducts.has(product.id);
  const imgSrc = product.image || defaultImages.product;
  const categoryName = getProductCategoryName(product);

  const thumbsHtml = (product.previewImages || []).length > 1
    ? `<div class="modal-image-thumbs">
        ${(product.previewImages || []).map((img, i) => `
          <div class="modal-thumb${i === 0 ? ' active' : ''}" data-img="${escAttr(img)}" role="button" tabindex="0" aria-label="Preview image ${i + 1}">
            <img src="${escAttr(img)}" alt="Preview ${i + 1}" loading="lazy">
          </div>
        `).join('')}
      </div>` : '';

  const featuresHtml = (product.features || []).length
    ? `<div>
        <div class="modal-section-title">Features</div>
        <ul class="features-list">
          ${product.features.map(f => `<li class="feature-item">${escHtml(f)}</li>`).join('')}
        </ul>
      </div>` : '';

  const tagsHtml = (product.tags || []).length
    ? `<div class="card-tags" style="margin-top:4px;">
        ${product.tags.map(t => `<span class="tag-chip">${escHtml(t)}</span>`).join('')}
      </div>` : '';

  const demoBtn = product.demoLink
    ? `<a href="${escAttr(product.demoLink)}" target="_blank" rel="noopener noreferrer"
        class="btn btn-ghost" style="margin-bottom:var(--space-4);">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Live Preview
        </a>` : '';

  let downloadSection = '';
  if (isFree) {
    downloadSection = `
      <div class="download-section">
        <div class="modal-section-title">Downloads</div>
        <div class="download-links-grid">
          ${renderDownloadLinks(product.downloadLinks)}
        </div>
      </div>
    `;
  } else if (isUnlocked) {
    downloadSection = `
      <div class="download-section">
        <div class="unlock-success">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          Product unlocked successfully!
        </div>
        <div class="modal-section-title">Downloads</div>
        <div class="download-links-grid">
          ${renderDownloadLinks(product.downloadLinks)}
        </div>
      </div>
    `;
  } else {
    const pi = product.paymentInfo || paymentConfig;
    downloadSection = `
      <div class="download-section locked">
        <div class="modal-section-title">🔒 Purchase to Download</div>
        <div class="payment-info-box">
          <h4>₹${product.price} ${product.currency || 'INR'}</h4>
          <p style="font-size:0.85rem;color:var(--text-secondary);">${escHtml(pi.note || paymentConfig.note)}</p>
          ${pi.upiId ? `<p class="upi-id">UPI: ${escHtml(pi.upiId)}</p>` : ''}
          <div class="payment-methods">
            ${(pi.methods || paymentConfig.methods).map(m => `<span class="payment-badge">${escHtml(m)}</span>`).join('')}
          </div>
        </div>
        <div class="modal-section-title">Enter Serial Key</div>
        <div class="serial-key-form">
          <input type="text" class="serial-key-input" id="serial-input-${escAttr(product.id)}"
            placeholder="Enter your serial key..."
            aria-label="Serial key for ${escAttr(product.title)}"
            autocomplete="off" />
          <button class="btn btn-primary verify-key-btn" data-id="${escAttr(product.id)}">
            Verify
          </button>
        </div>
        <span class="serial-error-msg" id="serial-error-${escAttr(product.id)}" role="alert">
          ❌ Invalid serial key. Please check and try again.
        </span>
        ${product.demoLink
          ? `<a href="${escAttr(product.demoLink)}" target="_blank" rel="noopener noreferrer"
              class="btn btn-ghost btn-sm" style="margin-top:var(--space-4);display:inline-flex;">
                View Demo Before Buying
              </a>` : ''}
      </div>
    `;
  }

  const related = products
    .filter(p => p.id !== product.id && getProductCategoryId(p) === getProductCategoryId(product))
    .slice(0, 4);

  const relatedHtml = related.length ? `
    <div>
      <div class="modal-section-title">Related Products</div>
      <div class="related-products">
        ${related.map(r => `
          <div class="related-card" data-id="${escAttr(r.id)}" role="button" tabindex="0" aria-label="View ${escAttr(r.title)}">
            <div class="related-card-img">
              <img src="${escAttr(r.image || defaultImages.product)}" alt="${escAttr(r.title)}" loading="lazy">
            </div>
            <div class="related-card-body">
              <div class="related-card-title">${escHtml(r.title)}</div>
              <span class="card-price ${r.type === 'free' ? 'free' : ''}" style="font-size:0.78rem;margin-top:4px;display:block;">
                ${r.type === 'free' ? 'Free' : `₹${r.price}`}
              </span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  return `
    <div class="modal-product-grid">
      <div>
        <div class="modal-image-wrap">
          <img id="modal-main-img" src="${escAttr(imgSrc)}" alt="${escAttr(product.title)}" loading="lazy"
            onerror="this.src='${defaultImages.product}'">
        </div>
        ${thumbsHtml}
        <div style="margin-top:var(--space-5);">${demoBtn}</div>
      </div>

      <div class="modal-product-info">
        <div class="modal-type-row">
          <span class="modal-badge badge-${product.type}">
            ${product.type === 'free' ? 'Free' : 'Paid'}
          </span>
          <span class="card-category">${escHtml(categoryName)}</span>
          ${product.featured ? '<span class="card-featured-badge" style="position:static;">★ Featured</span>' : ''}
        </div>
        <h2 class="modal-title" id="modal-product-title">${escHtml(product.title)}</h2>
        <p class="modal-short-desc">${escHtml(product.shortDescription)}</p>
        ${product.type === 'paid'
          ? `<div class="modal-price-tag">₹${product.price} <span style="font-size:1rem;font-weight:400;color:var(--text-muted);">${product.currency || 'INR'}</span></div>`
          : `<div class="modal-price-tag free">Free</div>`}

        <div class="modal-meta-grid">
          ${product.version ? `<div class="modal-meta-item"><span class="modal-meta-label">Version</span><span class="modal-meta-value">${escHtml(product.version)}</span></div>` : ''}
          ${product.fileSize ? `<div class="modal-meta-item"><span class="modal-meta-label">File Size</span><span class="modal-meta-value">${escHtml(product.fileSize)}</span></div>` : ''}
          ${product.compatibility ? `<div class="modal-meta-item"><span class="modal-meta-label">Compatibility</span><span class="modal-meta-value">${escHtml(product.compatibility)}</span></div>` : ''}
          ${product.author ? `<div class="modal-meta-item"><span class="modal-meta-label">Author</span><span class="modal-meta-value">${escHtml(product.author)}</span></div>` : ''}
          ${product.rating ? `<div class="modal-meta-item"><span class="modal-meta-label">Rating</span><span class="modal-meta-value">⭐ ${product.rating}/5</span></div>` : ''}
          ${product.downloads ? `<div class="modal-meta-item"><span class="modal-meta-label">Downloads</span><span class="modal-meta-value">${product.downloads.toLocaleString()}</span></div>` : ''}
          ${product.updatedAt ? `<div class="modal-meta-item"><span class="modal-meta-label">Last Updated</span><span class="modal-meta-value">${product.updatedAt}</span></div>` : ''}
        </div>
        ${tagsHtml}
      </div>

      <div class="modal-full-section">
        ${product.fullDescription ? `
          <div>
            <div class="modal-section-title">About This Product</div>
            <p class="modal-full-desc">${escHtml(product.fullDescription)}</p>
          </div>
        ` : ''}
        ${featuresHtml}
        ${downloadSection}
        ${relatedHtml}
      </div>
    </div>
  `;
}

function renderDownloadLinks(links) {
  if (!links || !links.length) return '<p style="color:var(--text-muted);font-size:0.85rem;">No download links available.</p>';
  return links.map(link => `
    <a href="${escAttr(link.url)}" class="download-link-btn"
      ${link.url !== '#' ? 'target="_blank" rel="noopener noreferrer"' : ''}
      aria-label="Download: ${escAttr(link.label)}">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      ${escHtml(link.label)}
    </a>
  `).join('');
}

function bindModalEvents(product) {
  document.querySelectorAll('.modal-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const imgEl = document.getElementById('modal-main-img');
      if (imgEl) imgEl.src = thumb.dataset.img;
      document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });

    thumb.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        thumb.click();
      }
    });
  });

  const verifyBtn = document.querySelector(`.verify-key-btn[data-id="${product.id}"]`);
  if (verifyBtn) {
    verifyBtn.addEventListener('click', () => verifySerialKey(product.id));
    const keyInput = document.getElementById(`serial-input-${product.id}`);
    if (keyInput) {
      keyInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') verifySerialKey(product.id);
      });
    }
  }

  document.querySelectorAll('.related-card').forEach(card => {
    card.addEventListener('click', () => {
      closeProductModal();
      setTimeout(() => openProductModal(card.dataset.id), 200);
    });

    card.addEventListener('keydown', e => {
      if (e.key === 'Enter') card.click();
    });
  });
}

// ============================================================
// SERIAL KEY VERIFICATION
// ============================================================
function verifySerialKey(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const input = document.getElementById(`serial-input-${productId}`);
  const errorMsg = document.getElementById(`serial-error-${productId}`);
  if (!input) return;

  const enteredKey = input.value.trim().toUpperCase();
  const validKeys = (product.serialKeys || []).map(k => k.toUpperCase());

  if (!enteredKey) {
    input.classList.add('error');
    if (errorMsg) {
      errorMsg.textContent = '⚠️ Please enter a serial key.';
      errorMsg.classList.add('visible');
    }
    return;
  }

  if (validKeys.includes(enteredKey)) {
    state.unlockedProducts.add(productId);
    input.classList.remove('error');
    input.classList.add('success');
    if (errorMsg) errorMsg.classList.remove('visible');
    showToast('🔓 Product unlocked! Downloading now available.', 'success');

    const body = document.getElementById('product-modal-body');
    if (body) {
      body.innerHTML = renderProductDetails(product);
      bindModalEvents(product);
    }
  } else {
    input.classList.add('error');
    input.value = '';
    if (errorMsg) {
      errorMsg.textContent = '❌ Invalid serial key. Please check and try again.';
      errorMsg.classList.add('visible');
    }
    showToast('Invalid serial key. Please check and try again.', 'error');
    input.focus();
  }
}

// ============================================================
// FILTERS & SEARCH
// ============================================================
function getFilteredProducts() {
  let list = [...products];

  // Search filter
  if (state.searchQuery && state.searchQuery.trim()) {
    const q = state.searchQuery.trim().toLowerCase();

    list = list.filter((p) => {
      const title = String(p.title || '').toLowerCase();
      const shortDescription = String(p.shortDescription || '').toLowerCase();
      const categoryName = String(getProductCategoryName(p) || '').toLowerCase();
      const tags = Array.isArray(p.tags) ? p.tags : [];
      const features = Array.isArray(p.features) ? p.features : [];

      return (
        title.includes(q) ||
        shortDescription.includes(q) ||
        categoryName.includes(q) ||
        tags.some(tag => String(tag).toLowerCase().includes(q)) ||
        features.some(feature => String(feature).toLowerCase().includes(q))
      );
    });
  }

  // Category filter
  if (state.activeCategory && String(state.activeCategory).trim() !== '') {
    list = list.filter((p) => {
      const productCategoryId = String(getProductCategoryId(p) || '').trim();
      const productCategoryName = String(getProductCategoryName(p) || '').trim();
      const activeCategory = String(state.activeCategory || '').trim();

      return (
        productCategoryId === activeCategory ||
        productCategoryName === activeCategory
      );
    });
  }

  // Type filter
  if (state.typeFilter && String(state.typeFilter).trim() !== '') {
    list = list.filter((p) => String(p.type || '').trim() === String(state.typeFilter).trim());
  }

  // Sorting
  switch (state.sortOrder) {
    case 'newest':
      list.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
      break;

    case 'oldest':
      list.sort((a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0));
      break;

    case 'az':
      list.sort((a, b) => String(a.title || '').localeCompare(String(b.title || '')));
      break;

    case 'za':
      list.sort((a, b) => String(b.title || '').localeCompare(String(a.title || '')));
      break;

    case 'price-low':
      list.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
      break;

    case 'price-high':
      list.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
      break;

    default:
      break;
  }

  return list;
}

function handleSearch() {
  const input = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear-btn');
  if (!input) return;

  state.searchQuery = input.value.trim();
  if (clearBtn) clearBtn.hidden = !state.searchQuery;

  renderProducts(getFilteredProducts());
  updateProductCount();
}

function handleTypeFilter() {
  const sel = document.getElementById('type-filter');
  if (sel) state.typeFilter = sel.value;
  renderProducts(getFilteredProducts());
  updateProductCount();
}

function handleSort() {
  const sel = document.getElementById('sort-filter');
  if (sel) state.sortOrder = sel.value;
  renderProducts(getFilteredProducts());
}

function resetFilters() {
  state.searchQuery = '';
  state.activeCategory = '';
  state.typeFilter = '';
  state.sortOrder = 'newest';

  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear-btn');
  const typeSel = document.getElementById('type-filter');
  const sortSel = document.getElementById('sort-filter');
  const catSel = document.getElementById('category-filter');

  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.hidden = true;
  if (typeSel) typeSel.value = '';
  if (sortSel) sortSel.value = 'newest';
  if (catSel) catSel.value = '';

  renderCategories();
  renderProducts(getFilteredProducts());
  updateProductCount();
  showToast('Filters reset.', 'info');
}

function updateProductCount(count) {
  const num = document.getElementById('product-count-num');
  if (num) num.textContent = count !== undefined ? count : getFilteredProducts().length;
}

// ============================================================
// PRODUCT FORM — ADD / EDIT
// ============================================================
function openProductForm(mode = 'add', productId = null) {
  const overlay = document.getElementById('form-modal-overlay');
  const title = document.getElementById('form-modal-title');
  const form = document.getElementById('product-form');
  if (!overlay || !form) return;

  form.reset();
  clearDynamicLists();
  resetFormErrors();
  setVal('form-product-id', '');

  populateFormCategorySelect();

  if (mode === 'edit' && productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    if (title) title.textContent = 'Edit Product';
    populateFormForEdit(product);
  } else {
    if (title) title.textContent = 'Add Product';
    togglePaidFields('free');
  }

  overlay.setAttribute('aria-hidden', 'false');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  const closeBtn = document.getElementById('form-modal-close');
  if (closeBtn) closeBtn.focus();
}

function closeFormModal() {
  const overlay = document.getElementById('form-modal-overlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function populateFormForEdit(product) {
  const categoryId = getProductCategoryId(product);

  setVal('form-product-id', product.id);
  setVal('form-title', product.title);
  populateFormCategorySelect(categoryId);
  setVal('form-short-desc', product.shortDescription);
  setVal('form-full-desc', product.fullDescription || '');
  setVal('form-type', product.type);
  setVal('form-price', product.price || '');
  setVal('form-image', product.image || '');
  setVal('form-demo-link', product.demoLink || '');
  setVal('form-version', product.version || '');
  setVal('form-file-size', product.fileSize || '');
  setVal('form-compatibility', product.compatibility || '');
  setVal('form-author', product.author || '');

  const featEl = document.getElementById('form-featured');
  if (featEl) featEl.checked = !!product.featured;

  (product.tags || []).forEach(t => addDynamicTag(t));
  (product.features || []).forEach(f => addDynamicFeature(f));
  (product.downloadLinks || []).forEach(l => addDownloadItem(l.label, l.url));

  if (product.type === 'paid') {
    togglePaidFields('paid');
    const pi = product.paymentInfo || {};
    setVal('form-upi-id', pi.upiId || '');
    setVal('form-payment-note', pi.note || '');
    (product.serialKeys || []).forEach(k => addDynamicKey(k));
  } else {
    togglePaidFields('free');
  }
}

function togglePaidFields(type) {
  const paidSection = document.getElementById('paid-fields-section');
  const priceGroup = document.getElementById('price-field-group');
  if (paidSection) paidSection.hidden = type !== 'paid';
  if (priceGroup) priceGroup.style.display = type === 'paid' ? '' : 'none';
}

function saveProduct() {
  if (!validateProductForm()) return;

  const id = document.getElementById('form-product-id').value;
  const type = document.getElementById('form-type').value;
  const selectedCategoryId = document.getElementById('form-category').value;
  const selectedCategory = getCategoryById(selectedCategoryId);

  const existingProduct = id ? products.find(p => p.id === id) : null;
  const tags = getListItems('tags-items');
  const features = getListItems('features-items');
  const downloadLinks = getDownloadItems();
  const serialKeys = getListItems('keys-items');
  const imageValue = document.getElementById('form-image').value.trim();
  const today = new Date().toISOString().split('T')[0];

  const productData = {
    id: id || `prod-${Date.now()}`,
    title: document.getElementById('form-title').value.trim(),
    shortDescription: document.getElementById('form-short-desc').value.trim(),
    fullDescription: document.getElementById('form-full-desc').value.trim(),
    categoryId: selectedCategoryId,
    category: selectedCategory ? selectedCategory.name : '',
    type,
    price: type === 'paid' ? (parseFloat(document.getElementById('form-price').value) || 0) : 0,
    currency: 'INR',
    image: imageValue,
    previewImages: imageValue ? [imageValue] : [],
    demoLink: document.getElementById('form-demo-link').value.trim() || null,
    downloadLinks,
    tags,
    features,
    version: document.getElementById('form-version').value.trim(),
    fileSize: document.getElementById('form-file-size').value.trim(),
    compatibility: document.getElementById('form-compatibility').value.trim(),
    author: document.getElementById('form-author').value.trim(),
    featured: document.getElementById('form-featured').checked,
    createdAt: existingProduct?.createdAt || today,
    updatedAt: today,
    rating: existingProduct?.rating || null,
    downloads: existingProduct?.downloads || 0,
    serialKeys: type === 'paid' ? serialKeys : [],
    paymentInfo: type === 'paid' ? {
      methods: ['UPI', 'Razorpay'],
      upiId: document.getElementById('form-upi-id').value.trim(),
      note: document.getElementById('form-payment-note').value.trim(),
    } : null,
  };

  if (id) {
    const idx = products.findIndex(p => p.id === id);
    if (idx !== -1) {
      products[idx] = productData;
      showToast(`"${productData.title}" updated successfully.`, 'success');
    }
  } else {
    products.unshift(productData);
    showToast(`"${productData.title}" added successfully!`, 'success');
  }

  closeFormModal();
  refreshAllProducts();
}

function refreshAllProducts() {
  normalizeProductsCategoryData();
  renderStats();
  renderCategories();
  renderFeaturedProducts();
  renderProducts(getFilteredProducts());
  populateCategoryFilter();
  updateProductCount();
}

function validateProductForm() {
  let valid = true;
  resetFormErrors();

  const title = document.getElementById('form-title');
  const category = document.getElementById('form-category');
  const shortDesc = document.getElementById('form-short-desc');
  const image = document.getElementById('form-image');

  if (!title.value.trim()) {
    showFieldError('form-title', 'form-title-error', 'Title is required.');
    valid = false;
  }
  if (!category.value) {
    showFieldError('form-category', 'form-category-error', 'Please select a category.');
    valid = false;
  }
  if (!shortDesc.value.trim()) {
    showFieldError('form-short-desc', 'form-short-desc-error', 'Short description is required.');
    valid = false;
  }
  if (!image.value.trim()) {
    showFieldError('form-image', 'form-image-error', 'Image URL is required.');
    valid = false;
  }

  return valid;
}

function showFieldError(fieldId, errorId, msg) {
  const field = document.getElementById(fieldId);
  const err = document.getElementById(errorId);
  if (field) field.classList.add('error');
  if (err) err.textContent = msg;
}

function resetFormErrors() {
  document.querySelectorAll('#product-form .error').forEach(el => el.classList.remove('error'));
  document.querySelectorAll('#product-form .field-error').forEach(el => el.textContent = '');
}

// ============================================================
// DELETE PRODUCT
// ============================================================
function confirmDeleteProduct(productId) {
  state.deleteTarget = productId;
  const product = products.find(p => p.id === productId);
  const desc = document.getElementById('confirm-modal-desc');
  if (desc && product) {
    desc.textContent = `Delete "${product.title}"? This cannot be undone.`;
  }
  openModal('confirm-modal-overlay');
}

function deleteProduct(productId) {
  const idx = products.findIndex(p => p.id === productId);
  if (idx === -1) return;
  const name = products[idx].title;
  products.splice(idx, 1);
  closeModal('confirm-modal-overlay');
  refreshAllProducts();
  showToast(`"${name}" deleted.`, 'success');
}

// ============================================================
// DYNAMIC FORM HELPERS
// ============================================================
function addDynamicTag(value) {
  if (!value.trim()) return;
  addDynamicItem('tags-items', value);
}

function addDynamicFeature(value) {
  if (!value.trim()) return;
  addDynamicItem('features-items', value);
}

function addDynamicKey(value) {
  if (!value.trim()) return;
  addDynamicItem('keys-items', value);
}

function addDynamicItem(containerId, value) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const div = document.createElement('div');
  div.className = 'dynamic-item';
  div.innerHTML = `
    <span class="dynamic-item-text">${escHtml(value)}</span>
    <button type="button" class="dynamic-item-remove" aria-label="Remove ${escHtml(value)}">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>
  `;

  div.querySelector('.dynamic-item-remove').addEventListener('click', () => div.remove());
  container.appendChild(div);
}

function addDownloadItem(label = '', url = '') {
  const container = document.getElementById('downloads-items');
  if (!container) return;

  const div = document.createElement('div');
  div.className = 'download-item-row';
  div.innerHTML = `
    <input type="text" placeholder="Label" value="${escAttr(label)}" class="download-label-input" />
    <input type="url" placeholder="URL (https://...)" value="${escAttr(url)}" class="download-url-input" />
    <button type="button" class="dynamic-item-remove" aria-label="Remove download link">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>
  `;

  div.querySelector('.dynamic-item-remove').addEventListener('click', () => div.remove());
  container.appendChild(div);
}

function getListItems(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return [];
  return [...container.querySelectorAll('.dynamic-item-text')]
    .map(el => el.textContent.trim())
    .filter(Boolean);
}

function getDownloadItems() {
  const container = document.getElementById('downloads-items');
  if (!container) return [];

  return [...container.querySelectorAll('.download-item-row')]
    .map(row => ({
      label: row.querySelector('.download-label-input')?.value.trim() || '',
      url: row.querySelector('.download-url-input')?.value.trim() || '#',
    }))
    .filter(item => item.label);
}

function clearDynamicLists() {
  ['tags-items', 'features-items', 'downloads-items', 'keys-items'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = '';
  });
}

// ============================================================
// MOBILE MENU
// ============================================================
function toggleMobileMenu() {
  state.mobileMenuOpen = !state.mobileMenuOpen;
  const btn = document.getElementById('hamburger-btn');
  let overlay = document.getElementById('mobile-nav-overlay');

  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'mobile-nav-overlay';
    overlay.className = 'mobile-nav-overlay';
    overlay.setAttribute('role', 'navigation');
    overlay.setAttribute('aria-label', 'Mobile navigation');
    overlay.innerHTML = `
      <a href="#home" class="mobile-nav-link" data-section="home">Home</a>
      <a href="#products" class="mobile-nav-link" data-section="products">Products</a>
      <a href="#about" class="mobile-nav-link" data-section="about">About</a>
      <a href="#contact" class="mobile-nav-link" data-section="contact">Contact Us</a>
    `;
    document.body.appendChild(overlay);

    overlay.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => closeMobileMenu());
    });

    overlay.querySelector('#mobile-add-product-btn')?.addEventListener('click', () => {
      closeMobileMenu();
      openProductForm('add');
    });
  }

  if (state.mobileMenuOpen) {
    overlay.classList.add('open');
    if (btn) {
      btn.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
    }
  } else {
    overlay.classList.remove('open');
    if (btn) {
      btn.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
    }
  }
}

function closeMobileMenu() {
  state.mobileMenuOpen = false;
  const overlay = document.getElementById('mobile-nav-overlay');
  const btn = document.getElementById('hamburger-btn');
  if (overlay) overlay.classList.remove('open');
  if (btn) {
    btn.classList.remove('active');
    btn.setAttribute('aria-expanded', 'false');
  }
}

// ============================================================
// MODAL HELPERS
// ============================================================
function openModal(overlayId) {
  const overlay = document.getElementById(overlayId);
  if (!overlay) return;
  overlay.setAttribute('aria-hidden', 'false');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(overlayId) {
  const overlay = document.getElementById(overlayId);
  if (!overlay) return;
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// ============================================================
// POLICY MODAL
// ============================================================
function openPolicyModal(key) {
  const content = (typeof policyContent !== 'undefined') ? policyContent[key] : null;
  if (!content) return;

  const titleEl = document.getElementById('policy-modal-title');
  const bodyEl = document.getElementById('policy-modal-body');
  if (titleEl) titleEl.textContent = content.title;
  if (bodyEl) bodyEl.innerHTML = content.content;

  openModal('policy-modal-overlay');
}

// ============================================================
// TOAST
// ============================================================
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-dot" aria-hidden="true"></span><span>${escHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-out');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3500);
}

// ============================================================
// SCROLL ANIMATIONS
// ============================================================
function initScrollAnimations() {
  const sections = document.querySelectorAll('.categories-section, .featured-section, .products-section, .about-section, .contact-section');
  sections.forEach(s => s.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  sections.forEach(s => observer.observe(s));
}

// ============================================================
// NAV ACTIVE STATE
// ============================================================
function initNavActiveState() {
  const sections = ['home', 'products', 'about', 'contact'];
  const navLinks = document.querySelectorAll('.nav-link');

  const updateActive = () => {
    let current = 'home';

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) current = id;
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === current);
    });
  };

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
}

// ============================================================
// BACK TO TOP
// ============================================================
function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.hidden = window.scrollY < 400;
  }, { passive: true });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ============================================================
// FOOTER
// ============================================================
function updateFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

// ============================================================
// SMOOTH SCROLL
// ============================================================
function smoothScrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ============================================================
// EVENT LISTENERS
// ============================================================
function setupEventListeners() {
  document.getElementById('theme-toggle-btn')?.addEventListener('click', toggleTheme);

  document.getElementById('search-toggle-btn')?.addEventListener('click', () => {
    smoothScrollToSection('products-controls');
    setTimeout(() => document.getElementById('search-input')?.focus(), 400);
  });

  document.getElementById('add-product-nav-btn')?.addEventListener('click', () => openProductForm('add'));
  document.getElementById('hero-add-btn')?.addEventListener('click', () => openProductForm('add'));
  document.getElementById('hero-browse-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    smoothScrollToSection('products');
  });

  document.getElementById('hamburger-btn')?.addEventListener('click', toggleMobileMenu);

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        searchInput.value = '';
        handleSearch();
        searchInput.blur();
      }
    });
  }

  document.getElementById('search-clear-btn')?.addEventListener('click', () => {
    const input = document.getElementById('search-input');
    if (input) {
      input.value = '';
      handleSearch();
      input.focus();
    }
  });

  document.getElementById('category-filter')?.addEventListener('change', (e) => {
    state.activeCategory = e.target.value;
    renderCategories();
    renderProducts(getFilteredProducts());
    updateProductCount();
  });

  document.getElementById('type-filter')?.addEventListener('change', handleTypeFilter);
  document.getElementById('sort-filter')?.addEventListener('change', handleSort);

  document.getElementById('reset-filters-btn')?.addEventListener('click', resetFilters);
  document.getElementById('empty-reset-btn')?.addEventListener('click', resetFilters);

  document.getElementById('categories-grid')?.addEventListener('click', e => {
    const chip = e.target.closest('.category-chip');
    if (chip) handleCategoryFilter(chip.dataset.category);
  });

  const delegateProductAction = (containerId) => {
    document.getElementById(containerId)?.addEventListener('click', e => {
      const viewBtn = e.target.closest('.view-product-btn');
      const editBtn = e.target.closest('.edit-product-btn');
      const deleteBtn = e.target.closest('.delete-product-btn');
      const card = e.target.closest('.product-card');

      if (viewBtn) {
        e.stopPropagation();
        openProductModal(viewBtn.dataset.id);
      } else if (editBtn) {
        e.stopPropagation();
        openProductForm('edit', editBtn.dataset.id);
      } else if (deleteBtn) {
        e.stopPropagation();
        confirmDeleteProduct(deleteBtn.dataset.id);
      } else if (card) {
        openProductModal(card.dataset.id);
      }
    });

    document.getElementById(containerId)?.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const card = e.target.closest('.product-card');
        if (card) openProductModal(card.dataset.id);
      }
    });
  };

  delegateProductAction('products-grid');
  delegateProductAction('featured-grid');

  document.getElementById('product-modal-close')?.addEventListener('click', closeProductModal);
  document.getElementById('product-modal-overlay')?.addEventListener('click', e => {
    if (e.target === document.getElementById('product-modal-overlay')) closeProductModal();
  });

  document.getElementById('form-modal-close')?.addEventListener('click', closeFormModal);
  document.getElementById('form-cancel-btn')?.addEventListener('click', closeFormModal);
  document.getElementById('form-modal-overlay')?.addEventListener('click', e => {
    if (e.target === document.getElementById('form-modal-overlay')) closeFormModal();
  });

  document.getElementById('product-form')?.addEventListener('submit', e => {
    e.preventDefault();
    saveProduct();
  });

  document.getElementById('form-type')?.addEventListener('change', e => togglePaidFields(e.target.value));

  document.getElementById('add-tag-btn')?.addEventListener('click', () => {
    const input = document.getElementById('tag-input');
    if (input?.value.trim()) {
      addDynamicTag(input.value.trim());
      input.value = '';
    }
  });

  document.getElementById('tag-input')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      document.getElementById('add-tag-btn')?.click();
    }
  });

  document.getElementById('add-feature-btn')?.addEventListener('click', () => {
    const input = document.getElementById('feature-input');
    if (input?.value.trim()) {
      addDynamicFeature(input.value.trim());
      input.value = '';
    }
  });

  document.getElementById('feature-input')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      document.getElementById('add-feature-btn')?.click();
    }
  });

  document.getElementById('add-download-btn')?.addEventListener('click', () => addDownloadItem());

  document.getElementById('add-key-btn')?.addEventListener('click', () => {
    const input = document.getElementById('key-input');
    if (input?.value.trim()) {
      addDynamicKey(input.value.trim());
      input.value = '';
    }
  });

  document.getElementById('key-input')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      document.getElementById('add-key-btn')?.click();
    }
  });

  document.getElementById('confirm-cancel-btn')?.addEventListener('click', () => {
    closeModal('confirm-modal-overlay');
    state.deleteTarget = null;
  });

  document.getElementById('confirm-delete-btn')?.addEventListener('click', () => {
    if (state.deleteTarget) deleteProduct(state.deleteTarget);
  });

  document.getElementById('confirm-modal-overlay')?.addEventListener('click', e => {
    if (e.target === document.getElementById('confirm-modal-overlay')) {
      closeModal('confirm-modal-overlay');
      state.deleteTarget = null;
    }
  });

  document.getElementById('policy-modal-close')?.addEventListener('click', () => closeModal('policy-modal-overlay'));
  document.getElementById('policy-modal-overlay')?.addEventListener('click', e => {
    if (e.target === document.getElementById('policy-modal-overlay')) closeModal('policy-modal-overlay');
  });

  document.querySelectorAll('.footer-policy-link').forEach(btn => {
    btn.addEventListener('click', () => openPolicyModal(btn.dataset.policy));
  });

  document.getElementById('contact-form')?.addEventListener('submit', handleContactForm);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeFormModal();
      closeModal('confirm-modal-overlay');
      closeModal('policy-modal-overlay');
      closeMobileMenu();
    }
  });

  window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if (header) header.style.boxShadow = window.scrollY > 10 ? 'var(--shadow-nav)' : 'none';
  }, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ============================================================
// CONTACT FORM
// ============================================================
function handleContactForm(e) {
  e.preventDefault();

  let valid = true;
  const name = document.getElementById('contact-name');
  const email = document.getElementById('contact-email');
  const message = document.getElementById('contact-message');

  ['contact-name', 'contact-email', 'contact-message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('error');
  });

  ['contact-name-error', 'contact-email-error', 'contact-message-error'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '';
  });

  if (!name?.value.trim()) {
    name?.classList.add('error');
    const err = document.getElementById('contact-name-error');
    if (err) err.textContent = 'Name is required.';
    valid = false;
  }

  if (!email?.value.trim() || !email.value.includes('@')) {
    email?.classList.add('error');
    const err = document.getElementById('contact-email-error');
    if (err) err.textContent = 'Valid email is required.';
    valid = false;
  }

  if (!message?.value.trim()) {
    message?.classList.add('error');
    const err = document.getElementById('contact-message-error');
    if (err) err.textContent = 'Message is required.';
    valid = false;
  }

  if (valid) {
    e.target.reset();
    showToast('Message sent! We’ll get back to you soon.', 'success');
  }
}


  
  const contactForm = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");
  const submitBtn = contactForm.querySelector(".contact-submit-btn");
  const btnText = submitBtn.querySelector(".btn-text");

  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    statusEl.textContent = "";
    submitBtn.disabled = true;
    btnText.textContent = "Sending...";

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        statusEl.textContent = "Message sent successfully!";
        statusEl.style.color = "green";
        contactForm.reset();
      } else {
        const data = await response.json();
        if (data.errors && data.errors.length > 0) {
          statusEl.textContent = data.errors.map(err => err.message).join(", ");
        } else {
          statusEl.textContent = "Oops! Something went wrong. Please try again.";
        }
        statusEl.style.color = "red";
      }
    } catch (error) {
      statusEl.textContent = "Network error. Please try again.";
      statusEl.style.color = "red";
    } finally {
      submitBtn.disabled = false;
      btnText.textContent = "Send Message";
    }
  });

// ============================================================
// UTILITIES
// ============================================================
function escHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escAttr(str) {
  return String(str ?? '')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function setVal(id, value) {
  const el = document.getElementById(id);
  if (el) el.value = value;
}

// ============================================================
// BOOT
// ============================================================
document.addEventListener('DOMContentLoaded', initApp);