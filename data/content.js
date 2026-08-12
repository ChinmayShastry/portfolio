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
    "I build RAG systems, LLM applications and machine-learning models, and I came to them after five years managing investment portfolios. Finance and AI is the intersection I want to keep working in.",

  // Résumé download link (file lives in /public). Set to "" to hide the button.
  resumeUrl: "/Chinmay_Shastry_Resume.pdf",
};

/* ────────────────────────────────────────────────
 *  Navbar links — each href must match a section id
 * ──────────────────────────────────────────────── */
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Why Me", href: "#why" },
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
    "I'm Chinmay Shastry, an AI engineer in Bengaluru. Before this I spent about five years running my own financial practice.",
    "The core of it was portfolio management — equity and derivatives, for a client list that eventually passed fifty. The rest was whatever the client needed: market consultation, sitting with someone until they were comfortable placing their own order and setting a stop loss, ITR filing, life insurance. I got used to explaining things to people who were nervous about their money.",
    "In 2025 I did the DataMites AI engineering programme here in Bengaluru — offline, in a classroom. From there I joined Rubixe as an AI engineer intern and spent nine months on computer vision and NLP systems, including a sign-language recogniser that reached 99.87% across 24 gestures. Alongside that I kept building my own things: a hybrid RAG system, an agentic résumé analyser, a finance research assistant. Three of them are live, and you can click straight through from this page.",
    "What I want next sits between the two. Most of the AI work I find genuinely interesting has a finance problem somewhere underneath it. Right now I'm learning FastAPI, MCP and system design, and I still check the markets most mornings.",
  ],

  // Quick facts / stats shown next to the bio
  stats: [
    { value: "5+", label: "Years in financial markets" },
    { value: "10+", label: "AI/ML projects built" },
    { value: "50+", label: "Clients advised" },
    { value: "3", label: "AI programmes & certifications" },
  ],
};

/* ────────────────────────────────────────────────
 *  "Why should you hire me?" section
 *  Keep these honest and specific — vague strengths ("hard worker",
 *  "team player") are the fastest way to lose a reader.
 * ──────────────────────────────────────────────── */
export const whyHireMe = {
  eyebrow: "Why Me",
  title: "Why should you hire me?",
  blurb: "Fair question. Here's the honest version.",
  reasons: [
    {
      title: "I bring a domain most AI engineers don't have",
      body: "Five years in equity and derivatives means nobody has to explain what a drawdown is, why a compliance document can't be loosely paraphrased, or what an analyst actually does all day. If your problem touches money, I've already lived in it.",
    },
    {
      title: "I've actually shipped things",
      body: "Three of my projects are live right now with public links, and the code is on GitHub. You can click through and judge them yourself before we ever get on a call.",
    },
    {
      title: "I can explain the complicated part",
      body: "I spent years telling clients why their portfolio moved, to people who were anxious and didn't speak the jargon. That turns out to be the same skill as explaining a model's output to whoever has to sign off on it.",
    },
    {
      title: "I pick things up quickly",
      body: "I came from a commerce degree and retrained into deployed LLM applications inside a year. At the moment I'm working through FastAPI, MCP and system design — ask me again in a few months.",
    },
  ],
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
      "Hybrid retrieval that combines BM25 with dense semantic search and CrossEncoder reranking. I use RAGAS scores to check the retrieval is actually improving.",
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
      "Feature engineering, time-series work and cohort analysis, plus dashboards in Power BI and Tableau that are built to answer a question someone actually asked.",
  },
  {
    icon: Rocket,
    title: "Deployment & Delivery",
    description:
      "Getting models in front of real users — Streamlit Cloud, Gradio, and HuggingFace Spaces, with caching, retries, and logging that hold up in use.",
  },
  {
    icon: CandlestickChart,
    title: "Finance × AI",
    description:
      "Equity markets, derivatives and portfolio risk, learned over five years of managing real money for clients. It means I can read a finance problem before I start modelling it.",
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
      "Built and deployed end-to-end ML pipelines across computer vision and NLP, delivering three production-style systems. Handled the full model lifecycle from preprocessing through training, tuning and evaluation, and wrote the technical documentation covering performance, business impact and deployment.",
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
      "Ran an independent practice built around portfolio management — equity and derivatives for 50+ clients, using fundamental and technical analysis alongside options strategy. Also handled market consultation, taught clients the practical side of trading (placing orders, stop losses, targets), filed ITRs, and advised on life insurance. Built Python and Excel workflows to screen positions and track downside risk.",
  },
];

/* ────────────────────────────────────────────────
 *  Testimonials — currently OFF
 *
 *  The section is hidden while this array is empty, which is the
 *  right default: no testimonials reads as neutral, placeholder
 *  ones read as unfinished.
 *
 *  To switch it back on, add real quotes in this shape:
 *
 *    { quote: "…", name: "Priya Sharma", role: "Team Lead, Rubixe" }
 *
 *  Good people to ask: your Rubixe manager, your DataMites mentor,
 *  or a long-standing advisory client.
 * ──────────────────────────────────────────────── */
export const testimonials = [];

/* ────────────────────────────────────────────────
 *  Contact section + social links
 * ──────────────────────────────────────────────── */
export const contact = {
  headline: "Let's talk",
  blurb:
    "I'm looking for roles in AI engineering, data science and data analysis. If you're working on something where finance and AI overlap, I'd particularly like to hear about it.",

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
