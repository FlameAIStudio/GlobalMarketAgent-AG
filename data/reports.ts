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

export const smartwatch_report: ReportData = {
  keyword: 'smart watch',
  region: 'US',
  platform: 'Amazon',
  summary: 'The US smart watch market on Amazon is intensely polarized, generating over $6.5B annually. Apple and Samsung command the premium tier ($250+), while a vast array of OEM brands dominates the sub-$50 budget tier. Growth has slowed to 6% YoY, indicating a mature market where replacement cycles drive volume. The most significant whitespace lies in the $80–$150 mid-tier, specifically catering to rugged/outdoor use cases or specialized health monitoring without the premium ecosystem tax.',
  competitors: [
    { name: 'Apple Watch Series 9', price: '$399.00', rating: 4.8, reviews: '15,420', features: ['ECG app', 'Crash Detection', 'OLED', 'S9 SiP'], badge: 'Market Leader' },
    { name: 'Samsung Galaxy Watch 6', price: '$299.99', rating: 4.6, reviews: '8,905', features: ['Sleep coaching', 'BIA sensor', 'Sapphire glass'], badge: 'Android Top Pick' },
    { name: 'Amazfit T-Rex 2', price: '$189.99', rating: 4.5, reviews: '6,210', features: ['Military standard toughness', '24-day battery', 'Dual-band GPS'] },
    { name: 'Toobur Smart Watch', price: '$29.99', rating: 4.2, reviews: '24,118', features: ['Alexa built-in', '100+ sports modes', '14-day battery'] },
  ],
  price_analysis: {
    budget: 'Under $50 — Extremely high volume, low brand loyalty. Driven by coupons and basic notification needs.',
    mid: '$80–$180 — The "Prosumer Alternative" tier. Entry-level models thrive here on battery life claims.',
    premium: '$250+ — Dominated by iOS/Android ecosystem lock-in. Very high barrier to entry.',
    insight: 'Do not compete on general features. The mid-tier ($100) is viable only if addressing a specific niche (e.g., extreme sports, senior health monitoring) that Apple/Samsung fail to deliver.'
  },
  customer_insights: [
    { type: 'values', label: 'What Users Care About', content: 'In the mid-to-high tiers, battery life (measured in days, not hours) and GPS accuracy are paramount. In the budget tier, users mostly care about screen brightness, custom watch faces, and basic phone notification syncing.' },
    { type: 'complaints', label: 'Top Complaints', content: 'Budget watches frequently suffer from unreliable companion apps, disconnecting Bluetooth, and grossly inaccurate blood pressure/heart rate sensors which lead to high return rates and 1-star reviews.' },
    { type: 'gap', label: 'Market Gap', content: 'A rugged, utilitarian smart watch with a truly reliable companion app under $120. Most cheap rugged watches have terrible software, while premium fitness brands are too expensive for casual hikers.' }
  ],
  gtm: {
    positioning: 'The "unplugged" outdoor tracker. A rugged smartwatch that guarantees 15 days of battery with military-grade durability, built for people tired of charging their watch daily.',
    messaging: '"Leave your charger at home." Focus heavily on the multi-week battery and drop-test durability. Use direct comparisons against the battery limitations of premium watches.',
    channel_strategy: '① Partner with outdoor and camping influencers on YouTube for ruggedness stress-tests. ② Aggressive Amazon PPC on "premium alternative" and "rugged smartwatch" keywords. ③ Retargeting ads showing the watch surviving mud and water.'
  }
};

export const robot_vacuum_report: ReportData = {
  keyword: 'robot vacuum',
  region: 'US',
  platform: 'Amazon',
  summary: 'The robotic vacuum category is undergoing rapid premiumization. While the total market grows at 9% YoY, the $800+ "all-in-one" base station segment (self-emptying, self-washing mops) is surging at 45% YoY. New entrants are capturing premium market share away from legacy leaders. Budget LiDAR models ($200-$300) are commoditized. The critical battleground is AI obstacle avoidance and zero-maintenance base stations.',
  competitors: [
    { name: 'Roborock S8 Pro Ultra', price: '$1,599.99', rating: 4.6, reviews: '3,240', features: ['Auto-wash mop', 'Hot air drying', 'Dual roller brush'], badge: 'Premium Innovator' },
    { name: 'iRobot Roomba j7+', price: '$799.00', rating: 4.4, reviews: '12,890', features: ['Self-emptying', 'Pet poop avoidance', 'Dirt Detect'], badge: 'Household Name' },
    { name: 'eufy BoostIQ RoboVac 11S', price: '$139.99', rating: 4.5, reviews: '64,120', features: ['Super thin', 'Strong suction', 'Bump-and-go navigation'] },
    { name: 'Shark AV2501AE', price: '$349.99', rating: 4.3, reviews: '18,330', features: ['Bagless self-empty', 'LiDAR mapping', 'Pet hair focus'] },
  ],
  price_analysis: {
    budget: 'Under $150 — Dumb navigation (bump). Declining segment as LiDAR becomes cheaper.',
    mid: '$300–$500 — "Good enough" LiDAR and basic self-emptying dustbins.',
    premium: '$800+ — The growth engine. Fully autonomous self-cleaning base stations.',
    insight: 'Entering the hardware market is extremely capital intensive. The best margin opportunity for new entrants is not the vacuum itself, but high-margin proprietary consumables (cleaning solutions, bags) or niche variants.'
  },
  customer_insights: [
    { type: 'values', label: 'What Users Care About', content: 'Hands-free maintenance. Consumers no longer just want autonomous cleaning; they want autonomous maintenance (not having to clean the mop pads or empty the dustbin for 30+ days). App mapping speed is also highly praised.' },
    { type: 'complaints', label: 'Top Complaints', content: 'Robot getting stuck on cords/socks (failed obstacle avoidance), smelly mop pads if not dried properly, and the high ongoing cost of proprietary dust bags.' },
    { type: 'gap', label: 'Market Gap', content: 'A truly smell-free, pet-hair-immune system in the mid-tier ($400-$600) that utilizes bagless self-emptying but with advanced AI obstacle avoidance matching the premium tier.' }
  ],
  gtm: {
    positioning: 'The "Zero-Tangle, Zero-Subscription" smart cleaner. Positioned specifically aimed at pet owners who are frustrated by hair tangles and tired of buying expensive replacement dust bags continuously.',
    messaging: '"Cleans your floors, and cleans itself. No bags required." Emphasize the long-term cost savings of a bagless base station and the frustration-free anti-tangle brush design.',
    channel_strategy: '① TikTok UGC focusing specifically on the gross "stress test" (cleaning huge amounts of pet hair). ② Highlight the "TCO" (Total Cost of Ownership) in Amazon A+ content. ③ Affiliate marketing with pet-centric blogs and creators.'
  }
};

export const generic_fallback_report: ReportData = {
  keyword: 'market analysis',
  region: 'Global',
  platform: 'Web',
  summary: 'Based on initial NLP market scans, this category shows high fragmentation. The current structural dynamics suggest a market transitioning from early commoditization to feature-specific stratification. Incumbents control the high-volume generic keywords, forcing new entrants to rely on long-tail niche targeting. (Note: This is a robust framework generated by the AI agent as the specific keyword requires deeper real-time scraping).',
  competitors: [
    { name: 'Incumbent Brand Alpha', price: '$99.00', rating: 4.5, reviews: '10,000+', features: ['High Brand Equity', 'Broad Distribution', 'Legacy Tech'], badge: 'Market Leader' },
    { name: 'Aggressive Challenger', price: '$69.00', rating: 4.3, reviews: '5,000+', features: ['Price Disruption', 'Heavy Ads', 'Feature Parity'] },
    { name: 'Niche Premium Innovator', price: '$149.00', rating: 4.8, reviews: '1,000+', features: ['Design Focused', 'Community Led', 'High Margin'] }
  ],
  price_analysis: {
    budget: 'Lower 30% — High volume, thin margins. Dominated by white-label manufacturers and low brand loyalty.',
    mid: 'Middle 50% — High competition zone. Requires strong differentiation or ad spend to survive.',
    premium: 'Top 20% — Value derived from brand equity and specialized design rather than sheer specs.',
    insight: 'Avoid the mid-tier "dead zone" unless you have a 10x distribution advantage. Either disrupt the bottom with supply-chain efficiency or attack the top with brand.'
  },
  customer_insights: [
    { type: 'values', label: 'Core Purchase Drivers', content: 'Reliability, clear warranty terms, and strong social proof (UGC video reviews). Modern consumers heavily discount text-only reviews without photos.' },
    { type: 'complaints', label: 'Common Friction Points', content: 'Customer service unresponsiveness, product lifespan shorter than advertized, and confusing initial setup processes.' },
    { type: 'gap', label: 'Avenue for Disruption', content: 'Excellent post-purchase experience. Most brands in this generic tier abandon the user after the sale. An obsessive focus on customer success yields outsized loyalty.' }
  ],
  gtm: {
    positioning: 'The "Customer-Obsessed" alternative. Focus on the community and reliability rather than fighting a feature-by-feature spec war.',
    messaging: '"Built to last, supported forever." Provide transparent expectations and over-deliver on unboxing and setup experience. Emphasize human-based support.',
    channel_strategy: '① Capture high-intent search traffic via targeted Google/Amazon PPC. ② Build an email capture funnel for post-purchase upsells or referrals. ③ Leverage micro-influencers for authentic "first impressions" unboxing videos.'
  }
};
