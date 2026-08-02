"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Clock,
  Search,
  Menu,
  X,
} from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT US" },
  { href: "/services", label: "SERVICES" },
  { href: "/solutions", label: "SOLUTIONS" },
  { href: "/cybersecurity-training", label: "LEARN CYBERSECURITY" },
  { href: "/contact", label: "CONTACT" },
  { href: "/news", label: "NEWS" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header>
      {/* Top contact strip */}
      <div className="bg-navy-dark text-white text-sm">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 py-2">
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@networkintelligence.co.ke"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={14} className="text-gold" />
              info@networkintelligence.co.ke
            </a>
            <a
              href="tel:0772378393"
              className="hidden sm:flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone size={14} className="text-gold" />
              0772-378393/020-3504199.
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-gold">
              <Facebook size={15} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gold">
              <Twitter size={15} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gold">
              <Linkedin size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Logo / location / hours / CTA */}
      <div className="bg-white border-b">
        <div className="container flex flex-wrap items-center justify-between gap-4 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.jpg"
              alt="Network Intelligence Technologies Limited"
              width={212}
              height={96}
              className="h-14 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Globe size={20} className="text-gold" />
              <div>
                <p className="font-semibold text-navy">LOCATION</p>
                <p>Morrison House, 4th Floor</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Clock size={20} className="text-gold" />
              <div>
                <p className="font-semibold text-navy">OPENING HOURS</p>
                <p>8.00 am to 4.00 pm</p>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="bg-navy text-white text-sm font-semibold px-5 py-3 rounded hover:bg-navy-light transition-colors"
          >
            Request For a Quote
          </Link>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-navy sticky top-0 z-40">
        <div className="container flex items-center justify-between py-3">
          <ul className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>

          {searchOpen ? (
            <form
              action="/search"
              method="GET"
              className="hidden md:flex items-center"
            >
              <input
                type="text"
                name="q"
                autoFocus
                placeholder="Search..."
                className="w-48 h-10 px-3 bg-white text-gray-900 text-sm rounded-l focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Search"
                className="flex items-center justify-center w-10 h-10 bg-navy-dark text-white rounded-r"
              >
                <Search size={18} />
              </button>
            </form>
          ) : (
            <button
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="hidden md:flex items-center justify-center w-10 h-10 bg-navy-dark text-white rounded"
            >
              <Search size={18} />
            </button>
          )}
        </div>

        {open && (
          <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 text-sm font-semibold">
            <li className="py-2">
              <form action="/search" method="GET" className="flex items-center">
                <input
                  type="text"
                  name="q"
                  placeholder="Search..."
                  className="flex-1 h-10 px-3 bg-white text-gray-900 text-sm rounded-l focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="flex items-center justify-center w-10 h-10 bg-navy-dark text-white rounded-r shrink-0"
                >
                  <Search size={16} />
                </button>
              </form>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-white py-2 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}