"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Code2, ThumbsUp, FileText } from "lucide-react";

const STATS = [
  { icon: Users, value: 1000, label: "USERS PROTECTED" },
  { icon: Code2, value: 10000, label: "THREATS NEUTRALISED" },
  { icon: ThumbsUp, value: 100, label: "PROJECTS HANDLED" },
  { icon: FileText, value: 1000, label: "NETWORKS SECURED" },
];

const DURATION_MS = 1800;

function useCountUp(target, start) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frame;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / DURATION_MS, 1);
      // ease-out so it settles smoothly instead of stopping abruptly
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return count;
}

function StatItem({ icon: Icon, value, label, start }) {
  const count = useCountUp(value, start);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
        <Icon size={26} className="text-gold" />
      </div>
      <p className="text-3xl font-bold tabular-nums">
        {count.toLocaleString()}
      </p>
      <p className="text-xs tracking-wider font-semibold">{label}</p>
    </div>
  );
}

export default function StatsStrip() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // only animate once
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-navy-light py-14">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
        {STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} start={inView} />
        ))}
      </div>
    </section>
  );
}