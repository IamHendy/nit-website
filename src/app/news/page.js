import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import NewsCard from "@/components/NewsCard";
import { NEWS } from "@/data/news";

export const metadata = {
  title: "News | Network Intelligence Technologies",
};

export default function NewsPage() {
  return (
    <>
      <PageBanner title="News" />
      <section className="py-20">
        <div className="container">
          <SectionHeading>Stay Informed About Cyber Security Threats</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS.map((n) => (
              <NewsCard key={n.slug} {...n} href={`/news/${n.slug}`} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}