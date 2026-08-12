/**
 * ════════════════════════════════════════════════════════════════
 *  SITE CONTENT — the only file you need to edit
 * ════════════════════════════════════════════════════════════════
 *  Everything visible on the site (name, bio, skills, projects,
 *  experience, testimonials, socials, SEO tags) lives here.
 *  Components read from this file — you never need to touch them.
 *
 *  Built from Chinmay_Shastry_AI_Engineer_Resume.pdf (Aug 2026).
 *  Positioned for Data Analyst / Data Scientist / AI Engineer roles.
 *  Anything marked  // TODO  still needs your attention.
 * ════════════════════════════════════════════════════════════════
 */

import {
  Bot,
  Database,
  BrainCircuit,
  BarChart3,
  Rocket,
  CandlestickChart,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

/* ────────────────────────────────────────────────
 *  SEO / social sharing tags (used in app/layout.js)
 * ──────────────────────────────────────────────── */
export const siteMeta = {
  title: "Chinmay Shastry — AI / GenAI Engineer",
  description:
    "AI/GenAI Engineer in Bengaluru building hybrid RAG pipelines, agentic LLM workflows, and deep-learning systems — with five years in financial markets behind the technical decisions.",
  // TODO: replace with your real deployed URL after your first deploy
  url: "https://your-portfolio.vercel.app",
  // TODO: drop a 1200×630 PNG/JPG at public/images/og.png and set this
  // to "/images/og.png" for rich link previews on LinkedIn / X.
  ogImage: "",
  keywords: [
    "AI Engineer",
    "GenAI Engineer",
    "Data Scientist",
    "Data Analyst",
    "Machine Learning",
    "RAG",
    "LLM",
    "LangChain",
    "Bengaluru",
  ],
};

/* ────────────────────────────────────────────────
 *  Profile / hero section
 * ──────────────────────────────────────────────── */
export const profile = {
  name: "Chinmay Shastry",
  firstName: "Chinmay",
  location: "Bengaluru, India",
  email: "chinmay.v.shastry@gmail.com",

  // Small pulsing badge at the top of the hero.
  // Set to "" to hide it (e.g. once you've accepted a role).
  availability: "Available to join immediately",

  // The typing/rotating tagline in the hero. These deliberately span
  // all three role families you're targeting.
  roles: [
    "AI / GenAI Engineer",
    "Data Scientist",
    "Data Analyst",
    "RAG & LLM Systems Builder",
  ],

  // One-liner under the tagline
  intro:
    "I build applied GenAI systems — hybrid RAG pipelines, agentic LLM workflows, and deep-learning models taken from prototype to live deployment. Five years reading financial markets taught me to ask what an answer is worth before asking how to model it.",

  // Résumé download link (file lives in /public). Set to "" to hide the button.
  resumeUrl: "/Chinmay_Shastry_Resume.pdf",
};

/* ────────────────────────────────────────────────
 *  Navbar links — each href must match a section id
 * ──────────────────────────────────────────────── */
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "What I Do", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/* ────────────────────────────────────────────────
 *  About section
 * ──────────────────────────────────────────────── */
export const about = {
  photo: "/images/profile.jpg",
  photoAlt: "Portrait of Chinmay Shastry",

  // Each string renders as its own paragraph
  bio: [
    "Hi, I'm Chinmay. I came to AI the long way round — five years managing equity and derivatives portfolios in Bengaluru, pricing risk and reading balance sheets for a book of 50+ clients. What pulled me across was realising I cared more about the patterns underneath the trades than the trades themselves.",
    "So I retrained properly. In under two years I went from my first Python script to shipping production-style LLM applications — hybrid RAG systems, agentic tools, computer-vision models — most of them live and public. Picking up new frameworks quickly turned out to be the part that came naturally; the finance years gave me the sharper instinct for which problems are actually worth solving.",
    "Today I work across the full span: GenAI engineering, machine learning, and the data analysis that underpins both. I'm still a relentless learner — currently deep in FastAPI, MCP, and system design — I still keep one eye on the markets, and I still think the best technical work is the kind you can explain to someone who doesn't share your vocabulary.",
  ],

  // Quick facts / stats shown next to the bio
  stats: [
    { value: "5+", label: "Years in financial markets" },
    { value: "10+", label: "AI/ML projects shipped" },
    { value: "50+", label: "Clients advised" },
    { value: "3", label: "Professional AI credentials" },
  ],
};

/* ────────────────────────────────────────────────
 *  Intro video
 *  ⚠️  The whole section stays hidden until `src` is filled in,
 *  so you can leave this alone until your video is recorded.
 *
 *  TWO WAYS TO USE IT — pick with `type`:
 *
 *  1. type: "local"  (recommended — no third parties, no tracking)
 *       • Compress to ~15–25 MB, then drop it at public/media/intro.mp4
 *       • src: "/media/intro.mp4"
 *       • See the README for the exact ffmpeg command to compress it.
 *
 *  2. type: "youtube"  (use if your file is over ~40 MB)
 *       • Upload to YouTube as **Unlisted**
 *       • src: just the 11-character video ID, e.g. "dQw4w9WgXcQ"
 *       • Nothing loads from YouTube until the visitor clicks play,
 *         and it uses the no-cookie domain — so no tracking on arrival.
 * ──────────────────────────────────────────────── */
export const introVideo = {
  type: "local", // "local" | "youtube"

  // TODO: fill this in to switch the section on
  src: "",

  // Still frame shown before playback. Defaults to your headshot;
  // a dedicated still from the video looks better if you have one.
  poster: "/images/profile.jpg",

  // TODO (recommended): captions file at public/media/intro.vtt.
  // Many recruiters watch muted at their desk — captions matter.
  captions: "",

  eyebrow: "Say Hello",
  title: "A quick introduction",
  blurb:
    "Ninety seconds on who I am, how I got from trading floors to transformer models, and the kind of problems I want to work on next.",
  duration: "", // optional, e.g. "1:24" — shown next to the play button
};

/* ────────────────────────────────────────────────
 *  "What I Do" service cards
 *  icon: any icon imported from lucide-react at the top of this file
 * ──────────────────────────────────────────────── */
export const services = [
  {
    icon: Bot,
    title: "GenAI & LLM Engineering",
    description:
      "Agentic workflows, prompt and context engineering, and multi-model pipelines built with LangChain, LangGraph, and the major provider APIs.",
  },
  {
    icon: Database,
    title: "RAG & Retrieval Systems",
    description:
      "Hybrid retrieval combining BM25, dense semantic search, and CrossEncoder reranking — measured with RAGAS, not guesswork.",
  },
  {
    icon: BrainCircuit,
    title: "Machine & Deep Learning",
    description:
      "End-to-end pipelines across NLP and computer vision — CNNs, transfer learning, and gradient boosting, owned from preprocessing to evaluation.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Insight",
    description:
      "Feature engineering, time-series and cohort analysis, and dashboards that answer the business question rather than just displaying the data.",
  },
  {
    icon: Rocket,
    title: "Deployment & Delivery",
    description:
      "Getting models in front of real users — Streamlit Cloud, Gradio, and HuggingFace Spaces, with caching, retries, and logging that hold up in use.",
  },
  {
    icon: CandlestickChart,
    title: "Financial Domain Depth",
    description:
      "Equity markets, derivatives, valuation, and portfolio risk — genuine domain fluency, not a weekend spent reading about it.",
  },
];

/* ────────────────────────────────────────────────
 *  Skills, grouped by category.
 *  `note` renders as a small caption under the group.
 * ──────────────────────────────────────────────── */
export const skillGroups = [
  {
    title: "Languages & Data",
    items: ["Python", "SQL", "Pandas", "NumPy", "SciPy"],
  },
  {
    title: "GenAI & LLM",
    items: [
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "OpenAI API",
      "Anthropic Claude API",
      "Google Gemini API",
      "Groq API",
      "OpenRouter",
      "Omniroute",
      "HuggingFace",
      "Ollama",
      "Gemma",
      "NVIDIA Nemotron",
      "Prompt Engineering",
      "Agentic Workflows",
      "Multimodal Extraction",
    ],
  },
  {
    title: "Retrieval & Vector Search",
    items: [
      "RAG",
      "FAISS",
      "ChromaDB",
      "Pinecone",
      "BM25",
      "CrossEncoder Reranking",
      "Semantic Chunking",
      "Hybrid Search",
      "RAGAS Evaluation",
    ],
  },
  {
    title: "Machine Learning & Deep Learning",
    items: [
      "scikit-learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "XGBoost",
      "Random Forest",
      "CNN",
      "Transfer Learning",
      "SHAP",
    ],
  },
  {
    title: "Analysis, Visualization & BI",
    items: [
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Power BI",
      "Tableau",
      "Feature Engineering",
      "Time Series",
      "Cohort Analysis",
    ],
  },
  {
    title: "Deployment & Tooling",
    items: [
      "Streamlit",
      "Streamlit Cloud",
      "Gradio",
      "HuggingFace Spaces",
      "Git",
      "GitHub",
      "REST APIs",
      "Docker",
      "AWS EC2 / SageMaker",
    ],
  },
  {
    title: "AI-Assisted Development",
    items: [
      "Claude",
      "Claude Code",
      "Cowork",
      "OpenAI Codex",
      "Cursor",
      "Antigravity",
      "GitHub Copilot",
      "Gemini CLI",
    ],
    note: "Claude, Claude Code and Cowork are my daily drivers; I've worked across the rest of the agentic-coding landscape too.",
  },
];

/* Currently learning — shown as a separate, clearly-labelled group.
   Keeping this honest and visible reads as momentum, and it's the
   first thing to promote into skillGroups once you've shipped with it. */
export const learning = {
  title: "Currently growing into",
  note: "Actively building with these right now — listed here rather than above until they're in something I've shipped.",
  items: [
    "FastAPI",
    "Flask",
    "MCP (Model Context Protocol)",
    "Pydantic / Structured Outputs",
    "System Design",
    "MLflow",
    "GitHub Actions",
  ],
};

/* ────────────────────────────────────────────────
 *  Projects
 *  - liveUrl / sourceUrl: set to "" to hide that button
 *  - featured: true adds a small badge on the card
 * ──────────────────────────────────────────────── */
export const projects = [
  {
    featured: true,
    title: "DocChat AI — Hybrid RAG",
    description:
      "Document intelligence combining BM25 keyword retrieval, dense semantic search, and CrossEncoder reranking — lifting RAGAS context precision from ~78% to 100% on the evaluation set. Multi-document support with token-level streaming.",
    image: "/images/projects/docchat.svg",
    alt: "DocChat AI hybrid RAG project preview",
    tags: ["RAG", "LangChain", "FAISS", "BM25", "Reranking"],
    liveUrl: "https://docchat-ai.streamlit.app",
    sourceUrl: "https://github.com/ChinmayShastry/docchat-ai",
  },
  {
    featured: true,
    title: "AI Finance Research Assistant",
    description:
      "LLM-powered research tool covering Nifty 250 equities and commodities. Live Yahoo Finance and NewsAPI pipelines feed GPT-4o-mini modules for sentiment analysis and long-form research, surfaced through interactive Plotly dashboards.",
    image: "/images/projects/finance-assistant.svg",
    alt: "AI Finance Research Assistant project preview",
    tags: ["LLM", "Finance", "Streamlit", "Plotly", "NewsAPI"],
    liveUrl: "https://ai-finance-research-assistant.streamlit.app/",
    sourceUrl: "https://github.com/ChinmayShastry/ai-finance-research-assistant",
  },
  {
    title: "LLM-Powered Resume Analyzer",
    description:
      "Agentic evaluation system with autonomous multi-step reasoning (parse → extract → analyse → output), producing structured, role-specific skill-gap analysis and candidate recommendations through a live scoring dashboard.",
    image: "/images/projects/resume-analyzer.svg",
    alt: "LLM-powered resume analyzer project preview",
    tags: ["Agentic AI", "LLM", "NLP", "Streamlit"],
    liveUrl: "https://resume-aianalyzer.streamlit.app/",
    sourceUrl: "https://github.com/ChinmayShastry/ai-resume-analyzer",
  },
  {
    title: "Enterprise RAG System",
    description:
      "Modular, production-oriented RAG pipeline with RBAC-enforced document access, rotating query logs, LRU caching, and Tenacity retry logic — plus a feedback dashboard for continuous quality monitoring. The governance design mirrors regulated environments.",
    image: "/images/projects/enterprise-rag.svg",
    alt: "Enterprise RAG system project preview",
    tags: ["RAG", "RBAC", "Production", "Monitoring"],
    liveUrl: "",
    // TODO: no public repo found for this one — push it to GitHub and
    // replace this with the exact repo URL
    sourceUrl: "https://github.com/ChinmayShastry",
  },
  {
    title: "Computer Vision & Deep Learning",
    description:
      "Three production-style vision systems: a 4-block CNN for pneumonia detection with VGG16/ResNet50 transfer learning and Grad-CAM interpretability, Indian Sign Language recognition across 24 gestures at 99.87% accuracy, and a 43-class traffic-sign classifier.",
    image: "/images/projects/computer-vision.svg",
    alt: "Computer vision and deep learning portfolio preview",
    tags: ["CNN", "Transfer Learning", "Grad-CAM", "TensorFlow"],
    liveUrl: "",
    // TODO: push these to GitHub and link the repo here
    sourceUrl: "https://github.com/ChinmayShastry",
  },
  {
    title: "Predictive Modeling & Forecasting",
    description:
      "Telecom churn prediction on a 243K-customer dataset using XGBoost and SHAP, quantifying cost-benefit trade-offs to drive retention strategy — alongside a custom OLS-estimated SARIMA model with full ADF/ACF/PACF diagnostics for recursive forecasting.",
    image: "/images/projects/predictive-modeling.svg",
    alt: "Predictive modeling and forecasting project preview",
    tags: ["XGBoost", "SHAP", "SARIMA", "Time Series"],
    liveUrl: "",
    // TODO: push these to GitHub and link the repo here
    sourceUrl: "https://github.com/ChinmayShastry",
  },
];

/* ────────────────────────────────────────────────
 *  Experience / education timeline (newest first)
 *  type: "work" | "education" | "certification"  (picks the icon)
 * ──────────────────────────────────────────────── */
export const timeline = [
  {
    type: "work",
    title: "AI Engineer Intern",
    org: "Rubixe AI Solutions",
    period: "Oct 2025 — Jun 2026",
    location: "Bengaluru, India",
    description:
      "Designed and deployed end-to-end ML pipelines across computer vision and NLP, delivering three production-style systems. Owned the full model lifecycle — preprocessing, feature engineering, training, tuning, evaluation — and authored technical documentation covering performance, business impact, and deployment considerations.",
  },
  {
    type: "education",
    title: "Fintech Programme",
    org: "IIM Bangalore (IIMBx)",
    period: "2025 — Sep 2026 (expected)",
    location: "Online",
    // TODO: this isn't on your current résumé — either add it there or
    // remove this entry, so the two documents agree.
    description:
      "Deepening financial domain expertise — fintech strategy, market structure, and the commercial side of applied AI.",
  },
  {
    type: "certification",
    title: "AI Engineer Certifications",
    org: "NASSCOM · IABAC",
    period: "2026",
    location: "India",
    description:
      "Independently accredited AI Engineer certifications from NASSCOM and IABAC, validating applied machine learning and GenAI competency.",
  },
  {
    type: "education",
    title: "AI Engineer Professional Program",
    org: "DataMites",
    period: "2025",
    location: "Bengaluru, India",
    description:
      "Intensive offline professional programme covering the applied AI engineering stack — from classical machine learning through deep learning and deployment.",
  },
  {
    type: "education",
    title: "Bachelor of Commerce (B.Com)",
    org: "Gulbarga University",
    period: "Graduated Feb 2025",
    location: "India",
    description:
      "Graduated with 81.43% — financial accounting, corporate finance, and quantitative analysis.",
  },
  {
    type: "work",
    title: "Portfolio Manager & Financial Advisor",
    org: "Independent / Freelance",
    period: "2019 — 2024",
    location: "Bengaluru, India",
    description:
      "Managed equity and derivatives portfolios for 50+ clients using fundamental and technical analysis, valuation, and options strategy. Built Python and Excel screening workflows to track positions and quantify downside risk — and translated the results into recommendations non-technical clients could act on.",
  },
];

/* ────────────────────────────────────────────────
 *  Testimonials
 *  ⚠️  These are PLACEHOLDERS — replace them with real quotes from
 *  colleagues, mentors, or clients before you go live. Set
 *  `testimonials = []` to hide the section in the meantime.
 * ──────────────────────────────────────────────── */
export const testimonials = [
  {
    // TODO: replace with a real quote and attribution
    quote:
      "Chinmay turns a vague business problem into a working AI system, then explains it back in language anyone in the room can follow.",
    name: "Placeholder Name",
    role: "Placeholder Role, Company",
  },
  {
    // TODO: replace with a real quote and attribution
    quote:
      "The financial domain knowledge made the difference. The retrieval system he built actually understood how our analysts work.",
    name: "Placeholder Name",
    role: "Placeholder Role, Company",
  },
  {
    // TODO: replace with a real quote and attribution
    quote:
      "He picked up an unfamiliar stack faster than anyone I've worked with and was contributing meaningfully within weeks.",
    name: "Placeholder Name",
    role: "Placeholder Role, Company",
  },
];

/* ────────────────────────────────────────────────
 *  Contact section + social links
 * ──────────────────────────────────────────────── */
export const contact = {
  headline: "Let's build something together",
  blurb:
    "I'm open to AI engineering, data science, and data analyst roles — and always happy to talk shop about retrieval systems, markets, or where the two meet.",

  // TODO ─ REQUIRED for the form to work:
  //  1. Create a free account at https://formspree.io
  //  2. Create a new form and copy its ID (looks like "xkgwabcd")
  //  3. Paste it here:
  formspreeId: "",

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/ChinmayShastry",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chinmayshastry/",
      icon: Linkedin,
    },
    {
      label: "X / Twitter",
      href: "https://x.com/yourhandle", // TODO: add your handle or delete this entry
      icon: Twitter,
    },
    {
      label: "Email",
      href: "mailto:chinmay.v.shastry@gmail.com",
      icon: Mail,
    },
  ],
};
