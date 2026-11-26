/**
 * STRIDE — SNEAKER RESALE MARKETPLACE DATABASE
 * Brand Identity, Currencies, Verified Inventory, Resale Metrics, FAQ, Demo Orders
 */

const STRIDE_DATA = {
  brand: {
    name: "STRIDE",
    tagline: "Be Your Own",
    subtagline: "Discover exclusive sneakers. Express your identity. Define your own movement.",
    founded: 2024,
    stats: {
      volume: "$18.4M+",
      authenticityRate: "100%",
      verifiedPairs: "42,000+",
      avgDispatchHours: "24h"
    },
    hubs: [
      { city: "Tokyo", address: "5-7-22 Minami-Aoyama, Minato-ku, Tokyo 107-0062", hours: "11:00 - 20:00 JST" },
      { city: "New York", address: "448 Broome St, SoHo, New York, NY 10013", hours: "11:00 - 19:00 EST" },
      { city: "London", address: "14 Floral Street, Covent Garden, London WC2E 9DH", hours: "10:00 - 19:00 GMT" },
      { city: "Paris", address: "38 Rue de Sévigné, Le Marais, 75003 Paris", hours: "11:00 - 19:30 CET" }
    ],
    contact: {
      email: "concierge@stride-marketplace.com",
      phone: "+1 (800) 787-4331",
      press: "press@stride-marketplace.com"
    }
  },

  // Regional Currency Conversion Rates (Default: USD)
  currencies: {
    USD: { code: "USD", name: "USD ($)", symbol: "$", rate: 1.0, flag: "🇺🇸", region: "United States / Global" },
    PKR: { code: "PKR", name: "PKR (Rs)", symbol: "Rs ", rate: 278.0, flag: "🇵🇰", region: "Pakistan" },
    AED: { code: "AED", name: "AED (د.إ)", symbol: "AED ", rate: 3.67, flag: "🇦🇪", region: "United Arab Emirates / Middle East" },
    SAR: { code: "SAR", name: "SAR (﷼)", symbol: "SAR ", rate: 3.75, flag: "🇸🇦", region: "Saudi Arabia / Arab Gulf" },
    EUR: { code: "EUR", name: "EUR (€)", symbol: "€", rate: 0.92, flag: "🇪🇺", region: "Europe / EU" },
    GBP: { code: "GBP", name: "GBP (£)", symbol: "£", rate: 0.79, flag: "🇬🇧", region: "United Kingdom" },
    CAD: { code: "CAD", name: "CAD (CA$)", symbol: "CA$", rate: 1.36, flag: "🇨🇦", region: "Canada" },
    KWD: { code: "KWD", name: "KWD (KD)", symbol: "KD ", rate: 0.31, flag: "🇰🇼", region: "Kuwait / Middle East" }
  },

  // Premium Marketplace Sneaker Catalogue with Realistic Actual Prices
  products: [
    {
      id: "travis-scott-jordan-1-reverse-mocha",
      name: "Travis Scott x Air Jordan 1 Low 'Reverse Mocha'",
      brand: "Travis Scott",
      category: "Jordan",
      price: 190,
      retailPrice: 150,
      condition: "Deadstock",
      box: "Original Box & Extra Laces",
      badge: "GRAIL",
      sku: "DM7866-162",
      releaseYear: 2022,
      colorway: "Sail / University Red / Ridgerock",
      rating: 4.95,
      reviewsCount: 428,
      isFeatured: true,
      isNewArrival: false,
      isTrending: true,
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "A monumental grail in contemporary sneaker history. The Reverse Mocha flips the iconic color blocking of Travis Scott's original 2019 collaboration with rich Ridgerock nubuck, crisp white leather overlays, and the legendary oversized reverse Swoosh.",
      authenticity: "Passed STRIDE 8-Point Physical Inspection: UV stitch alignment, leather density verification, olfactory audit, and RFID NFC microchip seal attached."
    },
    {
      id: "off-white-jordan-1-chicago",
      name: "Off-White x Air Jordan 1 Retro High 'Chicago'",
      brand: "Nike",
      category: "Off-White",
      price: 210,
      retailPrice: 190,
      condition: "Deadstock",
      box: "Original Deconstructed Box & Zip-Tie",
      badge: "GRAIL",
      sku: "AA3834-101",
      releaseYear: 2017,
      colorway: "White / Black / Varsity Red",
      rating: 5.0,
      reviewsCount: 312,
      isFeatured: true,
      isNewArrival: false,
      isTrending: true,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "The magnum opus of the late Virgil Abloh's revolutionary 'The Ten' collection. Featuring an exposed foam tongue, floating Swoosh stitched with electric blue threading, and Helvetica quotation branding.",
      authenticity: "100% Guaranteed Authentic. Verified by two master STRIDE authenticators under high-magnification stereomicroscopy."
    },
    {
      id: "jordan-4-retro-military-black",
      name: "Air Jordan 4 Retro 'Military Black'",
      brand: "Jordan",
      category: "Jordan",
      price: 185,
      retailPrice: 160,
      condition: "Deadstock",
      box: "Original Box",
      badge: "TRENDING",
      sku: "DH6927-111",
      releaseYear: 2022,
      colorway: "White / Black / Neutral Grey",
      rating: 4.88,
      reviewsCount: 654,
      isFeatured: true,
      isNewArrival: false,
      isTrending: true,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "One of the most versatile and sought-after Jordan 4 iterations of the decade. Features a smooth white leather base complemented by grey suede mudguards and high-contrast black TPU wings.",
      authenticity: "Fully authenticated: Netting pattern tension, heel Jumpman embossing, and poly-air sole unit verified."
    },
    {
      id: "nike-sb-dunk-low-chunky-dunky",
      name: "Nike SB Dunk Low x Ben & Jerry's 'Chunky Dunky'",
      brand: "Nike",
      category: "Nike SB",
      price: 140,
      retailPrice: 100,
      condition: "VNDS 9.5/10",
      box: "Original Special Ice Cream Pint Box",
      badge: "MOST WANTED",
      sku: "CU3244-100",
      releaseYear: 2020,
      colorway: "White / Lagoon Pulse / Monarch",
      rating: 4.92,
      reviewsCount: 198,
      isFeatured: false,
      isNewArrival: true,
      isTrending: true,
      image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "Inspired by Ben & Jerry's signature packaging with cow-print faux horsehair overlays, cloud-stitched leather side panels, and a dripped yellow melting Swoosh.",
      authenticity: "Certified authentic: Faux-fur grain inspection, Zoom Air strobel inspection, and insole graphic test."
    },
    {
      id: "yeezy-boost-350-v2-zebra",
      name: "Adidas Yeezy Boost 350 V2 'Zebra'",
      brand: "Yeezy",
      category: "Yeezy",
      price: 175,
      retailPrice: 150,
      condition: "Deadstock",
      box: "Original Box",
      badge: "POPULAR",
      sku: "CP9654",
      releaseYear: 2017,
      colorway: "White / Core Black / Red",
      rating: 4.85,
      reviewsCount: 890,
      isFeatured: false,
      isNewArrival: false,
      isTrending: true,
      image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "The definitive silhouette that shaped modern streetwear. Premium Primeknit upper with zebra stripes, red mirrored SPLY-350 script, and responsive full-length Boost cushioning.",
      authenticity: "Boost pellet density certified, UV light stripe reactivity tested, and interior label typography verified."
    },
    {
      id: "jordan-1-retro-high-lost-and-found",
      name: "Air Jordan 1 Retro High OG 'Lost & Found'",
      brand: "Jordan",
      category: "Jordan",
      price: 165,
      retailPrice: 140,
      condition: "Deadstock",
      box: "Original Distressed Vintage Box & Receipt",
      badge: "NEW ARRIVAL",
      sku: "DZ5485-612",
      releaseYear: 2022,
      colorway: "Varsity Red / Black / Sail / Muslin",
      rating: 4.96,
      reviewsCount: 780,
      isFeatured: true,
      isNewArrival: true,
      isTrending: true,
      image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "Paying homage to the mom-and-pop shops of the 1980s. Featuring cracked black leather collar panels, pre-aged off-white soles, and an authentic vintage invoice reprint inside.",
      authenticity: "Verified against authentic factory production runs: Collar cracking gradient, tongue tag font, and vintage paper stock."
    },
    {
      id: "new-balance-990v6-action-bronson",
      name: "New Balance 990v6 x Action Bronson 'Baklava'",
      brand: "New Balance",
      category: "New Balance",
      price: 155,
      retailPrice: 130,
      condition: "Deadstock",
      box: "Original Box",
      badge: "LIMITED",
      sku: "M990AB6",
      releaseYear: 2023,
      colorway: "Multi-Color / Brown / Neon Green",
      rating: 4.89,
      reviewsCount: 165,
      isFeatured: false,
      isNewArrival: true,
      isTrending: false,
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "A wild celebration of texture and energy designed with culinary maestro Action Bronson. FuelCell foam midsole meets luxurious pigskin suede and electric trail laces.",
      authenticity: "Hand-checked suede nap, FuelCell bounce quotient, and custom Baklava tongue badge certified."
    },
    {
      id: "nike-kobe-6-protro-grinch",
      name: "Nike Kobe 6 Protro 'Grinch'",
      brand: "Nike",
      category: "Kobe",
      price: 180,
      retailPrice: 150,
      condition: "Deadstock",
      box: "Original Mamba Box",
      badge: "GRAIL",
      sku: "CW2190-300",
      releaseYear: 2020,
      colorway: "Green Apple / Volt / Crimson / Black",
      rating: 4.98,
      reviewsCount: 412,
      isFeatured: false,
      isNewArrival: false,
      isTrending: true,
      image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "Originally worn by Kobe Bryant on Christmas Day 2010. Scaled polyurethane snake upper with Turbo Zoom Air forefoot cushioning and the iconic red Sheath logo.",
      authenticity: "Complete polyurethane scale pattern count and Zoom Turbo bag responsiveness verified."
    },
    {
      id: "stride-prototype-x-hyper-carbon",
      name: "STRIDE Prototype-X 'Hyper-Carbon'",
      brand: "STRIDE Lab",
      category: "STRIDE Lab",
      price: 160,
      retailPrice: 160,
      condition: "Deadstock",
      box: "Laser-Engraved Aluminum Case (1 of 500)",
      badge: "EXCLUSIVE",
      sku: "STR-PROTO-01",
      releaseYear: 2026,
      colorway: "Stealth Obsidian / Volt Flame",
      rating: 5.0,
      reviewsCount: 88,
      isFeatured: true,
      isNewArrival: true,
      isTrending: true,
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "Direct from the STRIDE Tokyo Biomechanics Division. Dual-density supercritical nitrogen AeroFoam™ combined with a visible curved full-foot VortexPlate™ carbon rocker. Limited to 500 individually serialized pairs worldwide.",
      authenticity: "Direct from STRIDE Vault. Guaranteed 100% authentic with cryptographic NFC chip embedded in sole."
    },
    {
      id: "balenciaga-triple-s-clear-sole",
      name: "Balenciaga Triple S Clear Sole 'Onyx'",
      brand: "Balenciaga",
      category: "Designer",
      price: 240,
      retailPrice: 220,
      condition: "Pre-Owned 9/10",
      box: "Original Box & Dustbag",
      badge: "LUXURY",
      sku: "541624-W09O1",
      releaseYear: 2021,
      colorway: "Triple Black / Clear Sole",
      rating: 4.76,
      reviewsCount: 140,
      isFeatured: false,
      isNewArrival: false,
      isTrending: false,
      image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "The definitive luxury chunky sneaker. Built on a complex 3-layer composite sole with TPU injected air bubble, washed nubuck, and athletic mesh.",
      authenticity: "Verified authentic: Toe size embroidery font, clear-sole transparency bubble, and weight verification (1.1kg per shoe)."
    }
  ],

  // Comprehensive FAQ Database
  faqs: [
    {
      category: "Buying",
      q: "How does STRIDE guarantee that every sneaker is 100% authentic?",
      a: "Every sneaker listed on STRIDE must undergo our mandatory in-person 8-Point Physical Authentication. Our specialists inspect stitching density under stereomicroscopes, UV glow reactivity, factory glue scents, box print typography, and embedded RFID serials before any payout is released to the seller."
    },
    {
      category: "Buying",
      q: "What do Condition Badges like 'Deadstock' and 'VNDS' mean?",
      a: "'Deadstock' indicates brand-new, unworn, unlaced condition in the original factory box. 'VNDS' (Very Near Deadstock) indicates a pair worn 1-2 times indoors with 95%+ star patterns intact on the outsole and zero creasing. Full condition reports and high-res photography accompany every listing."
    },
    {
      category: "Buying",
      q: "How do I choose the correct size for Jordan, Nike, and Yeezy silhouettes?",
      a: "Sneaker sizing varies by silhouette. Air Jordan 1 and 4 fit True to Size (TTS), while Nike SB Dunks and Adidas Yeezy 350 V2 typically fit snug and require going a half size up (+0.5). You can use our interactive <a href='size-guide.html' style='color:#FF5A1F; text-decoration:underline; font-weight:700;'>Size Guide & Biomechanical Foot Length Calculator</a> to convert between US Men, US Women, UK, EU, and CM measurements."
    },
    {
      category: "Selling",
      q: "How does the 'Sell Your Sneakers' process work?",
      a: "Submit your sneaker details, photos, and desired payout through our Sell portal. Once accepted, we provide a prepaid insured shipping label. Send your pair to our nearest STRIDE Authentication Hub. Upon verification within 24 hours, funds are instantly deposited to your bank, PayPal, or STRIDE Vault balance."
    },
    {
      category: "Selling",
      q: "What are STRIDE's seller consignment commission fees?",
      a: "STRIDE charges a competitive flat 9.5% marketplace fee + $5 processing fee upon completed sale. We provide full shipping insurance and handle all buyer interactions, photography upgrades, and returns protection."
    },
    {
      category: "Shipping",
      q: "How fast is shipping, and how are sneakers packaged?",
      a: "All pairs are double-boxed in high-tensile reinforced STRIDE matte black protective cartons with tamper-evident security tape. Orders over $200 qualify for Free Express Insured Shipping (2-3 business days worldwide with FedEx / DHL Express)."
    },
    {
      category: "Returns",
      q: "What is the STRIDE Buyer Protection policy?",
      a: "If an item does not match our condition grade or fails verification in any way, you receive a 100% full refund immediately. Unworn sneakers with the intact STRIDE NFC security tag attached may be returned within 14 days of delivery."
    }
  ],

  // Demo Orders for Order History & Live Tracking Simulator with Realistic Actual Pricing
  demoOrders: [
    {
      orderId: "STR-882914",
      date: "Nov 21, 2026",
      status: "Out for Delivery",
      total: 190,
      carrier: "FedEx Express Priority",
      trackingNumber: "FX-998241042-US",
      estimatedDelivery: "Today by 6:00 PM",
      currentStep: 3, // 0: Placed, 1: Authenticated, 2: In Transit, 3: Out for Delivery, 4: Delivered
      items: [
        {
          id: "travis-scott-jordan-1-reverse-mocha",
          name: "Travis Scott x Air Jordan 1 Low 'Reverse Mocha'",
          size: "US 10.5",
          condition: "Deadstock",
          price: 190,
          qty: 1,
          image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=80"
        }
      ],
      shippingAddress: {
        name: "Alex Vance",
        address: "742 Evergreen Terrace, Suite 4B",
        city: "San Francisco",
        state: "CA",
        zip: "94107",
        country: "United States"
      }
    },
    {
      orderId: "STR-741029",
      date: "Oct 15, 2026",
      status: "Delivered",
      total: 165,
      carrier: "DHL Express Global",
      trackingNumber: "DHL-4881029-US",
      estimatedDelivery: "Delivered Oct 18, 2026",
      currentStep: 4,
      items: [
        {
          id: "jordan-1-retro-high-lost-and-found",
          name: "Air Jordan 1 Retro High OG 'Lost & Found'",
          size: "US 10",
          condition: "Deadstock",
          price: 165,
          qty: 1,
          image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=1000&q=80"
        }
      ]
    }
  ]
};
