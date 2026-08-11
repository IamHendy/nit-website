"use client";

import { useState } from "react";
import Image from "next/image";
import {
  X,
  Info,
  Laptop,
  Plug,
  Users,
  Scale,
  PackageCheck,
  BookOpen,
  UserCheck,
  ClipboardList,
  Briefcase,
  Globe2,
  AlertTriangle,
  Search,
  Map,
  GraduationCap,
  Database,
  Terminal,
  Table,
  Rocket,
  Layers,
  BarChart3,
  LineChart,
  Sparkles,
  Building2,
} from "lucide-react";

const ICONS = {
  Info,
  Laptop,
  Plug,
  Users,
  Scale,
  PackageCheck,
  BookOpen,
  UserCheck,
  ClipboardList,
  Briefcase,
  Globe2,
  AlertTriangle,
  Search,
  Map,
  GraduationCap,
  Database,
  Terminal,
  Table,
  Rocket,
  Layers,
  BarChart3,
  LineChart,
  Sparkles,
  Building2,
};

export default function ModulesGrid({ modules }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map((m, i) => {
          const Icon = ICONS[m.icon] || Info;
          return (
            <div
              key={m.title}
              className="rounded-lg border border-gray-100 bg-white shadow-sm overflow-hidden flex flex-col hover:shadow-md hover:border-navy/20 transition-all"
            >
              {/* Module image — uses a real photo if one is set in courses.js,
                  otherwise falls back to the icon tile automatically. */}
              <div className="relative h-32 w-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center overflow-hidden">
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <Icon size={32} className="text-gold" />
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs font-bold text-navy/60 mb-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-gray-900 mb-2 leading-snug">
                  {m.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {m.summary}
                </p>
                <button
                  type="button"
                  onClick={() => setActive(m)}
                  className="mt-auto self-start text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
                >
                  Learn More &rarr;
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal with the full module description */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-white rounded-lg max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <div className="w-12 h-12 rounded-full bg-navy/5 border border-navy/10 flex items-center justify-center mb-4 overflow-hidden relative">
              {active.image ? (
                <Image src={active.image} alt={active.title} fill className="object-cover" />
              ) : (
                (() => {
                  const Icon = ICONS[active.icon] || Info;
                  return <Icon size={22} className="text-navy" />;
                })()
              )}
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-3">
              {active.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {active.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}