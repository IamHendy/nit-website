"use client";

import { useState } from "react";
import { ShieldAlert, DollarSign, ChevronRight } from "lucide-react";

const TABS = [
  {
    key: "about",
    label: "About Us",
    body: (
      <p>
        <span className="font-bold text-gray-900">
          Network Intelligence Technologies, Ltd (NIT)
        </span>{" "}
        is a leader in network security; Firewall implementation, SD-WAN
        Connectivity, multi-factor authentication, Email Security, Cloud
        &amp; Data backup &amp; disaster Recovery and network intelligence.
      </p>
    ),
  },
  {
    key: "mission",
    label: "Our Mission",
    body: (
      <p>
        Network Intelligence&apos;s mission is to implement enterprise-grade
        security solutions to protect critical network assets of companies
        and businesses of all types and sizes through simplicity.
      </p>
    ),
  },
  {
    key: "vision",
    label: "Our Vision",
    body: (
      <p>
        To be a recognized regional name in the fight against Cyber-Crime.
      </p>
    ),
  },
];

const STATS = [
  { icon: ShieldAlert, value: "5+", label: "Years In Business" },
  { icon: DollarSign, value: "10+", label: "Expart Advisor" },
  { icon: ShieldAlert, value: "30+", label: "Clients Served" },
];

export default function AboutBlock({ heading = true }) {
  const [active, setActive] = useState("about");
  const activeTab = TABS.find((t) => t.key === active);

  return (
    <section className="py-20">
      <div className="container">
        {heading && (
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About Network Intelligence Technologies, Ltd (NIT)
            </h2>
            <div className="section-divider mt-4">
              <span></span>
              <span className="dot"></span>
              <span></span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr_260px] gap-6 items-start">
          <div className="flex flex-col">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`flex items-center justify-between px-6 py-4 text-left font-semibold transition-colors ${
                  active === tab.key
                    ? "bg-navy text-white"
                    : "bg-white text-gold border-b border-gray-100 hover:bg-navy hover:text-white"
                }`}
              >
                {tab.label}
                <ChevronRight size={16} />
              </button>
            ))}
          </div>

          <div className="text-gray-700 leading-relaxed py-2">
            {activeTab.body}
          </div>

          <div className="flex flex-col gap-3">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-gray-50 shadow-sm px-5 py-4"
              >
                <Icon size={26} className="text-gold shrink-0" />
                <div>
                  <p className="font-bold text-navy text-lg leading-none">
                    {value}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}