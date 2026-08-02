import Link from "next/link";
import {
  ShieldCheck,
  FlaskConical,
  Award,
  Briefcase,
  Lock,
} from "lucide-react";
import CourseCard from "@/components/CourseCard";
import { COURSES, INSTRUCTORS, TESTIMONIALS, FAQS } from "@/data/courses";

export const metadata = {
  title: "Cybersecurity & Data Protection Training | Network Intelligence Technologies",
  description:
    "Learn practical cybersecurity skills from beginner to professional level with hands-on labs and industry certification prep.",
};

const WHY_US = [
  {
    icon: FlaskConical,
    title: "Hands-on Labs",
    text: "Every course pairs theory with practical lab exercises in safe, realistic environments.",
  },
  {
    icon: Award,
    title: "Certification-Aligned",
    text: "Course content maps to the concepts behind globally recognized industry certifications.",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    text: "Resume guidance, interview prep, and career direction included for enrolled students.",
  },
  {
    icon: ShieldCheck,
    title: "Industry Instructors",
    text: "Learn from practitioners who work in penetration testing, GRC, and security operations.",
  },
];

export default function CybersecurityTrainingPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-dark text-white">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-network.svg')" }}
        />
        <div className="relative container py-28 md:py-36 text-center flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-white/10 border border-white/30 flex items-center justify-center mb-8">
            <Lock size={24} className="text-gold" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            Build a Career in Cybersecurity &amp; Data Protection
          </h1>
          <p className="mt-6 max-w-2xl text-gray-200">
            Learn practical cybersecurity skills from beginner to professional
            level. Gain hands-on experience, industry best practices, and
            prepare for globally recognized certifications.
          </p>
          <a
            href="#courses"
            className="mt-10 bg-gold text-navy px-8 py-3 font-semibold tracking-wide hover:bg-gold-dark transition-colors"
          >
            Browse Courses
          </a>
        </div>
      </section>

      {/* Why Learn With Us */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            Why Learn With Us
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-14">
            A practical, structured path into cybersecurity — built around
            labs, real-world scenarios, and career outcomes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_US.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-lg border border-gray-100 bg-white shadow-sm p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-navy/5 border border-navy/10 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-navy" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Catalog */}
      <section id="courses" className="py-20 scroll-mt-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            Featured Courses
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-14">
            From your first steps in security to specialized, career-ready
            tracks.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course) => (
              <CourseCard key={course.slug} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Profiles */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-14">
            Instructor Profiles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {INSTRUCTORS.map((inst) => (
              <div
                key={inst.name}
                className="rounded-lg border border-gray-100 bg-white shadow-sm p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-navy/5 border border-navy/10 flex items-center justify-center mb-4 text-navy font-bold text-lg">
                  {inst.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="font-semibold text-gray-900">{inst.name}</h3>
                <p className="text-xs text-gold-dark mb-3">{inst.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{inst.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-14">
            Student Testimonials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-lg border border-gray-100 bg-white shadow-sm p-6"
              >
                <p className="text-sm text-gray-700 leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gold-dark">{t.course}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-14">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {FAQS.map((f) => (
              <div
                key={f.q}
                className="rounded-lg border border-gray-100 bg-white shadow-sm p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Have Questions Before You Enroll?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Reach out and our team will help you find the right course for
            your goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-navy px-8 py-3 font-semibold tracking-wide hover:bg-gold-dark transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}