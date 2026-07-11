/**
 * ════════════════════════════════════════════════════════════════
 *  SITE CONTENT — the only file you need to edit
 * ════════════════════════════════════════════════════════════════
 *  Everything visible on the site (name, bio, skills, projects,
 *  experience, testimonials, socials, SEO tags) lives here.
 *  Components read from this file — you never need to touch them.
 *
 *  It has been pre-filled from Chinmay's résumé (Feb 2026 version).
 *  Anything marked  // TODO  still needs your attention — mostly
 *  links, photos, and the Formspree form ID.
 * ════════════════════════════════════════════════════════════════
 */

import {
  Bot,
  BrainCircuit,
  CandlestickChart,
  BarChart3,
  Rocket,
  Handshake,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

/* ────────────────────────────────────────────────
 *  SEO / social sharing tags (used in app/layout.js)
 * ──────────────────────────────────────────────── */
export const siteMeta = {
  title: "Chinmay Shastry — AI Engineer",
  description:
    "AI Engineer with a finance background — building RAG systems, agentic LLM workflows, and deep-learning models in Bengaluru, India.",
  // TODO: replace with your real deployed URL after your first deploy
  url: "https://your-portfolio.vercel.app",
  // TODO: drop a 1200×630 PNG/JPG at public/images/og.png and set this
  // to "/images/og.png" for rich link previews on LinkedIn / X.
  ogImage: "",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "RAG",
    "LLM",
    "GenAI",
    "Finance",
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

  // The typing/rotating tagline in the hero — add or remove freely
  roles: [
    "AI Engineer",
    "RAG & LLM Systems Builder",
    "Finance Professional",
    "Deep Learning Practitioner",
  ],

  // One-liner under the tagline
  intro:
    "I build AI systems with a financier's eye — hybrid RAG pipelines, agentic workflows, and deep-learning models that turn messy real-world data into confident decisions.",

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
  // TODO: replace the placeholder with a real photo — drop it at
  // public/images/profile.jpg and change this path.
  photo: "/images/profile.svg",
  photoAlt: "Portrait of Chinmay Shastry",

  // Each string renders as its own paragraph
  bio: [
    "Hi, I'm Chinmay — a Bengaluru-based AI engineer who found his way into technology through an unexpected door: the stock market. I spent five years as a portfolio manager and financial advisor, helping people make sense of their money through market highs and lows. Somewhere along the way, I realised I was more fascinated by the patterns hiding in the data than by the trades themselves — so I followed that curiosity all the way into AI.",
    "These days I split my time between building AI systems, studying fintech at IIM Bangalore, and keeping one eye on the markets (old habits die hard). What drives me is the sweet spot where the two worlds meet — using technology to make finance clearer, fairer, and a little more human.",
    "Outside of work, I'm a chronic learner: always halfway through a new course, a finance book, or an experiment that started as 'just a quick idea'. I believe in clear communication, honest work, and building things people actually use.",
  ],

  // Quick facts / stats shown next to the bio
  stats: [
    { value: "5+", label: "Years in financial markets" },
    { value: "10+", label: "AI/ML projects built" },
    { value: "50+", label: "Clients advised" },
    { value: "3", label: "AI certifications" },
  ],
};

/* ────────────────────────────────────────────────
 *  Skills / "What I Do" section
 *  icon: any icon imported from lucide-react at the top of this file
 * ──────────────────────────────────────────────── */
export const services = [
  {
    icon: Bot,
    title: "GenAI & LLM Engineering",
    description:
      "Hybrid RAG pipelines, agentic workflows, and prompt engineering with LangChain, LlamaIndex, FAISS/ChromaDB, and the OpenAI API.",
  },
  {
    icon: BrainCircuit,
    title: "Machine & Deep Learning",
    description:
      "End-to-end ML pipelines — CNNs, transfer learning, XGBoost — built with TensorFlow, PyTorch, and scikit-learn.",
  },
  {
    icon: CandlestickChart,
    title: "Finance & Quant Analysis",
    description:
      "Equity markets, derivatives strategy, portfolio management, and time-series modeling grounded in real advisory experience.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Visualization",
    description:
      "Feature engineering, cohort analysis, and clear storytelling with Pandas, Plotly, Power BI, and Tableau.",
  },
  {
    icon: Rocket,
    title: "Deployment & MLOps",
    description:
      "Shipping models to real users via Streamlit, Gradio, HuggingFace Spaces, Docker, and AWS — with logging, caching, and retries.",
  },
  {
    icon: Handshake,
    title: "Business & Client Advisory",
    description:
      "Translating complex technical and financial detail into clear, outcome-oriented recommendations for stakeholders.",
  },
];

// The chip cloud under the service cards — add/remove freely
export const toolbelt = [
  "Python",
  "SQL",
  "LangChain",
  "LlamaIndex",
  "OpenAI API",
  "HuggingFace",
  "FAISS",
  "ChromaDB",
  "TensorFlow",
  "PyTorch",
  "scikit-learn",
  "XGBoost",
  "Pandas",
  "NumPy",
  "Streamlit",
  "Power BI",
  "Tableau",
  "Docker",
  "AWS",
  "Git",
];

/* ────────────────────────────────────────────────
 *  Projects section
 *  - image: swap the SVG placeholders for real screenshots
 *    (drop files in public/images/projects/ and update the paths)
 *  - liveUrl / sourceUrl: set to "" to hide that button
 * ──────────────────────────────────────────────── */
export const projects = [
  {
    title: "AI Finance Research Assistant",
    description:
      "AI-powered research assistant for Nifty 250 stocks and commodities — real-time Yahoo Finance + NewsAPI pipelines, GPT-4o-mini analysis, sentiment scoring, and interactive Plotly dashboards.",
    image: "/images/projects/finance-assistant.svg",
    alt: "AI Finance Research Assistant project preview",
    tags: ["Python", "LLM", "Streamlit", "Plotly", "Finance"],
    liveUrl: "https://ai-finance-research-assistant.streamlit.app/",
    sourceUrl: "https://github.com/ChinmayShastry/ai-finance-research-assistant",
  },
  {
    title: "DocChat AI — Hybrid RAG",
    description:
      "Document intelligence with BM25 + semantic search + CrossEncoder reranking. Improved RAGAS context precision from ~78% to 100%, with multi-document support and streaming answers.",
    image: "/images/projects/docchat.svg",
    alt: "DocChat AI hybrid RAG project preview",
    tags: ["RAG", "LangChain", "FAISS", "BM25", "Reranking"],
    liveUrl: "https://docchat-ai.streamlit.app",
    sourceUrl: "https://github.com/ChinmayShastry/docchat-ai",
  },
  {
    title: "Enterprise RAG System",
    description:
      "Production-ready RAG pipeline with RBAC-enforced document access, rotating query logs, LRU caching, and Tenacity retries — mirroring data-governance needs in asset management.",
    image: "/images/projects/enterprise-rag.svg",
    alt: "Enterprise RAG system project preview",
    tags: ["RAG", "RBAC", "Production", "Streamlit Cloud"],
    liveUrl: "",
    // TODO: no public repo found for this project — push it to GitHub
    // and replace this with the exact repo URL
    sourceUrl: "https://github.com/ChinmayShastry",
  },
  {
    title: "LLM-Powered Resume Analyzer",
    description:
      "Agentic resume evaluation with autonomous multi-step reasoning (parse → extract → analyse → output) producing role-specific skill-gap analysis and live scoring dashboards.",
    image: "/images/projects/resume-analyzer.svg",
    alt: "LLM-powered resume analyzer project preview",
    tags: ["Agentic AI", "LLM", "Streamlit", "NLP"],
    liveUrl: "https://resume-aianalyzer.streamlit.app/",
    sourceUrl: "https://github.com/ChinmayShastry/ai-resume-analyzer",
  },
  {
    title: "Pneumonia Detection CNN",
    description:
      "Custom 4-block CNN with VGG16/ResNet50 transfer learning for chest X-ray classification, tuned for clinical sensitivity with Grad-CAM interpretability.",
    image: "/images/projects/pneumonia-cnn.svg",
    alt: "Pneumonia detection CNN project preview",
    tags: ["Computer Vision", "CNN", "Transfer Learning", "Grad-CAM"],
    liveUrl: "",
    // TODO: no public repo found for this project — push it to GitHub
    // and replace this with the exact repo URL
    sourceUrl: "https://github.com/ChinmayShastry",
  },
  {
    title: "Telecom Churn Prediction",
    description:
      "Business-centric churn model on a 243K-customer dataset using XGBoost and SHAP — quantifying cost-benefit trade-offs to drive retention strategy.",
    image: "/images/projects/churn-prediction.svg",
    alt: "Telecom churn prediction project preview",
    tags: ["XGBoost", "SHAP", "Predictive Modeling"],
    liveUrl: "",
    // TODO: no public repo found for this project — push it to GitHub
    // and replace this with the exact repo URL
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
    period: "Dec 2025 — May 2026",
    location: "Bengaluru, India",
    description:
      "Project-based AI engineering internship: designed and deployed end-to-end ML pipelines across computer vision and NLP — pneumonia detection, traffic-sign recognition, and Indian Sign Language recognition (99.87% accuracy).",
  },
  {
    type: "education",
    title: "IIMBx Fintech Programme",
    org: "IIM Bangalore",
    period: "2025 — Sep 2026 (expected)",
    location: "Online",
    description:
      "Deepening financial domain proficiency — fintech strategy, markets, and the business side of applied AI.",
  },
  {
    type: "certification",
    title: "AI Engineer Certifications",
    org: "DataMites · NASSCOM · IABAC",
    period: "2025 — 2026",
    location: "Bengaluru, India",
    description:
      "AI Engineer Professional Program (DataMites, offline) plus AI Engineer certifications from NASSCOM and IABAC.",
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
    org: "Independent — Freelance",
    period: "2019 — 2024",
    location: "Bengaluru, India",
    description:
      "Managed equity and derivatives portfolios for 50+ clients using fundamental and technical analysis, corporate-finance valuation, and options strategies to optimize risk-adjusted returns.",
  },
];

/* ────────────────────────────────────────────────
 *  Testimonials — set `testimonials = []` to hide the section
 * ──────────────────────────────────────────────── */
export const testimonials = [
  // TODO: replace all three with real quotes (colleagues, clients, mentors)
  {
    quote:
      "Chinmay has a rare ability to translate a vague business problem into a working AI system — and then explain it back in plain language.",
    name: "Placeholder Name",
    role: "Senior Data Scientist, Example Corp",
  },
  {
    quote:
      "His financial domain knowledge made all the difference. The RAG system he built actually understood how our analysts work.",
    name: "Placeholder Name",
    role: "Product Manager, Example Fintech",
  },
  {
    quote:
      "Clear communicator, fast learner, and relentlessly curious. Chinmay raised the bar for every project he touched.",
    name: "Placeholder Name",
    role: "Mentor, AI Engineering Program",
  },
];

/* ────────────────────────────────────────────────
 *  Contact section + social links
 * ──────────────────────────────────────────────── */
export const contact = {
  headline: "Let's build something together",
  blurb:
    "Whether it's an AI engineering role, a freelance project, or just a conversation about RAG systems and markets — my inbox is open.",

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
