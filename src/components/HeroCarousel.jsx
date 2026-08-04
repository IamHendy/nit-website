"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SLIDES = [
  {
    image: "/images/hero-1.jpg",
    title: "Network Security Firewall",
    text: "Protect your corporate dataflows in every environment. Gain total control of your traffic and transform your network security.",
  },
  {
    image: "/images/hero-2.jpg",
    title: "Endpoint Security Solutions",
    text: "Stop advanced cyberattacks on endpoints including next-gen antivirus (EPP), Endpoint Detection and Response (EDR), and DNS filtering solutions.",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Adaptive Defense 360",
    text: "The first and only product that combines Endpoint Protection (EPP) and Endpoint Detection & Response (EDR) capabilities into a single solution.",
  },
  {
    image: "/images/hero-4.jpg",
    title: "IDrive\u00ae BMR - Onsite Bare-Metal Recovery",
    text: "The most cost-effective, high-performing BMR functionality with onsite disk image backup.",
  },
  {
    image: "/images/hero-5.jpg",
    title: "Telephone Systems",
    text: "For dependable workplace phone systems, check with a professional — from key telephone systems (KTS) to private branch exchange (PBX).",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[index];

  return (
    <section className="relative bg-navy-dark text-white overflow-hidden">
      <div
        key={slide.image}
        className="absolute inset-0 opacity-40 bg-cover bg-center transition-opacity duration-700"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(13,27,76,0.9), rgba(13,27,76,0.5)), url('${slide.image}')`,
        }}
      />
      <div className="relative container pt-28 md:pt-36 pb-16 md:pb-20 text-center flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">
          {slide.title}
        </h1>
        <p className="mt-6 max-w-xl text-gray-200">{slide.text}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/about"
            className="border border-white px-8 py-3 font-semibold tracking-wide hover:bg-white hover:text-navy transition-colors"
          >
            EXPLORE
          </Link>
          <Link
            href="/cybersecurity-training"
            className="bg-gold text-navy px-8 py-3 font-semibold tracking-wide hover:bg-gold-dark transition-colors"
          >
            Learn Cybersecurity
          </Link>
        </div>

        <div className="flex gap-2 mt-14">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === index ? "bg-gold" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}