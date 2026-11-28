# SE_D_Group_4_Stride_Sneakers# STRIDE — Order Management & Shipment Tracking

**Contributor:** Maryam Zafar  
**Project:** STRIDE — Premium Sneaker Marketplace  
**Assigned Modules:** Member 13, 14 & 15

---

## 📌 Project Overview

This branch of the STRIDE project focuses on the post-purchase customer experience. It includes three essential modules that allow customers to confirm their purchases, review their previous orders, and track their sneaker shipments.

The objective is to provide customers with a transparent, reliable, and user-friendly order management experience.

## 📂 Assigned Modules

### 1. Order Confirmation & Receipt
**File:** `pages/order-confirmation.html`  
**Member:** 13

This page displays a successful order confirmation after a customer completes a purchase.

**Main Features:**
- Celebratory order confirmation screen.
- Green animated checkmark success indicator.
- Unique Order ID badge (e.g., `#STR-849102`).
- Order date and purchase information.
- Digital receipt with sneaker details.
- Product size, condition, quantity, and price.
- Payment method information.
- Delivery carrier and tracking number.
- Complete delivery address.
- Total amount paid.
- Track Live Shipment button.
- Continue Shopping button.

**Objective:** Provide customers with a complete digital receipt and confirmation of their successful purchase.

### 2. Order History & Ledger
**File:** `pages/orders.html`  
**Member:** 14

This page provides customers with a dashboard containing their previous and active sneaker purchases.

**Main Features:**
- Customer Vault & Order Ledger heading.
- Individual order cards.
- Unique order identification numbers.
- Order dates and total amounts.
- Dynamic order status badges:
  - AUTHENTICATED
  - IN TRANSIT
  - DELIVERED
- Sneaker product thumbnails.
- Product name and description.
- Selected shoe size and condition.
- Quantity and individual product price.
- Delivery carrier information.
- Track Delivery button.
- View Receipt button.

**Objective:** Allow customers to conveniently review their previous transactions and monitor their active orders.

### 3. Live Shipment Tracker
**File:** `pages/track-order.html`  
**Member:** 15

This page allows customers to track their sneaker deliveries and follow the authentication and shipping process.

**Main Features:**

**A. Tracking Search**
- Order ID or tracking number input field.
- Track Order button.
- Search functionality for shipment information.

**B. Active Shipment Overview**
- Order identification number.
- Delivery carrier name.
- Tracking code.
- Delivery destination.
- Estimated delivery date.

**C. Five-Stage Shipment Tracker**

The tracking system contains five stages:

1. Order Confirmed
2. Physical Lab Verified
3. Tamper-Proof Dispatched
4. In Transit (Carrier)
5. Delivered to Customer Door

**D. Visual Tracking Timeline**
- Completed stages display orange checkmarks.
- Current stage displays a glowing animation.
- Upcoming stages appear in muted gray.
- Connected horizontal progress line.

**E. Live Activity Log**
- Timestamped shipment updates.
- Delivery location information.
- Lab inspection updates.
- Dispatch and shipping activities.

**Objective:** Provide customers with a visual shipment timeline and transparent updates throughout the delivery and authentication process.

---

## 📁 Project File Structure

```text
STRIDE/
│
├── pages/
│   ├── order-confirmation.html
│   ├── orders.html
│   └── track-order.html
│
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
│
└── README.md
```

*Note: The assets structure is illustrative and should match the actual repository.*

## 🔗 Module Navigation

The three modules are connected to provide a smooth customer journey:

1. After completing checkout, the customer reaches the Order Confirmation page.
2. From the confirmation page, the customer can access Live Shipment Tracking.
3. Customers can access Order History to review previous purchases.
4. From Order History, customers can open their receipt or track their delivery.

## 🎨 Design & User Experience

The modules follow the STRIDE marketplace's premium sneaker identity.

Design principles:
- Dark-themed interface.
- Orange accent colors.
- Clean and modern layouts.
- Responsive design.
- Clear status indicators.
- Interactive buttons and navigation.
- Animated tracking progress indicators.

## 🛠️ Technologies

The technologies used should reflect the actual project implementation.

- HTML5 — Page structure.
- CSS3 — Styling and responsive layouts.
- JavaScript — Interactive functionality and tracking updates.

## 🎯 Expected Outcome

The completed modules will provide STRIDE customers with:

- Reliable order confirmation.
- Accessible digital purchase receipts.
- Organized purchase history.
- Clear order status information.
- Visual shipment tracking.
- Transparent delivery updates.

## 👩‍💻 Contributor

**Maryam Zafar**

Responsible for developing:

- Member 13 — Order Confirmation & Receipt.
- Member 14 — Order History & Ledger.
- Member 15 — Live Shipment Tracker.

**Project:** STRIDE — Premium Sneaker Marketplace

---

*Developed as part of the STRIDE project team.*
