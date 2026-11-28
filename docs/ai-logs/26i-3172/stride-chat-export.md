# STRIDE Chat Export

Exported: 2026-11-29 00:53:09 +05:00

---

## User (2026-11-28T19:44:06Z)

Create the landing page structure for STRIDE (a futuristic sneaker resale marketplace) with a top announcement bar, sticky navigation header, a 3D floating sneaker hero section with stats ($190 live value, 42,000+ verified pairs), brand pillar cards, featured/trending grail sections, a seller consignment banner, newsletter signup, and slide-out cart/search drawers. Also write the hero section CSS with particle canvas positioning, glow orb animation, floating badges, and 3D perspective.C:\Users\Lenovo\Downloads\baseline.pdf

## Assistant (2026-11-28T19:44:32Z)

Below is the **STRIDE** landing page HTML structure (`index.html`) and Hero Section CSS (`styles.css`), built directly against the design tokens, typography, shared UI kit, and page 01 wireframe in [baseline.pdf](file:///C:/Users/Lenovo/Downloads/baseline.pdf).

---

### 1. Landing Page Structure (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>STRIDE — Be Your Own | Futuristic Sneaker Resale Marketplace</title>

  <!-- Typography from Blueprint: Outfit (Headings), Inter (Body), Space Mono (Technical Data) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@600;700;800;900&family=Space+Mono:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>

  <!-- =========================================================
       1. TOP ANNOUNCEMENT BAR (Global Shared UI Kit)
       ========================================================= -->
  <div class="announcement-bar" role="region" aria-label="Marketplace announcements">
    <div class="announcement-inner container">
      <div class="announcement-ticker">
        <span class="ticker-item"><span class="accent">&#9889;</span> GLOBAL VAULT DROP</span>
        <span class="ticker-sep" aria-hidden="true">|</span>
        <span class="ticker-item"><span class="accent">&#9670;</span> 8-POINT LAB CERTIFIED — 100% VERIFIED AUTHENTIC</span>
        <span class="ticker-sep" aria-hidden="true">|</span>
        <span class="ticker-item">FREE EXPRESS SHIPPING OVER $200</span>
      </div>

      <div class="region-selector">
        <label for="region-select" class="sr-only">Region and Currency</label>
        <span class="region-icon" aria-hidden="true">&#8853;</span>
        <select id="region-select" class="region-select" aria-label="Region and Currency">
          <option value="USD" selected>REGION: US USD ($)</option>
          <option value="GBP">REGION: UK GBP (&pound;)</option>
          <option value="EUR">REGION: EU EUR (&euro;)</option>
          <option value="JPY">REGION: JP JPY (&yen;)</option>
        </select>
      </div>
    </div>
  </div>

  <!-- =========================================================
       2. STICKY NAVIGATION HEADER (Global Shared UI Kit)
       ========================================================= -->
  <header class="site-header" id="site-header">
    <div class="header-inner container">
      <!-- Official Three-Triangle STRIDE Vector Logo -->
      <a href="index.html" class="brand-logo" aria-label="STRIDE Home">
        <svg class="brand-mark" width="34" height="24" viewBox="0 0 34 24" fill="none" aria-hidden="true">
          <polygon points="0,24 10,2 20,24" fill="#FF5A1F" />
          <polygon points="11,24 19,8 27,24" fill="#FF8C42" />
          <polygon points="21,24 27.5,12 34,24" fill="#FF5A1F" />
        </svg>
        <span class="brand-wordmark">STRIDE</span>
      </a>

      <!-- Primary Navigation -->
      <nav class="main-nav" aria-label="Primary navigation">
        <ul class="nav-list">
          <li><a href="index.html" class="nav-link is-active">Home</a></li>
          <li><a href="pages/shop.html" class="nav-link">Shop</a></li>
          <li>
            <a href="pages/shop.html?filter=collections" class="nav-link">
              Collections <span class="nav-badge-hot">HOT</span>
            </a>
          </li>
          <li><a href="pages/faq.html#size-guide" class="nav-link">Size Guide</a></li>
          <li><a href="pages/sell.html" class="nav-link">Sell</a></li>
          <li><a href="pages/about.html" class="nav-link">About</a></li>
        </ul>
      </nav>

      <!-- Utility Action Icons -->
      <div class="header-actions">
        <button
          type="button"
          class="icon-btn search-trigger"
          id="open-search-drawer"
          aria-label="Open search drawer (Ctrl + K)"
          aria-controls="search-drawer"
          aria-expanded="false"
        >
          <span class="icon-glyph" aria-hidden="true">&#9711;</span>
          <kbd class="kbd-hint">Ctrl+K</kbd>
        </button>

        <a href="pages/wishlist.html" class="icon-btn" aria-label="Wishlist Saved Grails">
          <span class="icon-glyph" aria-hidden="true">&#10084;</span>
          <span class="counter-badge" id="wishlist-count">3</span>
        </a>

        <button
          type="button"
          class="icon-btn cart-trigger"
          id="open-cart-drawer"
          aria-label="Open shopping bag"
          aria-controls="cart-drawer"
          aria-expanded="false"
        >
          <span class="icon-glyph" aria-hidden="true">&#9635;</span>
          <span class="counter-badge counter-badge--accent" id="cart-count">2</span>
        </button>

        <a href="pages/login.html" class="icon-btn" aria-label="Member Login">
          <span class="icon-glyph" aria-hidden="true">&#9673;</span>
        </a>
      </div>
    </div>
  </header>

  <main id="main-content">

    <!-- =========================================================
         3. 3D FLOATING SNEAKER HERO SECTION
         ========================================================= -->
    <section class="hero" aria-labelledby="hero-title">
      <!-- Particle Background Canvas -->
      <canvas id="hero-particles" class="hero-particles" aria-hidden="true"></canvas>

      <div class="hero-grid container">
        <!-- Left Content Column -->
        <div class="hero-copy">
          <div class="hero-eyebrow">
            <span class="pulse-dot" aria-hidden="true"></span>
            <span>FW26 VAULT &bull; BE YOUR OWN</span>
          </div>

          <h1 id="hero-title" class="hero-title">
            STEP BEYOND<br />
            <span class="hero-title-accent">THE ORDINARY.</span>
          </h1>

          <p class="hero-subtitle">
            Discover exclusive sneakers. Express your identity. Define your own movement.
          </p>

          <div class="hero-ctas">
            <a href="pages/shop.html" class="btn btn-primary">EXPLORE COLLECTION</a>
            <a href="pages/about.html" class="btn btn-glass">DISCOVER STRIDE</a>
          </div>

          <!-- Hero Verification & Live Inventory Stats -->
          <ul class="hero-stats" aria-label="Marketplace trust metrics">
            <li class="hero-stat">
              <span class="hero-stat-value">100%</span>
              <span class="hero-stat-label">Guaranteed Authentic</span>
            </li>
            <li class="hero-stat-divider" aria-hidden="true"></li>
            <li class="hero-stat">
              <span class="hero-stat-value">42,000+</span>
              <span class="hero-stat-label">Verified Pairs</span>
            </li>
            <li class="hero-stat-divider" aria-hidden="true"></li>
            <li class="hero-stat">
              <span class="hero-stat-value">24H</span>
              <span class="hero-stat-label">Express Dispatch</span>
            </li>
          </ul>
        </div>

        <!-- Right 3D Floating Sneaker Stage -->
        <div class="hero-stage" id="hero-stage">
          <!-- Parallax Neon Glow Orb -->
          <div class="hero-glow-orb" aria-hidden="true"></div>
          <div class="hero-stage-ring" aria-hidden="true"></div>

          <!-- 3D Perspective Sneaker Wrapper -->
          <div class="sneaker-3d-wrap">
            <div class="sneaker-3d">
              <img
                src="assets/images/hero-travis-aj1-reverse-mocha.png"
                alt="Travis Scott x Air Jordan 1 Low Reverse Mocha floating in 3D"
                class="hero-sneaker-img"
              />
            </div>
            <div class="sneaker-shadow" aria-hidden="true"></div>
          </div>

          <!-- Floating Glass Stat Badge 1: Condition -->
          <div class="hero-floating-badge hero-floating-badge--condition">
            <span class="badge-icon" aria-hidden="true">&#9670;</span>
            <div class="badge-meta">
              <span class="badge-kicker">LAB GRADE</span>
              <strong class="badge-value">Deadstock (New)</strong>
            </div>
          </div>

          <!-- Floating Glass Stat Badge 2: Live Market Value -->
          <div class="hero-floating-badge hero-floating-badge--price">
            <span class="badge-icon badge-icon--pulse" aria-hidden="true">&#8599;</span>
            <div class="badge-meta">
              <span class="badge-kicker">RESALE INDEX</span>
              <strong class="badge-value">Live: $190 USD</strong>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================
         4. BRAND PILLARS (4 Glass Feature Cards)
         ========================================================= -->
    <section class="section pillars-section" aria-labelledby="pillars-heading">
      <div class="container">
        <header class="section-header">
          <span class="section-eyebrow">THE STRIDE PROTOCOL</span>
          <h2 id="pillars-heading" class="section-title">ENGINEERED FOR ZERO COUNTERFEITS</h2>
        </header>

        <div class="pillars-grid">
          <article class="pillar-card">
            <div class="pillar-icon" aria-hidden="true">01</div>
            <h3 class="pillar-title">8-Point Lab</h3>
            <p class="pillar-desc">
              Stereomicroscopy, UV spectral stitch audit, density check, and tamper-proof RFID NFC sealing.
            </p>
          </article>

          <article class="pillar-card">
            <div class="pillar-icon" aria-hidden="true">02</div>
            <h3 class="pillar-title">Resale Index</h3>
            <p class="pillar-desc">
              Real-time secondary market valuation and transparent historical price tracking on every silhouette.
            </p>
          </article>

          <article class="pillar-card">
            <div class="pillar-icon" aria-hidden="true">03</div>
            <h3 class="pillar-title">Double-Boxed</h3>
            <p class="pillar-desc">
              Every verified pair ships insured via FedEx or DHL Priority inside reinforced double-box protection.
            </p>
          </article>

          <article class="pillar-card">
            <div class="pillar-icon" aria-hidden="true">04</div>
            <h3 class="pillar-title">Instant Payout</h3>
            <p class="pillar-desc">
              Consign with the industry-low 9.5% fee and receive rapid settlement once your pair clears lab audit.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- =========================================================
         5. FEATURED COLLECTION (Curated Drops - 4 Columns)
         ========================================================= -->
    <section class="section featured-section" aria-labelledby="featured-heading">
      <div class="container">
        <header class="section-header section-header--split">
          <div>
            <span class="section-eyebrow">CURATED DROPS</span>
            <h2 id="featured-heading" class="section-title">FEATURED COLLECTION</h2>
          </div>
          <a href="pages/shop.html" class="section-link">VIEW ALL PAIRS &rarr;</a>
        </header>

        <div class="product-grid">
          <!-- Card 1 -->
          <article class="product-card" data-product-id="ts-aj1-reverse-mocha">
            <div class="product-card-top">
              <span class="product-badge product-badge--grail">GRAIL</span>
              <span class="product-badge product-badge--verified">VERIFIED</span>
              <button type="button" class="wishlist-toggle" aria-label="Save to wishlist">&#10084;</button>
            </div>
            <a href="pages/product-detail.html" class="product-media">
              <img src="assets/images/sneaker-reverse-mocha.png" alt="Travis Scott x Air Jordan 1 Low Reverse Mocha" />
            </a>
            <div class="product-info">
              <p class="product-brand">TRAVIS SCOTT &bull; 2022</p>
              <h3 class="product-name">Travis Scott x Air Jordan 1 Low 'Reverse Mocha'</h3>
              <div class="product-meta">
                <span class="product-condition">Deadstock</span>
                <span class="product-sku">DM7866-162</span>
              </div>
              <div class="product-footer">
                <span class="product-price">$190</span>
                <a href="pages/product-detail.html" class="btn-card-cta">DETAILS</a>
              </div>
            </div>
          </article>

          <!-- Card 2 -->
          <article class="product-card" data-product-id="ow-aj1-chicago">
            <div class="product-card-top">
              <span class="product-badge product-badge--grail">GRAIL</span>
              <span class="product-badge product-badge--verified">VERIFIED</span>
              <button type="button" class="wishlist-toggle" aria-label="Save to wishlist">&#10084;</button>
            </div>
            <a href="pages/product-detail.html" class="product-media">
              <img src="assets/images/sneaker-offwhite-chicago.png" alt="Off-White x Air Jordan 1 Chicago" />
            </a>
            <div class="product-info">
              <p class="product-brand">AIR JORDAN &bull; OFF-WHITE</p>
              <h3 class="product-name">Off-White x Air Jordan 1 Retro High 'Chicago'</h3>
              <div class="product-meta">
                <span class="product-condition">Deadstock</span>
                <span class="product-sku">AA3834-101</span>
              </div>
              <div class="product-footer">
                <span class="product-price">$210</span>
                <a href="pages/product-detail.html" class="btn-card-cta">DETAILS</a>
              </div>
            </div>
          </article>

          <!-- Card 3 -->
          <article class="product-card" data-product-id="sb-chunky-dunky">
            <div class="product-card-top">
              <span class="product-badge product-badge--trending">TRENDING</span>
              <span class="product-badge product-badge--verified">VERIFIED</span>
              <button type="button" class="wishlist-toggle" aria-label="Save to wishlist">&#10084;</button>
            </div>
            <a href="pages/product-detail.html" class="product-media">
              <img src="assets/images/sneaker-chunky-dunky.png" alt="Nike SB Dunk Low Chunky Dunky" />
            </a>
            <div class="product-info">
              <p class="product-brand">NIKE &amp; DUNKS &bull; 2020</p>
              <h3 class="product-name">Nike SB Dunk Low x Ben &amp; Jerry's 'Chunky Dunky'</h3>
              <div class="product-meta">
                <span class="product-condition">VNDS 9.5/10</span>
                <span class="product-sku">CU3244-100</span>
              </div>
              <div class="product-footer">
                <span class="product-price">$140</span>
                <a href="pages/product-detail.html" class="btn-card-cta">DETAILS</a>
              </div>
            </div>
          </article>

          <!-- Card 4 -->
          <article class="product-card" data-product-id="aj4-travis-cactus">
            <div class="product-card-top">
              <span class="product-badge product-badge--verified">VERIFIED</span>
              <button type="button" class="wishlist-toggle" aria-label="Save to wishlist">&#10084;</button>
            </div>
            <a href="pages/product-detail.html" class="product-media">
              <img src="assets/images/sneaker-aj4-cactus.png" alt="Air Jordan 4 Cactus Jack" />
            </a>
            <div class="product-info">
              <p class="product-brand">AIR JORDAN &bull; 2018</p>
              <h3 class="product-name">Travis Scott x Air Jordan 4 Retro 'Cactus Jack'</h3>
              <div class="product-meta">
                <span class="product-condition">Deadstock</span>
                <span class="product-sku">308497-406</span>
              </div>
              <div class="product-footer">
                <span class="product-price">$185</span>
                <a href="pages/product-detail.html" class="btn-card-cta">DETAILS</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- =========================================================
         6. SELLER CONSIGNMENT & VIP MOVEMENT BANNER
         ========================================================= -->
    <section class="section consignment-banner-section" aria-labelledby="consignment-heading">
      <div class="container">
        <div class="consignment-banner">
          <div class="consignment-copy">
            <span class="section-eyebrow">CONSIGN YOUR GRAILS &bull; JOIN THE STRIDE MOVEMENT</span>
            <h2 id="consignment-heading" class="consignment-title">
              SELL FASTER WITH A 9.5% LOWEST INDUSTRY FEE
            </h2>
            <p class="consignment-desc">
              List verified Deadstock &amp; VNDS pairs with prepaid insured shipping and live payout transparency—or join VIP Vault Access for $50 off your first drop.
            </p>
            <div class="consignment-actions">
              <a href="pages/sell.html" class="btn btn-primary">START CONSIGNMENT</a>
              <a href="pages/signup.html" class="btn btn-glass">JOIN VIP ACCESS</a>
            </div>
          </div>

          <!-- Live Payout Preview Box (Matches Blueprint Page 10 Math) -->
          <aside class="payout-preview-card" aria-label="Example consignment payout breakdown">
            <div class="payout-header">
              <span>LIVE PAYOUT PREVIEW</span>
              <span class="payout-tag">9.5% FEE</span>
            </div>
            <dl class="payout-rows">
              <div class="payout-row">
                <dt>Gross Listing Price</dt>
                <dd>$190</dd>
              </div>
              <div class="payout-row">
                <dt>STRIDE Fee (9.5%)</dt>
                <dd>-$18</dd>
              </div>
              <div class="payout-row">
                <dt>Lab Processing &amp; Insurance</dt>
                <dd>-$5</dd>
              </div>
              <div class="payout-row payout-row--total">
                <dt>Estimated Net Seller Payout</dt>
                <dd>$167 USD</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>

    <!-- =========================================================
         7. TRENDING GRAILS (Secondary Carousel / Grid)
         ========================================================= -->
    <section class="section trending-section" aria-labelledby="trending-heading">
      <div class="container">
        <header class="section-header section-header--split">
          <div>
            <span class="section-eyebrow">HIGH VELOCITY</span>
            <h2 id="trending-heading" class="section-title">TRENDING GRAILS</h2>
          </div>
          <div class="carousel-controls" aria-label="Trending grails controls">
            <button type="button" class="carousel-btn" id="trending-prev" aria-label="Previous trending grails">&larr;</button>
            <button type="button" class="carousel-btn" id="trending-next" aria-label="Next trending grails">&rarr;</button>
          </div>
        </header>

        <div class="product-grid" id="trending-grid">
          <!-- Card 5 -->
          <article class="product-card" data-product-id="ts-aj1-black-phantom">
            <div class="product-card-top">
              <span class="product-badge product-badge--trending">TRENDING</span>
              <button type="button" class="wishlist-toggle" aria-label="Save to wishlist">&#10084;</button>
            </div>
            <a href="pages/product-detail.html" class="product-media">
              <img src="assets/images/sneaker-black-phantom.png" alt="Travis Scott Air Jordan 1 Low Black Phantom" />
            </a>
            <div class="product-info">
              <p class="product-brand">TRAVIS SCOTT &bull; 2022</p>
              <h3 class="product-name">Travis Scott x Air Jordan 1 Low 'Black Phantom'</h3>
              <div class="product-meta">
                <span class="product-condition">Deadstock</span>
                <span class="product-sku">DM7866-001</span>
              </div>
              <div class="product-footer">
                <span class="product-price">$195</span>
                <a href="pages/product-detail.html" class="btn-card-cta">DETAILS</a>
              </div>
            </div>
          </article>

          <!-- Card 6 -->
          <article class="product-card" data-product-id="yzy-350-zebra">
            <div class="product-card-top">
              <span class="product-badge product-badge--verified">VERIFIED</span>
              <button type="button" class="wishlist-toggle" aria-label="Save to wishlist">&#10084;</button>
            </div>
            <a href="pages/product-detail.html" class="product-media">
              <img src="assets/images/sneaker-yeezy-zebra.png" alt="Yeezy Boost 350 V2 Zebra" />
            </a>
            <div class="product-info">
              <p class="product-brand">YEEZY &bull; 2022</p>
              <h3 class="product-name">adidas Yeezy Boost 350 V2 'Zebra'</h3>
              <div class="product-meta">
                <span class="product-condition">Deadstock</span>
                <span class="product-sku">CP9654</span>
              </div>
              <div class="product-footer">
                <span class="product-price">$175</span>
                <a href="pages/product-detail.html" class="btn-card-cta">DETAILS</a>
              </div>
            </div>
          </article>

          <!-- Card 7 -->
          <article class="product-card" data-product-id="dunk-strangelove">
            <div class="product-card-top">
              <span class="product-badge product-badge--grail">GRAIL</span>
              <button type="button" class="wishlist-toggle" aria-label="Save to wishlist">&#10084;</button>
            </div>
            <a href="pages/product-detail.html" class="product-media">
              <img src="assets/images/sneaker-strangelove.png" alt="Nike SB Dunk Low StrangeLove" />
            </a>
            <div class="product-info">
              <p class="product-brand">NIKE &amp; DUNKS &bull; 2020</p>
              <h3 class="product-name">Nike SB Dunk Low x StrangeLove 'Valentine's Day'</h3>
              <div class="product-meta">
                <span class="product-condition">VNDS 9.5/10</span>
                <span class="product-sku">CT2552-800</span>
              </div>
              <div class="product-footer">
                <span class="product-price">$230</span>
                <a href="pages/product-detail.html" class="btn-card-cta">DETAILS</a>
              </div>
            </div>
          </article>

          <!-- Card 8 -->
          <article class="product-card" data-product-id="aj1-lost-and-found">
            <div class="product-card-top">
              <span class="product-badge product-badge--verified">VERIFIED</span>
              <button type="button" class="wishlist-toggle" aria-label="Save to wishlist">&#10084;</button>
            </div>
            <a href="pages/product-detail.html" class="product-media">
              <img src="assets/images/sneaker-lost-found.png" alt="Air Jordan 1 High Lost and Found" />
            </a>
            <div class="product-info">
              <p class="product-brand">AIR JORDAN &bull; 2022</p>
              <h3 class="product-name">Air Jordan 1 Retro High OG 'Lost &amp; Found'</h3>
              <div class="product-meta">
                <span class="product-condition">Deadstock</span>
                <span class="product-sku">DZ5485-612</span>
              </div>
              <div class="product-footer">
                <span class="product-price">$205</span>
                <a href="pages/product-detail.html" class="btn-card-cta">DETAILS</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- =========================================================
         8. NEWSLETTER SIGNUP
         ========================================================= -->
    <section class="section newsletter-section" aria-labelledby="newsletter-heading">
      <div class="container">
        <div class="newsletter-box">
          <div class="newsletter-copy">
            <span class="section-eyebrow">EARLY VAULT ACCESS</span>
            <h2 id="newsletter-heading" class="newsletter-title">GET $50 OFF YOUR FIRST DROP</h2>
            <p class="newsletter-desc">
              Receive encrypted vault drop alerts, weekly Resale Index reports, and priority restock invites.
            </p>
          </div>

          <form class="newsletter-form" id="newsletter-form" novalidate>
            <label for="newsletter-email" class="sr-only">Email Address</label>
            <input
              type="email"
              id="newsletter-email"
              name="email"
              class="newsletter-input"
              placeholder="collector@stride-marketplace.com"
              required
            />
            <button type="submit" class="btn btn-primary">JOIN VAULT</button>
          </form>
        </div>
      </div>
    </section>

  </main>

  <!-- =========================================================
       9. GLOBAL FOOTER (4 Directory Columns + Global Hubs)
       ========================================================= -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="index.html" class="brand-logo" aria-label="STRIDE Home">
            <svg class="brand-mark" width="34" height="24" viewBox="0 0 34 24" fill="none" aria-hidden="true">
              <polygon points="0,24 10,2 20,24" fill="#FF5A1F" />
              <polygon points="11,24 19,8 27,24" fill="#FF8C42" />
              <polygon points="21,24 27.5,12 34,24" fill="#FF5A1F" />
            </svg>
            <span class="brand-wordmark">STRIDE</span>
          </a>
          <p class="footer-tagline">Be Your Own. Eliminating counterfeit culture through physical lab science.</p>
          <p class="footer-hubs">
            <strong>Global Hubs:</strong> Tokyo &bull; New York &bull; London &bull; Paris
          </p>
        </div>

        <div class="footer-columns">
          <div class="footer-col">
            <h3 class="footer-heading">Marketplace</h3>
            <ul>
              <li><a href="pages/shop.html">Sneaker Catalogue</a></li>
              <li><a href="pages/shop.html?filter=collections">Curated Drops</a></li>
              <li><a href="pages/wishlist.html">Saved Grails</a></li>
              <li><a href="pages/cart.html">Shopping Bag</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h3 class="footer-heading">Services</h3>
            <ul>
              <li><a href="pages/sell.html">Consign Sneakers</a></li>
              <li><a href="pages/track-order.html">Live Shipment Tracker</a></li>
              <li><a href="pages/orders.html">Order Ledger</a></li>
              <li><a href="pages/faq.html">Buyer Shield FAQ</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h3 class="footer-heading">Company</h3>
            <ul>
              <li><a href="pages/about.html">8-Point Verification Lab</a></li>
              <li><a href="pages/contact.html">VIP Concierge</a></li>
              <li><a href="pages/login.html">Member Login</a></li>
              <li><a href="pages/signup.html">Create Identity</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h3 class="footer-heading">Social</h3>
            <ul>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#twitter">Twitter / X</a></li>
              <li><a href="#discord">Discord Vault</a></li>
              <li><a href="mailto:concierge@stride-marketplace.com">Concierge Email</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 STRIDE Marketplace Inc.</p>
        <p class="footer-meta">8-POINT PHYSICAL INSPECTION &bull; 256-BIT ENCRYPTED</p>
      </div>
    </div>
  </footer>

  <!-- =========================================================
       10. SLIDE-OUT SEARCH DRAWER
       ========================================================= -->
  <div class="drawer-backdrop" id="drawer-backdrop" hidden></div>

  <aside
    class="slide-drawer slide-drawer--top-right"
    id="search-drawer"
    role="dialog"
    aria-modal="true"
    aria-labelledby="search-drawer-title"
    aria-hidden="true"
  >
    <div class="drawer-header">
      <div>
        <span class="drawer-eyebrow">VAULT SEARCH</span>
        <h2 id="search-drawer-title" class="drawer-title">FIND YOUR GRAIL</h2>
      </div>
      <button type="button" class="drawer-close" data-close-drawer="search-drawer" aria-label="Close search drawer">
        &times;
      </button>
    </div>

    <div class="drawer-body">
      <div class="search-input-wrap">
        <input
          type="search"
          id="drawer-search-input"
          class="drawer-search-input"
          placeholder="Search by model, brand, or SKU (e.g. DM7866-162)..."
          autocomplete="off"
        />
      </div>

      <div class="search-quick-tags" aria-label="Quick brand filters">
        <a href="pages/shop.html?brand=air-jordan" class="chip">Air Jordan</a>
        <a href="pages/shop.html?brand=nike-dunks" class="chip">Nike &amp; Dunks</a>
        <a href="pages/shop.html?brand=travis-scott" class="chip">Travis Scott</a>
        <a href="pages/shop.html?brand=yeezy" class="chip">Yeezy</a>
      </div>

      <div class="search-results" id="drawer-search-results">
        <p class="search-section-label">TRENDING QUERIES</p>
        <a href="pages/product-detail.html" class="search-result-item">
          <img src="assets/images/sneaker-reverse-mocha.png" alt="" />
          <div>
            <strong>Travis Scott x Air Jordan 1 Low 'Reverse Mocha'</strong>
            <span>Deadstock &bull; $190 USD</span>
          </div>
        </a>
        <a href="pages/product-detail.html" class="search-result-item">
          <img src="assets/images/sneaker-chunky-dunky.png" alt="" />
          <div>
            <strong>Nike SB Dunk Low 'Chunky Dunky'</strong>
            <span>VNDS 9.5/10 &bull; $140 USD</span>
          </div>
        </a>
      </div>
    </div>
  </aside>

  <!-- =========================================================
       11. SLIDE-OUT CART / SHOPPING BAG DRAWER
       ========================================================= -->
  <aside
    class="slide-drawer"
    id="cart-drawer"
    role="dialog"
    aria-modal="true"
    aria-labelledby="cart-drawer-title"
    aria-hidden="true"
  >
    <div class="drawer-header">
      <div>
        <span class="drawer-eyebrow">YOUR BAG (2 ITEMS)</span>
        <h2 id="cart-drawer-title" class="drawer-title">SHOPPING BAG</h2>
      </div>
      <button type="button" class="drawer-close" data-close-drawer="cart-drawer" aria-label="Close shopping bag">
        &times;
      </button>
    </div>

    <!-- Free Shipping Progress Meter ($200 threshold per Blueprint Page 14) -->
    <div class="shipping-meter">
      <p class="shipping-meter-text">
        <span class="accent">&#9889;</span> You qualify for <strong>FREE Priority Express Shipping</strong>!
      </p>
      <div class="shipping-meter-track" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        <div class="shipping-meter-fill" style="width: 100%;"></div>
      </div>
    </div>

    <div class="drawer-body cart-items">
      <div class="cart-item">
        <img src="assets/images/sneaker-reverse-mocha.png" alt="Travis Scott Reverse Mocha" class="cart-item-img" />
        <div class="cart-item-details">
          <h3 class="cart-item-title">Travis Scott Reverse Mocha</h3>
          <p class="cart-item-meta">Size: US 10 &bull; Deadstock</p>
          <div class="cart-item-controls">
            <div class="qty-stepper">
              <button type="button" aria-label="Decrease quantity">-</button>
              <span>1</span>
              <button type="button" aria-label="Increase quantity">+</button>
            </div>
            <span class="cart-item-price">$190</span>
          </div>
        </div>
        <button type="button" class="cart-item-remove" aria-label="Remove item">&times;</button>
      </div>

      <div class="cart-item">
        <img src="assets/images/sneaker-chunky-dunky.png" alt="Nike SB Chunky Dunky" class="cart-item-img" />
        <div class="cart-item-details">
          <h3 class="cart-item-title">Nike SB Chunky Dunky</h3>
          <p class="cart-item-meta">Size: US 9.5 &bull; VNDS</p>
          <div class="cart-item-controls">
            <div class="qty-stepper">
              <button type="button" aria-label="Decrease quantity">-</button>
              <span>1</span>
              <button type="button" aria-label="Increase quantity">+</button>
            </div>
            <span class="cart-item-price">$140</span>
          </div>
        </div>
        <button type="button" class="cart-item-remove" aria-label="Remove item">&times;</button>
      </div>
    </div>

    <div class="drawer-footer">
      <div class="cart-summary-row">
        <span>8-Point Lab Audit</span>
        <span class="status-included">INCLUDED</span>
      </div>
      <div class="cart-summary-row cart-summary-row--total">
        <span>Subtotal</span>
        <span>$330 USD</span>
      </div>
      <div class="drawer-cta-group">
        <a href="pages/checkout.html" class="btn btn-primary btn-block">PROCEED TO CHECKOUT &rarr;</a>
        <a href="pages/cart.html" class="btn btn-glass btn-block">REVIEW FULL BAG</a>
      </div>
    </div>
  </aside>

</body>
</html>
```

---

### 2. Hero Section & Base Token CSS (`css/styles.css`)

Includes the Dark Luxury design tokens (`#08090D`, `#11131A`, `#171A22`, `#292D38`, `#FF5A1F`, `#FF8C42`), particle canvas positioning, parallax glow orb animation, floating glass stat badges, and 3D perspective stage.

```css
/* =========================================================
   STRIDE DESIGN TOKENS (Dark Luxury — Blueprint Page 02 & 19)
   ========================================================= */
:root {
  --bg-primary: #08090D;
  --bg-panel: #11131A;
  --bg-card: #171A22;
  --border-subtle: #292D38;
  --accent-orange: #FF5A1F;
  --accent-glow: #FF8C42;
  --text-secondary: #A0A4AE;
  --text-white: #FFFFFF;

  --font-heading: 'Outfit', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'Space Mono', monospace;

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-pill: 999px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-white);
  font-family: var(--font-body);
  line-height: 1.5;
  overflow-x: hidden;
}

.container {
  width: min(1280px, 92%);
  margin-inline: auto;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
}

/* =========================================================
   HERO SECTION — 3D STAGE, PARTICLES, GLOW ORB & BADGES
   ========================================================= */
.hero {
  position: relative;
  min-height: clamp(640px, 88vh, 860px);
  display: flex;
  align-items: center;
  padding-block: clamp(3.5rem, 7vw, 6rem);
  overflow: hidden;
  background:
    radial-gradient(circle at 78% 38%, rgba(255, 90, 31, 0.14), transparent 52%),
    radial-gradient(circle at 15% 80%, rgba(255, 140, 66, 0.06), transparent 45%),
    var(--bg-primary);
  border-bottom: 1px solid var(--border-subtle);
}

/* Particle Canvas Positioning */
.hero-particles {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: none;
  z-index: 0;
  opacity: 0.75;
}

.hero-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 4.5rem);
}

/* Left Copy Column */
.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 0.95rem;
  margin-bottom: 1.5rem;
  background: rgba(23, 26, 34, 0.75);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-pill);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  color: var(--accent-glow);
  backdrop-filter: blur(10px);
}

.pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--accent-orange);
  box-shadow: 0 0 12px var(--accent-orange);
  animation: pulseDot 2s ease-in-out infinite;
}

.hero-title {
  font-family: var(--font-heading);
  font-weight: 900;
  font-size: clamp(2.85rem, 5.6vw, 5rem);
  line-height: 0.98;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
}

.hero-title-accent {
  background: linear-gradient(95deg, var(--text-white) 10%, var(--accent-glow) 60%, var(--accent-orange) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-subtitle {
  max-width: 52ch;
  color: var(--text-secondary);
  font-size: clamp(1rem, 1.3vw, 1.125rem);
  margin-bottom: 2rem;
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2.75rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.95rem 1.75rem;
  border-radius: var(--radius-sm);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent-orange), var(--accent-glow));
  color: var(--text-white);
  border: 1px solid transparent;
  box-shadow: 0 10px 30px rgba(255, 90, 31, 0.35);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 36px rgba(255, 90, 31, 0.52);
}

.btn-glass {
  background: rgba(23, 26, 34, 0.65);
  color: var(--text-white);
  border: 1px solid var(--border-subtle);
  backdrop-filter: blur(12px);
}

.btn-glass:hover {
  border-color: var(--accent-orange);
  transform: translateY(-2px);
}

/* Hero Verification Stats Row */
.hero-stats {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-subtle);
}

.hero-stat {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.hero-stat-value {
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--text-white);
}

.hero-stat-label {
  font-size: 0.78rem;
  color: var(--text-secondary);
  letter-spacing: 0.04em;
}

.hero-stat-divider {
  width: 1px;
  height: 28px;
  background-color: var(--border-subtle);
}

/* =========================================================
   3D PERSPECTIVE SNEAKER STAGE
   ========================================================= */
.hero-stage {
  position: relative;
  min-height: clamp(360px, 46vw, 540px);
  display: grid;
  place-items: center;
  perspective: 1200px;
  perspective-origin: 50% 45%;
  transform-style: preserve-3d;
}

/* Parallax Glow Orb */
.hero-glow-orb {
  position: absolute;
  width: clamp(280px, 34vw, 430px);
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(
    circle at 38% 35%,
    rgba(255, 140, 66, 0.78) 0%,
    rgba(255, 90, 31, 0.45) 38%,
    rgba(255, 90, 31, 0.08) 68%,
    transparent 76%
  );
  filter: blur(28px);
  transform: translateZ(-90px);
  pointer-events: none;
  z-index: 0;
  animation: glowOrbPulse 6.5s ease-in-out infinite;
}

.hero-stage-ring {
  position: absolute;
  width: clamp(310px, 38vw, 470px);
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px dashed rgba(255, 90, 31, 0.28);
  transform: translateZ(-50px) rotateX(68deg);
  pointer-events: none;
  z-index: 1;
  animation: ringOrbit 24s linear infinite;
}

/* 3D Sneaker Container */
.sneaker-3d-wrap {
  position: relative;
  z-index: 2;
  width: min(100%, 520px);
  transform-style: preserve-3d;
}

.sneaker-3d {
  transform-style: preserve-3d;
  will-change: transform;
  animation: sneakerFloat3D 5.5s ease-in-out infinite;
}

.hero-sneaker-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  transform: translateZ(45px) rotate(-14deg);
  filter: drop-shadow(0 28px 36px rgba(0, 0, 0, 0.72))
          drop-shadow(0 0 28px rgba(255, 90, 31, 0.22));
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.hero-stage:hover .hero-sneaker-img {
  transform: translateZ(75px) rotate(-10deg) scale(1.03);
}

.sneaker-shadow {
  width: 68%;
  height: 26px;
  margin: 0.5rem auto 0;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.75) 0%, transparent 72%);
  filter: blur(8px);
  animation: shadowBreathe 5.5s ease-in-out infinite;
}

/* =========================================================
   FLOATING STAT BADGES (3D Layered Glassmorphism)
   ========================================================= */
.hero-floating-badge {
  position: absolute;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.05rem;
  background: rgba(17, 19, 26, 0.82);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  backdrop-filter: blur(14px);
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.48),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  transform-style: preserve-3d;
  will-change: transform;
}

.hero-floating-badge--condition {
  top: 14%;
  right: 2%;
  transform: translateZ(70px);
  animation: badgeFloatTop 4.8s ease-in-out infinite;
}

.hero-floating-badge--price {
  bottom: 14%;
  left: 0%;
  border-color: rgba(255, 90, 31, 0.45);
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.5),
    0 0 24px rgba(255, 90, 31, 0.16);
  transform: translateZ(90px);
  animation: badgeFloatBottom 5.2s ease-in-out infinite;
}

.badge-icon {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: var(--radius-sm);
  background: rgba(255, 90, 31, 0.14);
  border: 1px solid rgba(255, 90, 31, 0.35);
  color: var(--accent-orange);
  font-size: 0.95rem;
}

.badge-icon--pulse {
  animation: pulseDot 2.2s ease-in-out infinite;
}

.badge-meta {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.badge-kicker {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
}

.badge-value {
  font-family: var(--font-mono);
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--text-white);
}

/* =========================================================
   KEYFRAME ANIMATIONS
   ========================================================= */
@keyframes pulseDot {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.14);
  }
}

@keyframes glowOrbPulse {
  0%, 100% {
    transform: translateZ(-90px) translateY(0) scale(1);
    opacity: 0.85;
  }
  50% {
    transform: translateZ(-90px) translateY(-14px) scale(1.08);
    opacity: 1;
  }
}

@keyframes ringOrbit {
  from {
    transform: translateZ(-50px) rotateX(68deg) rotateZ(0deg);
  }
  to {
    transform: translateZ(-50px) rotateX(68deg) rotateZ(360deg);
  }
}

@keyframes sneakerFloat3D {
  0%, 100% {
    transform: translateY(0px) rotateX(4deg) rotateY(-8deg);
  }
  50% {
    transform: translateY(-18px) rotateX(-3deg) rotateY(7deg);
  }
}

@keyframes shadowBreathe {
  0%, 100% {
    transform: scaleX(1);
    opacity: 0.72;
  }
  50% {
    transform: scaleX(0.84);
    opacity: 0.42;
  }
}

@keyframes badgeFloatTop {
  0%, 100% {
    transform: translateZ(70px) translateY(0);
  }
  50% {
    transform: translateZ(70px) translateY(-9px);
  }
}

@keyframes badgeFloatBottom {
  0%, 100% {
    transform: translateZ(90px) translateY(0);
  }
  50% {
    transform: translateZ(90px) translateY(9px);
  }
}

/* =========================================================
   RESPONSIVE BREAKPOINTS
   ========================================================= */
@media (max-width: 960px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-subtitle {
    margin-inline: auto;
  }

  .hero-ctas,
  .hero-stats {
    justify-content: center;
  }

  .hero-floating-badge--condition {
    top: 6%;
    right: 4%;
  }

  .hero-floating-badge--price {
    bottom: 6%;
    left: 4%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .pulse-dot,
  .hero-glow-orb,
  .hero-stage-ring,
  .sneaker-3d,
  .sneaker-shadow,
  .hero-floating-badge,
  .badge-icon--pulse {
    animation: none;
  }
}
```

### Alignment with `baseline.pdf`
- **Shared UI Kit (Page 19):** Top announcement bar (`GLOBAL VAULT DROP`, `100% VERIFIED AUTHENTIC`, `FREE SHIPPING OVER $200`), sticky header with three-triangle STRIDE logo, `Home / Shop / Collections (HOT) / Size Guide / Sell / About` links, `REGION: US USD ($)` selector, utility icons (`Ctrl+K` Search, Wishlist, Shopping Bag counter, Login), and 4-column footer (`Marketplace`, `Services`, `Company`, `Social` + `Tokyo, New York, London, Paris` hubs + `© 2026 STRIDE Marketplace Inc.`).
- **Home Page Wireframe (Page 04):** Hero stage with `FW26 VAULT`, `STEP BEYOND THE ORDINARY.`, dual CTAs, `100% Guaranteed | 42,000+ Pairs | 24H Dispatch`, 3D sneaker with `Deadstock (New)` and `Live: $190 USD` badges, 4 Brand Pillars (`8-Point Lab`, `Resale Index`, `Double-Boxed`, `Instant Payout`), Featured Collection, Seller Consignment / VIP banner (incorporating the `9.5%` fee breakdown from Page 10), Trending Grails, Newsletter signup, and slide-out Search/Cart drawers (with the `$200` free shipping meter from Page 14).

If you'd like me to write these files into a specific project folder or add the remaining CSS/JS (particle canvas, 3D mouse parallax, and drawer/cart interactivity), let me know your target directory.

---

## User (2026-11-28T19:46:18Z)

Write a renderHomeProducts() function that populates #featured-products-grid and #trending-products-grid from STRIDE_DATA.products, formats prices with STRIDE_APP.formatPrice(), handles wishlist toggle states and quick-view triggers, re-runs on stride:currencychange, and initializes card tilt effects

## Assistant (2026-11-28T19:48:01Z)

Checking the repository status in `SE_D_Group_4_Stride_Sneakers`—waiting for the command to complete.

## Assistant (2026-11-28T19:48:06Z)

Here is a `renderHomeProducts()` implementation that populates `#featured-products-grid` and `#trending-products-grid` from `STRIDE_DATA.products`, formats prices with `STRIDE_APP.formatPrice()`, syncs wishlist toggle states and quick-view triggers, re-runs on `stride:currencychange`, and initializes 3D card tilt effects:

```javascript
/**
 * Populates #featured-products-grid and #trending-products-grid from STRIDE_DATA.products,
 * formats prices via STRIDE_APP.formatPrice(), wires wishlist & quick-view actions,
 * and initializes 3D card tilt effects.
 */
function renderHomeProducts() {
  const featuredGrid = document.getElementById('featured-products-grid');
  const trendingGrid = document.getElementById('trending-products-grid');
  const hasApp = typeof STRIDE_APP !== 'undefined';
  const hasData = typeof STRIDE_DATA !== 'undefined' && Array.isArray(STRIDE_DATA.products);
  const hasInteractions = typeof STRIDE_INTERACTIONS !== 'undefined';

  const formatPrice = (usd) =>
    hasApp && typeof STRIDE_APP.formatPrice === 'function'
      ? STRIDE_APP.formatPrice(usd)
      : `$${usd}`;

  const isWishlisted = (id) =>
    hasApp && typeof STRIDE_APP.isWishlisted === 'function'
      ? STRIDE_APP.isWishlisted(id)
      : false;

  // Update hero live market value badge using data-price-usd (fallback: 190)
  const heroPriceEl = document.querySelector('.hero-price-val');
  if (heroPriceEl) {
    const baseUsd = Number(heroPriceEl.dataset.priceUsd) || 190;
    heroPriceEl.textContent = formatPrice(baseUsd);
  }

  function createProductCardHTML(product) {
    const isFav = isWishlisted(product.id);
    const badgeClass =
      product.badge === 'GRAIL'
        ? 'badge-grail'
        : product.condition === 'Deadstock'
          ? 'badge-deadstock'
          : 'badge-vnds';

    return `
      <div class="product-card">
        <div class="product-card-thumb">
          <div class="product-card-badges">
            <span class="badge ${badgeClass}">${product.badge || product.condition}</span>
            <span class="badge badge-verified">&#128737;&#65039; VERIFIED</span>
          </div>

          <button
            type="button"
            class="product-card-fav ${isFav ? 'active' : ''}"
            data-wishlist-id="${product.id}"
            aria-label="Save ${product.name} to Wishlist"
            aria-pressed="${isFav}"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>

          <img src="${product.image}" alt="${product.name}" class="product-card-img">

          <button
            type="button"
            class="product-card-quickview"
            data-quickview-id="${product.id}"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            QUICK VIEW
          </button>
        </div>

        <div class="product-card-body">
          <div class="product-card-brand">${product.brand} &bull; ${product.releaseYear}</div>
          <h3 class="product-card-title">${product.name}</h3>
          <div class="product-card-meta">
            <div class="product-card-price">
              <span class="price-label">Current Resale</span>
              <span class="price-val" data-price-usd="${product.price}">${formatPrice(product.price)}</span>
            </div>
            <a href="pages/product-detail.html?id=${product.id}" class="btn btn-secondary product-card-cta">
              DETAILS
            </a>
          </div>
        </div>
      </div>
    `;
  }

  function bindGridInteractions(gridEl) {
    if (!gridEl || gridEl.dataset.boundInteractions === 'true') return;
    gridEl.dataset.boundInteractions = 'true';

    gridEl.addEventListener('click', (event) => {
      const favBtn = event.target.closest('[data-wishlist-id]');
      if (favBtn) {
        const productId = favBtn.dataset.wishlistId;
        if (hasApp && typeof STRIDE_APP.toggleWishlist === 'function') {
          STRIDE_APP.toggleWishlist(productId);
        }
        const nowFav = isWishlisted(productId);
        // Sync all matching wishlist buttons across Featured and Trending grids
        document.querySelectorAll(`[data-wishlist-id="${productId}"]`).forEach((btn) => {
          btn.classList.toggle('active', nowFav);
          btn.setAttribute('aria-pressed', String(nowFav));
          const svg = btn.querySelector('svg');
          if (svg) svg.setAttribute('fill', nowFav ? 'currentColor' : 'none');
        });
        return;
      }

      const quickViewBtn = event.target.closest('[data-quickview-id]');
      if (quickViewBtn && hasInteractions && typeof STRIDE_INTERACTIONS.openQuickView === 'function') {
        STRIDE_INTERACTIONS.openQuickView(quickViewBtn.dataset.quickviewId);
      }
    });
  }

  if (hasData) {
    if (featuredGrid) {
      const featured = STRIDE_DATA.products.filter((p) => p.isFeatured).slice(0, 4);
      featuredGrid.innerHTML = featured.map(createProductCardHTML).join('');
      bindGridInteractions(featuredGrid);
    }

    if (trendingGrid) {
      const trending = STRIDE_DATA.products.filter((p) => p.isTrending).slice(0, 4);
      trendingGrid.innerHTML = trending.map(createProductCardHTML).join('');
      bindGridInteractions(trendingGrid);
    }
  }

  if (hasInteractions && typeof STRIDE_INTERACTIONS.initCardTilt === 'function') {
    STRIDE_INTERACTIONS.initCardTilt();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderHomeProducts();
  window.addEventListener('stride:currencychange', renderHomeProducts);
});
```

Note: I also found an existing `renderHomeProducts()` implementation in [shan1.js](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/shan1.js) and inlined in [index.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/index.html#L441-L511). I left those files untouched; let me know if you want me to update them with the delegated event handling and defensive checks above.

---

## User (2026-11-28T19:48:59Z)

Create about.html for STRIDE using the shared header, footer, search modal, and cart drawer. Include a brand manifesto banner, a two-column origin/mission section with stats (42K+ authenticated pairs, 0.00% counterfeit escape rate, $18M+ resale volume) and an authentication lab callout card, a 4-pillar grid, and global hub cards for Tokyo, New York, London, and Paris.

## Assistant (2026-11-28T19:49:10Z)

Here is `about.html` (structured for `pages/about.html` with `../` relative asset/script paths matching `index.html` and [baseline.pdf](file:///C:/Users/Lenovo/Downloads/baseline.pdf)):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About STRIDE — Brand Heritage, Vision &amp; Authenticity Lab</title>
  <meta name="description" content="Discover the story of STRIDE: our mission to define the future of authentic sneaker resale, our global design hubs, and our proprietary 8-point verification lab.">
  <link rel="icon" type="image/svg+xml" href="../assets/logo-mark.svg">
  <link rel="stylesheet" href="../css/stride.css">
</head>
<body>

  <!-- Top Announcement Bar (Shared UI Kit) -->
  <div class="announcement-bar">
    <span>⚡ <strong>GLOBAL VAULT DROP:</strong> Travis Scott Reverse Mocha &amp; Off-White Chicago restocked.</span>
    <span>🛡️ <strong>100% VERIFIED AUTHENTIC:</strong> 8-Point Physical Lab Inspection.</span>
    <span>✈️ <strong>FREE EXPRESS INSURED SHIPPING</strong> on orders over $200 with code <strong>STRIDE10</strong></span>
  </div>

  <!-- Main Navigation Header (Shared UI Kit) -->
  <header class="stride-header">
    <div class="container">
      <div class="nav-inner">
        <a href="../index.html" class="brand-logo" aria-label="STRIDE Home">
          <img src="../assets/logo.svg" alt="STRIDE — Be Your Own" width="160" height="40">
        </a>

        <nav class="nav-links" aria-label="Primary Navigation">
          <a href="../index.html" class="nav-link">Home</a>
          <a href="shop.html" class="nav-link">Shop</a>
          <a href="shop.html?filter=grail" class="nav-link">Collections <span class="badge-hot">HOT</span></a>
          <a href="size-guide.html" class="nav-link">Size Guide</a>
          <a href="sell.html" class="nav-link">Sell Your Sneakers</a>
          <a href="about.html" class="nav-link active">About</a>
        </nav>

        <div class="nav-actions">
          <button class="icon-btn trigger-search" aria-label="Search Sneakers (Ctrl+K)" title="Search (Ctrl + K)">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>

          <a href="wishlist.html" class="icon-btn" aria-label="Wishlist">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <span class="badge-count wishlist-badge-count" style="display:none;">0</span>
          </a>

          <button class="icon-btn trigger-cart" aria-label="Shopping Bag">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span class="badge-count cart-badge-count" style="display:none;">0</span>
          </button>

          <a href="login.html" class="icon-btn" aria-label="My Account" title="User Account">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </a>

          <button class="icon-btn mobile-menu-toggle" aria-label="Open Navigation Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Navigation Drawer -->
  <div class="mobile-nav-overlay"></div>
  <aside class="mobile-nav">
    <div>
      <div class="mobile-nav-header">
        <img src="../assets/logo.svg" alt="STRIDE" width="130">
        <button class="mobile-nav-close" style="color: #A0A4AE; font-size: 1.4rem;">✕</button>
      </div>
      <div class="mobile-nav-links">
        <a href="../index.html" class="mobile-nav-link">Home</a>
        <a href="shop.html" class="mobile-nav-link">Shop All Grails</a>
        <a href="size-guide.html" class="mobile-nav-link">Size Guide &amp; Calculator</a>
        <a href="sell.html" class="mobile-nav-link">Sell Your Sneakers</a>
        <a href="about.html" class="mobile-nav-link active">About STRIDE</a>
        <a href="faq.html" class="mobile-nav-link">Authentication &amp; FAQ</a>
        <a href="contact.html" class="mobile-nav-link">VIP Concierge</a>
        <a href="orders.html" class="mobile-nav-link">Order History</a>
        <a href="track-order.html" class="mobile-nav-link">Live Shipment Tracking</a>
      </div>
    </div>
    <div style="border-top: 1px solid #292D38; padding-top: 1.5rem;">
      <a href="login.html" class="btn btn-primary btn-block">Sign In / Register</a>
    </div>
  </aside>

  <main>

    <!-- ===================================================================
         1. BRAND MANIFESTO BANNER
         =================================================================== -->
    <section class="section" style="padding: 4.5rem 0 3rem; background: radial-gradient(circle at 50% 0%, rgba(255, 90, 31, 0.12) 0%, transparent 60%);">
      <div class="container text-center">
        <div class="section-tag"><span class="dot"></span> BRAND MANIFESTO</div>
        <h1 class="section-title">THE STRIDE <span class="text-neon">STORY</span></h1>
        <p class="section-subtitle" style="max-width: 680px; margin: 0 auto;">
          We exist to bridge futuristic digital marketplace technology with physical street culture. Empowering every collector to <em>Be Your Own</em>.
        </p>
      </div>
    </section>

    <!-- ===================================================================
         2. TWO-COLUMN ORIGIN / MISSION SECTION WITH STATS & LAB CALLOUT
         =================================================================== -->
    <section class="section" style="padding-top: 2rem;">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 4rem; align-items: center;">
          <div>
            <span class="badge badge-grail" style="margin-bottom: 1rem;">OUR ORIGIN &amp; PURPOSE</span>
            <h2 style="font-size: 2.4rem; font-weight: 900; margin-bottom: 1.5rem; text-transform: uppercase;">
              BORN FROM OBSESSION. <br>
              <span class="text-neon">DRIVEN BY TRUST.</span>
            </h2>
            <p style="margin-bottom: 1.25rem; color: #A0A4AE; line-height: 1.7;">
              The sneaker resale market was historically plagued by rampant counterfeits, exorbitant hidden platform fees, and opaque authentication processes. STRIDE was founded in 2024 to eliminate counterfeit culture through radical transparency.
            </p>
            <p style="margin-bottom: 2rem; color: #A0A4AE; line-height: 1.7;">
              Headquartered across <strong>Tokyo, New York, London, and Paris</strong>, our specialized authentication hubs combine forensic material science with an intuitive digital marketplace. We don't just sell shoes; we preserve cultural artifacts.
            </p>

            <!-- Proof Metrics -->
            <div style="display: flex; flex-wrap: wrap; gap: 2rem; border-top: 1px solid #292D38; padding-top: 1.5rem;">
              <div>
                <div style="font-family: var(--font-display); font-size: 1.8rem; font-weight: 900; color: #FFFFFF;">42K+</div>
                <div style="font-size: 0.78rem; font-family: var(--font-mono); color: #FF5A1F;">AUTHENTICATED PAIRS</div>
              </div>
              <div>
                <div style="font-family: var(--font-display); font-size: 1.8rem; font-weight: 900; color: #FFFFFF;">0.00%</div>
                <div style="font-size: 0.78rem; font-family: var(--font-mono); color: #34D399;">COUNTERFEIT ESCAPE RATE</div>
              </div>
              <div>
                <div style="font-family: var(--font-display); font-size: 1.8rem; font-weight: 900; color: #FFFFFF;">$18M+</div>
                <div style="font-size: 0.78rem; font-family: var(--font-mono); color: #FFFFFF;">RESALE VOLUME</div>
              </div>
            </div>
          </div>

          <!-- Authentication Lab Visual + Floating Callout Card -->
          <div style="position: relative;">
            <div style="border-radius: var(--radius-xl); overflow: hidden; border: 1px solid #292D38; box-shadow: var(--shadow-card);">
              <img
                src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1000&q=80"
                alt="STRIDE 8-Point Physical Authentication Lab"
                style="width: 100%; height: 460px; object-fit: cover; display: block;"
              >
            </div>
            <div style="position: absolute; bottom: -20px; left: -20px; background: #171A22; border: 1px solid var(--border-neon); border-radius: var(--radius-lg); padding: 1.25rem 1.75rem; box-shadow: var(--shadow-neon);">
              <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #FF5A1F;">STRIDE AUTHENTICITY SEAL</div>
              <div style="font-weight: 800; font-size: 1.05rem; color: #FFFFFF;">Physical 8-Point Inspection Lab</div>
              <div style="font-size: 0.78rem; color: #A0A4AE; margin-top: 0.25rem;">Stereomicroscopy &bull; UV Spectral &bull; RFID NFC Seal</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         3. FOUR CORE BRAND PILLARS GRID
         =================================================================== -->
    <section class="section" style="background: #0E1017; border-top: 1px solid #292D38; border-bottom: 1px solid #292D38;">
      <div class="container">
        <div class="section-title-wrap">
          <div class="section-tag"><span class="dot"></span> STRIDE PHILOSOPHY</div>
          <h2 class="section-title">OUR FOUR <span class="text-neon">CORE PILLARS</span></h2>
          <p class="section-subtitle">How we deliver the definitive dark-luxury sneaker resale experience.</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2rem;">
          <article class="glass-card" style="padding: 2rem;">
            <div style="font-family: var(--font-mono); font-size: 1.8rem; font-weight: 900; color: #FF5A1F; margin-bottom: 1rem;">01</div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem;">Uncompromising Authenticity</h3>
            <p style="color: #A0A4AE;">Every single sneaker passes through our physical laboratories. We verify thread tension, UV fluorescence, insole strobel stitching, and RFID credentials.</p>
          </article>

          <article class="glass-card" style="padding: 2rem;">
            <div style="font-family: var(--font-mono); font-size: 1.8rem; font-weight: 900; color: #FF5A1F; margin-bottom: 1rem;">02</div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem;">Be Your Own Movement</h3>
            <p style="color: #A0A4AE;">Sneakers are not mere apparel; they are kinetic self-expression. We curate silhouettes that celebrate individuality, boldness, and cultural heritage.</p>
          </article>

          <article class="glass-card" style="padding: 2rem;">
            <div style="font-family: var(--font-mono); font-size: 1.8rem; font-weight: 900; color: #FF5A1F; margin-bottom: 1rem;">03</div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem;">Fair Consignment Liquidity</h3>
            <p style="color: #A0A4AE;">We respect sellers. With a clean flat 9.5% commission and automated 24-hour payouts, we offer the fastest route from deadstock closet to liquid capital.</p>
          </article>

          <article class="glass-card" style="padding: 2rem;">
            <div style="font-family: var(--font-mono); font-size: 1.8rem; font-weight: 900; color: #FF5A1F; margin-bottom: 1rem;">04</div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem;">White-Glove Buyer Protection</h3>
            <p style="color: #A0A4AE;">If any pair deviates from its listed condition report, our Buyer Shield guarantees an immediate 100% refund with zero restocking penalties.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         4. GLOBAL AUTHENTICATION HUBS (TOKYO, NEW YORK, LONDON, PARIS)
         =================================================================== -->
    <section class="section">
      <div class="container">
        <div class="section-title-wrap">
          <div class="section-tag"><span class="dot"></span> GLOBAL FOOTPRINT</div>
          <h2 class="section-title">AUTHENTICATION <span class="text-neon">HUBS</span></h2>
          <p class="section-subtitle">Strategically positioned in the world's most influential streetwear capitals.</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.75rem;">
          <article class="glass-card" style="padding: 2rem;">
            <h3 style="font-size: 1.25rem; color: #FFFFFF; margin-bottom: 0.5rem;">Tokyo Flagship</h3>
            <p style="font-size: 0.88rem; color: #A0A4AE; margin-bottom: 1rem;">Minami-Aoyama, Minato-ku, Tokyo 107-0062</p>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #FF5A1F;">JST Hub &amp; Biomechanics Lab</div>
            <div style="font-size: 0.8rem; color: #A0A4AE; margin-top: 0.5rem;">Mon–Sun: 11:00–20:00 JST</div>
          </article>

          <article class="glass-card" style="padding: 2rem;">
            <h3 style="font-size: 1.25rem; color: #FFFFFF; margin-bottom: 0.5rem;">New York Vault</h3>
            <p style="font-size: 0.88rem; color: #A0A4AE; margin-bottom: 1rem;">448 Broome St, SoHo, New York, NY 10013</p>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #FF5A1F;">North America Intake Facility</div>
            <div style="font-size: 0.8rem; color: #A0A4AE; margin-top: 0.5rem;">Mon–Sun: 10:00–20:00 EST</div>
          </article>

          <article class="glass-card" style="padding: 2rem;">
            <h3 style="font-size: 1.25rem; color: #FFFFFF; margin-bottom: 0.5rem;">London Atelier</h3>
            <p style="font-size: 0.88rem; color: #A0A4AE; margin-bottom: 1rem;">14 Floral St, Covent Garden, London WC2E 9DH</p>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #FF5A1F;">European Verification Center</div>
            <div style="font-size: 0.8rem; color: #A0A4AE; margin-top: 0.5rem;">Mon–Sun: 10:00–19:30 GMT</div>
          </article>

          <article class="glass-card" style="padding: 2rem;">
            <h3 style="font-size: 1.25rem; color: #FFFFFF; margin-bottom: 0.5rem;">Paris Gallery</h3>
            <p style="font-size: 0.88rem; color: #A0A4AE; margin-bottom: 1rem;">38 Rue de S&eacute;vign&eacute;, Le Marais, 75003 Paris</p>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #FF5A1F;">High-End Consignment Salon</div>
            <div style="font-size: 0.8rem; color: #A0A4AE; margin-top: 0.5rem;">Tue–Sun: 11:00–19:30 CET</div>
          </article>
        </div>
      </div>
    </section>

  </main>

  <!-- Global Footer (Shared UI Kit) -->
  <footer class="stride-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="../index.html" class="brand-logo">
            <img src="../assets/logo.svg" alt="STRIDE — Be Your Own" width="160">
          </a>
          <p>
            The premier international sneaker resale destination. Providing 100% verified authentic grails and seamless consignment since 2024.
          </p>
          <div style="margin-top: 1.5rem; font-family: var(--font-mono); font-size: 0.78rem; color: #FF5A1F;">
            BE YOUR OWN &bull; DEFINE YOUR MOVEMENT
          </div>
        </div>

        <div>
          <h4 class="footer-col-title">Marketplace</h4>
          <div class="footer-links">
            <a href="shop.html" class="footer-link">All Sneakers</a>
            <a href="shop.html?brand=Jordan" class="footer-link">Air Jordan</a>
            <a href="shop.html?brand=Nike" class="footer-link">Nike &amp; Dunks</a>
            <a href="shop.html?brand=Travis%20Scott" class="footer-link">Travis Scott</a>
            <a href="shop.html?brand=Yeezy" class="footer-link">Yeezy Collection</a>
          </div>
        </div>

        <div>
          <h4 class="footer-col-title">Services</h4>
          <div class="footer-links">
            <a href="size-guide.html" class="footer-link">Size Guide &amp; Calculator</a>
            <a href="sell.html" class="footer-link">Sell Your Sneakers</a>
            <a href="faq.html" class="footer-link">8-Point Verification</a>
            <a href="track-order.html" class="footer-link">Track Delivery</a>
            <a href="orders.html" class="footer-link">Order History</a>
            <a href="wishlist.html" class="footer-link">Saved Wishlist</a>
          </div>
        </div>

        <div>
          <h4 class="footer-col-title">Company</h4>
          <div class="footer-links">
            <a href="about.html" class="footer-link">About STRIDE</a>
            <a href="contact.html" class="footer-link">Contact Concierge</a>
            <a href="faq.html" class="footer-link">FAQ &amp; Buyer Shield</a>
            <a href="login.html" class="footer-link">Member Sign In</a>
            <a href="signup.html" class="footer-link">Create Account</a>
          </div>
        </div>

        <div>
          <h4 class="footer-col-title">Global Flagships</h4>
          <div class="footer-links" style="font-size: 0.85rem; color: #A0A4AE; line-height: 1.6;">
            <div><strong>Tokyo:</strong> Minami-Aoyama, Minato-ku</div>
            <div><strong>New York:</strong> Broome St, SoHo</div>
            <div><strong>London:</strong> Floral St, Covent Garden</div>
            <div><strong>Paris:</strong> Rue de S&eacute;vign&eacute;, Le Marais</div>
            <div style="margin-top: 0.75rem; color: #FF5A1F;">
              ⚡ Concierge: +1 (800) 787-4331
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div>
          &copy; 2026 STRIDE Marketplace Inc. All rights reserved.
        </div>
        <div class="footer-socials">
          <a href="#" class="social-link" aria-label="Instagram">IG</a>
          <a href="#" class="social-link" aria-label="Twitter">X</a>
          <a href="#" class="social-link" aria-label="Discord">DC</a>
          <a href="#" class="social-link" aria-label="YouTube">YT</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Search Modal Overlay (Shared UI Kit) -->
  <div class="search-modal-backdrop">
    <div class="search-modal-box">
      <div class="search-input-wrap">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF5A1F" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" class="search-input" placeholder="Search by model, brand, or SKU (e.g. Travis Scott, Chicago)...">
        <button class="close-search" style="color: #A0A4AE; font-size: 1.2rem;">✕</button>
      </div>
      <div class="search-results-list">
        <p style="text-align: center; color: #626775; padding: 2rem;">Search by model, brand, or SKU (e.g. Travis Scott, Chicago, Dunk)</p>
      </div>
    </div>
  </div>

  <!-- Cart Slide-Out Drawer (Shared UI Kit) -->
  <div class="cart-drawer-backdrop"></div>
  <aside class="cart-drawer">
    <div class="cart-drawer-header">
      <div style="display: flex; align-items: center; gap: 0.65rem;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF5A1F" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <h3 style="font-size: 1.15rem; font-weight: 800; text-transform: uppercase;">Your Shopping Bag</h3>
      </div>
      <button class="close-cart" style="color: #A0A4AE; font-size: 1.2rem;">✕</button>
    </div>

    <div style="padding: 0.85rem 1.8rem; background: #171A22; border-bottom: 1px solid #292D38;">
      <div class="free-shipping-text" style="font-size: 0.78rem; font-family: var(--font-mono); color: #A0A4AE; margin-bottom: 0.4rem;">
        Add <strong>$200</strong> for Free Express Insured Shipping
      </div>
      <div style="height: 4px; background: #292D38; border-radius: 99px; overflow: hidden;">
        <div class="free-shipping-fill" style="width: 0%; height: 100%; background: var(--neon-orange); transition: width 0.3s ease;"></div>
      </div>
    </div>

    <div class="cart-drawer-items"></div>

    <div class="cart-drawer-footer">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
        <span style="font-family: var(--font-mono); font-size: 0.85rem; color: #A0A4AE; text-transform: uppercase;">Subtotal</span>
        <span class="cart-drawer-subtotal" style="font-family: var(--font-display); font-size: 1.4rem; font-weight: 900; color: #FFFFFF;">$0</span>
      </div>
      <div style="display: flex; gap: 0.75rem;">
        <a href="cart.html" class="btn btn-secondary" style="flex: 1;">View Bag</a>
        <a href="checkout.html" class="btn btn-primary" style="flex: 1.2;">Checkout</a>
      </div>
    </div>
  </aside>

  <!-- Scripts -->
  <script src="../js/stride-data.js"></script>
  <script src="../js/stride-core.js"></script>
  <script src="../js/stride-interactions.js"></script>
</body>
</html>
```

Note: An earlier version already exists at [about.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/about.html) in `SE_D_Group_4_Stride_Sneakers` (left unmodified). The version above aligns the announcement bar, `Size Guide` nav link, Paris hub in the footer, responsive two-column origin grid (`auto-fit`), and free-shipping progress bar in the cart drawer with [index.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/index.html). Let me know if you want me to write this into `pages/about.html` or update the existing file.

---

## User (2026-11-28T19:50:24Z)

Create contact.html with a VIP Client Concierge form (#contact-form with name, email, inquiry topic dropdown, and message fields plus #contact-success confirmation box) alongside direct contact details and quick help links. Then write the client-side validation script for #contact-form that checks non-empty name, valid email format, and a minimum 15-character message before showing the success state.

## Assistant (2026-11-28T19:50:32Z)

Here is `contact.html` with the VIP Client Concierge dispatch form (`#contact-form`), confirmation box (`#contact-success`), direct channels, quick help links, and shared STRIDE UI kit, followed by the standalone client-side validation script.

---

### 1. `contact.html` (`pages/contact.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us — STRIDE VIP Concierge &amp; Global Support</title>
  <meta name="description" content="Reach the STRIDE Client Concierge for consignment consultations, order tracking inquiries, and authentication certification.">
  <link rel="icon" type="image/svg+xml" href="../assets/logo-mark.svg">
  <link rel="stylesheet" href="../css/stride.css">
</head>
<body>

  <!-- Top Announcement Bar (Shared UI Kit) -->
  <div class="announcement-bar">
    <span>⚡ <strong>GLOBAL VAULT DROP:</strong> Travis Scott Reverse Mocha &amp; Off-White Chicago restocked.</span>
    <span>🛡️ <strong>100% VERIFIED AUTHENTIC:</strong> 8-Point Physical Lab Inspection.</span>
    <span>✈️ <strong>FREE EXPRESS INSURED SHIPPING</strong> on orders over $200 with code <strong>STRIDE10</strong></span>
  </div>

  <!-- Header (Shared UI Kit) -->
  <header class="stride-header">
    <div class="container">
      <div class="nav-inner">
        <a href="../index.html" class="brand-logo" aria-label="STRIDE Home">
          <img src="../assets/logo.svg" alt="STRIDE — Be Your Own" width="160" height="40">
        </a>

        <nav class="nav-links" aria-label="Primary Navigation">
          <a href="../index.html" class="nav-link">Home</a>
          <a href="shop.html" class="nav-link">Shop</a>
          <a href="shop.html?filter=grail" class="nav-link">Collections <span class="badge-hot">HOT</span></a>
          <a href="size-guide.html" class="nav-link">Size Guide</a>
          <a href="sell.html" class="nav-link">Sell Your Sneakers</a>
          <a href="about.html" class="nav-link">About</a>
        </nav>

        <div class="nav-actions">
          <button class="icon-btn trigger-search" aria-label="Search Sneakers (Ctrl+K)" title="Search (Ctrl + K)">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>

          <a href="wishlist.html" class="icon-btn" aria-label="Wishlist">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <span class="badge-count wishlist-badge-count" style="display:none;">0</span>
          </a>

          <button class="icon-btn trigger-cart" aria-label="Shopping Bag">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span class="badge-count cart-badge-count" style="display:none;">0</span>
          </button>

          <a href="login.html" class="icon-btn" aria-label="My Account" title="User Account">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </a>

          <button class="icon-btn mobile-menu-toggle" aria-label="Open Navigation Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Drawer -->
  <div class="mobile-nav-overlay"></div>
  <aside class="mobile-nav">
    <div>
      <div class="mobile-nav-header">
        <img src="../assets/logo.svg" alt="STRIDE" width="130">
        <button class="mobile-nav-close" style="color: #A0A4AE; font-size: 1.4rem;">✕</button>
      </div>
      <div class="mobile-nav-links">
        <a href="../index.html" class="mobile-nav-link">Home</a>
        <a href="shop.html" class="mobile-nav-link">Shop All Grails</a>
        <a href="size-guide.html" class="mobile-nav-link">Size Guide &amp; Calculator</a>
        <a href="sell.html" class="mobile-nav-link">Sell Your Sneakers</a>
        <a href="about.html" class="mobile-nav-link">About STRIDE</a>
        <a href="faq.html" class="mobile-nav-link">Authentication &amp; FAQ</a>
        <a href="contact.html" class="mobile-nav-link active">VIP Concierge</a>
        <a href="orders.html" class="mobile-nav-link">Order History</a>
        <a href="track-order.html" class="mobile-nav-link">Live Shipment Tracking</a>
      </div>
    </div>
    <div style="border-top: 1px solid #292D38; padding-top: 1.5rem;">
      <a href="login.html" class="btn btn-primary btn-block">Sign In / Register</a>
    </div>
  </aside>

  <!-- Contact Section -->
  <main>
    <section class="section" style="padding: 4rem 0 6rem;">
      <div class="container">
        <div class="section-title-wrap">
          <div class="section-tag"><span class="dot"></span> DIRECT INQUIRIES</div>
          <h1 class="section-title">VIP CLIENT <span class="text-neon">CONCIERGE</span></h1>
          <p class="section-subtitle">
            Have questions regarding consignment valuations, verification status, or bespoke sourcing? Our specialists are at your disposal.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 4rem; align-items: flex-start;">
          <!-- Contact Form Card -->
          <div class="glass-card" style="padding: 3rem;">
            <h2 style="font-size: 1.4rem; margin-bottom: 0.5rem;">Send a Dispatch</h2>
            <p style="font-size: 0.88rem; color: #A0A4AE; margin-bottom: 2rem;">Our private client desk replies within 2 hours during business hours.</p>

            <form id="contact-form" novalidate>
              <div class="form-group" style="margin-bottom: 1.25rem;">
                <label class="form-label" for="contact-name">Full Name *</label>
                <input type="text" id="contact-name" class="form-input" placeholder="e.g. Marcus Vance" required>
                <span class="form-error-msg">Please provide your name.</span>
              </div>

              <div class="form-group" style="margin-bottom: 1.25rem;">
                <label class="form-label" for="contact-email">Email Address *</label>
                <input type="email" id="contact-email" class="form-input" placeholder="name@domain.com" required>
                <span class="form-error-msg">Please enter a valid email address.</span>
              </div>

              <div class="form-group" style="margin-bottom: 1.25rem;">
                <label class="form-label" for="contact-subject">Topic of Inquiry</label>
                <select id="contact-subject" class="form-select">
                  <option value="Consignment Valuation">Consignment Valuation / Selling Grails</option>
                  <option value="Order Tracking">Order &amp; Shipment Tracking</option>
                  <option value="Authentication Certification">Authentication &amp; RFID Verification</option>
                  <option value="Press & Partnership">Press &amp; Creator Partnership</option>
                  <option value="Other">General VIP Support</option>
                </select>
              </div>

              <div class="form-group" style="margin-bottom: 1.75rem;">
                <label class="form-label" for="contact-message">Message *</label>
                <textarea id="contact-message" class="form-textarea" rows="5" placeholder="Specify sneaker SKU, size, or order number..." required></textarea>
                <span class="form-error-msg">Message must contain at least 15 characters.</span>
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-block">
                TRANSMIT DISPATCH
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </form>

            <div id="contact-success" role="status" aria-live="polite" style="display: none; text-align: center; padding: 2rem; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.4); border-radius: var(--radius-md); margin-top: 1.5rem;">
              <div style="font-size: 2rem; margin-bottom: 0.5rem; color: #34D399;">✓</div>
              <h3 style="font-size: 1.15rem; color: #34D399; margin-bottom: 0.25rem;">Message Dispatched!</h3>
              <p style="font-size: 0.88rem; color: #A0A4AE;">Your reference ID is <strong>#CNG-99214</strong>. A specialist has been assigned to your case.</p>
            </div>
          </div>

          <!-- Direct Contact Details & Quick Help Links -->
          <div>
            <div class="glass-card" style="padding: 2.25rem; margin-bottom: 2rem;">
              <h2 style="font-size: 1.1rem; text-transform: uppercase; margin-bottom: 1.25rem;">Direct Channels</h2>
              <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                <div style="display: flex; gap: 1rem; align-items: center;">
                  <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(255, 90, 31, 0.1); border: 1px solid rgba(255, 90, 31, 0.3); display: flex; align-items: center; justify-content: center;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF5A1F" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #FF5A1F; text-transform: uppercase;">Direct Hotline</div>
                    <div style="font-weight: 700; color: #FFFFFF;">+1 (800) 787-4331</div>
                  </div>
                </div>

                <div style="display: flex; gap: 1rem; align-items: center;">
                  <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(255, 90, 31, 0.1); border: 1px solid rgba(255, 90, 31, 0.3); display: flex; align-items: center; justify-content: center;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF5A1F" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #FF5A1F; text-transform: uppercase;">Concierge Desk</div>
                    <div style="font-weight: 700; color: #FFFFFF;">concierge@stride-marketplace.com</div>
                  </div>
                </div>

                <div style="display: flex; gap: 1rem; align-items: center;">
                  <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(255, 90, 31, 0.1); border: 1px solid rgba(255, 90, 31, 0.3); display: flex; align-items: center; justify-content: center;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF5A1F" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
                  </div>
                  <div>
                    <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #FF5A1F; text-transform: uppercase;">Desk Operating Hours</div>
                    <div style="font-weight: 700; color: #FFFFFF;">24 Hours / 7 Days a Week</div>
                  </div>
                </div>

                <div style="display: flex; gap: 1rem; align-items: center;">
                  <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(255, 90, 31, 0.1); border: 1px solid rgba(255, 90, 31, 0.3); display: flex; align-items: center; justify-content: center;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF5A1F" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #FF5A1F; text-transform: uppercase;">Flagship Headquarters</div>
                    <div style="font-weight: 700; color: #FFFFFF;">448 Broome St, SoHo, New York</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Help Links Box -->
            <div class="glass-card" style="padding: 2.25rem;">
              <h2 style="font-size: 1.1rem; text-transform: uppercase; margin-bottom: 1rem;">Frequent Help Topics</h2>
              <div class="footer-links">
                <a href="faq.html" class="footer-link">&rarr; What happens if a sneaker fails verification?</a>
                <a href="faq.html" class="footer-link">&rarr; How do I ship my pairs for consignment?</a>
                <a href="track-order.html" class="footer-link">&rarr; Where can I track my inbound delivery?</a>
                <a href="sell.html" class="footer-link">&rarr; How is my seller payout calculated?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Global Footer (Shared UI Kit) -->
  <footer class="stride-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="../index.html" class="brand-logo">
            <img src="../assets/logo.svg" alt="STRIDE — Be Your Own" width="160">
          </a>
          <p>The premier international sneaker resale destination. Providing 100% verified authentic grails and seamless consignment since 2024.</p>
          <div style="margin-top: 1.5rem; font-family: var(--font-mono); font-size: 0.78rem; color: #FF5A1F;">
            BE YOUR OWN &bull; DEFINE YOUR MOVEMENT
          </div>
        </div>

        <div>
          <h4 class="footer-col-title">Marketplace</h4>
          <div class="footer-links">
            <a href="shop.html" class="footer-link">All Sneakers</a>
            <a href="shop.html?brand=Jordan" class="footer-link">Air Jordan</a>
            <a href="shop.html?brand=Nike" class="footer-link">Nike &amp; Dunks</a>
            <a href="shop.html?brand=Travis%20Scott" class="footer-link">Travis Scott</a>
            <a href="shop.html?brand=Yeezy" class="footer-link">Yeezy Collection</a>
          </div>
        </div>

        <div>
          <h4 class="footer-col-title">Services</h4>
          <div class="footer-links">
            <a href="size-guide.html" class="footer-link">Size Guide &amp; Calculator</a>
            <a href="sell.html" class="footer-link">Sell Your Sneakers</a>
            <a href="faq.html" class="footer-link">8-Point Verification</a>
            <a href="track-order.html" class="footer-link">Track Delivery</a>
            <a href="orders.html" class="footer-link">Order History</a>
          </div>
        </div>

        <div>
          <h4 class="footer-col-title">Company</h4>
          <div class="footer-links">
            <a href="about.html" class="footer-link">About STRIDE</a>
            <a href="contact.html" class="footer-link">Contact Concierge</a>
            <a href="faq.html" class="footer-link">FAQ &amp; Buyer Shield</a>
            <a href="login.html" class="footer-link">Member Sign In</a>
            <a href="signup.html" class="footer-link">Create Account</a>
          </div>
        </div>

        <div>
          <h4 class="footer-col-title">Global Flagships</h4>
          <div class="footer-links" style="font-size: 0.85rem; color: #A0A4AE; line-height: 1.6;">
            <div><strong>Tokyo:</strong> Minami-Aoyama, Minato-ku</div>
            <div><strong>New York:</strong> Broome St, SoHo</div>
            <div><strong>London:</strong> Floral St, Covent Garden</div>
            <div><strong>Paris:</strong> Rue de S&eacute;vign&eacute;, Le Marais</div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div>&copy; 2026 STRIDE Marketplace Inc. All rights reserved.</div>
        <div class="footer-socials">
          <a href="#" class="social-link" aria-label="Instagram">IG</a>
          <a href="#" class="social-link" aria-label="Twitter">X</a>
          <a href="#" class="social-link" aria-label="Discord">DC</a>
          <a href="#" class="social-link" aria-label="YouTube">YT</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Search Modal Overlay (Shared UI Kit) -->
  <div class="search-modal-backdrop">
    <div class="search-modal-box">
      <div class="search-input-wrap">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF5A1F" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" class="search-input" placeholder="Search by model, brand, or SKU...">
        <button class="close-search" style="color: #A0A4AE; font-size: 1.2rem;">✕</button>
      </div>
      <div class="search-results-list"></div>
    </div>
  </div>

  <!-- Cart Slide-Out Drawer (Shared UI Kit) -->
  <div class="cart-drawer-backdrop"></div>
  <aside class="cart-drawer">
    <div class="cart-drawer-header">
      <div style="display: flex; align-items: center; gap: 0.65rem;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF5A1F" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <h3 style="font-size: 1.15rem; font-weight: 800; text-transform: uppercase;">Your Shopping Bag</h3>
      </div>
      <button class="close-cart" style="color: #A0A4AE; font-size: 1.2rem;">✕</button>
    </div>

    <div style="padding: 0.85rem 1.8rem; background: #171A22; border-bottom: 1px solid #292D38;">
      <div class="free-shipping-text" style="font-size: 0.78rem; font-family: var(--font-mono); color: #A0A4AE; margin-bottom: 0.4rem;">
        Add <strong>$200</strong> for Free Express Insured Shipping
      </div>
      <div style="height: 4px; background: #292D38; border-radius: 99px; overflow: hidden;">
        <div class="free-shipping-fill" style="width: 0%; height: 100%; background: var(--neon-orange); transition: width 0.3s ease;"></div>
      </div>
    </div>

    <div class="cart-drawer-items"></div>

    <div class="cart-drawer-footer">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
        <span style="font-family: var(--font-mono); font-size: 0.85rem; color: #A0A4AE; text-transform: uppercase;">Subtotal</span>
        <span class="cart-drawer-subtotal" style="font-family: var(--font-display); font-size: 1.4rem; font-weight: 900; color: #FFFFFF;">$0</span>
      </div>
      <div style="display: flex; gap: 0.75rem;">
        <a href="cart.html" class="btn btn-secondary" style="flex: 1;">View Bag</a>
        <a href="checkout.html" class="btn btn-primary" style="flex: 1.2;">Checkout</a>
      </div>
    </div>
  </aside>

  <!-- Scripts -->
  <script src="../js/stride-data.js"></script>
  <script src="../js/stride-core.js"></script>
  <script src="../js/stride-interactions.js"></script>
  <script src="../js/contact-validation.js"></script>
</body>
</html>
```

---

### 2. Client-Side Validation Script (`#contact-form`)

```javascript
// Contact Form Validation for STRIDE VIP Client Concierge
(function initContactValidation() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const successBox = document.getElementById('contact-success');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setFieldState(input, isFieldValid) {
    if (!input || !input.parentElement) return;
    input.parentElement.classList.toggle('error', !isFieldValid);
    input.parentElement.classList.toggle('valid', isFieldValid);
    input.setAttribute('aria-invalid', String(!isFieldValid));
  }

  function validateField(input) {
    if (!input) return false;
    const value = input.value.trim();

    if (input === nameInput) {
      const ok = value.length > 0;
      setFieldState(input, ok);
      return ok;
    }

    if (input === emailInput) {
      const ok = emailRegex.test(value);
      setFieldState(input, ok);
      return ok;
    }

    if (input === messageInput) {
      const ok = value.length >= 15;
      setFieldState(input, ok);
      return ok;
    }

    return true;
  }

  // Live re-validation as the user corrects fields
  [nameInput, emailInput, messageInput].forEach((input) => {
    if (!input) return;
    input.addEventListener('input', () => {
      if (input.parentElement.classList.contains('error')) {
        validateField(input);
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateField(nameInput);
    const isEmailValid = validateField(emailInput);
    const isMessageValid = validateField(messageInput);

    if (isNameValid && isEmailValid && isMessageValid) {
      form.style.display = 'none';
      if (successBox) {
        successBox.style.display = 'block';
      }
      if (typeof STRIDE_APP !== 'undefined' && typeof STRIDE_APP.showToast === 'function') {
        STRIDE_APP.showToast('VIP Dispatch received. Specialist assigned!', 'success');
      }
    }
  });
})();
```

Note: Existing versions are also present at [contact.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/contact.html) and [shan2.js](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/shan2.js) (left unmodified). The version above adds the flagship headquarters row (`448 Broome St, SoHo, New York`), `aria-invalid` / live re-validation on input, and defensive guards around `STRIDE_APP.showToast`. Let me know if you want me to write these updates directly to disk.

---

## User (2026-11-28T19:51:41Z)

Review index.html, about.html, contact.html, Shan1.css, shan1.js, and shan2.js to ensure navigation links, IDs, badges, and script references (stride-data.js, stride-core.js, stride-interactions.js) are consistent across pages.

## Assistant (2026-11-28T19:51:41Z)

Here is the consistency review across [index.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/index.html), [about.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/about.html), [contact.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/contact.html), [Shan1.css](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/Shan1.css), [shan1.js](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/shan1.js), and [shan2.js](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/shan2.js):

---

### 1. Directory Structure & Script/CSS References
* **Root vs. `pages/` path mismatch:**
  * [index.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/index.html#L36) links to `pages/about.html` and `pages/contact.html`, and [about.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/about.html#L8-L32) / [contact.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/contact.html#L8-L32) use `../` paths (`../index.html`, `../css/stride.css`, `../assets/logo.svg`, `../js/stride-data.js`, `../js/stride-core.js`, `../js/stride-interactions.js`).
  * However, in `SE_D_Group_4_Stride_Sneakers`, `about.html` and `contact.html` currently sit in the **root folder** alongside `index.html`, and the `css/`, `js/`, `assets/`, and `pages/` directories do not exist in the repo yet—so those references will 404 until placed in `pages/` with `css/`, `js/`, and `assets/` populated.
* **Standalone files (`Shan1.css`, `shan1.js`, `shan2.js`) are unreferenced:**
  * [index.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/index.html#L9) loads `css/stride.css` (not `Shan1.css`) and inlines the full contents of [shan1.js](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/shan1.js) at [lines 440–512](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/index.html#L440-L512).
  * [contact.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/contact.html#L275-L316) inlines the full contents of [shan2.js](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/shan2.js) instead of loading it via `<script>`.
* **Core script order (`stride-data.js`, `stride-core.js`, `stride-interactions.js`):**
  * All three HTML pages load them in the same order at the bottom of `<body>` ([index.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/index.html#L436-L438), [about.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/about.html#L320-L322), [contact.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/contact.html#L271-L273)).

---

### 2. Navigation Links, Announcement Bar & Footer Consistency
* **Missing `Size Guide` link on secondary pages:**
  * [index.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/index.html#L34) includes `Size Guide` (`pages/size-guide.html`) in `.nav-links`, `.mobile-nav-links` ([line 78](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/index.html#L78)), and the footer `Services` column ([line 337](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/index.html#L337)).
  * Both [about.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/about.html#L27-L33) and [contact.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/contact.html#L27-L33) omit `Size Guide` from desktop nav, mobile drawer, and footer.
* **Announcement bar mismatch:**
  * [index.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/index.html#L14-L18) has **3** announcement spans (including `⚡ GLOBAL VAULT DROP`).
  * [about.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/about.html#L14-L17) and [contact.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/contact.html#L14-L17) have only **2** spans (missing `GLOBAL VAULT DROP`).
* **Footer divergence in `contact.html` & `about.html`:**
  * [contact.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/contact.html#L195-L241) has a reduced footer: `Marketplace`, `Services`, and `Company` have fewer links than `index.html`/`about.html`; the 5th column is `Social` instead of `Global Flagships`; and `.footer-socials` lacks `YT` and sits inside `.footer-grid` rather than `.footer-bottom`.
  * [about.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/about.html#L261-L271) lists Tokyo, New York, and London in the footer `Global Flagships`, omitting Paris even though Paris appears in its `Authentication Hubs` cards ([line 204](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/about.html#L204)).

---

### 3. Shared Header, Search Modal & Cart Drawer IDs/Markup
* **Consistent triggers & badge counters:** All three HTML files share `.trigger-search`, `.trigger-cart`, `.mobile-menu-toggle`, `.wishlist-badge-count`, and `.cart-badge-count`.
* **Search modal differences:**
  * [index.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/index.html#L385-L396) includes the search `<svg>` icon, `autofocus`, and default helper text inside `.search-results-list`.
  * [about.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/about.html#L289-L297) and [contact.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/contact.html#L244-L252) omit the search `<svg>` icon and default `.search-results-list` text.
* **Cart drawer differences:**
  * [index.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/index.html#L409-L432) includes the bag `<svg>` icon, the Free Shipping Progress bar (`.free-shipping-text`, `.free-shipping-fill`), and both `View Bag` + `Checkout` CTAs.
  * [about.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/about.html#L301-L317) omits the bag icon and the Free Shipping Progress bar.
  * [contact.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/contact.html#L255-L268) omits the bag icon, the Free Shipping Progress bar, and the `Checkout` CTA (only `View Bag` is present).

---

### 4. CSS (`Shan1.css`) & JS (`shan1.js`, `shan2.js`) Checks
* **`Shan1.css` vs. `index.html`:**
  * All hero classes used in [index.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/index.html#L95-L177) (`.hero-section`, `.hero-particles-canvas`, `.hero-3d-stage`, `.sneaker-glow-orb`, `.hero-sneaker-wrapper`, `.hero-floating-sneaker`, `.hero-sneaker-shadow`, `.hero-floating-badge`, `.badge-pos-1`, `.badge-pos-2`) are present in [Shan1.css](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/Shan1.css).
  * `.hero-sneaker-shadow` ([Shan1.css](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/Shan1.css#L162-L171)) uses `position: absolute; bottom: -35px;` without horizontal centering (`left: 0; right: 0; margin: 0 auto;`), so it may sit left-aligned under `.hero-sneaker-wrapper`.
* **`shan1.js` vs. `index.html`:**
  * Targets `#featured-products-grid`, `#trending-products-grid`, `.hero-price-val`, `[data-wishlist-id]`, and `[data-price-usd]`—all match [index.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/index.html).
  * Hardcodes `STRIDE_APP.formatPrice(190)` instead of reading `heroPriceEl.dataset.priceUsd` ([shan1.js](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/shan1.js#L9)).
  * `STRIDE_APP` (inside `createProductCardHTML`) and `STRIDE_INTERACTIONS.initCardTilt()` ([shan1.js](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/shan1.js#L13-L65)) have no `typeof !== 'undefined'` guards.
  * `badgeClass` ([shan1.js](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/shan1.js#L14)) only branches on `GRAIL` vs `Deadstock` vs `badge-vnds`; items with another badge (e.g., `TRENDING`) fall back to `badge-deadstock` or `badge-vnds` styling.
* **`shan2.js` vs. `contact.html`:**
  * Targets `#contact-form`, `#contact-name`, `#contact-email`, `#contact-message`, `#contact-success`—all match [contact.html](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/contact.html#L99-L139).
  * Calls `document.getElementById('contact-form').addEventListener(...)` directly without a null check ([shan2.js](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/shan2.js#L2)), which will throw if included on any page without `#contact-form`, and calls `STRIDE_APP.showToast(...)` without a guard ([shan2.js](file:///C:/Users/Lenovo/Documents/GitHub/SE_D_Group_4_Stride_Sneakers/shan2.js#L38)).

Let me know if you want me to apply fixes across these files to bring them into full alignment.

---

## User (2026-11-28T19:52:22Z)

export chat

