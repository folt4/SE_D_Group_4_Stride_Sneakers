# STRIDE — Sneaker Resale Marketplace

**STRIDE** (*Be Your Own • Define Your Movement*) is a sneaker resale and consignment storefront built with semantic HTML5, modular CSS3, and vanilla JavaScript[cite: 2, 4, 5, 6]. It pairs a dark neon-accented visual identity with interactive product rendering, client-side form validation, and multi-page navigation across brand and concierge views[cite: 1, 2, 3, 4, 5, 6].

---

## Key Features

1. **3D Hero Showcase & Particle Stage:** Features an interactive floating hero sneaker with CSS keyframe motion, perspective lighting, a glowing backdrop orb, a particle canvas layer, and floating condition and market-value badges[cite: 4, 5].
2. **Dynamic Featured & Trending Carousels/Grids:** Dynamically renders featured and trending sneaker cards from `STRIDE_DATA` into `#featured-products-grid` and `#trending-products-grid`, complete with condition/grail badges, verification tags, quick-view triggers, and detail links[cite: 4, 6].
3. **Live Currency Conversion Support:** Formats resale and hero prices via `STRIDE_APP.formatPrice()` and listens for `stride:currencychange` events to re-render displayed prices automatically[cite: 4, 6].
4. **Wishlist Toggling & 3D Card Tilt:** Lets users toggle items on their wishlist (`STRIDE_APP.toggleWishlist()`) with active state styling and initializes 3D card tilt interactions on newly rendered product cards[cite: 4, 6].
5. **VIP Concierge Dispatch Form & Validation:** Validates full name, email format, and a minimum 15-character message on `#contact-form`, revealing a confirmation state (`#contact-success`) with reference `#CNG-99214` and triggering a toast notification on valid submission[cite: 1, 3].
6. **Global Navigation, Search Modal & Slide-Out Bag Drawer:** Provides desktop navigation, a slide-out mobile drawer, a search modal (`Ctrl+K`), a free-shipping progress bar, and a slide-out shopping bag drawer across pages[cite: 2, 3, 4].

---

## Project Structure & Provided Files

* `index.html` — Landing page with announcement bar, navigation, 3D hero section, brand pillars, featured/trending drops, consignment banner, VIP newsletter form, search modal, and cart drawer[cite: 4].
* `pages/about.html` — Brand story, marketplace metrics, four core pillars, and global authentication hubs (Tokyo, New York, London, Paris)[cite: 2].
* `pages/contact.html` — VIP Client Concierge page with direct support channels, quick help links, and dispatch form[cite: 3].
* `css/stride.css` & `Shan1.css` — Core and page-specific styles, including hero layout, 3D sneaker stage animations, floating badges, and dark/neon theme variables[cite: 2, 3, 4, 5].
* `js/stride-data.js`, `js/stride-core.js`, `js/stride-interactions.js`, `shan1.js`, & `shan2.js` — Product data, app state/currency/wishlist helpers, interactive UI behaviors, home product renderer, and contact form validation logic[cite: 1, 2, 3, 4, 6].

---

## Getting Started

1. Place all HTML, CSS, JS, and asset files (`assets/logo.svg`, `assets/logo-mark.svg`) in their respective folders (`index.html` at the root, `pages/` for subpages, `css/` for stylesheets, and `js/` for scripts)[cite: 2, 3, 4].
2. Open `index.html` in a modern web browser (or serve the folder with a local static server such as VS Code Live Server).
3. Navigate to `pages/about.html` or `pages/contact.html` from the header, footer, or mobile drawer to explore brand hubs and test the VIP concierge form[cite: 2, 3].

---

## Notes

* Contact form validation and confirmation currently run client-side and display a simulated reference ID (`#CNG-99214`) upon successful submission[cite: 1, 3].
* Product listings, wishlist state, currency formatting, and cart drawer updates rely on `STRIDE_DATA`, `STRIDE_APP`, and `STRIDE_INTERACTIONS`[cite: 4, 6].