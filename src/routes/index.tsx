import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Sparkles, Users, Briefcase, Trophy, Infinity as InfinityIcon,
  MessageSquareCode, Award, Phone,
} from "lucide-react";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/site/CourseCard";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coderise Technologies | Master Programming. Build Your Future." },
      { name: "description", content: "Premium software training institute. Learn Python, Java, MERN, React, Node, DSA and more with placement guidance at Coderise Technologies." },
      { property: "og:title", content: "Coderise Technologies | Master Programming" },
      { property: "og:description", content: "Become a professional software developer with industry experts." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const features = [
  { icon: Users, title: "Industry Expert Trainers", desc: "Learn from senior engineers actively working at top product companies." },
  { icon: Briefcase, title: "Real-Time Projects", desc: "Build production-ready projects that strengthen your portfolio and resume." },
  { icon: Trophy, title: "Placement Guidance", desc: "Dedicated placement cell, resume reviews and mock interviews till you're hired." },
  { icon: InfinityIcon, title: "Lifetime Learning Access", desc: "Recorded sessions, notes and updates for life — learn at your own pace." },
  { icon: MessageSquareCode, title: "Interview Preparation", desc: "DSA, system design and aptitude — daily problem solving and mock rounds." },
  { icon: Award, title: "Certification Programs", desc: "Industry-recognised certificates on successful course completion." },
];

const stats = [
  { value: "1000+", label: "Students Trained" },
  { value: "20+", label: "Expert Courses" },
  { value: "95%", label: "Satisfaction" },
  { value: "50+", label: "Hiring Partners" },
];

function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative bg-hero">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 -left-20 size-96 rounded-full bg-primary/30 blur-3xl animate-blob" />
          <div className="absolute top-40 right-0 size-96 rounded-full bg-success/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        </div>
        <div className="mx-auto max-w-7xl px-4 pt-12 pb-24 md:pt-20 md:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold text-primary shadow-soft">
              <Sparkles className="size-3.5" /> New batches starting this month
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Become a Professional <span className="gradient-text">Software Developer</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Learn programming languages and modern technologies from industry experts. Practical,
              project-driven training designed to launch your career.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-elegant hover:scale-105 transition"
              >
                Explore Courses <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold shadow-soft hover:bg-white"
              >
                <Phone className="size-4" /> Contact Us
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-4 gap-4 max-w-md">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold gradient-text">{s.value}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative h-[500px] hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-primary rounded-[3rem] rotate-3 opacity-20 blur-2xl" />
            <div className="absolute inset-4 glass rounded-[2.5rem] shadow-elegant overflow-hidden p-6">
              <div className="flex items-center gap-1.5">
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-yellow-400" />
                <span className="size-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-muted-foreground">developer.tsx</span>
              </div>
              <pre className="mt-4 text-[13px] leading-relaxed font-mono">
<span className="text-fuchsia-600">const</span> <span className="text-blue-600">student</span> = {"{"}
{"\n"}  name: <span className="text-emerald-600">'You'</span>,
{"\n"}  skills: [<span className="text-emerald-600">'React'</span>, <span className="text-emerald-600">'Node'</span>],
{"\n"}  hired: <span className="text-orange-600">true</span>,
{"\n"}{"}"};
{"\n"}
{"\n"}<span className="text-fuchsia-600">function</span> <span className="text-blue-600">future</span>() {"{"}
{"\n"}  <span className="text-fuchsia-600">return</span> <span className="text-emerald-600">'amazing 🚀'</span>;
{"\n"}{"}"}
              </pre>
            </div>

            <motion.div
              className="absolute -top-2 right-4 glass rounded-2xl shadow-elegant px-4 py-3 flex items-center gap-3"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="size-10 rounded-xl bg-success/15 grid place-items-center text-success">
                <Trophy className="size-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Placed at</div>
                <div className="text-sm font-semibold">Top MNCs</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-2 -left-4 glass rounded-2xl shadow-elegant px-4 py-3 flex items-center gap-3"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="size-10 rounded-xl bg-primary/15 grid place-items-center text-primary">
                <Award className="size-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Certified</div>
                <div className="text-sm font-semibold">Industry Programs</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-4 py-24">
        <SectionHeading
          eyebrow="Why Choose Coderise"
          title="Everything you need to launch your tech career"
          subtitle="A learner-first programme built on real projects, dedicated mentors and proven placement support."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-3xl glass p-7 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className="size-12 rounded-2xl bg-gradient-primary grid place-items-center shadow-elegant group-hover:scale-110 transition-transform">
                <f.icon className="size-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Popular Courses"
            title="Industry-aligned programming courses"
            subtitle="Pick from 10+ carefully designed courses taught by working engineers."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 6).map((c, i) => (
              <CourseCard key={c.slug} course={c} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-elegant hover:scale-105 transition"
            >
              View All Courses <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="rounded-3xl overflow-hidden relative shadow-elegant" style={{ background: "var(--gradient-dark)" }}>
          <div className="absolute -top-24 -right-24 size-96 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 size-96 rounded-full bg-success/20 blur-3xl" />
          <div className="relative p-10 md:p-16 grid md:grid-cols-2 gap-8 items-center text-white">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Ready to start your coding journey?</h2>
              <p className="mt-4 text-slate-300 max-w-md">
                Talk to a counsellor today and get a personalised roadmap, batch details and fee structure.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="tel:9390933435" className="inline-flex items-center gap-2 rounded-xl bg-white text-navy px-6 py-3.5 text-sm font-semibold shadow-elegant hover:scale-105 transition">
                <Phone className="size-4" /> Call 93909 33435
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl glass-dark text-white px-6 py-3.5 text-sm font-semibold">
                Book a Free Demo <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
