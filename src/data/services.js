export const SERVICES = [
  {
    slug: "cyber-security-training",
    navLabel: "Cyber Security Awareness Training",
    title: "Cyber Security awareness training for staff",
    cardText:
      "Network Intelligence cyber security awareness training is very necessary and we will make it interesting for employees. Our short sessions once a month will help you combat the...",
    image: "/images/services/cyber-security-training.jpg",
    detail: {
      heading: "Cyber Security Awareness Training for Staff",
      intro: [
        "Your firewall, endpoint protection, and email filters can only do so much — most breaches still start with a single employee clicking the wrong link, opening the wrong attachment, or reusing a weak password. Network Intelligence's staff awareness training closes that gap by turning your employees into your first line of defense instead of your biggest vulnerability.",
        "We keep sessions short, practical, and recurring — once a month — rather than a one-off lecture that's forgotten within a week. Employees leave each session able to immediately recognize and act on the threats they're most likely to face.",
      ],
      blocks: [
        {
          lead: "Phishing & Social Engineering;",
          text: "Simulated phishing emails and real-world case studies teach staff to spot spoofed senders, suspicious links, and urgent-sounding requests before they act on them.",
        },
        {
          lead: "Password & Account Hygiene;",
          text: "Practical guidance on strong, unique passwords, password managers, and multi-factor authentication so a single leaked credential can't compromise the wider network.",
        },
        {
          lead: "Safe Device & Data Handling;",
          text: "Covers secure use of company devices, removable media, cloud storage, and remote/hybrid work setups, so sensitive data stays protected outside the office too.",
        },
        {
          lead: "Incident Reporting;",
          text: "Staff learn exactly what to do — and who to notify — the moment something looks off, so incidents get contained in minutes rather than discovered weeks later.",
        },
      ],
      subheading: "Why Ongoing Training Works",
      list: [
        "Builds habits that stick, through short monthly sessions instead of a single annual briefing",
        "Reduces successful phishing click-through rates over time",
        "Keeps staff current as attackers' tactics evolve",
        "Creates a reporting culture instead of a blame culture",
        "Complements your existing firewall, endpoint, and email security investments",
      ],
      closing:
        "Get in touch with us today to schedule a cyber security awareness session for your team. #networksecurity #intelligence",
    },
  },
  {
    slug: "unified-communication",
    navLabel: "Unified Communication Services/Telephony",
    title: "Unified Communication services/Telephony",
    cardText:
      "Network intelligence is leader in implementing end to end unified communication and e-mobility products leveraging AstTecs Solutions and Technology to achieve...",
    image: "/images/services/unified-communication.png",
    detail: {
      heading: "Unified Communication Solution/IP Telephony",
      intro: [
        "Network intelligence is leader in implementing end to end unified communication and e-mobility products leveraging AstTecs Solutions and Technology to achieve this.",
        "We partner with astTECS Technology in implementing end to end telephony Solution to provide a complete suite of Enterprise Telecom Products with advanced features at a much affordable cost.",
        "Unified Solutions Cover the following;",
      ],
      blocks: [
        {
          lead: "IP PBX/Telephony",
          text: "Whether a large enterprise or small business, *astTECS IP PBX system is an ideal solution for every business.",
        },
        {
          lead: "Contact Center Solution;",
          text: "astTECS call center dialer is an omnichannel contact center solution with advanced features with a real-time agent monitoring dashboard.",
        },
        {
          lead: "IVR astTECS",
          text: "IVR (Interactive voice response) system is an automated Call Management Solution to handle high calls volume with limited resources.",
        },
        {
          lead: "Voice Logger",
          text: "Our Solution offers a completed call recording solution for your business.",
        },
      ],
      closing:
        "Our Unified Communication Solutions deliver seamless connectivity, security and automation those results in improved customer engagement & efficiency, augmented employee productivity, accelerated deliveries, reduced costs and higher revenue potential.",
    },
  },
  {
    slug: "penetration-testing",
    navLabel: "Penetration Testing/sytems Audit",
    title: "Penetration testing/ System Audit",
    cardText:
      "Penetration tests go beyond security audits and vulnerability assessments by trying to breach your system just like a hacker. In this scenario, a security expert will try to replicate the same methods employed...",
    image: "/images/services/penetration-testing.png",
    detail: {
      heading: "PENETRATION TESTING/SYSTEMS AUDIT",
      intro: [
        "It is a security testing to identify security vulnerabilities in an application, network, endpoint, and cloud. Both the Vulnerability Assessment and Penetration Testing have unique strengths and are often collectively done to achieve complete analysis. Vulnerability Assessment scans the digital assets and notifies organizations about pre-existing flaws. Penetration test exploits the vulnerabilities in the system & determines the security gaps.",
      ],
      subheading: "Strengthen your defenses with Network Intelligence VAPT",
      list: [
        "Identify The Security Loopholes",
        "Improve Cyber Resilience",
        "Avoid Data Breaches",
        "Inspect Network Defence System",
        "Protect Organizational Data",
        "Comply with Security Standards",
      ],
    },
  },
  {
    slug: "managed-support",
    navLabel: "MSP Managed Support Services",
    title: "MSP Managed Support Services, Network Intelligence",
    cardText:
      "Do you get overwhelmed by the ICT Services, or Luck competent technical staff,? Then Outsource your ICT Services to US. We provide a full...",
    image: "/images/services/managed-services.png",
    detail: {
      heading: "MSP Managed Support Services, Network Intelligence.",
      intro: [
        "Do you get overwhelmed by the ICT Services, or Luck competent technical staff,? Then Outsource your ICT Services to US. We provide a full suite of Managed ICT Support. Concentrate in growing your business portfolio while we handle your ICT Services.",
      ],
    },
  },
];

// Sidebar order shown on every service detail page ("Our Services" list),
// matching the screenshots: Managed Support, Penetration Testing,
// Cyber Security Training, Unified Communication.
export const SERVICES_NAV_ORDER = [
  "managed-support",
  "penetration-testing",
  "cyber-security-training",
  "unified-communication",
];

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug);
}