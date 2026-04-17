// ============================================================
// DATA.JS — Single Source of Truth
// ============================================================

const siteConfig = {
  name: "DevVault",
  tagline: "Premium Digital Resources for Developers & Creators",
  description: "Curated HTML templates, source code bundles, UI kits, e-books, and dev tools — free and paid.",
  logo: "⬡",
  version: "1.0.0",
};

const contactInfo = {
  email: "support@devvault.store",
  whatsapp: "+91 98765 43210",
  telegram: "@devvault_support",
  address: "India",
};

const socialLinks = [
  { label: "GitHub", icon: "github", url: "https://github.com" },
  { label: "Twitter", icon: "twitter", url: "https://twitter.com" },
  { label: "Instagram", icon: "instagram", url: "https://instagram.com" },
  { label: "YouTube", icon: "youtube", url: "https://youtube.com" },
];

const paymentConfig = {
  upiId: "devvault@upi",
  methods: ["UPI", "Paytm", "PhonePe", "Razorpay"],
  note: "Complete the payment, then enter the serial key you receive to unlock your download.",
  buyNowContact: "support@devvault.store",
};

const defaultImages = {
  product: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80",
};

const categories = [
  { id: "html-templates", name: "HTML Templates", icon: "📄" },
  { id: "css-components", name: "CSS Components", icon: "🎨" },
  { id: "javascript-projects", name: "JavaScript Projects", icon: "⚡" },
  { id: "admin-dashboards", name: "Admin Dashboards", icon: "📊" },
  { id: "portfolio-templates", name: "Portfolio Templates", icon: "🗂️" },
  { id: "ui-kits", name: "UI Kits", icon: "🧩" },
  { id: "source-code", name: "Source Code", icon: "💻" },
  { id: "ebooks", name: "E-books", icon: "📚" },
  { id: "tools", name: "Tools", icon: "🛠️" },
  { id: "plugins", name: "Plugins", icon: "🔌" },
];

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  policies: [
    { label: "Privacy Policy", key: "privacy" },
    { label: "Terms & Conditions", key: "terms" },
    { label: "Delivery Policy", key: "delivery" },
    { label: "Refund Policy", key: "refund" },
    { label: "Copyright", key: "copyright" },
  ],
};

const policyContent = {
  privacy: {
    title: "Privacy Policy",
    content: `<h3>1. Information We Collect</h3>
<p>We collect information you provide directly to us, including name, email address, and payment information when you make a purchase.</p>
<h3>2. How We Use Your Information</h3>
<p>We use the information we collect to process transactions, send transactional emails, provide customer support, and improve our services.</p>
<h3>3. Data Security</h3>
<p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
<h3>4. Cookies</h3>
<p>We use cookies and similar tracking technologies to track activity on our Service and hold certain information to improve your experience.</p>
<h3>5. Third-Party Services</h3>
<p>We may employ third-party companies and individuals to facilitate our Service, provide the Service on our behalf, or perform Service-related services.</p>
<h3>6. Contact Us</h3>
<p>If you have any questions about this Privacy Policy, please contact us at support@devvault.store.</p>`,
  },
  terms: {
    title: "Terms & Conditions",
    content: `<h3>1. Acceptance of Terms</h3>
<p>By accessing and using DevVault, you accept and agree to be bound by the terms and provision of this agreement.</p>
<h3>2. License Grant</h3>
<p>Upon purchase, DevVault grants you a non-exclusive, non-transferable license to use the digital product for personal or commercial projects.</p>
<h3>3. Prohibited Uses</h3>
<p>You may not resell, redistribute, or sublicense any products purchased from DevVault. Reverse engineering of paid products is strictly prohibited.</p>
<h3>4. Intellectual Property</h3>
<p>All products remain the intellectual property of their respective authors. DevVault acts as a marketplace.</p>
<h3>5. Limitation of Liability</h3>
<p>DevVault shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our products.</p>
<h3>6. Changes to Terms</h3>
<p>We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of updated terms.</p>`,
  },
  delivery: {
    title: "Delivery Policy",
    content: `<h3>Instant Digital Delivery</h3>
<p>All products on DevVault are digital downloads delivered instantly upon successful payment and serial key verification.</p>
<h3>How It Works</h3>
<p>1. Browse and select your desired product.<br>2. Complete payment using your preferred method.<br>3. You will receive a serial key via email within minutes.<br>4. Enter the serial key in the product modal to unlock your download links.</p>
<h3>Delivery Timeline</h3>
<p>Serial keys are typically delivered within 5–15 minutes of payment confirmation. In rare cases, delivery may take up to 2 hours during high-traffic periods.</p>
<h3>Issues with Delivery</h3>
<p>If you do not receive your serial key within 2 hours, please contact us at support@devvault.store with your payment receipt.</p>`,
  },
  refund: {
    title: "Refund Policy",
    content: `<h3>Digital Product Refund Policy</h3>
<p>Due to the nature of digital products, all sales are generally final. However, we do consider refunds under specific circumstances.</p>
<h3>Eligible for Refund</h3>
<p>• The product file is corrupted and cannot be replaced.<br>• The product description is significantly misleading.<br>• Technical issues prevent the product from functioning as described.</p>
<h3>Not Eligible for Refund</h3>
<p>• Change of mind after download.<br>• Inability to use the product due to lack of technical knowledge.<br>• Products that have already been downloaded and used.</p>
<h3>Refund Process</h3>
<p>To request a refund, email support@devvault.store within 7 days of purchase with your order details and reason for the refund request.</p>`,
  },
  copyright: {
    title: "Copyright Notice",
    content: `<h3>© 2026 DevVault. All Rights Reserved.</h3>
<p>All content, design, graphics, and digital products featured on DevVault are protected by copyright law.</p>
<h3>Product Copyright</h3>
<p>Individual products are owned by their respective creators/authors. DevVault holds a distribution license for all products listed on the platform.</p>
<h3>Website Content</h3>
<p>The DevVault website design, logo, branding, and written content are exclusively owned by DevVault and may not be reproduced without express written permission.</p>
<h3>DMCA</h3>
<p>If you believe any content on DevVault infringes your copyright, please contact us with a detailed DMCA notice at support@devvault.store.</p>`,
  },
};

let products = [
  {
    id: "prod-001",
    title: "Neon Portfolio Template",
    shortDescription: "Stunning developer portfolio with neon dark aesthetics and smooth animations.",
    fullDescription: "A fully responsive, animated portfolio website template built for developers and designers who want to stand out. Features smooth scroll animations, glowing neon accents, a projects showcase, skills section, and contact form. All built with pure HTML, CSS, and vanilla JavaScript — no frameworks needed.",
    category: "Portfolio Templates",
    type: "paid",
    price: 499,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    ],
    demoLink: "https://example.com/demo",
    downloadLinks: [
      { label: "Download ZIP", url: "#" },
      { label: "Source Code", url: "#" },
    ],
    tags: ["portfolio", "html", "css", "neon", "responsive"],
    features: [
      "Fully responsive layout",
      "Dark neon theme",
      "Smooth scroll animations",
      "Projects showcase section",
      "Contact form with validation",
      "SEO optimized structure",
    ],
    version: "1.2.0",
    fileSize: "8 MB",
    compatibility: "HTML5, CSS3, JS ES6+",
    author: "Rohit Kumar",
    featured: true,
    createdAt: "2026-03-10",
    updatedAt: "2026-04-01",
    rating: 4.9,
    downloads: 342,
    serialKeys: ["NEON2026", "PORT-XYZ9", "DEV-1234"],
    paymentInfo: {
      methods: ["UPI", "Razorpay"],
      upiId: "devvault@upi",
      note: "Pay ₹499 and receive your serial key via email within 15 minutes.",
    },
  },
  {
    id: "prod-002",
    title: "AdminX Dashboard UI Kit",
    shortDescription: "100+ premium admin dashboard components for modern web apps.",
    fullDescription: "AdminX is a comprehensive admin dashboard UI kit packed with over 100 hand-crafted components. Includes data tables, charts, forms, modals, sidebars, cards, and more. Built with CSS Grid and Flexbox for maximum responsiveness. Perfect for SaaS products, internal tools, and management panels.",
    category: "Admin Dashboards",
    type: "paid",
    price: 799,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ],
    demoLink: "https://example.com/adminx-demo",
    downloadLinks: [
      { label: "Download Full Kit", url: "#" },
      { label: "Download Components Only", url: "#" },
      { label: "Download Documentation", url: "#" },
    ],
    tags: ["admin", "dashboard", "ui-kit", "components", "css"],
    features: [
      "100+ UI components",
      "Dark and light themes",
      "Responsive grid layout",
      "Chart and graph components",
      "Data table with sorting",
      "Form validation components",
      "Detailed documentation",
    ],
    version: "2.0.1",
    fileSize: "24 MB",
    compatibility: "HTML5, CSS3, Vanilla JS",
    author: "Priya Sharma",
    featured: true,
    createdAt: "2026-02-15",
    updatedAt: "2026-04-05",
    rating: 4.8,
    downloads: 589,
    serialKeys: ["ADMINX-001", "DASH-999X", "UITOOL22"],
    paymentInfo: {
      methods: ["UPI", "Paytm", "PhonePe", "Razorpay"],
      upiId: "devvault@upi",
      note: "Pay ₹799. Serial key sent to your email within 15 mins.",
    },
  },
  {
    id: "prod-003",
    title: "CSS Animation Library",
    shortDescription: "50+ ready-to-use CSS animations and micro-interactions for any project.",
    fullDescription: "A curated library of 50+ hand-crafted CSS animations covering entrances, exits, attention seekers, loaders, hover effects, and scroll-triggered animations. Plug-and-play class-based system. Works with any HTML project. Includes full documentation and a live playground.",
    category: "CSS Components",
    type: "free",
    price: 0,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    ],
    demoLink: "https://example.com/css-anim-demo",
    downloadLinks: [
      { label: "Download CSS File", url: "#" },
      { label: "Download Full Package", url: "#" },
      { label: "View on GitHub", url: "#" },
    ],
    tags: ["css", "animations", "micro-interactions", "free", "library"],
    features: [
      "50+ animation classes",
      "Hover effect collection",
      "Scroll-triggered animations",
      "Loading spinner pack",
      "Text reveal animations",
      "Zero JavaScript required",
    ],
    version: "3.0.0",
    fileSize: "1.2 MB",
    compatibility: "CSS3, All modern browsers",
    author: "Ankit Verma",
    featured: true,
    createdAt: "2026-01-20",
    updatedAt: "2026-03-12",
    rating: 4.7,
    downloads: 2150,
    serialKeys: [],
    paymentInfo: null,
  },
  {
    id: "prod-004",
    title: "E-commerce HTML Template",
    shortDescription: "Complete multi-page e-commerce template with cart, product pages, and checkout.",
    fullDescription: "A pixel-perfect, multi-page e-commerce website template built with semantic HTML5 and modern CSS. Includes home page, product listing, product detail, shopping cart, checkout, and user account pages. Features mobile-first responsive design, smooth transitions, and a clean minimal aesthetic.",
    category: "HTML Templates",
    type: "paid",
    price: 649,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    ],
    demoLink: "https://example.com/ecom-demo",
    downloadLinks: [
      { label: "Download ZIP", url: "#" },
      { label: "Download Assets", url: "#" },
    ],
    tags: ["ecommerce", "html", "shop", "multi-page", "responsive"],
    features: [
      "6 fully designed pages",
      "Shopping cart UI",
      "Product gallery with zoom",
      "Mobile responsive",
      "Clean semantic HTML",
      "Easy to customize",
    ],
    version: "1.0.0",
    fileSize: "15 MB",
    compatibility: "HTML5, CSS3, JavaScript",
    author: "Sneha Patel",
    featured: false,
    createdAt: "2026-03-01",
    updatedAt: "2026-03-28",
    rating: 4.6,
    downloads: 217,
    serialKeys: ["ECOM-XRAY", "SHOP-2026", "HTML-CART"],
    paymentInfo: {
      methods: ["UPI", "Razorpay"],
      upiId: "devvault@upi",
      note: "Pay ₹649. You'll receive your serial key within 15 minutes.",
    },
  },
  {
    id: "prod-005",
    title: "JavaScript Algorithms & DS Handbook",
    shortDescription: "Complete guide to algorithms and data structures with JS code examples.",
    fullDescription: "A comprehensive 200-page e-book covering all major data structures and algorithms with JavaScript implementations. Includes arrays, linked lists, stacks, queues, trees, graphs, sorting algorithms, search algorithms, dynamic programming, and system design basics. Perfect for interview preparation.",
    category: "E-books",
    type: "paid",
    price: 299,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
    ],
    demoLink: null,
    downloadLinks: [
      { label: "Download PDF", url: "#" },
      { label: "Download EPUB", url: "#" },
    ],
    tags: ["javascript", "algorithms", "ebook", "interview", "dsa"],
    features: [
      "200+ pages of content",
      "Real JS code examples",
      "Sorting & searching algorithms",
      "Data structure implementations",
      "Interview prep questions",
      "System design basics",
    ],
    version: "2.1.0",
    fileSize: "4.8 MB",
    compatibility: "PDF, EPUB readers",
    author: "Vikram Singh",
    featured: false,
    createdAt: "2025-12-10",
    updatedAt: "2026-02-20",
    rating: 4.9,
    downloads: 876,
    serialKeys: ["ALGO-BOOK", "DSA-2026X", "JS-LEARN1"],
    paymentInfo: {
      methods: ["UPI", "Paytm"],
      upiId: "devvault@upi",
      note: "Pay ₹299. Serial key delivered to email within 15 minutes.",
    },
  },
  {
    id: "prod-006",
    title: "Vanilla JS Starter Kit",
    shortDescription: "Minimal, well-organized starter project for vanilla JS web applications.",
    fullDescription: "A clean, opinionated starter kit for building web applications with plain JavaScript. Includes folder structure, utility helpers, a simple state manager, DOM manipulation helpers, event bus, and a build script using esbuild. No frameworks, no bloat — just clean JS architecture.",
    category: "JavaScript Projects",
    type: "free",
    price: 0,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
    ],
    demoLink: "https://example.com/js-starter",
    downloadLinks: [
      { label: "Download ZIP", url: "#" },
      { label: "Clone on GitHub", url: "#" },
    ],
    tags: ["javascript", "starter", "vanilla", "boilerplate", "free"],
    features: [
      "Clean folder structure",
      "Simple state manager",
      "DOM helpers library",
      "Event bus system",
      "Basic router",
      "esbuild config included",
    ],
    version: "1.5.0",
    fileSize: "2.1 MB",
    compatibility: "Node.js 18+, Modern browsers",
    author: "Deepak Rathi",
    featured: false,
    createdAt: "2026-01-05",
    updatedAt: "2026-03-15",
    rating: 4.5,
    downloads: 1340,
    serialKeys: [],
    paymentInfo: null,
  },
  {
    id: "prod-007",
    title: "SaaS Landing Page Template",
    shortDescription: "High-converting SaaS landing page with pricing table, testimonials, and more.",
    fullDescription: "A professionally designed SaaS landing page template designed for maximum conversion. Includes hero section, feature highlights, pricing table with toggle, testimonials carousel, FAQ accordion, CTA sections, and footer. Optimized for performance with lazy-loaded images and minimal JS.",
    category: "HTML Templates",
    type: "paid",
    price: 549,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    ],
    demoLink: "https://example.com/saas-demo",
    downloadLinks: [
      { label: "Download ZIP", url: "#" },
      { label: "Download Premium Assets", url: "#" },
    ],
    tags: ["saas", "landing", "html", "pricing", "conversion"],
    features: [
      "High-converting layout",
      "Pricing toggle (monthly/yearly)",
      "Testimonials carousel",
      "FAQ accordion",
      "Mobile responsive",
      "Performance optimized",
    ],
    version: "1.0.0",
    fileSize: "11 MB",
    compatibility: "HTML5, CSS3, JS",
    author: "Meera Joshi",
    featured: true,
    createdAt: "2026-02-28",
    updatedAt: "2026-04-10",
    rating: 4.7,
    downloads: 405,
    serialKeys: ["SAAS-LAND", "LP-2026XY", "CONV-HTML"],
    paymentInfo: {
      methods: ["UPI", "Razorpay", "Stripe"],
      upiId: "devvault@upi",
      note: "Pay ₹549. Serial key sent to email within 15 minutes.",
    },
  },
  {
    id: "prod-008",
    title: "CSS Grid & Flexbox Cheatsheet",
    shortDescription: "Visual cheatsheet for CSS Grid and Flexbox — printable and interactive.",
    fullDescription: "An interactive and printable cheatsheet for CSS Grid and Flexbox. Includes every property with live examples, visual diagrams, and code snippets. Available as an HTML interactive page and a print-ready PDF. Great for developers learning or needing a quick reference.",
    category: "E-books",
    type: "free",
    price: 0,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
    ],
    demoLink: "https://example.com/css-cheat",
    downloadLinks: [
      { label: "Download PDF", url: "#" },
      { label: "Download HTML Version", url: "#" },
    ],
    tags: ["css", "grid", "flexbox", "cheatsheet", "free", "reference"],
    features: [
      "All Grid properties covered",
      "All Flexbox properties covered",
      "Live interactive examples",
      "Printable PDF version",
      "Visual diagrams",
      "Copy-paste code snippets",
    ],
    version: "1.0.0",
    fileSize: "0.8 MB",
    compatibility: "PDF readers, browsers",
    author: "Kavita Nair",
    featured: false,
    createdAt: "2025-11-15",
    updatedAt: "2026-01-10",
    rating: 4.6,
    downloads: 3200,
    serialKeys: [],
    paymentInfo: null,
  },
  {
    id: "prod-009",
    title: "UI Component Showcase Kit",
    shortDescription: "Elegant, handcrafted UI components: buttons, cards, forms, badges, and more.",
    fullDescription: "A premium collection of 80+ elegantly designed UI components built with pure HTML and CSS. Covers buttons with all variants, form elements, notification cards, avatars, badges, progress bars, tooltips, tabs, accordions, and navigation components. Each component includes both dark and light mode variants.",
    category: "UI Kits",
    type: "paid",
    price: 699,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    ],
    demoLink: "https://example.com/ui-kit-demo",
    downloadLinks: [
      { label: "Download Complete Kit", url: "#" },
      { label: "Download Source Files", url: "#" },
      { label: "Download Figma File", url: "#" },
    ],
    tags: ["ui-kit", "components", "buttons", "forms", "css"],
    features: [
      "80+ UI components",
      "Dark and light variants",
      "Copy-paste ready code",
      "Figma source included",
      "Well documented",
      "Regular updates",
    ],
    version: "1.3.0",
    fileSize: "18 MB",
    compatibility: "HTML5, CSS3, All browsers",
    author: "Arjun Mehta",
    featured: false,
    createdAt: "2026-01-30",
    updatedAt: "2026-04-12",
    rating: 4.8,
    downloads: 621,
    serialKeys: ["UI-KIT99X", "COMP-2026", "STYLE-PRO"],
    paymentInfo: {
      methods: ["UPI", "Paytm", "Razorpay"],
      upiId: "devvault@upi",
      note: "Pay ₹699. Serial key delivered within 15 minutes.",
    },
  },
  {
    id: "prod-010",
    title: "Dark Mode Toggle Plugin",
    shortDescription: "Zero-dependency dark mode toggle plugin with smooth transitions.",
    fullDescription: "A lightweight, zero-dependency JavaScript plugin for adding beautiful dark mode support to any website. Features smooth CSS variable-based transitions, localStorage persistence, system preference detection, and a customizable toggle button. Less than 2KB minified.",
    category: "Plugins",
    type: "free",
    price: 0,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
    ],
    demoLink: "https://example.com/dark-toggle-demo",
    downloadLinks: [
      { label: "Download JS File", url: "#" },
      { label: "Download NPM Package", url: "#" },
      { label: "View on GitHub", url: "#" },
    ],
    tags: ["plugin", "dark-mode", "javascript", "free", "lightweight"],
    features: [
      "Zero dependencies",
      "System preference detection",
      "localStorage persistence",
      "CSS variable based",
      "< 2KB minified",
      "Customizable toggle UI",
    ],
    version: "2.0.0",
    fileSize: "0.3 MB",
    compatibility: "Vanilla JS, Any framework",
    author: "Ravi Teja",
    featured: false,
    createdAt: "2025-10-01",
    updatedAt: "2026-02-01",
    rating: 4.5,
    downloads: 4500,
    serialKeys: [],
    paymentInfo: null,
  },
  {
    id: "prod-011",
    title: "React Clone: Complete Source Bundle",
    shortDescription: "Full source code of a React-like library built from scratch with explanations.",
    fullDescription: "Learn how React works under the hood by studying this fully annotated source code of a custom React-like library built from scratch. Covers virtual DOM, reconciliation algorithm, hooks implementation (useState, useEffect, useRef, useMemo), JSX transform, and component lifecycle. Includes a comprehensive written guide.",
    category: "Source Code",
    type: "paid",
    price: 999,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    ],
    demoLink: "https://example.com/react-clone-demo",
    downloadLinks: [
      { label: "Download Source Code ZIP", url: "#" },
      { label: "Download PDF Guide", url: "#" },
    ],
    tags: ["react", "source-code", "javascript", "educational", "advanced"],
    features: [
      "Virtual DOM implementation",
      "Custom reconciler",
      "useState & useEffect hooks",
      "JSX transform explained",
      "100% annotated code",
      "Written guide included",
    ],
    version: "1.0.0",
    fileSize: "3.2 MB",
    compatibility: "Node.js 18+, Modern browsers",
    author: "Karan Kapoor",
    featured: true,
    createdAt: "2026-04-01",
    updatedAt: "2026-04-15",
    rating: 5.0,
    downloads: 98,
    serialKeys: ["REACT-SRC1", "CLONE-999X", "JSCORE-26"],
    paymentInfo: {
      methods: ["UPI", "Razorpay", "Stripe"],
      upiId: "devvault@upi",
      note: "Pay ₹999. This is a premium educational bundle — serial key within 15 minutes.",
    },
  },
  {
    id: "prod-012",
    title: "Web Performance Optimization Toolkit",
    shortDescription: "Scripts, tools, and checklists for optimizing web application performance.",
    fullDescription: "A practical toolkit for web performance optimization. Includes automated audit scripts, image optimization tools, critical CSS extractor, lazy loading utilities, service worker template, performance budgeting guide, and a detailed checklist covering Core Web Vitals, resource hints, caching strategies, and more.",
    category: "Tools",
    type: "free",
    price: 0,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    ],
    demoLink: null,
    downloadLinks: [
      { label: "Download Toolkit ZIP", url: "#" },
      { label: "Download Checklist PDF", url: "#" },
      { label: "View on GitHub", url: "#" },
    ],
    tags: ["performance", "tools", "web-vitals", "optimization", "free"],
    features: [
      "Core Web Vitals guide",
      "Image optimization scripts",
      "Lazy loading utility",
      "Service worker template",
      "Performance checklist",
      "Caching strategy guide",
    ],
    version: "1.1.0",
    fileSize: "1.8 MB",
    compatibility: "Node.js 16+, Browsers",
    author: "Siddharth Rao",
    featured: false,
    createdAt: "2025-12-20",
    updatedAt: "2026-03-05",
    rating: 4.7,
    downloads: 1890,
    serialKeys: [],
    paymentInfo: null,
  },
];
