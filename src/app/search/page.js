import PageBanner from "@/components/PageBanner";
import { searchSite } from "@/lib/search";
import { Search as SearchIcon } from "lucide-react";

export const metadata = {
  title: "Search | Network Intelligence Technologies",
};

function ResultGroup({ title, items }) {
  if (items.length === 0) return null;
  return (
    <div className="mb-12">
      <h2 className="text-lg font-bold text-gray-900 mb-5">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block rounded-lg border border-gray-100 bg-white shadow-sm p-5 hover:border-navy/30 hover:shadow-md transition-all"
          >
            <span className="inline-block text-xs font-semibold text-gold-dark uppercase tracking-wide mb-2">
              {item.category}
            </span>
            <h3 className="font-semibold text-gray-900 mb-2 leading-snug">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
              {item.text}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function SearchPage({ searchParams }) {
  const query = searchParams?.q || "";
  const { services, solutions, courses, news } = searchSite(query);
  const total = services.length + solutions.length + courses.length + news.length;

  return (
    <>
      <PageBanner title="Search" />
      <section className="py-16">
        <div className="container max-w-4xl">
          <form
            action="/search"
            method="GET"
            className="flex items-center gap-3 mb-4"
          >
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="Search services, solutions, courses, news..."
              className="flex-1 px-5 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-navy"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-navy text-white px-6 py-3 font-semibold rounded hover:bg-navy-light transition-colors"
            >
              <SearchIcon size={16} /> Search
            </button>
          </form>

          {query && (
            <p className="text-sm text-gray-500 mb-10">
              {total} result{total === 1 ? "" : "s"} for &ldquo;{query}&rdquo;
            </p>
          )}

          {!query && (
            <p className="text-gray-500">
              Type a keyword above to search across our services, solutions,
              cybersecurity courses, and news.
            </p>
          )}

          {query && total === 0 && (
            <p className="text-gray-500">
              No results found for &ldquo;{query}&rdquo;. Try a different
              keyword, or{" "}
              <a href="/contact" className="text-navy hover:text-gold-dark font-medium">
                contact us
              </a>{" "}
              directly.
            </p>
          )}

          <ResultGroup title="Services" items={services} />
          <ResultGroup title="Solutions" items={solutions} />
          <ResultGroup title="Cybersecurity Courses" items={courses} />
          <ResultGroup title="News" items={news} />
        </div>
      </section>
    </>
  );
}