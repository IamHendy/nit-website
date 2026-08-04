import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/contact", label: "Contact" },
  { href: "/news", label: "News" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-gray-300">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-10 py-16">
        <div>
          <div className="bg-white rounded p-2 inline-block mb-4">
            <Image
              src="/images/logo.jpg"
              alt="Network Intelligence Technologies Limited"
              width={160}
              height={72}
              className="h-14 w-auto"
            />
          </div>
          <p className="text-sm leading-relaxed">
            <span className="text-white font-semibold">
              Network Intelligence Technologies, Ltd (NIT)
            </span>{" "}
            is a leader in network security; Firewall implementation, SD-WAN
            Connectivity, multi-factor authentication, Email Security, Cloud
            &amp; Data backup and network intelligence.
          </p>
          <p className="text-gold mt-6 text-sm">
            {new Date().getFullYear()} © All Rights Reserved
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold tracking-wider mb-5">
            CONTACT
          </h3>
          <p className="text-sm mb-1 font-semibold text-white">
            Morrison House, 4th Floor,
          </p>
          <p className="text-sm mb-4">Mombasa Road, Nairobi-Kenya.</p>
          <p className="text-sm mb-1">
            Mobile:{" "}
            <a href="tel:0772378393" className="hover:text-gold">
              0772-378393
            </a>
            . 020-3504199.
          </p>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:nit.intelligence@gmail.com"
              className="hover:text-gold"
            >
              nit.intelligence@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold tracking-wider mb-5">
            OUR LINKS
          </h3>
          <ul className="space-y-2 text-sm">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold tracking-wider mb-5">
            LOCATION
          </h3>
          <div className="bg-white rounded overflow-hidden">
            <iframe
              title="Network Intelligence Technologies location"
              src="https://www.google.com/maps?q=-1.330631,36.867443&z=15&output=embed"
              width="100%"
              height="160"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}