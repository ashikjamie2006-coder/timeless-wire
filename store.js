// ============================================================================
// Timeless Wire - Data Store & Content Engine
// Handles article persistence, retrieval, and seeding across all 5 channels
// ============================================================================

const STORAGE_KEY = "timeless_wire_articles_v1";

const DEFAULT_ARTICLES = [
  {
    id: "ancient-bronze-age-collapse",
    title: "The Bronze Age Collapse: When Civilization Vanished in 50 Years",
    slug: "bronze-age-collapse",
    category: "Ancient History",
    author: "Dr. Alistair Vance",
    date: "October 4, 2026",
    readTime: "7 min read",
    featured: true,
    status: "Published",
    coverImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Around 1177 BCE, a dazzlingly interconnected network of Mediterranean empires suddenly fell into ruin. Archaeologists are piecing together how famine, drought, and enigmatic invaders brought an era to an abrupt end.",
    content: `
      <p class="lead">Between Greece, Egypt, the Levant, and Mesopotamia flourished one of the ancient world's most vibrant commercial and diplomatic networks. Scribes communicated in Akkadian cuneiform, trade ships laden with Cornish tin and Cypriot copper crossed Aegean waters, and royal courts exchanged diplomatic gifts. Then, in the span of less than two generations, virtually every major urban center between Greece and Gaza was burned to the ground.</p>
      
      <h2>The Anatomy of a Systemic Shock</h2>
      <p>For decades, historians attributed this cataclysm strictly to the mysterious 'Sea Peoples'—a shadowy confederation of seaborne raiders mentioned in Ramesses III's funerary temple at Medinet Habu. However, modern paleoclimatological data reveals a far more insidious culprit: a protracted mega-drought that triggered cascading agricultural collapse.</p>
      
      <blockquote>
        "The collapse was not caused by a single asteroid-like blow, but by hyper-fragility. When one vital link in the Bronze Age globalized supply chain broke, the entire civilizational architecture folded."
      </blockquote>
      
      <h2>Lessons for the 21st Century</h2>
      <p>The lesson of 1177 BCE is not that bronze gave way to iron, but that complex, tightly coupled systems carry hidden systemic vulnerabilities. When climate distress, social rebellion, trade disruption, and external conflict strike simultaneously, even the mightiest empires can unravel with terrifying speed.</p>
    `
  },
  {
    id: "silk-road-caravan-master",
    title: "The Caravan Master of the Taklamakan: Whispers of the Silk Road",
    slug: "silk-road-caravan-master",
    category: "Stories & Lore",
    author: "Elena Zhao",
    date: "October 3, 2026",
    readTime: "5 min read",
    featured: false,
    status: "Published",
    coverImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Along the northern rim of the Sea of Death, solitary Sogdian merchants guided hundreds of Bactrian camels loaded with lapis lazuli and raw silk, connecting cultures across thousands of leagues.",
    content: `
      <p class="lead">In the Sogdian tongue, the Taklamakan Desert was known simply as the place where 'you go in, but do not come out.' Yet for three centuries during the height of the Tang dynasty, it served as the bustling artery of Eurasian civilization.</p>
      
      <h2>The Unwritten Codes of Desert Trade</h2>
      <p>The caravan masters were more than logistics operators; they were diplomats, polyglots, and bankers. Caravans carried letters written on wooden slips, stamped with clay seals that were legally honored from Chang'an to Constantinople.</p>
      
      <p>Through their arduous journeys, these resilient traders carried more than physical goods: they disseminated Buddhism, Nestorian Christianity, paper-making secrets, and astronomical tables that permanently altered the intellectual landscape of medieval Eurasia.</p>
    `
  },
  {
    id: "global-clean-energy-transition-2026",
    title: "Global Clean Energy Transition: The Geopolitics of Critical Minerals",
    slug: "global-clean-energy-transition",
    category: "News & Dispatches",
    author: "Marcus Lindqvist",
    date: "October 2, 2026",
    readTime: "6 min read",
    featured: false,
    status: "Published",
    coverImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    excerpt: "As nations speed up grid decarbonization, the battleground of international security has migrated from crude oil pipelines to rare earth processing, copper refineries, and lithium salt flats.",
    content: `
      <p class="lead">The worldwide shift from fossil-fuel combustion to electrified renewable power is often framed purely as a triumph of climate science. Yet beneath the technological surface lies an intense diplomatic and economic chess game.</p>
      
      <h2>The New Resource Map</h2>
      <p>Unlike oil, which can be pumped and refined in diverse geopolitical jurisdictions, battery-grade lithium, cobalt, and neodymium pass through heavily concentrated industrial bottlenecks. Over 65% of chemical refining capacity currently resides within East Asia.</p>
      
      <p>Western economies and emerging nations in South Asia are now actively pursuing regional processing partnerships to safeguard high-capacity grid storage and electric mobility pipelines against international shocks.</p>
    `
  },
  {
    id: "autonomous-commerce-multi-vendor-2027",
    title: "The Rise of Autonomous Commerce: How Digital Marketplaces Are Transforming",
    slug: "autonomous-commerce-multi-vendor",
    category: "Business & Markets",
    author: "Samantha Torres",
    date: "October 1, 2026",
    readTime: "8 min read",
    featured: false,
    status: "Published",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Decentralized fulfillment, real-time escrow micro-settlements, and algorithmic take-rates are transforming traditional retail into intelligent, frictionless multi-seller ecosystems.",
    content: `
      <p class="lead">For twenty years, digital marketplaces operated on monolithic centralized databases with batch-processed merchant payouts. Today, next-generation platforms are adopting Domain-Driven event streaming to achieve instant, transparent commerce.</p>
      
      <h2>Algorithmic Split Settlement</h2>
      <p>By decomposing buyer carts into sovereign vendor consignments at the domain level, contemporary platforms can execute precise double-entry financial holds. Merchants gain immediate visibility into order allocation, escrow maturity timers, and automated disbursements.</p>
      
      <p>The result is a radically more resilient marketplace structure that eliminates payment disputes, reduces platform overhead, and fosters seller loyalty through verifiable trust.</p>
    `
  },
  {
    id: "review-architecture-of-deep-time",
    title: "Review: 'The Architecture of Deep Time' — A Masterclass in Long-Term Thinking",
    slug: "review-architecture-deep-time",
    category: "In-Depth Reviews",
    author: "Julian Hayes",
    date: "September 29, 2026",
    readTime: "4 min read",
    featured: false,
    status: "Published",
    coverImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80",
    excerpt: "In a world consumed by 24-hour news cycles and quarterly earnings, historian Elena Rostova presents an urgent defense of century-scale civilizational planning.",
    content: `
      <p class="lead">Few books arrive with the moral weight and intellectual rigor of Elena Rostova's latest monograph, <em>The Architecture of Deep Time</em>. It is simultaneously an archaeological treatise and a searing critique of modern short-termism.</p>
      
      <h2>The Cathedral Mindset</h2>
      <p>Rostova examines how medieval stonemasons laid foundations for cathedrals they knew they would never see completed within their lifespans. She contrasts this with our digital era's obsession with instant gratification, proposing concrete institutional reforms to protect public goods across generations.</p>
      
      <p><strong>Verdict:</strong> 5 / 5 Stars. An indispensable read for policymakers, technologists, and anyone concerned with humanity's trajectory over the next millennium.</p>
    `
  }
];

export function getArticles() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_ARTICLES));
      return DEFAULT_ARTICLES;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error("Failed to read from localStorage:", err);
    return DEFAULT_ARTICLES;
  }
}

export function getArticleById(id) {
  const articles = getArticles();
  return articles.find((a) => a.id === id || a.slug === id);
}

export function saveArticle(articleData) {
  const articles = getArticles();
  const existingIndex = articles.findIndex((a) => a.id === articleData.id);

  if (existingIndex >= 0) {
    articles[existingIndex] = { ...articles[existingIndex], ...articleData };
  } else {
    const newArticle = {
      ...articleData,
      id: articleData.id || "post-" + Date.now(),
      slug: (articleData.title || "story")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
      date: articleData.date || new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    };
    articles.unshift(newArticle);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  return true;
}

export function deleteArticle(id) {
  let articles = getArticles();
  articles = articles.filter((a) => a.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  return true;
}

export function toggleFeatured(id) {
  const articles = getArticles();
  const article = articles.find((a) => a.id === id);
  if (article) {
    article.featured = !article.featured;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  }
  return true;
}

export function resetToDefaults() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_ARTICLES));
  return DEFAULT_ARTICLES;
}

const COMMENTS_KEY = "timeless_wire_comments_v1";

const DEFAULT_COMMENTS = {
  "ancient-bronze-age-collapse": [
    {
      id: "c-1",
      articleId: "ancient-bronze-age-collapse",
      author: "Professor Kenji Sato",
      content: "The multi-causal model combining climate distress with seismic activity in the Aegean basin is now strongly supported by archaeoseismological fieldwork. Brilliant synthesis.",
      date: "October 4, 2026 at 4:15 PM"
    },
    {
      id: "c-2",
      articleId: "ancient-bronze-age-collapse",
      author: "Sarah Jenkins",
      content: "Fascinating parallels to our contemporary just-in-time global supply chains. A sobering reminder of the hidden fragility in hyper-connected civilizations.",
      date: "October 4, 2026 at 6:40 PM"
    }
  ],
  "autonomous-commerce-multi-vendor-2027": [
    {
      id: "c-3",
      articleId: "autonomous-commerce-multi-vendor-2027",
      author: "David Miller",
      content: "Event-driven split payments and algorithmic escrow holds are genuinely transforming cross-border marketplace logistics. Excellent breakdown.",
      date: "October 2, 2026 at 11:20 AM"
    }
  ]
};

export function getComments(articleId) {
  try {
    const raw = localStorage.getItem(COMMENTS_KEY);
    const store = raw ? JSON.parse(raw) : DEFAULT_COMMENTS;
    return store[articleId] || [];
  } catch (e) {
    return DEFAULT_COMMENTS[articleId] || [];
  }
}

export function getAllComments() {
  try {
    const raw = localStorage.getItem(COMMENTS_KEY);
    return raw ? JSON.parse(raw) : DEFAULT_COMMENTS;
  } catch (e) {
    return DEFAULT_COMMENTS;
  }
}

export function addComment(articleId, { author, content }) {
  const all = getAllComments();
  if (!all[articleId]) {
    all[articleId] = [];
  }

  const newComment = {
    id: "c-" + Date.now(),
    articleId,
    author: author || "Reader",
    content,
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit"
    })
  };

  all[articleId].unshift(newComment);
  localStorage.setItem(COMMENTS_KEY, JSON.stringify(all));
  return newComment;
}

export function deleteComment(articleId, commentId) {
  const all = getAllComments();
  if (all[articleId]) {
    all[articleId] = all[articleId].filter(c => c.id !== commentId);
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(all));
  }
  return true;
}


