export const NEWS = [
  {
    slug: "kaseya-supply-chain-attack",
    author: "admin",
    date: "March 1, 2022",
    title:
      "Learnings from the Kaseya Supply Chain Attack and Mass Ransomware",
    cardText:
      '"Discover, prioritize, and deploy critical Windows operating system and third-party application patches to prevent cyberattacks and mitigate known vulnerabilities with Network Intelligence Technologies Ltd\'s Network Security Solutions Patch Management. Get in touch with us today. #networksecurity #intelligence',
    body: [
      "Learnings from the Kaseya Supply Chain Attack and Mass Ransomware Incident",
      "On the July 2nd Friday, at least eight MSPs were hit with ransomware that infected their infrastructure and many of their customers. The attack exploited some unpatched vulnerabilities in the on-premises Kaseya VSA product, and then leveraged the remote monitoring and management (RMM) solution to help spread the ransomware. The incident allegedly has affected up to 1,500 companies, and the attackers, members of the Revil gang, are asking for $70 million in ransom. In this timely webinar, WatchGuard CSO Corey Nachreiner and Technical Security Operations Manager Marc Laliberte discuss what we know about this attack and how you can protect yourself. The presentation includes:",
    ],
    list: ["A timeline of the attack"],
  },
  {
    slug: "windows-third-party-patches",
    author: "admin",
    date: "June 1, 2017",
    title:
      "Discover, prioritize, and deploy critical Windows operating system and third-party application patches",
    cardText:
      '"Discover, prioritize, and deploy critical Windows operating system and third-party application patches to prevent cyberattacks and mitigate known vulnerabilities with Network Intelligence Technologies Ltd\'s Network Security Solutions Patch Management. Get in touch with us today. #networksecurity #intelligence',
    body: [
      'Discover, prioritize, and deploy critical Windows operating system and third-party application patches to prevent cyberattacks and mitigate known vulnerabilities with Network Intelligence Technologies Ltd\'s Network Security Solutions Patch Management. Get in touch with us today.',
    ],
    tags: [
      "#networksecurity",
      "#intelligence",
      "Osage University Partners (OUP)",
      "KCB Bank Group",
    ],
  },
  {
    slug: "dont-deploy-half-sdwan",
    author: "admin",
    date: "March 25, 2022",
    title: "Don't Deploy Half an SD-WAN Solution",
    cardText:
      "Don't Deploy Half an SD-WAN Solution If you are a business with multiple sites, it's more than likely that you are considering an SD-WAN deployment. However, if your IT team is moving forward on SD-WAN without considering the security implications, then you are missing half of what's needed in a full SD-WAN implementation.",
    body: [
      "If you are a business with multiple sites, it's more than likely that you are considering an SD-WAN deployment. However, if your IT team is moving forward on SD-WAN without considering the security implications, then you are missing half of what's needed in a full SD-WAN implementation.",
    ],
    list: [
      "SD-WAN Optimizes Internet Service at Branch",
      "Upgraded Security Is Key for SD-WAN Success",
    ],
    subheading: "What Should You Look for in a Complete SD-WAN Solution?",
    outro: [
      "The differences in SD-WAN solutions are small until you consider the security upgrades needed at the branch office or distributed business site. The table below identifies some key areas of inquiry as you consider different SD-WAN alternatives.",
    ],
    tags: [
      "#cybersecurity",
      "#infosec",
      "Network Intelligence Technologies Ltd",
      "WatchGuard Technologies",
      "Safaricom PLC",
      "KPLC",
      "KPMG East Africa",
      "EY",
    ],
  },
];

export function getNewsBySlug(slug) {
  return NEWS.find((n) => n.slug === slug);
}