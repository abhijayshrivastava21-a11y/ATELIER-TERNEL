/**
 * ATELIER ÉTERNEL — Master Product Catalog & State Management
 * Luxury Avant-Garde High-Fashion E-Commerce & Lookbook Engine
 */

export const PRODUCTS = [
  {
    id: "ae-01",
    code: "AE-26-01",
    name: "L'Overcoat Cashmere Sculptural",
    category: "Outerwear",
    price: 1850,
    tag: "Archival",
    isNew: true,
    rating: 4.9,
    reviewsCount: 38,
    primaryImage: "/src/assets/images/lookbook_coat_sculpture_1790884606896.jpg",
    secondaryImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "/src/assets/images/lookbook_coat_sculpture_1790884606896.jpg",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
      "/src/assets/images/hero_luxury_fashion_1790884647993.jpg"
    ],
    colors: [
      { name: "Obsidian Black", hex: "#111111", image: "/src/assets/images/lookbook_coat_sculpture_1790884606896.jpg" },
      { name: "Raw Oatmeal", hex: "#d8d3c5", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop" },
      { name: "Deep Espresso", hex: "#2b221e", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Double-faced 100% Grade-A Mongolian cashmere tailored with an architectural dropped shoulder, sculpted lapels, and hand-finished pick stitching. Engineered without rigid canvassing for a statuesque yet unencumbered fluid drape.",
    fabricCare: "100% Grade-A Mongolian Cashmere (480gsm density). Spun in Biella, Italy. Unlined interior with contrast silk-bound seams. Dry clean by luxury garment specialist only. Do not wash or tumble dry. Store on the included cedar wood hanger.",
    sustainability: "Traceable single-origin cashmere shorn ethically from pastoral cooperatives in Ulaanbaatar. GOTS-certified dyeing process with zero heavy metal mordants. Produced in limited batches of 45 pieces per seasonal run.",
    shippingReturns: "Complimentary worldwide express shipping via carbon-neutral courier. Delivered in archival linen garment box with brass zip lock. 30-day private white-glove returns or exchange at any flagship atelier."
  },
  {
    id: "ae-02",
    code: "AE-26-02",
    name: "Le Blazer Déconstruit en Laine",
    category: "Tailoring",
    price: 1240,
    tag: "Limited Run",
    isNew: true,
    rating: 5.0,
    reviewsCount: 24,
    primaryImage: "/src/assets/images/product_tailored_blazer_1790884620331.jpg",
    secondaryImage: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "/src/assets/images/product_tailored_blazer_1790884620331.jpg",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop",
      "/src/assets/images/atelier_craftsman_hands_1790884634266.jpg"
    ],
    colors: [
      { name: "Alabaster Bone", hex: "#e5e2da", image: "/src/assets/images/product_tailored_blazer_1790884620331.jpg" },
      { name: "Obsidian Noir", hex: "#0f0f0f", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop" }
    ],
    sizes: ["XS", "S", "M", "L"],
    description: "Sculptural single-breasted blazer cut from high-twist virgin wool canvas. Soft floating horsehair chest canvas with raw hand-felled lapels and elongated sleeve vents finished with horn buttons.",
    fabricCare: "100% Virgin Wool Fresco (340gsm). Half-canvassed construction with natural horsehair. 100% Cupro lining. Dry clean only. Warm iron over protective cotton cloth.",
    sustainability: "Deadstock virgin wool milled in Yorkshire, UK. Hand-tailored in the Paris 8th Arrondissement workshop under fair artisanal craftsmanship standards.",
    shippingReturns: "Complimentary global shipping. Hand-packed in acid-free tissue paper with branded garment cover. 30-day complimentary return policy."
  },
  {
    id: "ae-03",
    code: "AE-26-03",
    name: "La Veste Cuir Minimaliste",
    category: "Outerwear",
    price: 2100,
    tag: "Signature",
    isNew: false,
    rating: 4.9,
    reviewsCount: 52,
    primaryImage: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop",
      "/src/assets/images/hero_luxury_fashion_1790884647993.jpg"
    ],
    colors: [
      { name: "Aniline Black", hex: "#161616", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop" },
      { name: "Deep Oxblood", hex: "#3e1b1e", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop" }
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "Vegetable-tanned full-grain French calfskin with custom matte nickel hardware, concealed storm placket, and Japanese cupro lining. Develops an organic, individual patina with each passing season.",
    fabricCare: "100% Full-Grain French Calfskin (1.2mm thickness). Specialist leather cleaner only. Condition annually with natural beeswax balm.",
    sustainability: "Leather certified by Leather Working Group (Gold Rated). Tanned using natural chestnut and mimosa bark tannins with zero chromium salts.",
    shippingReturns: "Express tracked delivery. Guaranteed insurance during transit. White-glove concierge returns within 30 days."
  },
  {
    id: "ae-04",
    code: "AE-26-04",
    name: "Le Pantalon Large Pleated",
    category: "Tailoring",
    price: 680,
    tag: "Essential",
    isNew: true,
    rating: 4.8,
    reviewsCount: 41,
    primaryImage: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1000&auto=format&fit=crop",
    secondaryImage: "/src/assets/images/product_tailored_blazer_1790884620331.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1000&auto=format&fit=crop",
      "/src/assets/images/product_tailored_blazer_1790884620331.jpg",
      "/src/assets/images/lookbook_coat_sculpture_1790884606896.jpg"
    ],
    colors: [
      { name: "Charcoal Chalk", hex: "#2f3136", image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1000&auto=format&fit=crop" },
      { name: "Sandstone Beige", hex: "#cfc9be", image: "/src/assets/images/product_tailored_blazer_1790884620331.jpg" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Deep double forward pleats with a continuous extended waistband and brass side adjusters. Cut from 320g fresco wool that drapes with statuesque weight and crisp definition through the hem.",
    fabricCare: "100% Super 130s High-Twist Wool. Unhemmed cuff for bespoke tailoring. Dry clean only.",
    sustainability: "Ethically farmed non-mulesed wool. Woven on historic water-powered shuttle looms in Biella.",
    shippingReturns: "Includes complimentary bespoke cuff hemming at any of our flagship ateliers upon proof of purchase."
  },
  {
    id: "ae-05",
    code: "AE-26-05",
    name: "Le Col Roulé Maille Lourde",
    category: "Knitwear",
    price: 790,
    tag: "Limited Run",
    isNew: false,
    rating: 4.9,
    reviewsCount: 31,
    primaryImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Ecru Chalk", hex: "#e7e4dc", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" },
      { name: "Deep Obsidian", hex: "#111111", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop" }
    ],
    sizes: ["XS", "S", "M", "L"],
    description: "3-gauge ribbed fisherman knit spun from untreated Scottish Geelong wool. High sculpted chimney collar with seamless whole-garment 3D knitting technology eliminating bulky seams.",
    fabricCare: "100% Extra-fine Scottish Geelong Wool. Hand wash cold in natural wool detergent. Dry flat away from direct heat.",
    sustainability: "Zero-waste whole-garment knitting technique reduces yarn waste by 98% compared to traditional cut-and-sew knitwear.",
    shippingReturns: "Complimentary global shipping. 30-day exchange or refund in original unworn state."
  },
  {
    id: "ae-06",
    code: "AE-26-06",
    name: "Le Trench Éternel Gabardine",
    category: "Outerwear",
    price: 1620,
    tag: "Archival",
    isNew: true,
    rating: 5.0,
    reviewsCount: 67,
    primaryImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
    secondaryImage: "/src/assets/images/hero_luxury_fashion_1790884647993.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
      "/src/assets/images/hero_luxury_fashion_1790884647993.jpg",
      "/src/assets/images/lookbook_coat_sculpture_1790884606896.jpg"
    ],
    colors: [
      { name: "Desert Khaki", hex: "#b5a38a", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop" },
      { name: "Midnight Noir", hex: "#121214", image: "/src/assets/images/hero_luxury_fashion_1790884647993.jpg" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Water-repellent ultra-dense cotton gabardine woven in Lancashire. Dramatic gun flap, raglan sleeve volume, authentic horn button closures, and saddle-stitched leather-wrapped belt D-rings.",
    fabricCare: "100% Long-Staple Egyptian Cotton Gabardine. Fluorocarbon-free Bionic-Finish® ECO water resistance. Specialist dry clean only.",
    sustainability: "Woven from regenerative long-staple organic cotton. Hardware forged from recycled brass with ruthenium plating.",
    shippingReturns: "Includes custom wooden hanger, branded dust cover, and worldwide concierge shipping."
  },
  {
    id: "ae-07",
    code: "AE-26-07",
    name: "L'Écharpe Cachemire Monolith",
    category: "Accessories",
    price: 420,
    tag: "Essential",
    isNew: false,
    rating: 4.8,
    reviewsCount: 89,
    primaryImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop",
    secondaryImage: "/src/assets/images/atelier_craftsman_hands_1790884634266.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop",
      "/src/assets/images/atelier_craftsman_hands_1790884634266.jpg"
    ],
    colors: [
      { name: "Smoked Quartz", hex: "#877e77", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop" },
      { name: "Obsidian", hex: "#141414", image: "/src/assets/images/atelier_craftsman_hands_1790884634266.jpg" }
    ],
    sizes: ["One Size"],
    description: "Oversized 220cm x 75cm brushed cashmere scarf featuring raw eyelash fringe edges and an understated tone-on-tone jacquard Atelier Éternel seal woven at the border.",
    fabricCare: "100% Cashmere. Water-brushed using natural teasel heads for maximum tactile bloom. Dry clean or gentle hand wash in lukewarm water.",
    sustainability: "Dyed using closed-loop alpine mountain water filtration in Northern Italy.",
    shippingReturns: "Delivered in signature luxury presentation sleeve. 30-day exchange or refund."
  },
  {
    id: "ae-08",
    code: "AE-26-08",
    name: "Le Sac Cabas Cuir Sculpté",
    category: "Accessories",
    price: 1150,
    tag: "Limited Run",
    isNew: true,
    rating: 5.0,
    reviewsCount: 19,
    primaryImage: "/src/assets/images/atelier_craftsman_hands_1790884634266.jpg",
    secondaryImage: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "/src/assets/images/atelier_craftsman_hands_1790884634266.jpg",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Raw Saddle Brown", hex: "#634735", image: "/src/assets/images/atelier_craftsman_hands_1790884634266.jpg" },
      { name: "Pitch Black", hex: "#101010", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop" }
    ],
    sizes: ["One Size"],
    description: "Sculptural structured tote hand-molded from vegetable-tanned bridle leather. Finished with hand-beveled and burnished raw edges, blind debossed serial number, and a removable zippered leather pouch.",
    fabricCare: "100% Vegetable-Tanned Bridle Leather. Brass hardware with hand-brushed finish. Wipe with dry microfiber cloth.",
    sustainability: "Handcrafted in a micro-artisan workshop outside Florence. Each piece is individually stamped with the artisan's mark.",
    shippingReturns: "Packaged in felt travel dustbag with leather certificate of authenticity. 30-day return policy."
  }
];

export const LOOKBOOK_LOOKS = [
  {
    id: "look-01",
    number: "01",
    title: "The Architectural Silhouette",
    season: "Autumn/Winter 2026",
    garments: ["L'Overcoat Cashmere Sculptural", "Le Pantalon Large Pleated"],
    model: "Saskia de Brauw",
    photographer: "Valentin Hennequin",
    image: "/src/assets/images/lookbook_coat_sculpture_1790884606896.jpg",
    aspectRatio: "tall",
    description: "An uncompromising examination of volumetric balance. The unlined 480g cashmere overcoat cuts an imposing architectural line against brutalist limestone, grounded by fluid wool fresco trousers.",
    productId: "ae-01"
  },
  {
    id: "look-02",
    number: "02",
    title: "Modern Monolith & Structure",
    season: "Autumn/Winter 2026",
    garments: ["Le Trench Éternel Gabardine", "Le Sac Cabas Cuir Sculpté"],
    model: "Kiki Willems",
    photographer: "Valentin Hennequin",
    image: "/src/assets/images/hero_luxury_fashion_1790884647993.jpg",
    aspectRatio: "wide",
    description: "Dense English gabardine meets raw hand-molded saddle leather. Movement-focused tailoring engineered for urban elements and quiet composure.",
    productId: "ae-06"
  },
  {
    id: "look-03",
    number: "03",
    title: "Raw Deconstruction",
    season: "Autumn/Winter 2026",
    garments: ["Le Blazer Déconstruit en Laine", "Le Pantalon Large Pleated"],
    model: "Clément Chabernaud",
    photographer: "Éloïse Moreau",
    image: "/src/assets/images/product_tailored_blazer_1790884620331.jpg",
    aspectRatio: "tall",
    description: "Stripping the classical blazer of superfluous padding. The natural horsehair canvas floats gently across the chest, emphasizing bespoke drape over rigid symmetry.",
    productId: "ae-02"
  },
  {
    id: "look-04",
    number: "04",
    title: "Subtle Savage Tactility",
    season: "Autumn/Winter 2026",
    garments: ["La Veste Cuir Minimaliste", "L'Écharpe Cachemire Monolith"],
    model: "Mica Argañaraz",
    photographer: "Éloïse Moreau",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "tall",
    description: "Vegetable-tanned full-grain calfskin paired with gossamer-brushed cashmere. A dialogue between razor-sharp leather architecture and soft tactile comfort.",
    productId: "ae-03"
  },
  {
    id: "look-05",
    number: "05",
    title: "Artisanal Sanctuary",
    season: "Autumn/Winter 2026",
    garments: ["Le Col Roulé Maille Lourde"],
    model: "Anok Yai",
    photographer: "Valentin Hennequin",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "tall",
    description: "Three-gauge untreated Scottish wool knit into an undulating sculptural form. Seamless construction enveloping the wearer in unadulterated natural warmth.",
    productId: "ae-05"
  },
  {
    id: "look-06",
    number: "06",
    title: "Avant-Garde Precision",
    season: "Autumn/Winter 2026",
    garments: ["L'Overcoat Cashmere Noir", "Tailored Bespoke Accents"],
    model: "Sora Choi",
    photographer: "Éloïse Moreau",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop",
    aspectRatio: "wide",
    description: "Captured in the raw light of the Marais gallery space. Sharp silhouettes and high-contrast tonal depth defining the house's signature midnight posture.",
    productId: "ae-01"
  }
];

export const PRESS_QUOTES = [
  {
    quote: "Atelier Éternel redefines European haute tailoring with brutalist restraint. Every seam carries the weight of museum-grade craftsmanship.",
    source: "Vogue International",
    year: "2026"
  },
  {
    quote: "A quiet rebellion against fast trends. Their cashmere coats have set a new benchmark for generational luxury.",
    source: "GQ Style",
    year: "2026"
  },
  {
    quote: "Sublime, poetic, and uncompromising. Atelier Éternel crafts garments that transcend seasons into timeless artifacts.",
    source: "Harper's Bazaar",
    year: "2026"
  },
  {
    quote: "The intersection of Parisian atelier discipline and modern architectural minimalism at its highest zenith.",
    source: "Le Figaro Mode",
    year: "2026"
  }
];

export const FLAGSHIP_STORES = [
  {
    id: "paris",
    city: "Paris",
    district: "Marais / 8ème Arrondissement",
    address: "24 Rue du Faubourg Saint-Honoré, 75008 Paris, France",
    phone: "+33 1 42 68 50 00",
    hours: "Mon – Sat: 10:00 — 19:30 · Sunday: Private Appointment",
    coordinates: "48.8702° N, 2.3168° E",
    consultant: "Jean-Philippe Moreau (Head Tailor)",
    image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "tokyo",
    city: "Tokyo",
    district: "Minami-Aoyama",
    address: "5-7-22 Minami-Aoyama, Minato-ku, Tokyo 107-0062, Japan",
    phone: "+81 3 5468 1120",
    hours: "Tue – Sun: 11:00 — 20:00 · Monday: Closed",
    coordinates: "35.6628° N, 139.7139° E",
    consultant: "Kenjiro Takahashi (Senior Stylist)",
    image: "/src/assets/images/hero_luxury_fashion_1790884647993.jpg"
  },
  {
    id: "newyork",
    city: "New York",
    district: "SoHo / Mercer Street",
    address: "102 Mercer Street, New York, NY 10012, USA",
    phone: "+1 212 941 7730",
    hours: "Mon – Sat: 11:00 — 19:00 · Sun: 12:00 — 18:00",
    coordinates: "40.7233° N, 73.9984° W",
    consultant: "Eleanor Vance (Atelier Director)",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "milan",
    city: "Milano",
    district: "Quadrilatero della Moda",
    address: "Via Montenapoleone 18, 20121 Milano, Italy",
    phone: "+39 02 7600 3340",
    hours: "Mon – Sat: 10:30 — 19:30 · Sunday: By Consultation",
    coordinates: "45.4687° N, 9.1963° E",
    consultant: "Matteo Casati (Master Cutter)",
    image: "/src/assets/images/atelier_craftsman_hands_1790884634266.jpg"
  }
];

// CART STORAGE ENGINE
const CART_STORAGE_KEY = "atelier_eternel_cart_v1";

export function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Cart retrieval error:", e);
    return [];
  }
}

export function saveCart(items) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent("cart-updated", { detail: { items } }));
  } catch (e) {
    console.error("Cart save error:", e);
  }
}

export function addToCart(product, size = "M", color = null, quantity = 1) {
  const cart = getCart();
  const activeColor = color || (product.colors && product.colors[0]?.name) || "Obsidian";
  const existingIndex = cart.findIndex(
    item => item.id === product.id && item.size === size && item.color === activeColor
  );

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      code: product.code,
      price: product.price,
      size: size,
      color: activeColor,
      image: product.primaryImage,
      quantity: quantity
    });
  }

  saveCart(cart);
  return cart;
}

export function removeFromCart(id, size, color) {
  let cart = getCart();
  cart = cart.filter(item => !(item.id === id && item.size === size && item.color === color));
  saveCart(cart);
  return cart;
}

export function updateCartQuantity(id, size, color, delta) {
  const cart = getCart();
  const item = cart.find(item => item.id === id && item.size === size && item.color === color);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      return removeFromCart(id, size, color);
    }
    saveCart(cart);
  }
  return cart;
}

export function clearCart() {
  saveCart([]);
}

export function calculateCartTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function formatPrice(num) {
  return "€" + Number(num).toLocaleString("en-EU", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}
