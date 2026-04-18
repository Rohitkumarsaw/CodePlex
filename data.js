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
  email: "dellofficial795@gmail.com",
  whatsapp: "+91 8017918011",
  telegram: "@Rsgnsnvk18",
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
  buyNowContact: "dellofficial795@gmail.com",
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
  { id: "React Templates", name: "React Templates", icon: "⚛️" },
  { id: "Node Templates", name: "Node Templates", icon: "⚛️" },
];

// state.activeCategory me category id store hogi
// Example: "", "html-templates", "tools"

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
  // Portfolio Templates - Neon & Modern
  {
    id: "prod-001",
    title: "NeonX Portfolio Pro",
    shortDescription: "Ultra-modern developer portfolio with cyberpunk neon animations & particle effects.",
    fullDescription: "Next-gen portfolio template with cyberpunk neon aesthetics, particle backgrounds, glassmorphism cards, scroll-triggered animations, and interactive 3D skill meters. Built with HTML5 Canvas, GSAP animations, and CSS custom properties. Perfect for senior developers who want to stand out.",
    category: "Portfolio Templates",
    type: "paid",
    price: 699,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80"
    ],
    demoLink: "https://neonx-portfolio.demo",
    downloadLinks: [
      { label: "Full Template + Assets", url: "#" },
      { label: "Figma Design File", url: "#" },
      { label: "Documentation", url: "#" }
    ],
    tags: ["portfolio", "neon", "cyberpunk", "gsap", "canvas", "3d"],
    features: [
      "Particle.js backgrounds",
      "GSAP scroll animations",
      "3D skill visualization",
      "Glassmorphism UI",
      "Dark/light auto-toggle",
      "PWA ready"
    ],
    version: "2.1.0",
    fileSize: "12.4 MB",
    compatibility: "Chrome 90+, Firefox 88+, Safari 15+",
    author: "Rohit Kumar",
    featured: true,
    createdAt: "2026-03-15",
    updatedAt: "2026-04-17",
    rating: 4.9,
    downloads: 428,
    serialKeys: ["NEONX-2026", "PORT-PRO1", "CYBER-789"],
    paymentInfo: {
      methods: ["UPI", "Razorpay", "Stripe"],
      upiId: "devvault@upi",
      note: "Pay ₹699. Premium template with commercial license."
    }
  },

  // Admin Dashboards
  {
    id: "prod-002",
    title: "AdminForge v3 Dashboard",
    shortDescription: "Enterprise-grade dashboard with real-time charts, drag & drop, and AI insights.",
    fullDescription: "Production-ready admin dashboard with 150+ components, real-time data visualization, drag & drop kanban, dark mode, role-based access UI, and AI-powered insights panel. Built with modern CSS Grid, ResizeObserver API, and WebSocket-ready architecture.",
    category: "Admin Dashboards",
    type: "paid",
    price: 1299,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
    ],
    demoLink: "https://adminforge.demo",
    downloadLinks: [
      { label: "Full Dashboard Kit", url: "#" },
      { label: "Chart Library Only", url: "#" },
      { label: "Figma Components", url: "#" }
    ],
    tags: ["admin", "dashboard", "saas", "enterprise", "realtime", "kanban"],
    features: [
      "150+ responsive components",
      "Real-time Chart.js integration",
      "Drag & drop kanban boards",
      "AI insights panel",
      "Role-based UI states",
      "PWA + offline support"
    ],
    version: "3.2.1",
    fileSize: "38.7 MB",
    compatibility: "All modern browsers",
    author: "DevVault Team",
    featured: true,
    createdAt: "2026-02-20",
    updatedAt: "2026-04-18",
    rating: 4.9,
    downloads: 723,
    serialKeys: ["ADMINFORGE3", "DASH-ENTERP", "V3-PRO-KEY"],
    paymentInfo: {
      methods: ["UPI", "Razorpay", "Stripe", "Paytm"],
      upiId: "devvault@upi",
      note: "Pay ₹1299. Unlimited projects + 1 year updates."
    }
  },

  // CSS Components - FREE
  {
    id: "prod-003",
    title: "MotionUI CSS Library",
    shortDescription: "120+ modern CSS animations, transitions & micro-interactions (FREE)",
    fullDescription: "Production-grade CSS animation library with 120+ classes for entrances, hovers, loaders, text effects, scroll reveals, and glassmorphism components. Zero JavaScript, sub-10KB, works with Tailwind CSS, and includes dark mode variants.",
    category: "CSS Components",
    type: "free",
    price: 0,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    ],
    demoLink: "https://motionui.devvault.live",
    downloadLinks: [
      { label: "motion-ui.min.css (9.8KB)", url: "#" },
      { label: "Full Package + Docs", url: "#" },
      { label: "Tailwind Plugin", url: "#" }
    ],
    tags: ["css", "animations", "microinteractions", "motion", "free", "tailwind"],
    features: [
      "120+ animation classes",
      "Zero JavaScript required",
      "Dark mode variants",
      "Tailwind CSS compatible",
      "Sub-10KB optimized",
      "Scroll reveal effects"
    ],
    version: "4.1.2",
    fileSize: "9.8 KB",
    compatibility: "CSS3+, All browsers",
    author: "Rohit Kumar",
    featured: true,
    createdAt: "2026-01-25",
    updatedAt: "2026-04-18",
    rating: 4.8,
    downloads: 2847,
    serialKeys: [],
    paymentInfo: null
  },

  // HTML Templates
  {
    id: "prod-004",
    title: "EcomX - Multi-Vendor Marketplace",
    shortDescription: "Complete marketplace template with vendor dashboard, cart & payment gateway ready.",
    fullDescription: "Full-stack e-commerce marketplace template with vendor dashboard, product management, multi-vendor support, Stripe/Paytm/Razorpay integration ready, advanced filtering, wishlist, cart persistence, and PWA support. Perfect for your digital product store.",
    category: "HTML Templates",
    type: "paid",
    price: 899,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
    ],
    demoLink: "https://ecomx-marketplace.demo",
    downloadLinks: [
      { label: "Complete Marketplace", url: "#" },
      { label: "Vendor Dashboard Only", url: "#" },
      { label: "Payment Integration Guide", url: "#" }
    ],
    tags: ["ecommerce", "marketplace", "multivendor", "payment", "pwa", "dashboard"],
    features: [
      "Multi-vendor dashboard",
      "Advanced product filtering",
      "Cart + wishlist persistence",
      "Payment gateway ready",
      "PWA + offline cart",
      "Vendor analytics"
    ],
    version: "2.3.0",
    fileSize: "28.2 MB",
    compatibility: "HTML5, CSS3, Vanilla JS",
    author: "DevVault Team",
    featured: true,
    createdAt: "2026-03-10",
    updatedAt: "2026-04-18",
    rating: 4.9,
    downloads: 389,
    serialKeys: ["ECOMX-MARKET", "VENDOR-2026", "MP-PRO-KEY"],
    paymentInfo: {
      methods: ["UPI", "Razorpay", "Stripe"],
      upiId: "devvault@upi",
      note: "Pay ₹899. Perfect for digital product stores."
    }
  },

  // E-books
  {
    id: "prod-005",
    title: "Mastering Frontend 2026",
    shortDescription: "Complete Frontend Developer Roadmap + Code Samples (248 Pages)",
    fullDescription: "Ultimate 2026 Frontend Developer handbook covering HTML5 Canvas, CSS Houdini, WebGPU basics, modern Tailwind v4, Astro + React patterns, performance optimization, accessibility mastery, and production deployment checklists. Includes 100+ code samples.",
    category: "E-books",
    type: "paid",
    price: 399,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    ],
    demoLink: null,
    downloadLinks: [
      { label: "Mastering Frontend 2026 (PDF)", url: "#" },
      { label: "EPUB + Code Samples", url: "#" },
      { label: "Printable Checklist", url: "#" }
    ],
    tags: ["frontend", "roadmap", "ebook", "html5", "css3", "2026"],
    features: [
      "248 pages of cutting-edge content",
      "100+ production code samples",
      "WebGPU + CSS Houdini coverage",
      "Astro + modern frameworks",
      "Performance mastery guide",
      "Accessibility checklist"
    ],
    version: "2026.1.0",
    fileSize: "7.2 MB",
    compatibility: "All PDF readers",
    author: "Rohit Kumar",
    featured: true,
    createdAt: "2026-01-15",
    updatedAt: "2026-04-18",
    rating: 5.0,
    downloads: 1247,
    serialKeys: ["FE-2026-MASTER", "ROADMAP1", "FRONTEND-PRO"],
    paymentInfo: {
      methods: ["UPI", "Razorpay"],
      upiId: "devvault@upi",
      note: "Pay ₹399. Updated monthly for 2026."
    }
  },

  // JavaScript Projects - FREE
  {
    id: "prod-006",
    title: "VanillaJS Pro Starter",
    shortDescription: "Production-grade Vanilla JS architecture with modules, router & state manager.",
    fullDescription: "Professional Vanilla JavaScript starter kit with ES modules, file-based routing, reactive state management, service worker caching, lazy loading, error boundaries, and production build script. Framework-free but scales like Next.js.",
    category: "JavaScript Projects",
    type: "free",
    price: 0,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80"
    ],
    demoLink: "https://vanillajs-pro.demo",
    downloadLinks: [
      { label: "Complete Starter Kit", url: "#" },
      { label: "CLI Scaffold Tool", url: "#" },
      { label: "GitHub Repo", url: "#" }
    ],
    tags: ["vanillajs", "starter", "modules", "router", "pwa", "free"],
    features: [
      "ES modules + file routing",
      "Reactive state manager",
      "Service worker caching",
      "Production build script",
      "Error boundaries",
      "Zero framework lock-in"
    ],
    version: "3.0.2",
    fileSize: "4.1 MB",
    compatibility: "Node 18+, Modern browsers",
    author: "Rohit Kumar",
    featured: true,
    createdAt: "2026-02-01",
    updatedAt: "2026-04-18",
    rating: 4.8,
    downloads: 2156,
    serialKeys: [],
    paymentInfo: null
  },

  // HTML Templates
  {
    id: "prod-007",
    title: "SaaSFlow - Conversion Landing",
    shortDescription: "High-CVR SaaS landing page with A/B tested layouts & micro-conversions.",
    fullDescription: "Battle-tested SaaS landing page template with 7 proven layouts, micro-conversion funnels, pricing calculator, interactive demos, social proof carousel, waitlist system, and GA4 event tracking. Optimized for 20%+ conversion rates.",
    category: "HTML Templates",
    type: "paid",
    price: 749,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80"
    ],
    demoLink: "https://saasflow-landing.demo",
    downloadLinks: [
      { label: "7 Landing Variants", url: "#" },
      { label: "Figma + Assets", url: "#" },
      { label: "A/B Test Data", url: "#" }
    ],
    tags: ["saas", "landing", "conversion", "pricing", "funnel", "growth"],
    features: [
      "7 A/B tested layouts",
      "Pricing calculator widget",
      "Micro-conversion funnels",
      "Social proof carousel",
      "Waitlist system",
      "GA4 event tracking"
    ],
    version: "2.4.0",
    fileSize: "19.8 MB",
    compatibility: "All modern browsers",
    author: "Growth Team",
    featured: true,
    createdAt: "2026-03-05",
    updatedAt: "2026-04-18",
    rating: 4.9,
    downloads: 567,
    serialKeys: ["SAASFLOW2", "LANDING-CVR", "FUNNEL-PRO"],
    paymentInfo: {
      methods: ["UPI", "Razorpay"],
      upiId: "devvault@upi",
      note: "Pay ₹749. 20%+ proven conversion rates."
    }
  },

  // E-books - FREE
  {
    id: "prod-008",
    title: "CSS Grid Mastery 2026",
    shortDescription: "Complete CSS Grid + Subgrid + Container Queries reference (FREE)",
    fullDescription: "150-page visual reference covering CSS Grid Level 3, Subgrid, Container Queries, Masonry layout, modern responsive techniques, and 50+ complete code examples. Printable + interactive HTML version.",
    category: "E-books",
    type: "free",
    price: 0,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80"
    ],
    demoLink: "https://cssgrid-mastery.demo",
    downloadLinks: [
      { label: "Interactive HTML Guide", url: "#" },
      { label: "Printable PDF (150pg)", url: "#" },
      { label: "CodePen Collection", url: "#" }
    ],
    tags: ["css", "grid", "subgrid", "container-queries", "responsive", "free"],
    features: [
      "CSS Grid Level 3 coverage",
      "Subgrid + Container Queries",
      "50+ complete examples",
      "Printable reference",
      "Interactive playground",
      "Modern responsive patterns"
    ],
    version: "2026.1.0",
    fileSize: "2.9 MB",
    compatibility: "Modern browsers + PDF",
    author: "Rohit Kumar",
    featured: true,
    createdAt: "2026-01-10",
    updatedAt: "2026-04-18",
    rating: 4.9,
    downloads: 3874,
    serialKeys: [],
    paymentInfo: null
  },

  // UI Kits
  {
    id: "prod-009",
    title: "Glassmorphism Pro Kit",
    shortDescription: "120+ glassmorphism components with backdrop-filter & CSS custom properties.",
    fullDescription: "Premium glassmorphism UI kit with 120+ components optimized for performance. Includes advanced backdrop-filter effects, scroll-controlled blur, neumorphism fallbacks, accessibility states, and Tailwind CSS integration.",
    category: "UI Kits",
    type: "paid",
    price: 899,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
    ],
    demoLink: "https://glassmorphism-kit.demo",
    downloadLinks: [
      { label: "120+ Components", url: "#" },
      { label: "Tailwind Plugin", url: "#" },
      { label: "Figma Design System", url: "#" }
    ],
    tags: ["glassmorphism", "uikit", "components", "backdrop-filter", "tailwind"],
    features: [
      "120+ glass components",
      "Scroll-controlled blur",
      "Neumorphism fallbacks",
      "Tailwind CSS ready",
      "Accessibility compliant",
      "Performance optimized"
    ],
    version: "2.2.0",
    fileSize: "26.4 MB",
    compatibility: "Chrome 76+, Safari 13+, Firefox 103+",
    author: "UI Team",
    featured: true,
    createdAt: "2026-02-15",
    updatedAt: "2026-04-18",
    rating: 4.8,
    downloads: 892,
    serialKeys: ["GLASS-PRO2", "BACKDROP99", "UIKIT-2026"],
    paymentInfo: {
      methods: ["UPI", "Razorpay", "Stripe"],
      upiId: "devvault@upi",
      note: "Pay ₹899. Perfect for modern SaaS dashboards."
    }
  },

  // Plugins - FREE
  {
    id: "prod-010",
    title: "DarkModeX Pro Toggle",
    shortDescription: "Advanced dark mode with CSS vars, system sync, time-based & geolocation modes.",
    fullDescription: "Production-grade dark mode solution with CSS custom properties, system preference sync, sunrise/sunset auto-toggle, geolocation-based switching, smooth 300ms transitions, and accessibility-first implementation.",
    category: "Plugins",
    type: "free",
    price: 0,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80"
    ],
    demoLink: "https://darkmodex.demo",
    downloadLinks: [
      { label: "darkmodex.min.js (2.1KB)", url: "#" },
      { label: "React/Vue/Astro Plugins", url: "#" },
      { label: "Full Documentation", url: "#" }
    ],
    tags: ["darkmode", "plugin", "css-vars", "accessibility", "pwa", "free"],
    features: [
      "CSS custom properties",
      "System + time-based sync",
      "Geolocation sunset mode",
      "300ms smooth transitions",
      "Accessibility compliant",
      "Framework agnostic"
    ],
    version: "3.1.0",
    fileSize: "2.1 KB",
    compatibility: "All modern browsers",
    author: "Rohit Kumar",
    featured: true,
    createdAt: "2025-11-20",
    updatedAt: "2026-04-18",
    rating: 4.9,
    downloads: 5234,
    serialKeys: [],
    paymentInfo: null
  },

  // Source Code
  {
    id: "prod-011",
    title: "ReactZero - From Scratch",
    shortDescription: "Complete React implementation (15K LOC) with hooks, fiber & reconciler.",
    fullDescription: "Study React internals through this production-quality implementation. Includes virtual DOM, Fiber architecture, hooks system (useState, useEffect, useContext, useReducer), concurrent mode, Suspense, and complete reconciler. Line-by-line explanations.",
    category: "Source Code",
    type: "paid",
    price: 1499,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
    ],
    demoLink: "https://reactzero-study.demo",
    downloadLinks: [
      { label: "15K LOC Source + Guide", url: "#" },
      { label: "Interactive Debugger", url: "#" },
      { label: "Video Walkthrough", url: "#" }
    ],
    tags: ["react", "sourcecode", "fiber", "hooks", "reconciler", "internals"],
    features: [
      "Complete Fiber implementation",
      "Custom hooks system",
      "Concurrent features",
      "Suspense support",
      "15K+ LOC production code",
      "Interactive visual debugger"
    ],
    version: "1.0.0",
    fileSize: "8.7 MB",
    compatibility: "Node.js 18+",
    author: "Deep Dive Team",
    featured: true,
    createdAt: "2026-04-10",
    updatedAt: "2026-04-18",
    rating: 5.0,
    downloads: 156,
    serialKeys: ["REACTZERO1", "FIBER-SRC", "HOOKS-PRO"],
    paymentInfo: {
      methods: ["UPI", "Razorpay", "Stripe"],
      upiId: "devvault@upi",
      note: "Pay ₹1499. Deep dive into React internals."
    }
  },

  // Tools - FREE
  {
    id: "prod-012",
    title: "PerfX Web Vitals Toolkit",
    shortDescription: "Complete Core Web Vitals audit + optimization toolkit (FREE)",
    fullDescription: "Production-grade performance toolkit with Lighthouse CI, Core Web Vitals monitoring, image optimization pipeline, critical CSS generator, font loading optimizer, and automated performance budgeting. Works with any stack.",
    category: "Tools",
    type: "free",
    price: 0,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
    ],
    demoLink: "https://perfx-toolkit.demo",
    downloadLinks: [
      { label: "Complete Toolkit", url: "#" },
      { label: "Lighthouse CI Script", url: "#" },
      { label: "Performance Budgets", url: "#" }
    ],
    tags: ["performance", "corewebvitals", "lighthouse", "optimization", "ci", "free"],
    features: [
      "Lighthouse CI integration",
      "Core Web Vitals monitoring",
      "Image optimization pipeline",
      "Critical CSS generator",
      "Font loading optimizer",
      "Performance budgets"
    ],
    version: "2.0.1",
    fileSize: "3.6 MB",
    compatibility: "Node.js 18+, Any frontend",
    author: "Performance Team",
    featured: true,
    createdAt: "2026-01-20",
    updatedAt: "2026-04-18",
    rating: 4.9,
    downloads: 2678,
    serialKeys: [],
    paymentInfo: null
  },

  {
    id: "prod-013",
    title: "PerfX Web Vitals Toolkit",
    shortDescription: "Complete Core Web Vitals audit + optimization toolkit (FREE)",
    fullDescription: "Production-grade performance toolkit with Lighthouse CI, Core Web Vitals monitoring, image optimization pipeline, critical CSS generator, font loading optimizer, and automated performance budgeting. Works with any stack.",
    category: "Node Templates",
    type: "free",
    price: 0,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
    ],
    demoLink: "https://perfx-toolkit.demo",
    downloadLinks: [
      { label: "Complete Toolkit", url: "#" },
      { label: "Lighthouse CI Script", url: "#" },
      { label: "Performance Budgets", url: "#" }
    ],
    tags: ["performance", "corewebvitals", "lighthouse", "optimization", "ci", "free"],
    features: [
      "Lighthouse CI integration",
      "Core Web Vitals monitoring",
      "Image optimization pipeline",
      "Critical CSS generator",
      "Font loading optimizer",
      "Performance budgets"
    ],
    version: "2.0.1",
    fileSize: "3.6 MB",
    compatibility: "Node.js 18+, Any frontend",
    author: "Performance Team",
    featured: true,
    createdAt: "2026-01-20",
    updatedAt: "2026-04-18",
    rating: 4.9,
    downloads: 2678,
    serialKeys: [],
    paymentInfo: null
  },
  {
    id: "prod-014",
    title: "PerfX Web Vitals Toolkit",
    shortDescription: "Complete Core Web Vitals audit + optimization toolkit (FREE)",
    fullDescription: "Production-grade performance toolkit with Lighthouse CI, Core Web Vitals monitoring, image optimization pipeline, critical CSS generator, font loading optimizer, and automated performance budgeting. Works with any stack.",
    category: "React Templates",
    type: "free",
    price: 0,
    currency: "INR",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    previewImages: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
    ],
    demoLink: "https://perfx-toolkit.demo",
    downloadLinks: [
      { label: "Complete Toolkit", url: "#" },
      { label: "Lighthouse CI Script", url: "#" },
      { label: "Performance Budgets", url: "#" }
    ],
    tags: ["performance", "corewebvitals", "lighthouse", "optimization", "ci", "free"],
    features: [
      "Lighthouse CI integration",
      "Core Web Vitals monitoring",
      "Image optimization pipeline",
      "Critical CSS generator",
      "Font loading optimizer",
      "Performance budgets"
    ],
    version: "2.0.1",
    fileSize: "3.6 MB",
    compatibility: "Node.js 18+, Any frontend",
    author: "Performance Team",
    featured: true,
    createdAt: "2026-01-20",
    updatedAt: "2026-04-18",
    rating: 4.9,
    downloads: 2678,
    serialKeys: [],
    paymentInfo: null
  }
];
