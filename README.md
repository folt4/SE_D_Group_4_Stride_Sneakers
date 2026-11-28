# STRIDE Sneakers Marketplace
### SE_D Group 4 — Software Engineering / IICT Project

> A premium **Blood Red & Black** dark-luxury sneaker resale marketplace built with HTML5, CSS3, and Vanilla JavaScript.
> Backed by an 8-Point Physical Inspection Lab, 24/7 VIP Concierge support, and a searchable Buyer Shield FAQ.

---

## Branch Contributor

| Field | Detail |
|---|---|
| **Name** | Hanniya Rehan |
| **Student ID** | 26i-3185 |
| **Branch** | `i263185` |
| **Assigned Pages** | Page 04 — About Us & Lab · Page 05 — Contact & VIP Concierge · Page 06 — Authentication & FAQ |
| **Course / Group** | SE_D Group 4 (IICT Project) |
| **University** | FAST NUCES |

---

## Key Features Implemented (Pages 04, 05 & 06)

### Page 04 — About Us & Verification Lab (`about.html`)
1. **Brand Story Split Hero & Realistic Sneaker Lab Chamber:** Split editorial layout featuring STRIDE's authenticity mission, key trust stats (`99.98%` lab precision, `42,000+` pairs verified, `4` global hubs), and a detailed Blood Red & Black high-top sneaker illustration with an animated laser scan beam.
2. **Interactive 8-Point Physical Inspection Lab:** Eight clickable audit modules (*Stereomicroscopy, UV Spectral Stitch, Olfactory Test, Density & Mass, RFID NFC Seal, Box Provenance, Insole Strobel, Laser Alignment*) that dynamically update the live Lab Telemetry readout with calibrated hardware and pass thresholds.
3. **Global Flagship Hubs Directory:** Four flagship location cards (*Tokyo – Minato-ku, New York – SoHo, London – Covent Garden, Paris – Le Marais*) displaying hours, concierge hotlines, and one-click **Copy Address** buttons with toast notifications.
4. **Executive Leadership & Vault CTA:** Leadership profile cards and quick-action links to explore the catalog or contact the VIP Concierge.

### Page 05 — Contact Us & VIP Concierge (`contact.html`)
5. **Vault Contact Column & Copy-to-Clipboard Controls:** Direct emergency concierge number (`+1 (800) 787-4331`), encrypted email (`concierge@stride-marketplace.com`) with copy buttons, SoHo headquarters address, `24/7 VIP Concierge` hours, and social channel pills (*Instagram, Twitter / X, Discord*).
6. **VIP Concierge Form with Live Validation & Ticket Generation:** Real-time field validation showing green borders for valid entries and red glow + inline error feedback for invalid inputs (Full Name, Email, Department dropdown, `#STR-XXXXXX` Order Reference format, and Message with a live `0 / 600` character counter). Valid submission displays a confirmation screen with a generated `#VIP-XXXXXX` ticket ID.
7. **Interactive FAQ Shortcuts:** Expandable quick-answer cards covering top customer questions directly below the concierge form, linked to the full Knowledge Base.

### Page 06 — Authentication & Buyer Shield FAQ (`faq.html`)
8. **Instant Live FAQ Search:** Real-time search input that filters questions as you type, supports `?q=` URL query pre-filling, includes a one-click Clear button, and displays a live matching question counter.
9. **Category Filter Pills & Expand/Collapse All:** Four category tabs (*All Questions, Buying & Auth, Selling & Payouts, Shipping*) that combine seamlessly with live search, an **Expand All / Collapse All** toggle, and an empty-results fallback CTA linking to `contact.html`.
10. **Accordion Cards with Blood-Red Highlighting:** Expandable FAQ rows toggling between `[+]` and `[−]` states with a glowing blood-red left border.

### Shared UI Kit & Global Features (`shared.css`, `shared.js`)
11. **Global Announcement Bar & Persistent Region Selector:** Top announcement ticker with a currency/region selector (`USD`, `EUR`, `GBP`, `JPY`) persisted in `localStorage`.
12. **Sticky Header, Mobile Drawer & `Ctrl + K` Quick Search Modal:** Responsive navbar with the three-triangle STRIDE SVG logo, mobile navigation drawer, toast notification system, and keyboard-triggered (`Ctrl + K`) quick-search modal.

---

## Design System (Blood Red & Black)

| Token | Hex Value | Usage |
|---|---|---|
| Primary Black | `#030304` | Page background |
| Panel Black | `#08080A` | Announcement bar, footer, telemetry panels |
| Card Black | `#0F0F12` | Feature cards, forms, accordion items |
| Border Subtle | `#261416` | Card outlines & dividers |
| Deep Blood Red | `#5C0000` | Gradients & active badge backgrounds |
| Blood Red Primary | `#8B0000` | Primary buttons, active borders, scan glow |
| Crimson Text Accent | `#C41E1E` | Eyebrow labels, headings, step numbers |
| Text Primary / Secondary | `#FFFFFF` / `#9CA3AF` | Headings & body copy |

**Typography:** `Outfit` (Headings) · `Inter` (Body) · `Space Mono` (Technical tags, IDs & labels)

---

## Branch Contents (`i263185`)

```
SE_D_Group_4_Stride_Sneakers/
├── Hanniya Rehan - 26i-3185/
│   └── STRIDE_Chat_Session_Hanniya_Rehan_26i-3185.docx   ← Full AI chat session log
├── Hanniya Rehan_Page_04_05_06_prototype.jpeg            ← Prototype overview
├── Page_04_05_06_prototype_review*.jpeg                  ← Prototype review screenshots
├── faq (1).html
├── hannyarehan2.js
├── hannyarehan3.js
├── order-confirmation.html
├── shop.html
├── stride.css
└── README.md                                             ← Project documentation & features
```
