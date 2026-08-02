import Link from "next/link";
import { SERVICES, SERVICES_NAV_ORDER } from "@/data/services";

export default function ServicesSidebar({ activeSlug }) {
  const items = SERVICES_NAV_ORDER.map((slug) =>
    SERVICES.find((s) => s.slug === slug)
  );

  return (
    <aside>
      <h3 className="font-bold text-lg text-gray-900 mb-4">Our Services</h3>
      <ul>
        {items.map((item) => (
          <li key={item.slug} className="border-b border-dotted border-white">
            <Link
              href={`/services/${item.slug}`}
              className={`block px-5 py-4 text-sm font-medium text-white transition-colors ${
                item.slug === activeSlug
                  ? "bg-navy"
                  : "bg-navy-mid hover:bg-navy"
              }`}
            >
              {item.navLabel}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}