import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Heart, Trophy, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Coderise Technologies" },
      { name: "description", content: "Coderise Technologies is a premium software training institute building the next generation of developers." },
      { property: "og:title", content: "About Coderise Technologies" },
      { property: "og:description", content: "Mission, vision and the story behind Coderise." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const stats = [
  { value: "1000+", label: "Students Trained" },
  { value: "20+", label: "Expert Courses" },
  { value: "95%", label: "Satisfaction" },
  { value: "100%", label: "Industry Focused" },
];

const trust = [
  { icon: ShieldCheck, title: "Trusted Curriculum", desc: "Designed and reviewed by working engineers from top tech companies." },
  { icon: Heart, title: "Mentor-First Approach", desc: "Dedicated mentors, 1:1 reviews and a learning community that has your back." },
  { icon: Trophy, title: "Proven Outcomes", desc: "Hundreds of students placed across startups and MNCs." },
  { icon: Rocket, title: "Career Acceleration", desc: "From first line of code to your first offer — we walk every step with you." },
];

function About() {
  return (
    <div>
      <section className="bg-hero py-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              About Coderise
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
              Building the next generation of <span className="gradient-text">software engineers</span>
            </h1>
            <p className="mt-5 text-muted-foreground text-lg">
              Coderise Technologies is a premium software training institute in Hastinapuram, offering
              industry-aligned programming courses with real projects, expert mentorship and dedicated
              placement support.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl glass p-6 shadow-soft text-center"
              >
                <div className="text-3xl md:text-4xl font-extrabold gradient-text">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl glass p-8 shadow-soft">
          <div className="size-12 rounded-2xl bg-gradient-primary grid place-items-center shadow-elegant">
            <Target className="size-6 text-primary-foreground" />
          </div>
          <h3 className="mt-5 text-2xl font-bold">Our Mission</h3>
          <p className="mt-3 text-muted-foreground">
            To make world-class software education accessible and outcome-driven for every aspiring developer —
            equipping them with skills, projects and confidence to thrive in the modern tech industry.
          </p>
        </div>
        <div className="rounded-3xl glass p-8 shadow-soft">
          <div className="size-12 rounded-2xl bg-success grid place-items-center shadow-elegant">
            <Eye className="size-6 text-success-foreground" />
          </div>
          <h3 className="mt-5 text-2xl font-bold">Our Vision</h3>
          <p className="mt-3 text-muted-foreground">
            To become India's most trusted training partner for building career-ready software engineers, known
            for craftsmanship, mentorship and student outcomes.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Why students trust us"
            title="Practical training, real outcomes"
            subtitle="We obsess over student progress — small batches, hands-on projects and active mentorship."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trust.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-3xl glass p-6 shadow-soft hover:-translate-y-1 hover:shadow-elegant transition-all"
              >
                <div className="size-11 rounded-xl bg-primary/10 text-primary grid place-items-center">
                  <t.icon className="size-5" />
                </div>
                <h4 className="mt-4 font-bold">{t.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
