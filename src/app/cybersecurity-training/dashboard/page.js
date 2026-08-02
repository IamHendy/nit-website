"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  BookOpen,
  TrendingUp,
  Award,
  User,
  Bell,
  Sparkles,
  PlayCircle,
} from "lucide-react";
import { COURSES, getCourseBySlug } from "@/data/courses";

function DashboardContent() {
  const searchParams = useSearchParams();
  const enrolledSlug = searchParams.get("course");
  const justEnrolled = searchParams.get("enrolled") === "1";
  const enrolledCourse = enrolledSlug ? getCourseBySlug(enrolledSlug) : null;

  // Demo data standing in for what would come from a real backend/database.
  const myCourses = enrolledCourse
    ? [{ ...enrolledCourse, progress: 5 }]
    : [{ ...COURSES[0], progress: 40 }, { ...COURSES[2], progress: 10 }];

  const recommendations = COURSES.filter(
    (c) => !myCourses.some((mc) => mc.slug === c.slug)
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        {justEnrolled && enrolledCourse && (
          <div className="mb-8 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-800 px-5 py-4 text-sm">
            You're enrolled in <strong>{enrolledCourse.title}</strong>! This
            dashboard is a design preview — real enrollment, progress
            tracking, and certificates require the backend to be connected.
          </div>
        )}

        <div className="flex items-center justify-between mb-10">
          <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
          <div className="flex items-center gap-4 text-gray-500">
            <Bell size={20} />
            <div className="w-9 h-9 rounded-full bg-navy/5 border border-navy/10 flex items-center justify-center text-navy font-semibold text-sm">
              <User size={16} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* My Courses / Continue Learning */}
            <section>
              <div className="flex items-center gap-2 mb-5">
                <BookOpen size={18} className="text-navy" />
                <h2 className="text-lg font-semibold text-gray-900">
                  My Courses
                </h2>
              </div>
              <div className="space-y-4">
                {myCourses.map((c) => (
                  <div
                    key={c.slug}
                    className="rounded-lg border border-gray-100 bg-white shadow-sm p-5"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">{c.title}</h3>
                      <span className="text-xs text-gray-500">
                        {c.progress}% complete
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100 overflow-hidden mb-4">
                      <div
                        className="h-full bg-navy rounded-full"
                        style={{ width: `${c.progress}%` }}
                      />
                    </div>
                    <Link
                      href={`/cybersecurity-training/courses/${c.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold-dark"
                    >
                      <PlayCircle size={16} /> Continue Learning
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Progress Tracking */}
            <section>
              <div className="flex items-center gap-2 mb-5">
                <TrendingUp size={18} className="text-navy" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Progress Tracking
                </h2>
              </div>
              <div className="rounded-lg border border-gray-100 bg-white shadow-sm p-5 grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-2xl font-bold text-navy">
                    {myCourses.length}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Courses in Progress</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-navy">0</p>
                  <p className="text-xs text-gray-500 mt-1">Courses Completed</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-navy">0</p>
                  <p className="text-xs text-gray-500 mt-1">Certificates Earned</p>
                </div>
              </div>
            </section>

            {/* Recommendations */}
            <section>
              <div className="flex items-center gap-2 mb-5">
                <Sparkles size={18} className="text-navy" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Recommended For You
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {recommendations.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/cybersecurity-training/courses/${c.slug}`}
                    className="rounded-lg border border-gray-100 bg-white shadow-sm p-4 hover:border-navy/30 transition-colors"
                  >
                    <p className="font-semibold text-gray-900 text-sm mb-1">
                      {c.title}
                    </p>
                    <p className="text-xs text-gray-500">{c.level} &middot; {c.duration}</p>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            {/* Profile */}
            <section className="rounded-lg border border-gray-100 bg-white shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <User size={18} className="text-navy" />
                <h2 className="font-semibold text-gray-900">Profile</h2>
              </div>
              <p className="text-sm text-gray-600">
                Profile details, saved preferences, and account settings will
                appear here once accounts are connected to a real backend.
              </p>
            </section>

            {/* Certificates */}
            <section className="rounded-lg border border-gray-100 bg-white shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award size={18} className="text-navy" />
                <h2 className="font-semibold text-gray-900">Certificates</h2>
              </div>
              <p className="text-sm text-gray-600">
                Completed-course certificates will be issued and stored here.
                Complete a course to earn your first one.
              </p>
            </section>

            {/* Notifications */}
            <section className="rounded-lg border border-gray-100 bg-white shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Bell size={18} className="text-navy" />
                <h2 className="font-semibold text-gray-900">Notifications</h2>
              </div>
              <p className="text-sm text-gray-600">
                You're all caught up — new course updates and reminders will
                show up here.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={null}>
      <DashboardContent />
    </Suspense>
  );
}