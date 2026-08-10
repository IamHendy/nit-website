export const COURSES = [
  {
    slug: "pgp-data-science-business-analytics-ai",
    icon: "BarChart3",
    title: "PGP in Data Science, Business Analytics & AI",
    shortDescription:
      "Kenya's first full-time Post-Graduate Program covering Data Science, Business Analytics, and AI in one program — designed with input from IBM, Microsoft, Google, and AWS experts, with live industry projects.",
    level: "Advanced",
    duration: "Full-time program — contact admissions for the current schedule.",
    objectives: [
      "Launch a career as a Data Scientist, Business Analyst, or AI Engineer in one of the fastest-growing, highest-paid fields",
      "Learn from a curriculum shaped with input from IBM, Microsoft, Google, and AWS experts",
      "Build a portfolio through 6 live industry projects",
      "Access financial aid / scholarship options for meritorious students",
    ],
    skills: [
      "Data Science",
      "Business Analytics",
      "Artificial Intelligence",
      "Machine Learning & Deep Learning",
      "Predictive & Marketing Analytics",
      "NLP",
    ],
    modules: [
      {
        title: "Full Curriculum",
        icon: "Info",
        summary:
          "The detailed, module-by-module curriculum for this program.",
        description:
          "Full module-by-module curriculum available on request — contact admissions@aegis.edu.",
      },
    ],
    prerequisites:
      "Designed for those launching a career in Data Science, Business Analytics, or AI — no specific prerequisite listed in the course material.",
    certificate:
      "Credential details for this program weren't included in the source material provided — please confirm with admissions before publishing.",
  },
  {
    slug: "certified-agentic-ai-professional",
    icon: "Bot",
    title: "Certified Agentic AI Professional",
    shortDescription:
      "Move beyond \"AI as a chatbot.\" Build autonomous, private, governed AI agents that run locally on your own machine — from your first local agent to a fully evaluated capstone system.",
    level: "Intermediate",
    duration: "120 hours total, delivered as integrated lab and theory.",
    objectives: [
      "Move from prompt-crafting to building autonomous agents that execute real work",
      "Apply the four core pillars: Privacy-First, Connectivity, Governance, and Evaluation",
      "Connect agents to real tools — Gmail, Drive, PDFs — via MCP (Model Context Protocol)",
      "Build, evaluate, and ship a capstone agent with full audit trails, running entirely on your own hardware",
    ],
    skills: [
      "Ollama",
      "n8n Desktop",
      "MCP (Model Context Protocol)",
      "agent-cli",
      "Human-in-the-Loop (HITL) governance",
      "AI evaluation & red-teaming",
    ],
    modules: [
      {
        title: "01 — The Local Ecosystem",
        icon: "Laptop",
        summary:
          "Install and configure the Agentic Stack (Ollama + n8n) and build your first local triage agent.",
        description:
          "Install and configure the Agentic Stack (Ollama + n8n) and build your first local triage agent using Micro-models. Outcome: a running local agent on your laptop, no cloud account required.",
      },
      {
        title: "02 — The Connected Agent",
        icon: "Plug",
        summary:
          "Connect agents to Gmail, Drive, and PDFs, and learn Instruction-Data Separation best practices.",
        description:
          "Connect agents to Gmail, Drive, and PDFs; learn Instruction-Data Separation and Markdown best practices. Outcome: an agent that reads your inbox and documents and writes clean structured output.",
      },
      {
        title: "03 — Multi-Agent Swarms",
        icon: "Users",
        summary:
          "Orchestrate collaborative agent teams and get introduced to agent-cli shortcuts.",
        description:
          "Orchestrate collaborative teams (Researcher + Critic) and get introduced to agent-cli for system-wide shortcuts. Outcome: a two-agent workflow that critiques itself and produces a better result.",
      },
      {
        title: "04 — Governance & Eval",
        icon: "Scale",
        summary:
          "Implement PII filters and HITL gates, then run red-teaming and evaluation exercises.",
        description:
          "Implement PII filters and HITL gates; run red-teaming exercises and scientific evals using agent-cli eval. Outcome: a governed agent with an automated eval harness you can re-run any time.",
      },
      {
        title: "05 — The Capstone",
        icon: "PackageCheck",
        summary:
          "Build, test, and package your own documented agent, ready for enterprise use.",
        description:
          "Build, test, and package your Domain Partner agent, documented with YAML frontmatter for enterprise readiness. Outcome: a packaged, documented agent ready to hand to your team.",
      },
    ],
    prerequisites:
      "Built for working professionals and domain experts who want to move beyond using AI as a chatbot. No prior LLM-engineering experience is required.",
    certificate:
      "Certified Agentic AI Professional credential on completion of the capstone module.",
  },
  {
    slug: "certified-data-protection-officer",
    icon: "FileLock2",
    title: "Certified Data Protection Officer (CDPO)",
    shortDescription:
      "Build the skills to serve as a Data Protection Officer under Kenya's Data Protection Act 2019 and GDPR — from DPIAs and data mapping to breach response and compliance audits.",
    level: "Intermediate",
    duration: "10-module program — contact admissions for the current schedule.",
    objectives: [
      "Understand Kenya's Data Protection Act 2019 and GDPR compliance frameworks",
      "Learn the DPO's role: informing, advising, monitoring, and liaising with regulators",
      "Run Data Protection Impact Assessments (DPIAs) and personal data audits",
      "Manage data breaches from identification through root-cause analysis and reporting to the ODPC",
    ],
    skills: [
      "Data Protection Act / GDPR compliance",
      "DPIA",
      "Breach management",
      "Data mapping",
      "PII identification",
      "Regulatory reporting",
    ],
    modules: [
      {
        title: "Module 1: Fundamentals of Privacy",
        icon: "BookOpen",
        summary:
          "The evolution of privacy and Kenya's Data Protection Law framework.",
        description:
          "Evolution of privacy, defining fundamentals of informational privacy and data protection, the framework of Data Protection Laws in Kenya, legislative journey and global benchmarks, and the constitutional role of the ODPC.",
      },
      {
        title: "Module 2: Principles of Data Protection & Rights",
        icon: "Scale",
        summary:
          "Lawful basis for processing, children's data, and controller/processor roles.",
        description:
          "Understanding the principles of Data Protection, the lawful basis for processing personal data (with a technical lab guide on HRM systems), children's personal data, the role of Data Controllers & Data Processors, and use of personal data for commercial purposes.",
      },
      {
        title: "Module 3: Data Subjects' Rights",
        icon: "UserCheck",
        summary:
          "Rights overview, data portability, and Data Subject Access Requests.",
        description:
          "Data subjects' rights, data portability and automated decision-making, and Data Subject Access Rights Requests (DSAR).",
      },
      {
        title: "Module 4: Data Protection Impact Assessment (DPIA)",
        icon: "ClipboardList",
        summary:
          "DPIA triggers, methodology, and privacy by design and default.",
        description:
          "Data Protection Impact Assessment triggers (with a technical lab guide), when a DPIA is required, DPIA methodology, privacy by design and default, and the DPIA sign-off process.",
      },
      {
        title: "Module 5: The Data Protection Officer",
        icon: "Briefcase",
        summary:
          "DPO appointment, roles, responsibilities, and enforcement.",
        description:
          "DPO appointment and institutional standing, Data Protection Officer roles and responsibilities, and enforcements and penalties.",
      },
      {
        title: "Module 6: Cross-Border Transfer & Governance",
        icon: "Globe2",
        summary:
          "Cross-border data flow, localization, and AI in data protection.",
        description:
          "Cross-border data flow, data localization mandates, and privacy & the role of Artificial Intelligence in data protection.",
      },
      {
        title: "Module 7: Breach Management & Enforcement",
        icon: "AlertTriangle",
        summary:
          "Incident response, containment, and reporting to the regulator.",
        description:
          "Incident Response Plan overview, data breach management, identification and containment, complaints from affected parties, Root Cause Analysis (RCA), and reporting to the authority (ODPC).",
      },
      {
        title: "Module 8: Data Subjects Audit",
        icon: "Search",
        summary:
          "Personal data audits, identifying PII, and Data Flow Diagrams.",
        description:
          "Personal Data Audit overview, sections of a Data Protection and Compliance Audit, ways to identify PII and sensitive data, Data Flow Diagrams (DFD), and the road to full compliance.",
      },
      {
        title: "Module 9: Data Mapping & Security",
        icon: "Map",
        summary:
          "Hands-on data mapping, migration, and security best practices.",
        description:
          "Data mapping (hands-on technical labs), data mapping methodology, migration and compliance, integration with existing systems, and best practices on enhancing data security.",
      },
      {
        title: "Module 10: Exam Preparation",
        icon: "GraduationCap",
        summary: "Final review and the certification exam.",
        description:
          "Preparation for exams. Final exam requires an 85% pass mark, followed by certification.",
      },
    ],
    prerequisites:
      "Open to managers and consultants, aspiring DPOs, Risk & Compliance Officers, HR, health professionals, marketing teams, and school administrators — no formal prerequisite listed.",
    certificate:
      "Certification awarded on completion, following a final exam (85% pass mark).",
  },
];

export function getCourseBySlug(slug) {
  return COURSES.find((c) => c.slug === slug);
}

export const INSTRUCTORS = [
  {
    name: "Amina Yusuf",
    title: "Lead Cybersecurity Instructor, CISSP",
    bio: "Over 10 years securing enterprise networks across East Africa before moving into full-time security training.",
  },
  {
    name: "David Mwangi",
    title: "Penetration Testing Instructor, OSCP",
    bio: "Former red-team consultant specializing in web application and network penetration testing.",
  },
  {
    name: "Grace Wanjiru",
    title: "GRC & Compliance Instructor, ISO 27001 Lead Auditor",
    bio: "Helps organizations navigate data protection law and build practical, auditable security programs.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Brian K.",
    course: "Ethical Hacking & Penetration Testing",
    quote:
      "The hands-on labs made all the difference — I went from reading about attacks to actually understanding how they work.",
  },
  {
    name: "Faith N.",
    course: "SOC Analyst",
    quote:
      "Practical, structured, and directly relevant to what I do at work now. I felt ready for my first SOC role after this course.",
  },
  {
    name: "Peter O.",
    course: "Cloud Security Fundamentals",
    quote:
      "Finally a course that explains cloud security without assuming you already know everything. Clear and well-paced.",
  },
];

export const FAQS = [
  {
    q: "Do I need prior experience to start?",
    a: "It depends on the program — check the Prerequisites section on each course’s page. Several of our programs are open to professionals without a technical background.",
  },
  {
    q: "Are the courses self-paced?",
    a: "Yes, all courses are self-paced with suggested weekly milestones so you can plan around your schedule.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes — every course includes a Certificate of Completion, and several are designed as groundwork for globally recognized industry certifications.",
  },
  {
    q: "Do you offer career support?",
    a: "Yes — enrolled students get access to career guidance, resume support, and interview preparation resources.",
  },
];