# STRIDE Sneakers Marketplace
### SE_D Group 4 — Software Engineering Project

> A premium dark-mode sneaker resale marketplace built with HTML, CSS & vanilla JavaScript.  
> Features 100% verified authentic grails, collector authentication, and sneaker consignment listings.

**Live Website:** Deployment pending  
**Google Form:** https://docs.google.com/forms/d/e/1FAIpQLSeMLirbPz1iYlgb12XH_aPzVV4XVN0D3UfRe7r_2Z-6nhw1Fg/viewform?usp=publish-editor

---

## Branch Contributor

| Field | Detail |
|---|---|
| **Name** | Danyal Mehdi |
| **Student ID** | 26I-3195 |
| **Branch** | `i263195` |
| **Assigned Pages** | Page 7 — Login · Page 8 — Signup · Page 9 — Sell |
| **Course** | Software Engineering (SE_D Group 4) |
| **Institute** | IICT |

---

## Project Structure (Branch `i263195`)

```
SE_D_Group_4_Stride_Sneakers/
│
├── login.html                                 ← Page 7: Member Login
├── login.css                                  ← Login page styles
├── sign in .js                                ← Login validation, demo fill & session logic
│
├── signup.html                                ← Page 8: Create Account / Registration
├── sign up.css                                ← Signup page styles
├── sign up.js                                 ← Password strength meter & registration logic
│
├── sell.html                                  ← Page 9: Sell / Consign Your Grails (prototype/in progress)
│
├── Danyal Mehdi Page 7,8,9 Prototype.jpeg     ← Hand-drawn mobile & desktop UI prototype
├── WhatsApp Image 2026-11-27 at 18.25.08.jpeg ← Prototype showcase photo
├── WhatsApp Image 2026-11-27 at 18.25.18.jpeg ← Prototype showcase photo
└── README.md                                  ← This file
```

---

## Pages Overview (Assigned: 7, 8, 9)

### Page 7 — Login (`login.html`)
Member sign-in portal (**ACCESS THE VAULT**) for returning STRIDE collectors.

**Features:**
- Email address regex validation and minimum 6-character password check with inline error messages
- **Password Visibility Toggle** (`#toggle-password`) to show or hide the password
- **Remember This Session** checkbox (`#remember-me`)
- **Forgot Password** link triggering a toast notification (`STRIDE_APP.showToast`)
- **One-Click Demo Login** (`#demo-fill-btn`) to populate demo collector credentials (`collector@stride.com` / `stride2026`)
- Saves authenticated user session (`Alex Vance`, `Verified VIP Collector`) to `localStorage` and redirects to `orders.html`

---

### Page 8 — Signup (`signup.html`)
Collector registration page (**Create Your STRIDE Identity**) built with Bootstrap 5.3 and custom STRIDE dark-mode styles.

**Features:**
- Responsive announcement bar, desktop header with live user pill (`#header-user-pill`), and mobile slide-out navigation drawer
- **Full Name & Email Validation** in a responsive 2-column grid
- **Dynamic Password Strength Meter** (`#strength-bar` — red / amber / green) with 4-rule checklist (`8+ Characters`, `1 Uppercase`, `1 Number`, `1 Special Symbol`)
- **Confirm Password** field with match validation and visibility toggles on both password inputs
- **Terms & Consignment Policy Modal** (`#terms-modal`) covering the 8-point physical authentication inspection (Tokyo, London, Paris hubs), 9.5% consignment fee + $5.00 processing charge, and photo requirements
- **Confirmation View** (`#signup-success-view`) on submit, storing the member in `localStorage` and linking to `login.html` and `sell.html`

---

### Page 9 — Sell / Consign Your Grails (`sell.html`)
Sneaker consignment submission page designed for sellers listing pairs on STRIDE (detailed in `Danyal Mehdi Page 7,8,9 Prototype.jpeg`).

**Features:**
- **Consignment Submission Form:** Sneaker Brand, Sneaker Name/Model, Size (US), Condition grade (e.g., Deadstock), Original Box (`Yes` / `No`), SKU, and Your Demand price
- **Live Payout Breakdown:** Real-time calculation of Gross Listing Price, STRIDE Fee (`9.5%`), Lab Processing/Authentication fee (`$5`), and Estimated Net Payout
- **Sneaker Image Upload & Preview:** Drag-and-drop or click-to-browse uploader requiring at least 2 clear photos with live preview thumbnails
- **Product Form Validation:** Validates sneaker details, pricing, and image requirements before submission

---

## Features Summary

| Feature | Category | Page | Member |
|---|---|---|---|
| User Login & Session Persistence | Authentication | Login (`login.html`) | Danyal Mehdi |
| Remember Me & Demo Login | User Experience | Login (`login.html`) | Danyal Mehdi |
| Password Visibility Toggle | User Experience | Login & Signup | Danyal Mehdi |
| User Registration & Strength Meter | Authentication | Signup (`signup.html`) | Danyal Mehdi |
| Password & Confirm Password Match | Form Validation | Signup (`signup.html`) | Danyal Mehdi |
| Terms & Consignment Policy Modal | Compliance / UX | Signup (`signup.html`) | Danyal Mehdi |
| Sneaker Consignment Listing Form | Product Management | Sell (`sell.html`) | Danyal Mehdi |
| Live Payout Fee Calculator | Pricing | Sell (`sell.html`) | Danyal Mehdi |
| Sneaker Image Upload & Preview | Image Handling | Sell (`sell.html`) | Danyal Mehdi |
| Product Form Validation | Form Validation | Sell (`sell.html`) | Danyal Mehdi |

---

## Data Flow & State

```
signup.html → Create Account → localStorage (stride_user) → login.html / sell.html
login.html  → Sign In        → localStorage (stride_user) → orders.html
sell.html   → Consign Grail  → Form validation & live payout calculation → Submit listing
```

User authentication state is stored in **`localStorage`** (no backend required):

| Key | Contents |
|---|---|
| `stride_user` | Active user object (`name`, `email`, `role`) |

> Pages must be served via HTTP (not opened as `file://`) for assets and `localStorage` to work correctly.

---

## Design System

| Token | Value | Usage |
|---|---|---|
| Background | `#11131A` / `#171A22` | Page / card backgrounds |
| Neon Orange | `#FF5A1F` | Primary CTA, highlights, accents |
| Success Green | `#10B981` / `#34D399` | Strong password & positive states |
| Text Primary | `#FFFFFF` | Headings, primary text |
| Text Secondary | `#A0A4AE` | Labels, descriptions |
| Border | `#292D38` | Card borders, dividers |

---

## Group Member Contribution

| Name | Roll Number | Pages Built | Features Built |
|---|---|---|---|
| Danyal Mehdi | `26I-3195` | Page 7 (Login), Page 8 (Signup), Page 9 (Sell) | User registration, password strength meter, login, form validation, password visibility, demo login, sneaker consignment listing, live payout calculator, and image upload/preview |
