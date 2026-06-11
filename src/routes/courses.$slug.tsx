import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Clock, BarChart3, CheckCircle2, ArrowLeft, GraduationCap } from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { getCourse, courses } from "@/data/courses";
import { InquiryForm } from "@/components/site/InquiryForm";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = getCourse(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.course;
    if (!c) return { meta: [{ title: "Course — Coderise Technologies" }] };
    return {
      meta: [
        { title: `${c.name} Course — Coderise Technologies` },
        { name: "description", content: c.description },
        { property: "og:title", content: `${c.name} Course — Coderise Technologies` },
        { property: "og:description", content: c.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/courses/${c.slug}` },
      ],
      links: [{ rel: "canonical", href: `/courses/${c.slug}` }],
    };
  },
  component: CourseDetails,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="text-3xl font-bold">Course not found</h1>
      <Link to="/courses" className="mt-6 inline-flex items-center gap-2 text-primary font-semibold">
        <ArrowLeft className="size-4" /> Back to courses
      </Link>
    </div>
  ),
});

function CourseDetails() {
  const { course } = Route.useLoaderData();

  return (
    <div>
      {/* Banner */}
      <section className={`relative bg-gradient-to-br ${course.gradient} overflow-hidden`}>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 30% 30%, white 0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white">
          <Link to="/courses" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm">
            <ArrowLeft className="size-4" /> All courses
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mt-6 flex items-center gap-4">
              <span className="text-6xl drop-shadow-lg">{course.icon}</span>
              <div>
                <span className="rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  {course.level}
                </span>
                <h1 className="mt-2 text-4xl md:text-5xl font-extrabold">{course.name}</h1>
              </div>
            </div>
            <p className="mt-5 text-lg text-white/90 max-w-2xl">{course.description}</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-2"><Clock className="size-4" /> {course.duration}</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-2"><BarChart3 className="size-4" /> {course.level}</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-2"><GraduationCap className="size-4" /> Certificate</span>
            </div>
            <a href="#enroll" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white text-navy px-6 py-3.5 text-sm font-semibold shadow-elegant hover:scale-105 transition">
              Enroll Now
            </a>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-12">
          {/* Outcomes */}
          <section>
            <h2 className="text-2xl font-bold">What you'll learn</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {course.outcomes.map((o) => (
                <div key={o} className="flex gap-3 rounded-2xl glass p-4 shadow-soft">
                  <CheckCircle2 className="size-5 text-success shrink-0 mt-0.5" />
                  <span className="text-sm">{o}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Tech */}
          <section>
            <h2 className="text-2xl font-bold">Technologies covered</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {course.technologies.map((t) => (
                <span key={t} className="rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* Curriculum */}
          <section>
            <h2 className="text-2xl font-bold">Curriculum</h2>
            <p className="mt-2 text-muted-foreground text-sm">Structured into focused modules with hands-on assignments.</p>
            <Accordion type="single" collapsible defaultValue="0" className="mt-6 rounded-2xl glass shadow-soft p-2">
              {course.curriculum.map((m, i) => (
                <AccordionItem key={m.title} value={String(i)} className="border-b last:border-0">
                  <AccordionTrigger className="px-4 py-4 text-left font-semibold hover:no-underline">
                    {m.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                      {m.items.map((it) => (
                        <li key={it} className="flex gap-2"><CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" />{it}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Instructor */}
          <section>
            <h2 className="text-2xl font-bold">Your instructor</h2>
            <div className="mt-6 rounded-2xl glass shadow-soft p-6 flex items-center gap-5">
              <div className="size-16 rounded-2xl bg-gradient-primary grid place-items-center text-2xl text-primary-foreground font-bold shadow-elegant">
                {course.instructor.name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-lg">{course.instructor.name}</div>
                <div className="text-sm text-primary">{course.instructor.role}</div>
                <p className="mt-2 text-sm text-muted-foreground">{course.instructor.bio}</p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
          <div className="rounded-2xl glass p-6 shadow-soft sticky top-28">
            <h3 className="font-bold text-lg">Related courses</h3>
            <ul className="mt-4 space-y-2">
              {courses.filter((c) => c.slug !== course.slug).slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link to="/courses/$slug" params={{ slug: c.slug }} className="flex items-center gap-3 rounded-xl p-2 hover:bg-accent transition">
                    <span className="text-2xl">{c.icon}</span>
                    <span className="text-sm font-medium">{c.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-24">
        <InquiryForm defaultCourse={course.name} />
      </div>
    </div>
  );
}
