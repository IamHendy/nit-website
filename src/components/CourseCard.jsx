import Link from "next/link";
import {
  ShieldCheck,
  Network,
  Bug,
  Globe,
  Laptop,
  KeyRound,
  Cloud,
  MonitorCheck,
  Search,
  FileLock2,
  ClipboardList,
  GraduationCap,
  BarChart3,
  Bot,
} from "lucide-react";

const ICONS = {
  ShieldCheck,
  Network,
  Bug,
  Globe,
  Laptop,
  KeyRound,
  Cloud,
  MonitorCheck,
  Search,
  FileLock2,
  ClipboardList,
  GraduationCap,
  BarChart3,
  Bot,
};

const LEVEL_STYLES = {
  Beginner: "text-emerald-700 border-emerald-200 bg-emerald-50",
  Intermediate: "text-navy border-navy/20 bg-navy/5",
  Advanced: "text-gold-dark border-gold/40 bg-gold/10",
};

export default function CourseCard({ slug, icon, title, shortDescription, level, duration }) {
  const Icon = ICONS[icon] || ShieldCheck;

  return (
    <div className="group rounded-lg border border-gray-100 bg-white shadow-sm p-6 hover:shadow-md hover:border-navy/20 transition-all">
      <div className="w-12 h-12 rounded-full bg-navy/5 border border-navy/10 flex items-center justify-center mb-5 group-hover:bg-navy/10 transition-colors">
        <Icon size={22} className="text-navy" />
      </div>
      <h3 className="font-semibold text-lg text-gray-900 mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-5">
        {shortDescription}
      </p>
      <div className="flex items-center gap-3 mb-6 text-xs">
        <span className={`px-3 py-1 rounded-full border font-medium ${LEVEL_STYLES[level]}`}>
          {level}
        </span>
        <span className="text-gray-500">{duration}</span>
      </div>
      <Link
        href={`/cybersecurity-training/courses/${slug}`}
        className="inline-block text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
      >
        Learn More &rarr;
      </Link>
    </div>
  );
}