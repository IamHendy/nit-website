import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import SolutionCard from "@/components/SolutionCard";
import { SOLUTIONS, PENETRATION_TESTING_CARD } from "@/data/solutions";

export const metadata = {
  title: "Solutions | Network Intelligence Technologies",
};

export default function SolutionsPage() {
  const cards = [
    ...SOLUTIONS.map((s) => ({
      href: `/solutions/${s.slug}`,
      title: s.title,
      text: s.cardText,
    })),
    PENETRATION_TESTING_CARD,
  ];

  return (
    <>
      <PageBanner title="Our Solutions" />
      <section className="py-20">
        <div className="container">
          <SectionHeading>Our Solutions</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">
            {cards.map((c) => (
              <SolutionCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}