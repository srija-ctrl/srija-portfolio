export const roles = [
  "AI & ML Engineer",
  "Deep Learning Enthusiast",
  "Computer Vision Builder",
  "Problem Solver",
  "Builder of Intelligent Systems",
];

export const skills = [
  { icon: "⚙️", cat: "Core Languages",   name: "Programming",        tags: ["Python","C","Java"],                                        level: 85 },
  { icon: "🤖", cat: "AI / ML",          name: "Machine Learning",   tags: ["Deep Learning","NLP","Computer Vision","Speech Processing"], level: 80 },
  { icon: "👁️", cat: "Libraries",        name: "Frameworks & Tools", tags: ["OpenCV","MediaPipe","PyAutoGUI","TensorFlow"],              level: 75 },
  { icon: "🖥️", cat: "CS Fundamentals",  name: "Core Concepts",      tags: ["Data Structures","Algorithms","OS","Computer Networks"],    level: 82 },
  { icon: "🗣️", cat: "Interpersonal",    name: "Soft Skills",        tags: ["Problem Solving","Team Collaboration","Communication","Adaptability"], level: 90 },
  { icon: "📋", cat: "Management",       name: "Project & Planning", tags: ["Project Management","Scheduling","Analytical Thinking"],    level: 78 },
];

export const projects = [
  {
    id: "gesture",
    num: "01",
    title: "Gesture-Based Computer Control",
    desc: "Hands-free machine control using real-time hand gesture recognition — mapping physical movement to system actions with sub-100ms latency.",
    tags: ["Python","OpenCV","MediaPipe","PyAutoGUI"],
    cat: "Computer Vision",
    filter: ["all","cv"],
    featured: true,
    date: "March 2026",
    problem: "Traditional input devices create barriers for accessibility and hands-free workflows. What if your hands in space were the interface?",
    solution: "A real-time CV pipeline tracking 21 hand landmarks per frame using MediaPipe, interpreting gesture patterns and translating them to native OS actions — navigation, scrolling, tab switching, and shortcuts — all without touching a device.",
    features: ["Real-time webcam processing","Low-latency gesture-to-action mapping","Modular gesture vocabulary","Seamless OS integration via PyAutoGUI","Team-designed system architecture"],
    learning: "Designing for real-world noise is harder than for ideal conditions. Lighting variation, occlusion, and hand size differences forced robustness into every layer of the pipeline — not as an afterthought.",
  },
  {
    id: "voice",
    num: "02",
    title: "Voice-Based AI Symptom Agent",
    desc: "A multilingual voice AI conducting real-time phone conversations to identify medical symptoms and route patients to appropriate care, faster.",
    tags: ["Python","NLP","Speech-to-Text","Conversational AI"],
    cat: "AI & ML",
    filter: ["all","ai"],
    featured: true,
    date: "September 2025",
    problem: "Medical triage is slow and language-dependent. Patients who don't speak the dominant language of a healthcare system face critical delays — a solvable problem.",
    solution: "A voice-enabled AI agent that conducts live phone conversations, transcribes speech in real-time, detects and translates symptoms across two languages, and provides preliminary triage guidance without a human operator.",
    features: ["Real-time speech-to-text pipeline","Multilingual processing (2 languages)","Conversational AI symptom detection","Preliminary triage guidance","Human-AI dialogue design"],
    learning: "Led the AI bot component — responsible for architecture decisions, NLP pipeline, and multilingual processing logic within a collaborative team.",
  },
  {
    id: "job",
    num: "03",
    title: "Job Scheduling System",
    desc: "An intelligent employee shift allocation engine that optimises workforce distribution, resolves conflicts and reduces administrative overhead.",
    tags: ["Java","Scheduling Algorithms","OOP"],
    cat: "Systems",
    filter: ["all","systems"],
    featured: false,
    date: "Ongoing",
    problem: "Small organisations spend significant time on manual shift planning — cognitive overhead that could be automated without sacrificing fairness or flexibility.",
    solution: "A Java application automating employee shift allocation with scheduling algorithms, intelligent conflict resolution, and balanced assignments — modular for future scale.",
    features: ["Algorithm-driven shift allocation","Conflict resolution logic","Balanced workforce distribution","Modular maintainable codebase","Scalability-first architecture"],
    learning: "Building for maintainability means writing code for someone six months from now — including yourself. Deepened appreciation for clean abstractions and separation of concerns.",
  },
  {
    id: "career-compass-ai",
    num: "04",
    title: "Career Compass AI",
    desc: "Developed Career Compass AI, an AI-powered career guidance platform using Python and Streamlit to provide personalized career recommendations and structured learning roadmaps.",
    tags: ["Python","Streamlit","Generative AI","Multilingual"],
    cat: "AI & ML",
    filter: ["all","ai"],
    featured: false,
    date: "2026",
    problem: "Students and early-career professionals often lack personalized, accessible career guidance tailored to their skills and aspirations.",
    solution: "A career guidance platform that combines Google Gemini insights, skill-gap analysis, and localized support to recommend career pathways and learning roadmaps in English and Telugu.",
    features: ["Personalized career recommendation engine","Google Gemini-powered context-aware insights","Local AI inference with Ollama and Llama 3","Multilingual support in English and Telugu","Generative AI-driven prototype development"],
    learning: "Balancing AI automation with usability showed that accessibility and localization are key for career tools, especially when targeting diverse learners in a hackathon timeline.",
    link: "https://career-compass-ai.streamlit.app/",
  },
];

export const education = [
  {
    year: "2023 — Present",
    degree: "B.Tech — CSE (AI & ML)",
    school: "GITAM (Deemed to be University), Hyderabad",
    detail: "Specialising in Artificial Intelligence and Machine Learning. Coursework: Deep Learning, Machine Learning, Data Structures & Algorithms, Operating Systems, Computer Networks.",
  },
  {
    year: "2021 — 2023",
    degree: "Intermediate (MPC)",
    school: "Narayana Jr College, Hyderabad",
    detail: "Mathematics, Physics, and Chemistry — building the analytical foundation for engineering and AI work.",
  },
  {
    year: "2021",
    degree: "Class 10",
    school: "Narayana High School, Hyderabad",
    detail: "Strong academic foundation across sciences and mathematics.",
  },
];

export const certifications = [
  { org: "Google",                    name: "Project Management Specialization",  status: "completed" },
  { org: "IIT Roorkee via Intellipaat", name: "Professional Certification Program", status: "ongoing"   },
];

export const activities = [
  {
    role: "Vice President",
    title: "Enigma AI & DS Club",
    desc: "Planning AI/DS events, managing club operations, and fostering student participation in technical and community-building activities.",
    year: "Ongoing",
  },
  {
    role: "Student Life Associate",
    title: "'25–26 Cohort",
    desc: "Organising campus events, coordinating student activities, and improving engagement across university initiatives.",
    year: "2025",
  },
];
