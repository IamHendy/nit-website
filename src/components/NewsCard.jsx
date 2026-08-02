import Link from "next/link";
import { User, Calendar } from "lucide-react";

export default function NewsCard({ author, date, title, cardText, href = "/news" }) {
  return (
    <article className="border border-gray-100 shadow-sm">
      <div className="bg-navy text-white flex items-center justify-between text-xs px-4 py-3">
        <span className="flex items-center gap-2">
          <User size={13} /> Posted by {author}
        </span>
        <span className="flex items-center gap-2">
          <Calendar size={13} /> {date}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg text-gray-900 mb-4 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">{cardText}</p>
        <Link
          href={href}
          className="inline-block border-2 border-gold text-gray-900 text-xs font-bold tracking-wider px-5 py-2 hover:bg-gold active:bg-gold-dark active:border-gold-dark transition-colors"
        >
          CONTINUE READING
        </Link>
      </div>
    </article>
  );
}