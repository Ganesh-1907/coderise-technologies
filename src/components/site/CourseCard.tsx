import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock, BarChart3 } from "lucide-react";
import type { Course } from "@/data/courses";

export function CourseCard({ course, index = 0 }: { course: Course; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.06 }}
      className="group relative"
    >
      <Link
        to="/courses/$slug"
        params={{ slug: course.slug }}
        className="block h-full rounded-3xl glass shadow-soft overflow-hidden border border-white/40 hover:-translate-y-1.5 hover:shadow-elegant transition-all duration-300"
      >
        <div className={`relative h-40 bg-gradient-to-br ${course.gradient} overflow-hidden`}>
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, white 0 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 0 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }} />
          <div className="absolute -bottom-6 -right-4 size-32 rounded-full bg-white/10 blur-2xl" />
          <div className="relative h-full flex items-center justify-between px-6">
            <span className="text-6xl drop-shadow-lg">{course.icon}</span>
            <span className="rounded-full bg-white/20 backdrop-blur text-white text-xs font-semibold px-3 py-1">
              {course.level}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold tracking-tight">{course.name}</h3>
          <p className="mt-1 text-sm text-primary font-medium">{course.tagline}</p>
          <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{course.description}</p>
          <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5" />{course.duration}</span>
            <span className="inline-flex items-center gap-1.5"><BarChart3 className="size-3.5" />{course.level}</span>
          </div>
          <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
            Learn More <ArrowRight className="size-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
