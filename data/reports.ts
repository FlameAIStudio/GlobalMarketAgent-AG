import { ReportData } from './types';

export const earbud_report: ReportData = {
  keyword: 'wireless earbuds',
  region: 'US',
  platform: 'Amazon',
  summary:
    'The US wireless earbuds market on Amazon is highly competitive with $4.2B in annual revenue and 18% YoY growth. Budget-tier products dominate in volume, while premium ANC-enabled models capture 60% of total GMV. Consumer demand is shifting toward longer battery life and multi-device pairing. A significant opportunity exists in the $35–$65 mid-tier for brands that can credibly deliver ANC + 30h battery at an accessible price point.',
  competitors: [
    {
      name: 'Sony WF-1000XM5',
      price: '$279.99',
      rating: 4.8,
      reviews: '42,391',
      features: ['Industry-leading ANC', '8h battery', 'LDAC', 'Multipoint'],
      badge: 'Top Rated',
    },
    {
      name: 'Apple AirPods Pro (2nd Gen)',
      price: '$249.00',
      rating: 4.7,
      reviews: '198,402',
      features: ['H2 chip ANC', 'Transparency mode', 'MagSafe', 'USB-C'],
      badge: 'Best Seller',
    },
    {
      name: 'Anker Soundcore P40i',
      price: '$49.99',
      rating: 4.5,
      reviews: '31,204',
      features: ['60h total battery', 'ANC', 'App EQ', 'IP55'],
    },
    {
      name: 'JLab Go Air Pop',
      price: '$19.88',
      rating: 4.3,
      reviews: '89,021',
      features: ['8h battery', 'EQ3 sound', 'Touch controls', 'USB-C'],
    },
    {
      name: 'Jabra Elite 4',
      price: '$79.99',
      rating: 4.4,
      reviews: '17,882',
      features: ['ANC', 'Google Fast Pair', 'Spotify Tap', 'IP55'],
    },
  ],
  price_analysis: {
    budget: 'Under $30 — Volume leaders. Low margin, high return rates.',
    mid: '$30–$80 — Fastest growing segment. Consumers expect ANC + 30h+ battery.',
    premium: '$100–$280 — Sony & Apple duopoly. Hard to break in without brand equity.',
    insight:
      'Sweet spot is $39–$59 with credible ANC and long battery life. This segment is underpenetrated by quality brands.',
  },
  customer_insights: [
    {
      type: 'values',
      label: 'What Users Care About',
      content:
        'Battery life (30h+), active noise cancellation, and comfortable fit for extended wear. App customization and multipoint Bluetooth are increasingly expected even in mid-tier.',
    },
    {
      type: 'complaints',
      label: 'Top Complaints',
      content:
        'ANC quality overpromised in listings, earbuds falling out during exercise, poor call quality on cheap models, and charging cases that feel flimsy. Many 1-star reviews cite misleading product descriptions.',
    },
    {
      type: 'gap',
      label: 'Market Gap',
      content:
        'No strong brand owns the $39–$59 "sports + ANC" niche credibly. Consumers in this bracket sacrifice either ANC or fit quality. A focused brand play here has clear whitespace.',
    },
  ],
  gtm: {
    positioning:
      'The "no-compromise" mid-range earbuds brand — delivering premium ANC and 40-hour battery at an honest price. Positioned against the "overpromise trap" of cheap competitors.',
    messaging:
      '"Real ANC. Real Battery. Real Price." Lead with transparent specs and side-by-side comparisons vs. Sony/Apple on the features that actually matter to mid-range shoppers. Emphasize trust signals: real user reviews, return policy, warranty.',
    channel_strategy:
      '① Amazon PPC targeting "earbuds under $50 ANC" long-tail keywords — low CPC, high purchase intent. ② YouTube/TikTok review seeding with tech micro-influencers (50K–500K subs) for organic credibility. ③ Amazon A+ Content with comparison tables vs. competitors. ④ Retarget with Sponsored Display for cart abandonments.',
  },
};

export const petbrush_report: ReportData = {
  keyword: 'pet grooming brush',
  region: 'SEA',
  platform: 'TikTok',
  summary:
    'SEA\'s pet care market is in a growth inflection — Thailand, Vietnam, and Indonesia are collectively adding 3M+ new pet owners annually. TikTok Shop is the fastest-growing discovery channel, with pet grooming tools generating viral content organically. The market is fragmented with no dominant brand below the $15 price ceiling. Self-grooming tools that double as bonding experiences are outperforming traditional grooming brushes by 3x in content engagement.',
  competitors: [
    {
      name: 'Furminator deShedding',
      price: '$18.50',
      rating: 4.7,
      reviews: '12,400',
      features: ['Steel comb', 'Ergonomic handle', 'Cat & dog variants'],
      badge: 'Top Rated',
    },
    {
      name: 'Hertzko Self-Cleaning',
      price: '$12.99',
      rating: 4.5,
      reviews: '8,210',
      features: ['Retractable pins', 'One-click clean', 'Soft tips'],
      badge: 'Viral on TikTok',
    },
    {
      name: 'Doxo Pet Glove',
      price: '$8.90',
      rating: 4.2,
      reviews: '5,600',
      features: ['Silicone tips', 'Massage + groom', 'Fits all hand sizes'],
    },
    {
      name: 'Local SEA Brand A',
      price: '$5.50',
      rating: 3.9,
      reviews: '2,100',
      features: ['Basic bristles', 'Colorful packaging'],
    },
  ],
  price_analysis: {
    budget: 'Under $8 — Local brands. Low quality, impulse buy driven.',
    mid: '$8–$18 — Best performing on TikTok Shop. Must have visual "wow" factor in videos.',
    premium: '$18+ — Furminator-tier. Works for enthusiasts but slow in SEA price-sensitive market.',
    insight:
      'TikTok SEA buyers respond to product demos. A self-cleaning mechanism or satisfying visual result (hair ball removal) dramatically boosts conversion. Price under $15 is the mental threshold.',
  },
  customer_insights: [
    {
      type: 'values',
      label: 'What Users Care About',
      content:
        'Cute design and pastel colors drive shareability. Pet owners want grooming to feel like bonding time. Products with visible "satisfying" results (large hair clumps removed cleanly) dominate TikTok organic content.',
    },
    {
      type: 'complaints',
      label: 'Top Complaints',
      content:
        'Pins that scratch pet skin, difficult to clean after use, handles that slip in sweaty hands, and packaging that looks cheap on camera (bad for UGC). Many local brands have no after-sales support.',
    },
    {
      type: 'gap',
      label: 'Market Gap',
      content:
        'No brand has owned the "TikTok-native pet grooming" positioning in SEA. Products designed specifically for video demonstration (dramatic before/after, satisfying clean mechanism) at sub-$15 price point have huge viral potential.',
    },
  ],
  gtm: {
    positioning:
      'The first TikTok-native pet grooming brand in SEA — designed to create shareable moments while keeping pets healthy and happy. Visual-first product design meets functional grooming.',
    messaging:
      '"5 minutes. Zero mess. One happy pet." Lead with demo videos showing the self-clean mechanism. Build a #PetGroomingChallenge hashtag campaign. Partner with SEA pet influencers for authentic "my cat loves it" content.',
    channel_strategy:
      '① TikTok Shop affiliate program — recruit 200+ micro pet influencers at zero upfront cost. ② Live commerce sessions in TH/VN markets (highest TikTok Shop GMV in SEA). ③ Shopee cross-listing for search-intent buyers. ④ Ride trending SEA pet hashtags: #แมวไทย #kucing #mèocưng.',
  },
};

export const yogamat_report: ReportData = {
  keyword: 'yoga mat',
  region: 'US',
  platform: 'Amazon',
  summary:
    'The US yoga mat market generates $380M+ annually on Amazon with sustained 12% YoY growth driven by the home fitness boom. The category is bifurcated: mass-market PVC mats dominate volume, while premium eco-materials (natural rubber, cork, TPE) are growing 3x faster. Brand loyalty is low — 71% of purchases are first-time brand buyers. Sustainability messaging and thickness/grip performance are the top conversion drivers.',
  competitors: [
    {
      name: 'Liforme Original',
      price: '$150.00',
      rating: 4.8,
      reviews: '9,201',
      features: ['Natural rubber', 'AlignForMe system', '4.2mm', 'UK-made'],
      badge: 'Premium Leader',
    },
    {
      name: 'Manduka PRO',
      price: '$120.00',
      rating: 4.7,
      reviews: '24,890',
      features: ['6mm dense cushion', 'Lifetime guarantee', 'PVC-free', 'Non-slip'],
      badge: 'Best Seller',
    },
    {
      name: 'Gaiam Classic',
      price: '$24.98',
      rating: 4.4,
      reviews: '112,403',
      features: ['6mm thick', '15 colors', 'Sticky non-slip', 'Carry strap'],
    },
    {
      name: 'Retrospec Solana',
      price: '$29.99',
      rating: 4.5,
      reviews: '67,120',
      features: ['TPE foam', '7 colors', '1/4 inch thick', 'Lightweight'],
    },
    {
      name: 'Jade Harmony',
      price: '$74.95',
      rating: 4.6,
      reviews: '18,440',
      features: ['Natural rubber', 'Open-cell grip', 'Plants a tree per mat', '3/16 inch'],
    },
  ],
  price_analysis: {
    budget: 'Under $30 — Volume market. Gaiam dominates. Difficult to differentiate.',
    mid: '$30–$80 — Fastest growing. Eco-materials + performance claims = strong conversion.',
    premium: '$80–$150 — Loyalist segment. Manduka/Liforme duopoly. Requires brand credibility.',
    insight:
      'The $45–$75 eco-premium tier (natural rubber or cork, strong sustainability story) is the highest-growth opportunity. Buyers here are willing to pay for values alignment, not just specs.',
  },
  customer_insights: [
    {
      type: 'values',
      label: 'What Users Care About',
      content:
        'Grip quality during hot yoga (no slipping when sweaty), thickness for joint protection, and eco/sustainability credentials. Alignment guides are a premium differentiator. Portability matters for studio commuters.',
    },
    {
      type: 'complaints',
      label: 'Top Complaints',
      content:
        'Budget mats degrade quickly (peeling, curling edges), strong off-gassing smell on PVC mats, slipping on hardwood floors, and poor carry straps. Premium mat buyers complain about heavy weight for studio transport.',
    },
    {
      type: 'gap',
      label: 'Market Gap',
      content:
        'No brand clearly owns "lightweight eco-mat for studio commuters" at the $50–$65 price point. Natural rubber with lightweight optimization (under 2kg) plus a strong sustainability story is an unaddressed combination.',
    },
  ],
  gtm: {
    positioning:
      'The eco-mat built for real yogis who commute to studios — natural rubber performance, 30% lighter than competitors, with a genuine sustainability mission. Not just a mat; a values statement.',
    messaging:
      '"Practice anywhere. Harm nothing." Lead with the lightweight + eco credentials. Show commuter lifestyle content (rolling up mat, carrying on subway). Certification badges (OEKO-TEX, recycled packaging) visible on listing images.',
    channel_strategy:
      '① Amazon SEO for "natural rubber yoga mat lightweight" — high commercial intent, lower competition than head terms. ② Instagram/Pinterest lifestyle content targeting yoga studio communities. ③ YouTube yoga teacher sponsored integrations (teachers wield strong purchase influence). ④ Listing A/B test: sustainability story vs. performance specs — let data pick the lead hook.',
  },
};
