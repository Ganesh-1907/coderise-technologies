import { createFileRoute } from "@tanstack/react-router";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/site/CourseCard";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Coderise Technologies" },
      { name: "description", content: "Explore Python, Java, MERN, React, Node, DSA, C, C++, SQL and JavaScript courses at Coderise Technologies." },
      { property: "og:title", content: "Courses — Coderise Technologies" },
      { property: "og:description", content: "Industry-aligned programming courses with placement guidance." },
      { property: "og:url", content: "/courses" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <div>
      <section className="bg-hero py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Our Courses"
            title="Find the right programme for your career"
            subtitle="Carefully crafted by industry experts to take you from beginner to job-ready engineer."
          />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <CourseCard key={c.slug} course={c} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
