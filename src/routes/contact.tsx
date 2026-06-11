import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { InquiryForm } from "@/components/site/InquiryForm";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Coderise Technologies" },
      { name: "description", content: "Get in touch with Coderise Technologies. Call 9390933435 or visit Adithya Enclave, Hastinapuram." },
      { property: "og:title", content: "Contact Coderise Technologies" },
      { property: "og:description", content: "Talk to a counsellor about courses and admissions." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <section className="bg-hero py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Get in touch"
            title="We'd love to help you start"
            subtitle="Call, WhatsApp or drop us a message — a counsellor will reach out within a few hours."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-3 gap-6">
        {[
          { icon: Phone, title: "Call us", text: "+91 93909 33435", href: "tel:9390933435" },
          { icon: Mail, title: "Email", text: "hello@coderise.tech", href: "mailto:hello@coderise.tech" },
          { icon: Clock, title: "Hours", text: "Mon–Sat · 9am to 8pm" },
        ].map((c) => (
          <a key={c.title} href={c.href ?? "#"} className="rounded-2xl glass p-6 shadow-soft hover:-translate-y-1 hover:shadow-elegant transition-all">
            <div className="size-11 rounded-xl bg-gradient-primary grid place-items-center shadow-elegant">
              <c.icon className="size-5 text-primary-foreground" />
            </div>
            <div className="mt-4 text-sm text-muted-foreground">{c.title}</div>
            <div className="font-semibold">{c.text}</div>
          </a>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-3xl glass p-6 md:p-10 shadow-soft grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold">Coderise Technologies</h2>
            <div className="mt-4 flex items-start gap-3">
              <MapPin className="size-5 text-primary mt-0.5" />
              <div className="text-sm">
                Adithya Enclave, First Floor,<br />
                ZP Road, Hastinapuram
              </div>
            </div>
            <div className="mt-3 flex items-start gap-3">
              <Phone className="size-5 text-primary mt-0.5" />
              <a href="tel:9390933435" className="text-sm hover:text-primary">+91 93909 33435</a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-muted">
            <iframe
              title="Coderise Technologies location"
              src="https://www.google.com/maps?q=Hastinapuram+Hyderabad&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-24">
        <InquiryForm />
      </div>
    </div>
  );
}
