/**
 * ATELIER ÉTERNEL — Master Interaction Engine
 * Handles Magnetic Custom Cursor, Cart Drawer, Navigation, Scroll Reveals, Lightboxes & Modals
 */

import {
  PRODUCTS,
  LOOKBOOK_LOOKS,
  getCart,
  saveCart,
  addToCart,
  removeFromCart,
  updateCartQuantity,
  calculateCartTotal,
  formatPrice,
  clearCart
} from './products.js';

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initHeaderScroll();
  initCartDrawer();
  initMenuOverlay();
  initScrollReveals();
  initNewsletters();
  initAccordionTabs();
  initModals();
});

/* ==========================================================================
   1. CUSTOM INTERACTIVE CURSOR
   ========================================================================== */
function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  let cursorDot = document.querySelector('.custom-cursor-dot');
  let cursorRing = document.querySelector('.custom-cursor-ring');

  if (!cursorDot) {
    cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    document.body.appendChild(cursorDot);
  }

  if (!cursorRing) {
    cursorRing = document.createElement('div');
    cursorRing.className = 'custom-cursor-ring';
    document.body.appendChild(cursorRing);
  }

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;
  let isMoving = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
    cursorDot.style.opacity = '1';
    cursorRing.style.opacity = '1';
    isMoving = true;
  });

  window.addEventListener('mouseleave', () => {
    cursorDot.style.opacity = '0';
    cursorRing.style.opacity = '0';
  });

  function renderCursor() {
    if (isMoving) {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
    }
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Delegate hover states
  document.addEventListener('mouseover', (e) => {
    const target = e.target;
    const badgeElement = target.closest('[data-cursor]');
    const interactiveElement = target.closest('a, button, input, select, textarea, [role="button"], .interactive-hover');

    if (badgeElement) {
      const text = badgeElement.getAttribute('data-cursor') || 'VIEW';
      cursorRing.textContent = text;
      cursorRing.classList.add('cursor-badge');
      cursorRing.classList.remove('cursor-hover');
    } else if (interactiveElement) {
      cursorRing.textContent = '';
      cursorRing.classList.add('cursor-hover');
      cursorRing.classList.remove('cursor-badge');
    } else {
      cursorRing.textContent = '';
      cursorRing.classList.remove('cursor-hover', 'cursor-badge');
    }
  });

  document.addEventListener('mouseout', (e) => {
    const badgeElement = e.target.closest('[data-cursor]');
    const interactiveElement = e.target.closest('a, button, input, select, textarea, [role="button"], .interactive-hover');
    if (badgeElement || interactiveElement) {
      cursorRing.textContent = '';
      cursorRing.classList.remove('cursor-hover', 'cursor-badge');
    }
  });
}

/* ==========================================================================
   2. HEADER SCROLL & SHRINK
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   3. CART DRAWER & CHECKOUT
   ========================================================================== */
let activeDiscount = 0;

function initCartDrawer() {
  const openButtons = document.querySelectorAll('[data-open-cart]');
  const closeButtons = document.querySelectorAll('[data-close-cart]');
  const overlay = document.querySelector('.cart-drawer-overlay');
  const panel = document.querySelector('.cart-drawer-panel');

  function openCart() {
    if (overlay && panel) {
      overlay.classList.add('active');
      panel.classList.add('active');
      document.body.style.overflow = 'hidden';
      renderCartItems();
    }
  }

  function closeCart() {
    if (overlay && panel) {
      overlay.classList.remove('active');
      panel.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  openButtons.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openCart();
  }));

  closeButtons.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    closeCart();
  }));

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeCart();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel?.classList.contains('active')) {
      closeCart();
    }
  });

  window.addEventListener('cart-updated', () => {
    updateCartCountBadges();
    renderCartItems();
  });

  // Global Quick Add delegation
  document.addEventListener('click', (e) => {
    const quickAddBtn = e.target.closest('[data-quick-add]');
    if (quickAddBtn) {
      e.preventDefault();
      const productId = quickAddBtn.getAttribute('data-quick-add');
      const product = PRODUCTS.find(p => p.id === productId);
      if (product) {
        addToCart(product, 'M', product.colors[0]?.name || 'Obsidian', 1);
        showToast(`Added ${product.name} to Bag`);
        openCart();
      }
    }
  });

  updateCartCountBadges();
  initPromoCode();
  initCheckoutFlow();
}

function updateCartCountBadges() {
  const cart = getCart();
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach(b => {
    b.textContent = totalCount > 0 ? `(${totalCount})` : '(0)';
  });
}

function renderCartItems() {
  const container = document.querySelector('.cart-items-container');
  const subtotalEl = document.querySelector('.cart-subtotal-price');
  const totalEl = document.querySelector('.cart-final-total');
  const discountRow = document.querySelector('.cart-discount-row');
  const discountAmountEl = document.querySelector('.cart-discount-amount');
  const freeShippingProgress = document.querySelector('.cart-shipping-bar');
  const freeShippingText = document.querySelector('.cart-shipping-text');

  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="h-64 flex flex-col items-center justify-center text-center p-6">
        <p class="font-display text-lg text-neutral-400 mb-2">Your Shopping Bag is Empty</p>
        <p class="text-xs text-neutral-500 mb-6 max-w-xs">Explore our Autumn/Winter 2026 collection and select timeless archival pieces.</p>
        <a href="/shop.html" class="btn-luxury text-xs" data-close-cart>Explore Collections</a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatPrice(0);
    if (totalEl) totalEl.textContent = formatPrice(0);
    if (discountRow) discountRow.style.display = 'none';
    if (freeShippingProgress) freeShippingProgress.style.width = '0%';
    if (freeShippingText) freeShippingText.textContent = "Complimentary courier delivery on all orders over €500";
    return;
  }

  const rawTotal = calculateCartTotal(cart);
  const discountVal = rawTotal * activeDiscount;
  const finalTotal = Math.max(0, rawTotal - discountVal);

  // Free shipping threshold €500
  const threshold = 500;
  if (freeShippingProgress && freeShippingText) {
    if (rawTotal >= threshold) {
      freeShippingProgress.style.width = '100%';
      freeShippingText.innerHTML = `<span class="text-amber-300 font-medium">✓ Complimentary Worldwide Express Delivery Unlocked</span>`;
    } else {
      const remaining = threshold - rawTotal;
      const pct = Math.min(100, Math.round((rawTotal / threshold) * 100));
      freeShippingProgress.style.width = `${pct}%`;
      freeShippingText.textContent = `Add ${formatPrice(remaining)} more for complimentary express delivery`;
    }
  }

  if (subtotalEl) subtotalEl.textContent = formatPrice(rawTotal);
  if (discountRow) {
    if (activeDiscount > 0) {
      discountRow.style.display = 'flex';
      if (discountAmountEl) discountAmountEl.textContent = `-${formatPrice(discountVal)}`;
    } else {
      discountRow.style.display = 'none';
    }
  }
  if (totalEl) totalEl.textContent = formatPrice(finalTotal);

  container.innerHTML = cart.map(item => `
    <div class="flex gap-4 py-4 border-b border-white/10 cart-item-row" data-id="${item.id}" data-size="${item.size}" data-color="${item.color}">
      <a href="/product-detail.html?id=${item.id}" class="w-20 h-24 bg-neutral-900 shrink-0 overflow-hidden relative block">
        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" />
      </a>
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-start gap-2">
            <h4 class="font-serif text-sm tracking-wide text-neutral-100">
              <a href="/product-detail.html?id=${item.id}" class="hover:text-amber-200 transition-colors">${item.name}</a>
            </h4>
            <button class="cart-remove-item text-neutral-500 hover:text-red-400 text-xs transition-colors" title="Remove" aria-label="Remove item">
              ✕
            </button>
          </div>
          <div class="text-[11px] font-mono text-neutral-400 mt-1 flex items-center gap-2">
            <span>Size: ${item.size}</span>
            <span>·</span>
            <span>${item.color}</span>
          </div>
        </div>

        <div class="flex justify-between items-center mt-3">
          <div class="flex items-center border border-white/20 text-xs">
            <button class="cart-qty-btn px-2.5 py-0.5 hover:bg-white/10 transition-colors" data-delta="-1" aria-label="Decrease quantity">−</button>
            <span class="px-2.5 font-mono text-neutral-200">${item.quantity}</span>
            <button class="cart-qty-btn px-2.5 py-0.5 hover:bg-white/10 transition-colors" data-delta="1" aria-label="Increase quantity">+</button>
          </div>
          <span class="font-mono text-xs text-neutral-200">${formatPrice(item.price * item.quantity)}</span>
        </div>
      </div>
    </div>
  `).join('');

  // Attach cart handlers
  container.querySelectorAll('.cart-qty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const row = e.target.closest('.cart-item-row');
      const id = row.getAttribute('data-id');
      const size = row.getAttribute('data-size');
      const color = row.getAttribute('data-color');
      const delta = parseInt(btn.getAttribute('data-delta'), 10);
      updateCartQuantity(id, size, color, delta);
    });
  });

  container.querySelectorAll('.cart-remove-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const row = e.target.closest('.cart-item-row');
      const id = row.getAttribute('data-id');
      const size = row.getAttribute('data-size');
      const color = row.getAttribute('data-color');
      removeFromCart(id, size, color);
      showToast("Garment removed from bag");
    });
  });
}

function initPromoCode() {
  const applyBtn = document.querySelector('.cart-promo-apply-btn');
  const promoInput = document.querySelector('.cart-promo-input');
  const promoMsg = document.querySelector('.cart-promo-msg');

  if (!applyBtn || !promoInput) return;

  applyBtn.addEventListener('click', () => {
    const val = promoInput.value.trim().toUpperCase();
    if (val === 'ETERNEL10' || val === 'VIP2026') {
      activeDiscount = 0.10;
      if (promoMsg) {
        promoMsg.textContent = "10% Archival Privilege Applied";
        promoMsg.className = "cart-promo-msg text-xs text-amber-300 mt-1 block";
      }
      renderCartItems();
      showToast("10% Privilege Code Applied");
    } else if (val) {
      if (promoMsg) {
        promoMsg.textContent = "Invalid code. Try 'ETERNEL10'";
        promoMsg.className = "cart-promo-msg text-xs text-red-400 mt-1 block";
      }
    }
  });
}

function initCheckoutFlow() {
  const checkoutBtn = document.querySelector('.cart-checkout-btn');
  const checkoutModal = document.querySelector('.checkout-modal');
  const closeCheckoutBtn = document.querySelector('.close-checkout-modal');
  const checkoutForm = document.querySelector('.checkout-form');

  if (checkoutBtn && checkoutModal) {
    checkoutBtn.addEventListener('click', () => {
      const cart = getCart();
      if (cart.length === 0) {
        showToast("Your bag is empty");
        return;
      }
      checkoutModal.classList.add('active');
      document.body.style.overflow = 'hidden';

      const checkoutSummary = checkoutModal.querySelector('.checkout-order-summary');
      if (checkoutSummary) {
        const rawTotal = calculateCartTotal(cart);
        const discountVal = rawTotal * activeDiscount;
        const finalTotal = Math.max(0, rawTotal - discountVal);
        checkoutSummary.innerHTML = `
          <div class="space-y-2 mb-4 max-h-48 overflow-y-auto pr-2">
            ${cart.map(i => `
              <div class="flex justify-between text-xs py-1 border-b border-white/5">
                <span class="text-neutral-300">${i.name} (${i.size}) × ${i.quantity}</span>
                <span class="font-mono text-neutral-200">${formatPrice(i.price * i.quantity)}</span>
              </div>
            `).join('')}
          </div>
          <div class="flex justify-between text-xs text-neutral-400 py-1">
            <span>Subtotal</span>
            <span class="font-mono">${formatPrice(rawTotal)}</span>
          </div>
          ${activeDiscount > 0 ? `
            <div class="flex justify-between text-xs text-amber-300 py-1">
              <span>VIP Privilege (10%)</span>
              <span class="font-mono">-${formatPrice(discountVal)}</span>
            </div>
          ` : ''}
          <div class="flex justify-between text-xs text-neutral-400 py-1">
            <span>Courier Shipping</span>
            <span class="text-amber-200">Complimentary</span>
          </div>
          <div class="flex justify-between text-sm font-serif text-neutral-100 pt-2 border-t border-white/10 mt-2">
            <span>Total Payable</span>
            <span class="font-mono text-amber-300">${formatPrice(finalTotal)}</span>
          </div>
        `;
      }
    });
  }

  if (closeCheckoutBtn && checkoutModal) {
    closeCheckoutBtn.addEventListener('click', () => {
      checkoutModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (checkoutForm && checkoutModal) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = checkoutForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Processing Order...";
      submitBtn.disabled = true;

      setTimeout(() => {
        clearCart();
        activeDiscount = 0;
        const checkoutBody = checkoutModal.querySelector('.checkout-modal-body');
        if (checkoutBody) {
          const orderNum = 'AE-' + Math.floor(100000 + Math.random() * 900000);
          checkoutBody.innerHTML = `
            <div class="text-center py-10 px-4">
              <div class="w-16 h-16 rounded-full border border-amber-300/40 text-amber-300 flex items-center justify-center mx-auto mb-6 text-2xl font-serif">
                ✓
              </div>
              <p class="font-mono text-xs uppercase tracking-widest text-amber-300 mb-2">Order Confirmed</p>
              <h3 class="font-serif text-2xl text-neutral-100 mb-3">Merci pour Votre Confiance</h3>
              <p class="text-sm text-neutral-400 mb-6 max-w-md mx-auto leading-relaxed">
                Your order <strong class="text-neutral-200 font-mono">${orderNum}</strong> is being prepared in our Paris atelier. An archival dispatch confirmation and white-glove courier tracking link will be sent to your email.
              </p>
              <div class="p-4 bg-white/5 border border-white/10 rounded-none mb-6 max-w-sm mx-auto text-left text-xs font-mono text-neutral-300 space-y-1">
                <div>Status: <span class="text-emerald-400">Atelier Tailoring & Inspection</span></div>
                <div>Courier: Carbon-Neutral White Glove Express</div>
                <div>Delivery Window: 2–4 Business Days</div>
              </div>
              <button class="btn-luxury text-xs" onclick="window.location.href='/shop.html'">Return to Catalog</button>
            </div>
          `;
        }
      }, 1200);
    });
  }
}

/* ==========================================================================
   4. FULLSCREEN NAVIGATION OVERLAY
   ========================================================================== */
function initMenuOverlay() {
  const openBtn = document.querySelector('[data-open-menu]');
  const closeBtn = document.querySelector('[data-close-menu]');
  const overlay = document.querySelector('.menu-overlay');

  if (!overlay) return;

  function openMenu() {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (openBtn) openBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeMenu();
    }
  });

  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
}

/* ==========================================================================
   5. SCROLL-DRIVEN REVEALS
   ========================================================================== */
function initScrollReveals() {
  const reveals = document.querySelectorAll('.reveal-init');
  if (reveals.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  });

  reveals.forEach(el => observer.observe(el));
}

/* ==========================================================================
   6. NEWSLETTER
   ========================================================================== */
function initNewsletters() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const submitBtn = form.querySelector('button[type="submit"]');
      if (input && input.value) {
        const email = input.value;
        if (submitBtn) submitBtn.textContent = 'Enrolled';
        input.value = '';
        input.disabled = true;
        showToast(`Private lookbook access granted for ${email}`);
      }
    });
  });
}

/* ==========================================================================
   7. ACCORDION TABS
   ========================================================================== */
function initAccordionTabs() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      const isOpen = item.classList.contains('open');

      // Close siblings if in same accordion group
      const parent = item.parentElement;
      parent.querySelectorAll('.accordion-item').forEach(sibling => {
        sibling.classList.remove('open');
      });

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

/* ==========================================================================
   8. MODALS & LIGHTBOXES
   ========================================================================== */
function initModals() {
  // Lightbox for lookbook
  const lightbox = document.querySelector('.lightbox-modal');
  if (lightbox) {
    const closeBtn = lightbox.querySelector('.close-lightbox-btn');
    const prevBtn = lightbox.querySelector('.lightbox-prev-btn');
    const nextBtn = lightbox.querySelector('.lightbox-next-btn');
    let currentLookIndex = 0;

    function renderLook(index) {
      if (index < 0) index = LOOKBOOK_LOOKS.length - 1;
      if (index >= LOOKBOOK_LOOKS.length) index = 0;
      currentLookIndex = index;

      const look = LOOKBOOK_LOOKS[currentLookIndex];
      const imgEl = lightbox.querySelector('.lightbox-image');
      const numEl = lightbox.querySelector('.lightbox-number');
      const titleEl = lightbox.querySelector('.lightbox-title');
      const descEl = lightbox.querySelector('.lightbox-description');
      const garmentsEl = lightbox.querySelector('.lightbox-garments');
      const shopBtn = lightbox.querySelector('.lightbox-shop-btn');

      if (imgEl) imgEl.src = look.image;
      if (numEl) numEl.textContent = `LOOK ${look.number} / 0${LOOKBOOK_LOOKS.length}`;
      if (titleEl) titleEl.textContent = look.title;
      if (descEl) descEl.textContent = look.description;
      if (garmentsEl) {
        garmentsEl.innerHTML = look.garments.map(g => `<span class="block text-neutral-300">• ${g}</span>`).join('');
      }
      if (shopBtn) {
        shopBtn.href = `/product-detail.html?id=${look.productId}`;
      }
    }

    document.querySelectorAll('[data-open-look]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lookId = btn.getAttribute('data-open-look');
        const index = LOOKBOOK_LOOKS.findIndex(l => l.id === lookId);
        renderLook(index > -1 ? index : 0);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    if (prevBtn) prevBtn.addEventListener('click', () => renderLook(currentLookIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => renderLook(currentLookIndex + 1));

    window.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      } else if (e.key === 'ArrowLeft') {
        renderLook(currentLookIndex - 1);
      } else if (e.key === 'ArrowRight') {
        renderLook(currentLookIndex + 1);
      }
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Size Guide Modal
  const sizeGuideModal = document.querySelector('.size-guide-modal');
  const openSizeGuideBtns = document.querySelectorAll('[data-open-size-guide]');
  const closeSizeGuideBtn = document.querySelector('.close-size-guide');

  if (sizeGuideModal) {
    openSizeGuideBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        sizeGuideModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    if (closeSizeGuideBtn) {
      closeSizeGuideBtn.addEventListener('click', () => {
        sizeGuideModal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    sizeGuideModal.addEventListener('click', (e) => {
      if (e.target === sizeGuideModal) {
        sizeGuideModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

/* ==========================================================================
   TOAST HELPER
   ========================================================================== */
export function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-amber-400 shrink-0"></span>
    <span class="font-sans text-xs tracking-wider">${message}</span>
  `;

  toast.classList.add('active');

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('active');
  }, 3200);
}
