import Link from "next/link";
import Image from "next/image";
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
  Beginner: "text-emerald-300 border-emerald-300/40 bg-emerald-400/10",
  Intermediate: "text-white border-white/30 bg-white/10",
  Advanced: "text-gold border-gold/40 bg-gold/10",
};

export default function CourseCard({
  slug,
  icon,
  image,
  title,
  shortDescription,
  level,
  duration,
}) {
  const Icon = ICONS[icon] || ShieldCheck;

  return (
    <div className="group rounded-lg border border-gray-100 bg-white shadow-sm overflow-hidden hover:shadow-md hover:border-navy/20 transition-all flex flex-col h-full">
      {/* Media header — real photo if set, otherwise a themed icon tile */}
      <div className="relative h-44 w-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center overflow-hidden">
        {image ? (
          <>
            <Image src={image} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/10 to-transparent" />
          </>
        ) : (
          <Icon size={36} className="text-gold/70" />
        )}
        {level && (
          <span
            className={`absolute top-3 left-3 px-3 py-1 rounded-full border text-xs font-semibold tracking-wide ${LEVEL_STYLES[level]}`}
          >
            {level}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-lg text-gray-900 mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {shortDescription}
        </p>
        {duration && (
          <p className="text-xs text-gray-500 mb-5">{duration}</p>
        )}
        <Link
          href={`/cybersecurity-training/courses/${slug}`}
          className="mt-auto inline-block text-center bg-navy text-white text-xs font-bold tracking-wider px-5 py-2.5 rounded hover:bg-navy-light transition-colors"
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
}