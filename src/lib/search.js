import { SERVICES } from "@/data/services";
import { SOLUTIONS, PENETRATION_TESTING_CARD } from "@/data/solutions";
import { COURSES } from "@/data/courses";
import { NEWS } from "@/data/news";

function matches(query, ...fields) {
  const q = query.toLowerCase();
  return fields.some((f) => f && f.toLowerCase().includes(q));
}

export function searchSite(query) {
  if (!query || !query.trim()) {
    return { services: [], solutions: [], courses: [], news: [] };
  }

  const q = query.trim();

  const services = SERVICES.filter((s) => matches(q, s.title, s.cardText)).map(
    (s) => ({
      title: s.title,
      text: s.cardText,
      href: `/services/${s.slug}`,
      category: "Service",
    })
  );

  const solutionCards = [
    ...SOLUTIONS.map((s) => ({
      title: s.title,
      text: s.cardText,
      href: `/solutions/${s.slug}`,
    })),
    {
      title: PENETRATION_TESTING_CARD.title,
      text: PENETRATION_TESTING_CARD.text,
      href: PENETRATION_TESTING_CARD.href,
    },
  ];
  const solutions = solutionCards
    .filter((s) => matches(q, s.title, s.text))
    .map((s) => ({ ...s, category: "Solution" }));

  const courses = COURSES.filter((c) =>
    matches(q, c.title, c.shortDescription)
  ).map((c) => ({
    title: c.title,
    text: c.shortDescription,
    href: `/cybersecurity-training/courses/${c.slug}`,
    category: "Course",
  }));

  const news = NEWS.filter((n) => matches(q, n.title, n.cardText)).map(
    (n) => ({
      title: n.title,
      text: n.cardText,
      href: `/news/${n.slug}`,
      category: "News",
    })
  );

  return { services, solutions, courses, news };
}