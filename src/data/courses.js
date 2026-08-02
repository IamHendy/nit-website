export const COURSES = [
  {
    slug: "intro-to-cybersecurity",
    icon: "ShieldCheck",
    title: "Introduction to Cybersecurity",
    shortDescription:
      "A foundational overview of the cybersecurity landscape — threats, defenses, and the core principles every professional needs.",
    level: "Beginner",
    duration: "4 weeks",
    objectives: [
      "Understand the CIA triad and core security principles",
      "Recognize common attack types and threat actors",
      "Learn the basics of network, endpoint, and application security",
      "Build a foundation for specialized cybersecurity tracks",
    ],
    skills: ["Security fundamentals", "Threat awareness", "Risk basics", "Security terminology"],
    modules: [
      "What Is Cybersecurity? Core Concepts",
      "The CIA Triad: Confidentiality, Integrity, Availability",
      "Common Threats: Malware, Phishing, Social Engineering",
      "Introduction to Network & Endpoint Security",
      "Careers in Cybersecurity",
    ],
    prerequisites: "None — this course is designed for complete beginners.",
    certificate: "Certificate of Completion issued upon finishing all modules and the final quiz.",
  },
  {
    slug: "network-security-fundamentals",
    icon: "Network",
    title: "Network Security Fundamentals",
    shortDescription:
      "Learn how networks are attacked and defended — firewalls, segmentation, VPNs, and secure architecture design.",
    level: "Beginner",
    duration: "5 weeks",
    objectives: [
      "Understand TCP/IP and common network vulnerabilities",
      "Configure firewalls and basic network segmentation",
      "Learn how VPNs and secure tunnels protect data in transit",
      "Design a simple secure network architecture",
    ],
    skills: ["Firewall configuration", "Network segmentation", "VPN concepts", "Traffic analysis basics"],
    modules: [
      "Networking Refresher: TCP/IP, DNS, Routing",
      "Firewalls & Next-Gen Firewall Concepts",
      "VPNs and Secure Remote Access",
      "Network Segmentation & Zero Trust Basics",
      "Hands-on Lab: Securing a Sample Network",
    ],
    prerequisites: "Introduction to Cybersecurity, or basic networking knowledge.",
    certificate: "Certificate of Completion, with a badge toward the Network Security learning path.",
  },
  {
    slug: "ethical-hacking-penetration-testing",
    icon: "Bug",
    title: "Ethical Hacking & Penetration Testing",
    shortDescription:
      "Think like an attacker. Learn reconnaissance, exploitation, and reporting using industry-standard penetration testing methodology.",
    level: "Intermediate",
    duration: "8 weeks",
    objectives: [
      "Follow a structured penetration testing methodology",
      "Perform reconnaissance and vulnerability scanning",
      "Exploit common vulnerabilities in a safe lab environment",
      "Write a professional penetration test report",
    ],
    skills: ["Reconnaissance", "Vulnerability scanning", "Exploitation basics", "Reporting"],
    modules: [
      "Penetration Testing Methodology & Rules of Engagement",
      "Reconnaissance & Information Gathering",
      "Scanning & Vulnerability Assessment",
      "Exploitation Techniques (Lab-Based)",
      "Post-Exploitation & Privilege Escalation",
      "Writing a Professional Pentest Report",
    ],
    prerequisites: "Network Security Fundamentals recommended.",
    certificate: "Certificate of Completion; prepares learners for entry-level pentesting certifications.",
  },
  {
    slug: "web-application-security",
    icon: "Globe",
    title: "Web Application Security",
    shortDescription:
      "Master the OWASP Top 10 and learn to find and fix the vulnerabilities that put web applications at risk.",
    level: "Intermediate",
    duration: "6 weeks",
    objectives: [
      "Understand the OWASP Top 10 vulnerabilities in depth",
      "Identify and remediate injection, XSS, and auth flaws",
      "Use browser and proxy tools to test web applications",
      "Apply secure coding practices to prevent common bugs",
    ],
    skills: ["OWASP Top 10", "Secure coding", "Web app testing tools", "Vulnerability remediation"],
    modules: [
      "Introduction to Web App Architecture & Attack Surface",
      "Injection Attacks: SQLi, Command Injection",
      "Cross-Site Scripting (XSS) & CSRF",
      "Broken Authentication & Session Management",
      "Hands-on Lab: Testing a Vulnerable Web App",
    ],
    prerequisites: "Basic understanding of how web applications work (HTTP, HTML).",
    certificate: "Certificate of Completion, with a project-based portfolio piece.",
  },
  {
    slug: "endpoint-security",
    icon: "Laptop",
    title: "Endpoint Security",
    shortDescription:
      "Protect devices at the edge of the network with next-gen antivirus, EDR, and hardened device configurations.",
    level: "Beginner",
    duration: "4 weeks",
    objectives: [
      "Understand endpoint threats and attack vectors",
      "Learn the role of EPP and EDR solutions",
      "Apply device hardening and patch management best practices",
      "Respond to a simulated endpoint compromise",
    ],
    skills: ["EDR concepts", "Device hardening", "Patch management", "Basic incident triage"],
    modules: [
      "The Modern Endpoint Threat Landscape",
      "Antivirus vs. EPP vs. EDR",
      "Device Hardening & Patch Management",
      "Disk & Removable Media Encryption",
      "Simulated Lab: Investigating an Infected Endpoint",
    ],
    prerequisites: "Introduction to Cybersecurity recommended.",
    certificate: "Certificate of Completion upon finishing all modules and the lab exercise.",
  },
  {
    slug: "identity-access-management",
    icon: "KeyRound",
    title: "Identity & Access Management (IAM)",
    shortDescription:
      "Learn how organizations manage who can access what — authentication, authorization, MFA, and least-privilege design.",
    level: "Intermediate",
    duration: "5 weeks",
    objectives: [
      "Understand authentication vs. authorization",
      "Design least-privilege access models",
      "Implement multi-factor authentication (MFA) concepts",
      "Learn single sign-on (SSO) and federation basics",
    ],
    skills: ["MFA design", "Access control models", "SSO/federation basics", "Identity governance"],
    modules: [
      "Authentication, Authorization & Accounting (AAA)",
      "Multi-Factor Authentication (MFA) Deep Dive",
      "Role-Based & Least-Privilege Access Control",
      "Single Sign-On (SSO) & Federation",
      "Identity Governance & Access Reviews",
    ],
    prerequisites: "Introduction to Cybersecurity recommended.",
    certificate: "Certificate of Completion, aligned with IAM fundamentals used in industry certifications.",
  },
  {
    slug: "cloud-security-fundamentals",
    icon: "Cloud",
    title: "Cloud Security Fundamentals",
    shortDescription:
      "Secure workloads across AWS, Azure, and GCP with shared responsibility, IAM, and cloud-native security tooling.",
    level: "Intermediate",
    duration: "6 weeks",
    objectives: [
      "Understand the shared responsibility model",
      "Configure cloud IAM roles and policies securely",
      "Secure storage, compute, and networking in the cloud",
      "Use native cloud security and monitoring tools",
    ],
    skills: ["Shared responsibility model", "Cloud IAM", "Cloud network security", "Cloud monitoring basics"],
    modules: [
      "Shared Responsibility Model Across Providers",
      "Cloud Identity & Access Management",
      "Securing Storage & Compute Resources",
      "Cloud Network Security & Segmentation",
      "Monitoring & Logging in the Cloud",
    ],
    prerequisites: "Network Security Fundamentals recommended.",
    certificate: "Certificate of Completion, foundational for cloud security certification tracks.",
  },
  {
    slug: "soc-analyst",
    icon: "MonitorCheck",
    title: "Security Operations Center (SOC) Analyst",
    shortDescription:
      "Learn to monitor, detect, and respond to threats in real time using SIEM tools and structured triage workflows.",
    level: "Intermediate",
    duration: "7 weeks",
    objectives: [
      "Understand the role and workflow of a SOC analyst",
      "Use SIEM tools to monitor and triage alerts",
      "Apply threat intelligence to investigations",
      "Escalate and document incidents professionally",
    ],
    skills: ["SIEM operations", "Alert triage", "Threat intelligence basics", "Incident documentation"],
    modules: [
      "The SOC Analyst Role & Daily Workflow",
      "Introduction to SIEM Platforms",
      "Alert Triage & Prioritization",
      "Using Threat Intelligence in Investigations",
      "Escalation & Incident Documentation",
      "Simulated Lab: A Day in the SOC",
    ],
    prerequisites: "Network Security Fundamentals and Endpoint Security recommended.",
    certificate: "Certificate of Completion; prepares learners for entry-level SOC analyst roles.",
  },
  {
    slug: "digital-forensics-incident-response",
    icon: "Search",
    title: "Digital Forensics & Incident Response",
    shortDescription:
      "Investigate breaches methodically — from evidence collection and chain of custody to root-cause analysis.",
    level: "Advanced",
    duration: "8 weeks",
    objectives: [
      "Follow proper evidence handling and chain of custody",
      "Perform disk, memory, and log forensic analysis",
      "Build an incident response plan and playbook",
      "Conduct root-cause analysis and post-incident review",
    ],
    skills: ["Evidence handling", "Forensic analysis", "Incident response planning", "Root-cause analysis"],
    modules: [
      "Forensics Fundamentals & Chain of Custody",
      "Disk & File System Forensics",
      "Memory Forensics Basics",
      "Log Analysis & Timeline Reconstruction",
      "Building an Incident Response Plan",
      "Case Study: End-to-End Incident Investigation",
    ],
    prerequisites: "SOC Analyst course or equivalent experience recommended.",
    certificate: "Certificate of Completion, with a hands-on investigation portfolio piece.",
  },
  {
    slug: "data-protection-privacy",
    icon: "FileLock2",
    title: "Data Protection & Privacy (GDPR, ISO 27001)",
    shortDescription:
      "Navigate global data protection law and information security standards to keep organizations compliant.",
    level: "Intermediate",
    duration: "5 weeks",
    objectives: [
      "Understand core GDPR principles and data subject rights",
      "Learn the structure of the ISO 27001 framework",
      "Conduct a basic data protection impact assessment",
      "Design policies that satisfy common compliance requirements",
    ],
    skills: ["GDPR fundamentals", "ISO 27001 structure", "Data protection impact assessment", "Policy writing"],
    modules: [
      "Introduction to Data Protection Law & GDPR",
      "Data Subject Rights & Lawful Basis for Processing",
      "ISO 27001: Structure & Control Domains",
      "Conducting a Data Protection Impact Assessment",
      "Writing Compliant Data Protection Policies",
    ],
    prerequisites: "None, though familiarity with basic IT concepts helps.",
    certificate: "Certificate of Completion, useful groundwork for formal ISO 27001 certification paths.",
  },
  {
    slug: "risk-management-governance",
    icon: "ClipboardList",
    title: "Risk Management & Governance",
    shortDescription:
      "Learn how organizations identify, assess, and manage cybersecurity risk at the governance and leadership level.",
    level: "Intermediate",
    duration: "5 weeks",
    objectives: [
      "Understand risk identification and assessment methodologies",
      "Build a basic risk register and treatment plan",
      "Learn how security governance frameworks are structured",
      "Communicate risk effectively to leadership and stakeholders",
    ],
    skills: ["Risk assessment", "Risk registers", "Governance frameworks", "Stakeholder communication"],
    modules: [
      "Foundations of Risk Management",
      "Risk Identification & Assessment Methods",
      "Building a Risk Register & Treatment Plan",
      "Security Governance Frameworks Overview",
      "Communicating Risk to Leadership",
    ],
    prerequisites: "Introduction to Cybersecurity recommended.",
    certificate: "Certificate of Completion, aligned with governance concepts used in GRC roles.",
  },
  {
    slug: "security-awareness-compliance",
    icon: "GraduationCap",
    title: "Security Awareness & Compliance Training",
    shortDescription:
      "Learn to design and deliver security awareness programs that actually change employee behavior.",
    level: "Beginner",
    duration: "3 weeks",
    objectives: [
      "Understand the human factors behind security incidents",
      "Design an effective security awareness training program",
      "Build phishing simulation and reporting workflows",
      "Measure and improve program effectiveness over time",
    ],
    skills: ["Awareness program design", "Phishing simulation basics", "Behavior-change training", "Compliance reporting"],
    modules: [
      "Why Security Awareness Programs Matter",
      "Designing Engaging Training Content",
      "Phishing Simulations & Reporting Culture",
      "Measuring Program Effectiveness",
      "Compliance Reporting for Leadership & Auditors",
    ],
    prerequisites: "None.",
    certificate: "Certificate of Completion upon finishing all modules and the final assessment.",
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
    a: "No — Introduction to Cybersecurity and Security Awareness Training are built for complete beginners. Other courses list any recommended prerequisites on their course page.",
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