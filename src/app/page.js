import HeroCarousel from "@/components/HeroCarousel";
import AboutBlock from "@/components/AboutBlock";
import SectionHeading from "@/components/SectionHeading";
import ServiceCardSimple from "@/components/ServiceCardSimple";
import SolutionCard from "@/components/SolutionCard";
import StatsStrip from "@/components/StatsStrip";
import ConsultationSection from "@/components/ConsultationSection";
import NewsCard from "@/components/NewsCard";
import { SERVICES } from "@/data/services";
import { SOLUTIONS, PENETRATION_TESTING_CARD } from "@/data/solutions";
import { NEWS } from "@/data/news";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <AboutBlock />

      <section className="bg-navy-mid pt-10 pb-20 md:pt-14 md:pb-24">
        <div className="container">
          <SectionHeading light compact>Our Services</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14 items-stretch">
            {SERVICES.map((s) => (
              <ServiceCardSimple
                key={s.slug}
                image={s.image}
                title={s.title}
                text={s.cardText}
                href={`/services/${s.slug}`}
                dark
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container">
          <SectionHeading compact>Our Solutions</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-14 items-stretch">
            {[
              ...SOLUTIONS.map((s) => ({
                href: `/solutions/${s.slug}`,
                title: s.title,
                text: s.cardText,
              })),
              PENETRATION_TESTING_CARD,
            ].map((c) => (
              <SolutionCard key={c.title} {...c} goldButton />
            ))}
          </div>
        </div>
      </section>

      <StatsStrip />
      <ConsultationSection />

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