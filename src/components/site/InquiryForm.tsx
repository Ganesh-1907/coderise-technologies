import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { courses } from "@/data/courses";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  email: z.string().trim().email("Invalid email").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  course: z.string().min(1, "Select a course"),
  message: z.string().trim().max(800).optional().or(z.literal("")),
});

export function InquiryForm({ defaultCourse }: { defaultCourse?: string }) {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Thanks! Our team will contact you shortly.");
    (e.target as HTMLFormElement).reset();
  };

  const waText = encodeURIComponent(
    `Hi Coderise Technologies, I'm interested in ${defaultCourse ?? "your courses"}. Please share details.`,
  );

  return (
    <section
      id="enroll"
      className="relative overflow-hidden rounded-3xl p-1 shadow-elegant"
      style={{ background: "var(--gradient-primary)" }}
    >
      <div className="rounded-[calc(theme(borderRadius.3xl)-4px)] bg-card p-6 md:p-10 grid md:grid-cols-2 gap-10">
        <div>
          <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Enroll Now
          </span>
          <h3 className="mt-4 text-3xl md:text-4xl font-bold">
            Interested in this course?
          </h3>
          <p className="mt-3 text-muted-foreground">
            Talk to a Coderise Technologies counsellor today and get a personalised
            roadmap, fee details and the upcoming batch schedule.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <Phone className="size-5 text-primary mt-0.5" />
              <div>
                <div className="font-medium">Call us</div>
                <a href="tel:9390933435" className="text-muted-foreground hover:text-primary">+91 93909 33435</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="size-5 text-primary mt-0.5" />
              <div>
                <div className="font-medium">Visit our centre</div>
                <div className="text-muted-foreground">
                  Adithya Enclave, First Floor,<br/>ZP Road, Hastinapuram
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:9390933435"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary text-primary-foreground px-5 py-3 text-sm font-semibold shadow-elegant hover:scale-105 transition"
            >
              <Phone className="size-4" /> Call Now
            </a>
            <a
              href={`https://wa.me/919390933435?text=${waText}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-success text-success-foreground px-5 py-3 text-sm font-semibold shadow-soft hover:scale-105 transition"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass rounded-2xl p-6 space-y-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Full Name</label>
            <input name="name" required className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</label>
              <input type="tel" name="phone" required className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Interested Course</label>
            <select name="course" defaultValue={defaultCourse ?? ""} required className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary">
              <option value="" disabled>Select a course</option>
              {courses.map((c) => (
                <option key={c.slug} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea name="message" rows={4} className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <button
            disabled={submitting}
            className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground px-5 py-3 text-sm font-semibold shadow-elegant hover:scale-[1.02] transition disabled:opacity-70"
          >
            {submitting ? "Sending..." : "Request Information"}
          </button>
        </form>
      </div>
    </section>
  );
}
