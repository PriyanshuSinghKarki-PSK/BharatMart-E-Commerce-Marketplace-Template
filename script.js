const PRODUCTS = [
  { id:1, name:'boAt Rockerz 450 Bluetooth Headphone', brand:'boAt', cat:'Electronics', image:'./assets/images/boAt Rockerz 450 Bluetooth Headphone.jpeg', price:1299, orig:2999, off:57, rating:4.3, reviews:18420, badge:'Best Seller', desc:'40hr playtime, foldable design, powerful bass. Compatible with all Bluetooth devices.' },
  { id:2, name:'OnePlus Nord CE 3 Lite 5G (128GB)', brand:'OnePlus', cat:'Mobiles', image:'./assets/images/OnePlus Nord CE 3 Lite 5G (128GB).jpeg', price:16999, orig:21999, off:23, rating:4.5, reviews:32100, badge:'Trending', desc:'120Hz Fluid AMOLED display, 108MP camera, 67W SUPERVOOC charging.' },
  { id:3, name:'Nike Air Zoom Pegasus 40 Running Shoe', brand:'Nike', cat:'Sports', image:'./assets/images/Nike Air Zoom Pegasus 40 Running Shoe.jpeg', price:5999, orig:9999, off:40, rating:4.4, reviews:7820, badge:null, desc:'Lightweight and responsive with ZoomX foam for extra bounce in every step.' },
  { id:4, name:'Samsung 55" 4K QLED Smart TV', brand:'Samsung', cat:'Electronics', image:'./assets/images/Samsung 55 4K QLED Smart TV.jpeg', price:54999, orig:79999, off:31, rating:4.6, reviews:12400, badge:'Editor\'s Choice', desc:'Quantum Dot technology, 4K UHD, Tizen OS with Smart Hub for endless streaming.' },
  { id:5, name:'Lakme Absolute Mousse Foundation SPF 8', brand:'Lakme', cat:'Beauty', image:'./assets/images/Lakme Absolute Mousse Foundation SPF 8.jpeg', price:449, orig:799, off:44, rating:4.2, reviews:9870, badge:'New', desc:'Full coverage matte finish. Dermatologist tested. 24hr wear in Indian climate.' },
  { id:6, name:'Titan Raga Analog Women\'s Watch', brand:'Titan', cat:'Fashion', image:'./assets/images/Titan Raga Analog Women Watch.jpeg', price:2995, orig:4995, off:40, rating:4.7, reviews:5430, badge:null, desc:'Elegant rose gold finish, sapphire crystal glass, water resistant up to 50m.' },
  { id:7, name:'Prestige Iris 750W Mixer Grinder', brand:'Prestige', cat:'Home', image:'./assets/images/Prestige Iris 750W Mixer Grinder.jpeg', price:2299, orig:3799, off:39, rating:4.4, reviews:22100, badge:'Best Seller', desc:'3 stainless steel jars, 3-speed control, anti-corrosive coating, ISI marked.' },
  { id:8, name:'Noise ColorFit Pro 4 Smartwatch', brand:'Noise', cat:'Electronics', image:'./assets/images/Noise ColorFit Pro 4 Smartwatch.jpeg', price:1999, orig:5999, off:67, rating:4.1, reviews:41200, badge:'Hot Deal', desc:'1.72" HD display, 100+ sport modes, SpO2, stress monitor, 7-day battery.' },
  { id:9, name:'Puma Men\'s Sports T-Shirt (Drycel)', brand:'Puma', cat:'Fashion', image:'./assets/images/Puma Mens Sports T-Shirt (Drycel).jpeg', price:799, orig:1499, off:47, rating:4.3, reviews:14300, badge:null, desc:'Moisture-wicking DRYCELL tech, anti-odour treatment. Ideal for workouts.' },
  { id:10, name:'Fire-Boltt Phoenix Ultra Smartwatch', brand:'Fire-Boltt', cat:'Electronics', image:'./assets/images/Fire-Boltt Phoenix Ultra Smartwatch.jpeg', price:2499, orig:7999, off:69, rating:4.0, reviews:28900, badge:'Trending', desc:'1.43" AMOLED, Bluetooth calling, 123 sport modes, IP67 water resistant.' },
  { id:11, name:'Himalaya Neem Face Wash 150ml', brand:'Himalaya', cat:'Beauty', image:'./assets/images/Himalaya Neem Face Wash 150ml.jpeg', price:149, orig:249, off:40, rating:4.5, reviews:88000, badge:'Bestseller', desc:'Purifying neem formula. Removes dirt and excess oil without over-drying skin.' },
  { id:12, name:'Atom Books: The Alchemist (Hindi)', brand:'HarperCollins', cat:'Books', image:'./assets/images/Atom Books The Alchemist (Hindi).jpeg', price:199, orig:399, off:50, rating:4.8, reviews:56000, badge:'New', desc:'Paulo Coelho\'s internationally acclaimed masterpiece. Hindi translation.' },
  { id:13, name:'Reebok Classic Leather Sneakers', brand:'Reebok', cat:'Sports', image:'./assets/images/Reebok Classic Leather Sneakers.jpeg', price:3499, orig:5999, off:42, rating:4.2, reviews:8100, badge:null, desc:'Classic perforated leather upper, rubber cupsole, timeless silhouette.' },
  { id:14, name:'Pigeon By Stovekraft Induction Cooktop', brand:'Pigeon', cat:'Home', image:'./assets/images/Pigeon By Stovekraft Induction Cooktop.webp', price:1199, orig:2499, off:52, rating:4.3, reviews:31200, badge:'Flash Deal', desc:'1800W, 7 pre-set menu options, auto cut-off, feather touch buttons.' },
  { id:15, name:'Wildcraft Rucksack 45L Backpack', brand:'Wildcraft', cat:'Sports', image:'./assets/images/Wildcraft Rucksack 45L Backpack.jpeg', price:1799, orig:3499, off:49, rating:4.4, reviews:17600, badge:null, desc:'Durable nylon, padded laptop compartment, rain cover included. Trekking ready.' },
  { id:16, name:'USTRAA Face Wash for Men (200ml)', brand:'USTRAA', cat:'Beauty', image:'./assets/images/USTRAA Face Wash for Men (200ml).jpeg', price:249, orig:449, off:45, rating:4.3, reviews:23400, badge:'New', desc:'Anti-pollution formula. De-tan, oil control. Infused with activated charcoal.' },
];

const FLASH_PRODUCTS = [
  { id:17, name:'Sony WH-1000XM5 Headphones', brand:'Sony', image:'./assets/images/Sony WH-1000XM5 Headphones.jpeg', price:22999, orig:34990, off:34, sold:72, total:100, rating:4.8 },
  { id:18, name:'Apple AirPods Pro (2nd Gen)', brand:'Apple', image:'./assets/images/Apple AirPods Pro (2nd Gen).jpeg', price:19999, orig:26900, off:26, sold:85, total:100, rating:4.9 },
  { id:19, name:'Realme 12 Pro+ 5G (256GB)', brand:'Realme', image:'./assets/images/Realme 12 Pro+ 5G (256GB).jpeg', price:24999, orig:32999, off:24, sold:60, total:100, rating:4.4 },
  { id:20, name:'Mi Robot Vacuum Cleaner S20', brand:'Xiaomi', image:'./assets/images/Mi Robot Vacuum Cleaner S20.jpeg', price:12999, orig:21999, off:41, sold:45, total:100, rating:4.5 },
];

const REVIEWS = [
  { name:'Ananya Sharma', city:'Mumbai', rating:5, text:'Amazing experience! Ordered 3 items and all arrived within 2 days. The packaging was superb and products are exactly as described. Will definitely order again from BharatMart!', initials:'AS' },
  { name:'Rajesh Kumar', city:'Bengaluru', rating:5, text:'Best online shopping experience I\'ve had in India. The Flash Sale deals are genuinely unbeatable. Saved ₹3,000 on my last order. Customer support is also very responsive.', initials:'RK' },
  { name:'Priya Mehta', city:'Delhi', rating:4, text:'Great variety of products. The app is smooth and the checkout is super fast. Delivery was on time. Returns process was also very easy when I had to exchange a size.', initials:'PM' },
  { name:'Vikram Singh', city:'Hyderabad', rating:5, text:'I\'ve been shopping on BharatMart for 2 years now. Never had a single bad experience. The festival sales are insane — I basically plan my big purchases around Diwali Sale!', initials:'VS' },
  { name:'Kavita Reddy', city:'Chennai', rating:5, text:'Superb! Ordered a Samsung TV and it was installed the very next day. The deals here are 30% cheaper than local electronics stores. Highly recommend to everyone!', initials:'KR' },
  { name:'Arun Gupta', city:'Pune', rating:4, text:'Very satisfied. The product quality is great and prices are the best online. My entire family shops here now. The loyalty points system is also very rewarding.', initials:'AG' },
];

/* ============================================================
   STATE
   ============================================================ */
let cart = JSON.parse(localStorage.getItem('bm_cart') || '[]');
let wishlist = new Set(JSON.parse(localStorage.getItem('bm_wishlist') || '[]'));
let currentFilter = 'all';
let reviewSlide = 0;
const reviewsPerView = () => window.innerWidth < 640 ? 1 : window.innerWidth < 900 ? 2 : 3;

/* ============================================================
   LOADER
   ============================================================ */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('page-loader').classList.add('hidden'), 2000);
});

/* ============================================================
   TOAST
   ============================================================ */
function showToast(msg, icon='ℹ️', type='') {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<span class="toast-icon">${icon}</span><span>${msg}</span>`;
  c.appendChild(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 400); }, 3500);
}

/* ============================================================
   NAVBAR SCROLL
   ============================================================ */
window.addEventListener('scroll', () => {
  const nb = document.getElementById('navbar');
  nb.classList.toggle('scrolled', window.scrollY > 10);
  document.getElementById('back-top').classList.toggle('visible', window.scrollY > 300);
}, { passive: true });

/* ============================================================
   MOBILE NAV
   ============================================================ */
function openMobileNav() {
  document.getElementById('mobile-nav').classList.add('open');
  document.getElementById('nav-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobileNav() {
  document.getElementById('mobile-nav').classList.remove('open');
  document.getElementById('nav-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   THEME TOGGLE
   ============================================================ */
function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('theme-btn').textContent = isDark ? '🌙' : '☀️';
  localStorage.setItem('bm_theme', isDark ? 'light' : 'dark');
}
(function initTheme() {
  const saved = localStorage.getItem('bm_theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('theme-btn').textContent = '☀️';
  }
})();

/* ============================================================
   SEARCH
   ============================================================ */
function doSearch() {
  const q = (document.getElementById('nav-search-input').value || document.getElementById('hero-search').value || '').trim().toLowerCase();
  if (!q) return;
  currentFilter = 'all';
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('[data-filter="all"]').classList.add('active');
  renderProducts(PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q)));
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  showToast(`Showing results for "${q}"`, '🔍');
}
document.getElementById('nav-search-input').addEventListener('keydown', e => e.key === 'Enter' && doSearch());
document.getElementById('hero-search').addEventListener('keydown', e => e.key === 'Enter' && doSearch());

/* ============================================================
   PRODUCT RENDER
   ============================================================ */
function starHTML(r) {
  const full = Math.floor(r), half = r % 1 >= 0.5 ? 1 : 0, empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}
function fmtPrice(p) { return '₹' + p.toLocaleString('en-IN'); }
function fmtReviews(n) { return n >= 1000 ? (n/1000).toFixed(1) + 'K' : n; }

function productCardHTML(p, isFlash=false) {
  const inWishlist = wishlist.has(p.id);
  const badge = p.badge ? `<div class="product-badge${p.badge==='New'?' new':p.badge==='Trending'?' trending':''}">${p.badge}</div>` : '';
  const flashProgress = isFlash ? `
    <div class="flash-progress">
      <div class="flash-progress-label"><span>Sold: ${p.sold}%</span><span>Only ${100-p.sold} left!</span></div>
      <div class="flash-progress-bar"><div class="flash-progress-fill" data-width="${p.sold}" style="width:0%"></div></div>
    </div>` : '';
  return `
  <div class="product-card" data-id="${p.id}">
    <div class="product-card-img">
      <img src="${p.image}" alt="${p.name}" class="product-image">
      ${badge}
      <button class="product-wishlist ${inWishlist?'active':''}" onclick="toggleWishlist(${p.id},this)" title="Wishlist">${inWishlist?'❤️':'🤍'}</button>
      <div class="product-actions">
        <button class="btn-quick-view" onclick="openQuickView(${p.id})">👁 Quick View</button>
      </div>
    </div>
    <div class="product-info">
      <div class="product-brand">${p.brand}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-rating">
        <span class="stars">${starHTML(p.rating)}</span>
        <span style="font-size:0.78rem;font-weight:700;color:var(--text);">${p.rating}</span>
        <span class="rating-count">(${fmtReviews(p.reviews)})</span>
      </div>
      <div class="product-prices">
        <span class="price-current">${fmtPrice(p.price)}</span>
        <span class="price-original">${fmtPrice(p.orig)}</span>
        <span class="price-off">${p.off}% off</span>
      </div>
      ${flashProgress}
    </div>
    <div class="product-card-footer">
      <button class="btn-add-cart" onclick="addToCart(${p.id})">🛒 Add to Cart</button>
    </div>
  </div>`;
}

function renderProducts(list) {
  const g = document.getElementById('products-grid');
  if (!list.length) {
    g.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-muted);"><div style="font-size:3rem;margin-bottom:12px;">🔍</div><div>No products found. Try a different filter.</div></div>`;
    return;
  }
  g.innerHTML = list.map((p, i) => `<div style="--i:${i}">${productCardHTML(p)}</div>`).join('');
  animateProgressBars();
}

function renderFlashProducts() {
  document.getElementById('flash-products').innerHTML = FLASH_PRODUCTS.map(p => productCardHTML(p, true)).join('');
  animateProgressBars();
}

function animateProgressBars() {
  setTimeout(() => {
    document.querySelectorAll('.flash-progress-fill').forEach(el => {
      el.style.width = el.dataset.width + '%';
    });
  }, 300);
}

/* ============================================================
   FILTER
   ============================================================ */
function filterProducts(cat) {
  currentFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === cat || (cat && b.dataset.filter === cat));
  });
  renderProducts(cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat));
  document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.getElementById('filter-bar').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const f = btn.dataset.filter;
  currentFilter = f;
  renderProducts(f === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === f));
});

/* ============================================================
   CART
   ============================================================ */
function saveCart() { localStorage.setItem('bm_cart', JSON.stringify(cart)); }
function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cart-badge').textContent = total;
  document.getElementById('cart-count-text').textContent = `(${total} item${total !== 1 ? 's' : ''})`;
}

function addToCart(id) {
  const p = [...PRODUCTS, ...FLASH_PRODUCTS].find(x => x.id === id);
  if (!p) return;
  const existing = cart.find(i => i.id === id);
  if (existing) { existing.qty++; } else { cart.push({ ...p, qty: 1 }); }
  saveCart(); updateCartBadge(); renderCartItems();
  showToast(`${p.name} added to cart!`, '🛒', 'success');
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart(); updateCartBadge(); renderCartItems();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  saveCart(); updateCartBadge(); renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cart-items');
  const footer = document.getElementById('cart-footer');
  if (!cart.length) {
    container.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><div class="cart-empty-text">Your cart is empty.<br>Start shopping to add items!</div></div>`;
    footer.style.display = 'none';
    return;
  }
  footer.style.display = 'block';
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-price">${fmtPrice(item.price)}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove">🗑️</button>
        </div>
      </div>
    </div>`).join('');
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const origTotal = cart.reduce((s, i) => s + i.orig * i.qty, 0);
  const discount = origTotal - subtotal;
  document.getElementById('cart-subtotal').textContent = fmtPrice(origTotal);
  document.getElementById('cart-discount').textContent = `-${fmtPrice(discount)}`;
  document.getElementById('cart-total').textContent = fmtPrice(subtotal);
}

function openCart() {
  document.getElementById('cart-overlay').classList.add('open');
  document.getElementById('cart-panel').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartItems();
}
function closeCart() {
  document.getElementById('cart-overlay').classList.remove('open');
  document.getElementById('cart-panel').classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   WISHLIST
   ============================================================ */
function toggleWishlist(id, btn) {
  if (wishlist.has(id)) {
    wishlist.delete(id);
    btn.textContent = '🤍'; btn.classList.remove('active');
    showToast('Removed from wishlist', '🤍');
  } else {
    wishlist.add(id);
    btn.textContent = '❤️'; btn.classList.add('active');
    showToast('Added to wishlist!', '❤️', 'success');
  }
  localStorage.setItem('bm_wishlist', JSON.stringify([...wishlist]));
  document.getElementById('wishlist-badge').textContent = wishlist.size;
}

/* ============================================================
   QUICK VIEW
   ============================================================ */
function openQuickView(id) {
  const p = [...PRODUCTS, ...FLASH_PRODUCTS].find(x => x.id === id);
  if (!p) return;
  document.getElementById('qv-inner').innerHTML = `
    <div class="qv-img"><img src="${p.image}" alt="${p.name}" style="width:100%; height:100%; object-fit:contain;"></div>
    <div>
      <div class="qv-brand">${p.brand}</div>
      <h3 class="qv-name">${p.name}</h3>
      <div class="qv-rating">
        <span class="stars" style="font-size:1rem;">${starHTML(p.rating)}</span>
        <span style="font-weight:700;">${p.rating}</span>
        <span style="color:var(--text-muted);font-size:0.82rem;">(${fmtReviews(p.reviews || 0)} reviews)</span>
      </div>
      <div class="qv-prices">
        <span class="qv-price-curr">${fmtPrice(p.price)}</span>
        <span class="qv-price-orig">${fmtPrice(p.orig)}</span>
        <span class="qv-price-off">${p.off}% off</span>
      </div>
      <p class="qv-desc">${p.desc || 'Premium quality product with excellent features and great value for money.'}</p>
      <div class="qv-btns">
        <button class="btn-add-cart" onclick="addToCart(${p.id});closeQuickView()">🛒 Add to Cart</button>
        <button onclick="showToast('Added to wishlist!','❤️','success');closeQuickView()" style="width:100%;padding:10px;border-radius:var(--radius-sm);border:2px solid var(--primary);color:var(--primary);font-weight:700;font-size:0.9rem;background:transparent;cursor:pointer;">🤍 Add to Wishlist</button>
      </div>
    </div>`;
  document.getElementById('qv-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeQuickView() {
  document.getElementById('qv-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   REVIEWS SLIDER
   ============================================================ */
function renderReviews() {
  const track = document.getElementById('reviews-track');
  track.innerHTML = REVIEWS.map(r => `
    <div class="review-card">
      <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-author">
        <div class="review-avatar">${r.initials}</div>
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-city">📍 ${r.city}</div>
          <div class="review-verified">✅ Verified Purchase</div>
        </div>
      </div>
    </div>`).join('');
  const dots = document.getElementById('slider-dots');
  const numSlides = Math.ceil(REVIEWS.length / reviewsPerView());
  dots.innerHTML = Array.from({length: numSlides}, (_,i) =>
    `<div class="slider-dot ${i===0?'active':''}" onclick="goToSlide(${i})"></div>`).join('');
}

function goToSlide(idx) {
  reviewSlide = idx;
  const perView = reviewsPerView();
  const cardW = document.querySelector('.review-card')?.offsetWidth || 0;
  const gap = 24;
  document.getElementById('reviews-track').style.transform = `translateX(-${idx * perView * (cardW + gap)}px)`;
  document.querySelectorAll('.slider-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
}

let autoSlideInterval = setInterval(() => {
  const total = Math.ceil(REVIEWS.length / reviewsPerView());
  goToSlide((reviewSlide + 1) % total);
}, 4500);

/* ============================================================
   COUNTDOWN TIMER
   ============================================================ */
function setCountdown() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 0);
  const diff = end - now;
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('cd-h').textContent = String(h).padStart(2,'0');
  document.getElementById('cd-m').textContent = String(m).padStart(2,'0');
  document.getElementById('cd-s').textContent = String(s).padStart(2,'0');
}
setCountdown();
setInterval(setCountdown, 1000);

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ============================================================
   INIT
   ============================================================ */
renderProducts(PRODUCTS);
renderFlashProducts();
renderReviews();
updateCartBadge();
document.getElementById('wishlist-badge').textContent = wishlist.size;

// Re-observe new product cards
setTimeout(() => {
  document.querySelectorAll('.product-card').forEach((el, i) => {
    el.style.transitionDelay = `${i * 50}ms`;
    revealObserver.observe(el);
  });
}, 100);

// Handle resize for review slider
window.addEventListener('resize', () => {
  renderReviews();
  reviewSlide = 0;
});