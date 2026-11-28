# STRIDE Sneakers Marketplace 
### SE_D Group 4 — Software Engineering Project

> A premium dark-mode sneaker resale marketplace built with HTML, CSS & vanilla JavaScript.  
> Features 100% verified authentic grails, live cart, wishlist, and secure checkout simulation.

---

##  Branch Contributor

| Field | Detail |
|---|---|
| **Name** | Aazar Khan |
| **Student ID** | 26i-3197 |
| **Branch** | `i263197` |
| **Assigned Pages** | Page 10 — Wishlist · Page 11 — Cart · Page 12 — Checkout |
| **Course** | Software Engineering (SE_D Group 4) |
| **Institute** | IICT |

---

##  Project Structure

```
SE_D_Group_4_Stride_Sneakers/
│
├── pages/
│   ├── wishlist.html         ← Page 10: Saved Grails / Wishlist
│   ├── cart.html             ← Page 11: Shopping Bag
│   ├── checkout.html         ← Page 12: Secure Checkout
│   └── ...                   (other team members' pages)
│
├── css/
│   └── stride.css            ← Shared design system stylesheet
│
├── js/
│   ├── stride-data.js        ← Product catalogue data
│   ├── stride-core.js        ← App API (cart, wishlist, promo, toast)
│   └── stride-interactions.js← UI interactions (tilt, modals, drawers)
│
├── assets/
│   ├── logo.svg              ← STRIDE wordmark
│   └── logo-mark.svg         ← STRIDE icon (favicon)
│
├── docs/
│   └── ai-logs/26i-3197/
│       └── iict-ayg-transcript.md  ← Full AI session log
│
└── README.md                 ← This file
```

---

## Pages Overview (Assigned: 10, 11, 12)

### Page 10 — Wishlist (`pages/wishlist.html`)
Displays all sneakers the user has saved with the ♥ heart icon.

**Features:**
- Live count subtitle ("N Saved Pairs")
- **Move to Bag** — moves individual item from wishlist to cart
- **Move All to Bag** — bulk move all saved pairs
- **Clear Wishlist** — empties the wishlist
- Empty state view with "Explore Catalogue" CTA
- Currency change reactive (re-renders on `stride:currencychange` event)

---

### Page 11 — Cart (`pages/cart.html`)
Full shopping bag page — review items before checkout.

**Features:**
- Free Shipping progress bar (tracks towards \$200 threshold)
- Quantity stepper (+/−) per item
- Remove individual items
- Promo code input (try `STRIDE10` for 10% off, `FIRSTDROP` for \$50 off)
- Live order summary: subtotal · shipping · discount · **total**
- Disabled checkout button when cart is empty
- Responsive layout (collapses at 768px)

---

### Page 12 — Checkout (`pages/checkout.html`)
Full checkout flow — secured, encrypted simulation.

**Features:**
- **Section 1 — Contact Info:** Email (regex validated) + Phone (7+ digit validated)
- **Section 2 — Delivery Address:** First/Last name, street, apartment, city, state/prov, postal code, country
- **Section 3 — Courier Dispatch:** Standard FedEx Express (free/\$25) vs STRIDE Armored Overnight (+\$45)
- **Section 4 — Payment Method:** Credit/Debit Card | Apple Pay / Google Pay | USDC Crypto Vault
- Live order summary sidebar (sticky, updates on shipping method change)
- Full form validation with field-level error highlighting + focus on first invalid field
- On success: saves order to `localStorage`, clears cart, redirects to `order-confirmation.html`

---

##  Data Flow

```
Shop page → ♥ heart → wishlist.html
Shop page → Add to Bag → cart drawer → cart.html
wishlist.html → Move to Bag → cart.html
cart.html → Proceed to Checkout → checkout.html
checkout.html → Place Order → order-confirmation.html
```

All state is stored in **`localStorage`** (no backend required):

| Key | Contents |
|---|---|
| `stride_cart` | Array of cart items |
| `stride_wishlist` | Array of wishlisted product IDs |
| `stride_promo_code` | Active promo code object |
| `stride_orders` | Array of placed orders |

---



>  Pages must be served via HTTP (not opened as `file://`) for `fetch()` and localStorage to work correctly.

---

##  Design System

| Token | Value | Usage |
|---|---|---|
| Background | `#11131A` / `#171A22` | Page / card backgrounds |
| Neon Orange | `#FF5A1F` | Primary CTA, prices, accents |
| Success Green | `#34D399` | Free shipping, positive states |
| Text Primary | `#FFFFFF` | Headings, prices |
| Text Secondary | `#A0A4AE` | Labels, descriptions |
| Border | `#292D38` | Card borders, dividers |

**Fonts:** Display font for headings · Monospace for labels/prices · System sans-serif for body

---

##  Promo Codes (Demo)

| Code | Discount |
|---|---|
| `STRIDE10` | 10% off subtotal |
| `FIRSTDROP` | \$50 flat off |

---


---

---


Stride Member 4 Aazar Khan Pages Designed 10,11,12 | `stride_cart` | Array of cart items |
| `stride_wishlist` | Array of wishlisted product IDs |
| `stride_promo_code` | Active promo code object |
| `stride_orders` | Array of placed orders |
//    Thanks   //
