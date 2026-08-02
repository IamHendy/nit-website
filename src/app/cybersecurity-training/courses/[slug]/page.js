import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Clock, Award, ChevronRight } from "lucide-react";
import { COURSES, getCourseBySlug, INSTRUCTORS, TESTIMONIALS, FAQS } from "@/data/courses";

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const course = getCourseBySlug(params.slug);
  if (!course) return {};
  return { title: `${course.title} | Cybersecurity Training` };
}

export default function CourseDetailPage({ params }) {
  const course = getCourseBySlug(params.slug);
  if (!course) notFound();

  // Deterministic-but-varied instructor assignment per course, since we don't
  // have real per-course instructor assignments yet.
  const instructor =
    INSTRUCTORS[course.slug.length % INSTRUCTORS.length];
  const testimonial = TESTIMONIALS.find((t) => t.course === course.title);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy-dark text-white py-16">
        <div className="container">
          <Link
            href="/cybersecurity-training#courses"
            className="text-sm text-gray-300 hover:text-gold transition-colors"
          >
            &larr; Back to all courses
          </Link>
          <div className="flex flex-wrap items-center gap-3 mt-6 mb-4">
            <span className="px-3 py-1 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-medium">
              {course.level}
            </span>
            <span className="flex items-center gap-1 text-gray-300 text-xs">
              <Clock size={13} /> {course.duration}
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold max-w-3xl">
            {course.title}
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300 leading-relaxed">
            {course.shortDescription}
          </p>
          <Link
            href={`/cybersecurity-training/auth?course=${course.slug}`}
            className="inline-block mt-8 bg-gold text-navy px-8 py-3 font-semibold tracking-wide hover:bg-gold-dark transition-colors"
          >
            Enroll Now
          </Link>
        </div>
      </section>

      <div className="container py-16 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-14">
        <div className="space-y-14">
          {/* Learning Objectives */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-5">
              Learning Objectives
            </h2>
            <ul className="space-y-3">
              {course.objectives.map((o) => (
                <li key={o} className="flex items-start gap-3 text-gray-700">
                  <Check size={18} className="text-navy shrink-0 mt-0.5" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Gained */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-5">Skills Gained</h2>
            <div className="flex flex-wrap gap-3">
              {course.skills.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm text-gray-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Course Modules */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-5">Course Modules</h2>
            <ol className="space-y-3">
              {course.modules.map((m, i) => (
                <li
                  key={m}
                  className="flex items-start gap-4 rounded-lg border border-gray-100 bg-gray-50 px-5 py-4"
                >
                  <span className="text-navy font-bold shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-700">{m}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Instructor */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-5">Instructor</h2>
            <div className="rounded-lg border border-gray-100 bg-gray-50 p-6 flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-navy/5 border border-navy/10 flex items-center justify-center text-navy font-bold shrink-0">
                {instructor.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{instructor.name}</p>
                <p className="text-xs text-gold-dark mb-2">{instructor.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {instructor.bio}
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial (if one exists for this exact course) */}
          {testimonial && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-5">
                Student Testimonial
              </h2>
              <div className="rounded-lg border border-gray-100 bg-gray-50 p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-900">
                  {testimonial.name}
                </p>
              </div>
            </div>
          )}

          {/* FAQ */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <div
                  key={f.q}
                  className="rounded-lg border border-gray-100 bg-gray-50 p-5"
                >
                  <p className="font-semibold text-gray-900 mb-2">{f.q}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="rounded-lg border border-gray-100 bg-gray-50 p-6 sticky top-24">
            <h3 className="font-semibold text-gray-900 mb-4">Course Details</h3>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-500">Level</dt>
                <dd className="text-gray-800">{course.level}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Duration</dt>
                <dd className="text-gray-800">{course.duration}</dd>
              </div>
              <div className="flex justify-between items-start">
                <dt className="text-gray-500">Prerequisites</dt>
                <dd className="text-gray-800 text-right max-w-[60%]">
                  {course.prerequisites}
                </dd>
              </div>
            </dl>
            <div className="border-t border-gray-200 mt-5 pt-5 flex items-start gap-3">
              <Award size={18} className="text-gold-dark shrink-0 mt-0.5" />
              <p className="text-xs text-gray-600 leading-relaxed">
                {course.certificate}
              </p>
            </div>
            <Link
              href={`/cybersecurity-training/auth?course=${course.slug}`}
              className="mt-6 w-full flex items-center justify-center gap-1 bg-navy text-white px-6 py-3 font-semibold hover:bg-navy-light transition-colors"
            >
              Enroll Now <ChevronRight size={16} />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}