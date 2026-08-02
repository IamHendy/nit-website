"use client";

import Link from "next/link";
import { NEWS } from "@/data/news";

export default function NewsSidebar({ activeSlug }) {
  return (
    <aside className="space-y-8">
      <div className="border border-gray-100 shadow-sm p-6">
        <h3 className="font-bold text-gray-900 mb-4">Search</h3>
        <form action="/search" method="GET" className="flex">
          <input
            type="text"
            name="q"
            placeholder=""
            className="flex-1 border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-navy"
          />
          <button
            type="submit"
            className="bg-navy-dark text-white px-5 font-semibold text-sm"
          >
            Search
          </button>
        </form>
      </div>

      <div className="border border-gray-100 shadow-sm p-6">
        <h3 className="font-bold text-gray-900 mb-4">Recent Posts</h3>
        <ul className="space-y-4">
          {NEWS.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/news/${post.slug}`}
                className={`font-semibold leading-snug hover:text-gold transition-colors ${
                  post.slug === activeSlug ? "text-gold" : "text-gray-900"
                }`}
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}