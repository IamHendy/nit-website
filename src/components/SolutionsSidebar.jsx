import Link from "next/link";
import { SOLUTIONS, SOLUTIONS_NAV_ORDER } from "@/data/solutions";

export default function SolutionsSidebar({ activeSlug }) {
  const items = SOLUTIONS_NAV_ORDER.map((slug) =>
    SOLUTIONS.find((s) => s.slug === slug)
  );

  return (
    <aside>
      <h3 className="font-bold text-lg text-gray-900 mb-4">Our Solutions</h3>
      <ul>
        {items.map((item) => (
          <li key={item.slug} className="border-b border-dotted border-white">
            <Link
              href={`/solutions/${item.slug}`}
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
