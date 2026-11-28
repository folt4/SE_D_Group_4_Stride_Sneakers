# STRIDE — Next-Gen Sneaker Resale Marketplace

> **"Be Your Own"**  
> *Section SE-D | Group 04 — A 15-page futuristic sneaker resale e-commerce platform built with semantic HTML5, modern CSS3, and Vanilla ES6+ JavaScript.*

---

## Project Overview

- **Website Title:** STRIDE — Sneaker Resale Marketplace
- **Theme:** Theme #8 — **Sneaker resale store** (Category: **E-commerce**)
- **Section & Group:** Section **SE-D** | Group **04**
- **Live Website:** https://folt4.github.io/SE_D_Group_4_Stride_Sneakers/
- **GitHub Repository:** https://github.com/folt4/SE_D_Group_4_Stride_Sneakers
- **Google Form:** https://docs.google.com/forms/d/e/1FAIpQLSeMLirbPz1iYlgb12XH_aPzVV4XVN0D3UfRe7r_2Z-6nhw1Fg/viewform

---

## Key Website Features

- **Cinematic 3D Hero & Visual Engine:** Mouse-tracking 3D sneaker parallax, glowing ambient halo, animated HTML5 particle canvas, and 3D perspective-tilting product cards (`js/stride-interactions.js`).
- **Regional Multi-Currency Price Changer:** Live currency switcher in the announcement bar, header dropdown, and mobile drawer supporting **8 currencies** (`USD`, `PKR`, `AED`, `SAR`, `EUR`, `GBP`, `CAD`, `KWD`) with persistent `localStorage` state and instant reactive price updates across all pages (`js/stride-core.js`).
- **Dynamic Sneaker Catalogue & Search:** Real-time search (`Ctrl + K` global modal + catalogue search), multi-faceted filtering by brand, condition grade (`Deadstock`, `VNDS`), size chips, max price slider, and sorting (`js/stride-data.js`, `pages/shop.html`).
- **Dynamic Product Detail Page (PDP):** URL-driven product rendering (`?id=`), multi-angle image thumbnail gallery, interactive US size selector, 8-Point Physical Lab verification details, wishlist toggle, and related grails (`pages/product-detail.html`).
- **Consignment Seller Portal:** Live payout calculator (9.5% commission + $5 processing fee), drag-and-drop sneaker photo dropzone with client-side preview, form validation, and reference ID generator (`#CSG-...`) (`pages/sell.html`).
- **Persistent Shopping Bag, Wishlist & Checkout:** Reactive `localStorage` cart & wishlist, slide-out cart drawer, `$200` free insured express shipping progress meter, promo code engine (`STRIDE10` for 10% off, `FIRSTDROP` for $50 off), and 4-step checkout generating persistent order records (`pages/wishlist.html`, `pages/cart.html`, `pages/checkout.html`).
- **Order Management & Live Tracking:** Dynamic order confirmation receipt with printable invoice, persistent order history ledger, and interactive 5-stage live shipment tracking timeline (`pages/order-confirmation.html`, `pages/orders.html`, `pages/track-order.html`).
- **Biomechanical Size Guide & Searchable FAQ:** Interactive foot-length slider (CM/Inches) with US/UK/EU/JP conversion table (`pages/size-guide.html`) and category-filtered searchable FAQ accordion (`pages/faq.html`).

---

## Technologies Used

- **HTML5:** Semantic structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`) with accessible labels and `alt` attributes.
- **CSS3:** Modular design system (`css/stride-design-system.css`, `css/stride-components.css`, `css/stride-pages.css`, `css/stride.css`) using CSS Custom Properties, CSS Grid, Flexbox, 3D transforms, keyframe animations, and responsive media queries.
- **Vanilla JavaScript (ES6+):** Modular architecture (`js/stride-data.js`, `js/stride-core.js`, `js/stride-interactions.js`) with `localStorage` persistence and custom DOM events (`stride:currencychange`). No prohibited frameworks or jQuery used.

---

## Feature Table

| Feature | Category | Page | Member |
| :--- | :--- | :--- | :--- |
| Featured grails & trending drops rendered from `STRIDE_DATA` | Data & Display | `index.html` | Shan e Muhammad (`26i-3172`) |
| Newsletter subscription & VIP concierge form validation | Forms & Input | `index.html`, `pages/contact.html` | Shan e Muhammad (`26i-3172`) |
| Persistent cart, wishlist & currency preference (`localStorage`) | State & Memory | `index.html`, `pages/about.html`, `pages/contact.html` | Shan e Muhammad (`26i-3172`) |
| 3D floating hero parallax, particle canvas & global search modal | Interaction | `index.html` | Shan e Muhammad (`26i-3172`) |
| Multi-currency price conversion (8 global/regional currencies) | Logic & Calculation | `index.html`, `pages/about.html`, `pages/contact.html` | Shan e Muhammad (`26i-3172`) |
| Responsive mobile drawer, semantic landmarks & keyboard focus states | Responsive & Accessible | `index.html`, `pages/about.html`, `pages/contact.html` | Shan e Muhammad (`26i-3172`) |
| Dynamic sneaker catalogue & product detail view via `?id=` | Data & Display | `pages/shop.html`, `pages/product-detail.html` | Hanniya Rehan (`26i-3185`) |
| Live search, brand/condition/size/price filter controls | Forms & Input | `pages/shop.html`, `pages/faq.html` | Hanniya Rehan (`26i-3185`) |
| Persistent wishlist toggle & cart drawer sync (`localStorage`) | State & Memory | `pages/shop.html`, `pages/product-detail.html` | Hanniya Rehan (`26i-3185`) |
| Multi-angle image gallery, 3D card tilt & FAQ accordion | Interaction | `pages/product-detail.html`, `pages/faq.html` | Hanniya Rehan (`26i-3185`) |
| Dynamic price range filtering & live currency conversion | Logic & Calculation | `pages/shop.html`, `pages/product-detail.html` | Hanniya Rehan (`26i-3185`) |
| Responsive filter layout, accessible accordion & mobile navigation | Responsive & Accessible | `pages/shop.html`, `pages/product-detail.html`, `pages/faq.html` | Hanniya Rehan (`26i-3185`) |
| Consignment submission summary & account profile views | Data & Display | `pages/sell.html`, `pages/login.html` | Danyal Mehdi (`26i-3195`) |
| Consignment form, photo dropzone upload & password strength meter | Forms & Input | `pages/sell.html`, `pages/login.html`, `pages/signup.html` | Danyal Mehdi (`26i-3195`) |
| Persistent demo authentication session (`stride_user` in `localStorage`) | State & Memory | `pages/login.html`, `pages/signup.html` | Danyal Mehdi (`26i-3195`) |
| Show/hide password toggle, dropzone preview & one-click demo login | Interaction | `pages/sell.html`, `pages/login.html`, `pages/signup.html` | Danyal Mehdi (`26i-3195`) |
| Live consignment payout calculator (9.5% commission + processing fee) | Logic & Calculation | `pages/sell.html` | Danyal Mehdi (`26i-3195`) |
| Responsive multi-column forms & accessible validation error feedback | Responsive & Accessible | `pages/sell.html`, `pages/login.html`, `pages/signup.html` | Danyal Mehdi (`26i-3195`) |
| Dynamic saved wishlist, shopping bag & checkout order summary | Data & Display | `pages/wishlist.html`, `pages/cart.html`, `pages/checkout.html` | Aazar Khan (`26i-3197`) |
| 4-part checkout form validation & promo code input | Forms & Input | `pages/cart.html`, `pages/checkout.html` | Aazar Khan (`26i-3197`) |
| Persistent shopping bag, wishlist & active promo code (`localStorage`) | State & Memory | `pages/wishlist.html`, `pages/cart.html`, `pages/checkout.html` | Aazar Khan (`26i-3197`) |
| Quantity steppers, "Move to Bag" & payment method selector | Interaction | `pages/wishlist.html`, `pages/cart.html`, `pages/checkout.html` | Aazar Khan (`26i-3197`) |
| Subtotal, discount codes (`STRIDE10`, `FIRSTDROP`) & free-shipping meter | Logic & Calculation | `pages/cart.html`, `pages/checkout.html` | Aazar Khan (`26i-3197`) |
| Responsive cart table, checkout grid & mobile-friendly controls | Responsive & Accessible | `pages/wishlist.html`, `pages/cart.html`, `pages/checkout.html` | Aazar Khan (`26i-3197`) |
| Dynamic order receipt, order history ledger & 5-stage tracking data | Data & Display | `pages/order-confirmation.html`, `pages/orders.html`, `pages/track-order.html` | Maryam Zafar (`26i-3276`) |
| Order ID lookup input with validation & error handling | Forms & Input | `pages/track-order.html` | Maryam Zafar (`26i-3276`) |
| Persistent order history (`stride_orders` in `localStorage`) | State & Memory | `pages/order-confirmation.html`, `pages/orders.html`, `pages/track-order.html` | Maryam Zafar (`26i-3276`) |
| Interactive shipment stage simulator & printable invoice action | Interaction | `pages/order-confirmation.html`, `pages/track-order.html` | Maryam Zafar (`26i-3276`) |
| Dynamic progress percentage & itemized order total calculation | Logic & Calculation | `pages/order-confirmation.html`, `pages/orders.html`, `pages/track-order.html` | Maryam Zafar (`26i-3276`) |
| Responsive tracking stepper, order cards & accessible status badges | Responsive & Accessible | `pages/order-confirmation.html`, `pages/orders.html`, `pages/track-order.html` | Maryam Zafar (`26i-3276`) |

---

## Contribution Table

| Name | Roll Number | GitHub Username | Branch | Pages Built | Features Built |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Shan e Muhammad** | `26i-3172` | `@whotfisshan247` | `i263172` | 1. `index.html`<br>2. `pages/about.html`<br>3. `pages/contact.html` | Hero 3D parallax, particle canvas, featured & trending grails, 8-point lab overview, VIP concierge form validation, global search & currency changer |
| **Hanniya Rehan** | `26i-3185` | `@hanniyarehan-gif` | `i263185` | 4. `pages/shop.html`<br>5. `pages/product-detail.html`<br>6. `pages/faq.html` | Catalogue live search/filter/sort, 3D tilt cards, dynamic PDP (`?id=`), multi-angle gallery, size picker, searchable FAQ accordion |
| **Danyal Mehdi** | `26i-3195` | `@danyalmehdi30-hue` | `i263195` | 7. `pages/sell.html`<br>8. `pages/login.html`<br>9. `pages/signup.html` | Consignment intake wizard, live payout calculator, drag-and-drop photo preview, collector login & demo login, signup password strength meter |
| **Aazar Khan** | `26i-3197` | `@folt4` | `i263197` | 10. `pages/wishlist.html`<br>11. `pages/cart.html`<br>12. `pages/checkout.html` | Persistent wishlist, reactive shopping bag with quantity steppers, promo code engine, 4-part checkout with order creation |
| **Maryam Zafar** | `26i-3276` | `@maryamzaf9876` | `i263276` | 13. `pages/order-confirmation.html`<br>14. `pages/orders.html`<br>15. `pages/track-order.html` | Order confirmation receipt & print invoice, order history ledger, 5-stage live shipment tracking stepper & simulator |

*(Shared utility page: `pages/size-guide.html`)*

---

## Repository Structure

```text
SE_D_Group_4_Stride_Sneakers/
├── index.html
├── pages/
│   ├── about.html
│   ├── cart.html
│   ├── checkout.html
│   ├── contact.html
│   ├── faq.html
│   ├── login.html
│   ├── order-confirmation.html
│   ├── orders.html
│   ├── product-detail.html
│   ├── sell.html
│   ├── shop.html
│   ├── signup.html
│   ├── size-guide.html
│   ├── track-order.html
│   └── wishlist.html
├── css/
│   ├── stride.css
│   ├── stride-design-system.css
│   ├── stride-components.css
│   └── stride-pages.css
├── js/
│   ├── stride-data.js
│   ├── stride-core.js
│   └── stride-interactions.js
├── assets/
│   ├── logo.svg
│   └── logo-mark.svg
├── images/
│   ├── logo.svg
│   └── logo-mark.svg
├── docs/
│   ├── prototype-photos/
│   │   ├── 26i-3172_prototype.jpeg
│   │   ├── 26i-3185_prototype.jpeg
│   │   ├── 26i-3195_prototype.jpeg
│   │   ├── 26i-3197_prototype.jpeg
│   │   └── 26i-3276_prototype.jpeg
│   ├── feedback-photos/
│   │   ├── 26i-3172_session1.jpeg .. session2.jpeg
│   │   ├── 26i-3185_session1.jpeg .. session4.jpeg
│   │   ├── 26i-3195_session1.jpeg .. session2.jpeg
│   │   ├── 26i-3197_session1.jpeg .. session4.jpeg
│   │   └── 26i-3276_session1.jpeg .. session2.jpeg
│   └── ai-logs/
│       ├── 26i-3172/stride-chat-export.md
│       ├── 26i-3185/session-01.md
│       ├── 26i-3195/iict-ayg-transcript.md
│       ├── 26i-3197/iict-ayg-transcript.md & session-01.md
│       └── 26i-3276/session-01.md
└── README.md
```

---

## How to Run Locally

```bash
python -m http.server 8080
```
Then open `http://localhost:8080/index.html` in your browser.
