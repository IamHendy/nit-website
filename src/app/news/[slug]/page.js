import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";
import { NEWS, getNewsBySlug } from "@/data/news";
import PageBanner from "@/components/PageBanner";
import NewsSidebar from "@/components/NewsSidebar";
import CommentForm from "@/components/CommentForm";

export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }) {
  const post = getNewsBySlug(params.slug);
  if (!post) return {};
  return { title: `${post.title} | Network Intelligence Technologies` };
}

export default function NewsDetailPage({ params }) {
  const post = getNewsBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <PageBanner title="Post Details" />
      <section className="py-14">
        <div className="container grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {post.title}
            </h1>
            <p className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Calendar size={14} /> {post.date}
            </p>

            {post.body.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4">
                {p}
              </p>
            ))}

            {post.subheading && (
              <>
                {post.list?.map((item) => (
                  <p key={item} className="text-gray-600 leading-relaxed">
                    – {item}
                  </p>
                ))}
                <h2 className="font-bold text-gray-900 mt-6 mb-4">
                  {post.subheading}
                </h2>
              </>
            )}

            {!post.subheading && post.list && (
              <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
                {post.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {post.outro?.map((p, i) => (
              <p key={`outro-${i}`} className="text-gray-600 leading-relaxed mb-4">
                {p}
              </p>
            ))}

            {post.tags && (
              <p className="text-sm">
                {post.tags.map((tag, i) => (
                  <span key={tag}>
                    <span className="text-navy font-semibold hover:text-gold cursor-pointer transition-colors">
                      {tag}
                    </span>
                    {i < post.tags.length - 1 && " "}
                  </span>
                ))}
              </p>
            )}

            <CommentForm />
          </div>

          <NewsSidebar activeSlug={post.slug} />
        </div>
      </section>
    </>
  );
}