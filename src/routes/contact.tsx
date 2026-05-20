import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Reservations — Andhra Dosa Company" },
      { name: "description", content: "Find us, call us, reserve a table." },
      { property: "og:title", content: "Contact — Andhra Dosa Company" },
      { property: "og:description", content: "Visit, call or reserve a table at Andhra Dosa Company." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="bg-white">
      <section className="relative pt-36 pb-16 bg-[#FAF6EE]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.35em] text-[#D62828] font-bold mb-3">Contact</div>
            <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl leading-[0.9]">
              Come <span className="italic text-[#D62828]">hungry.</span><br />
              Leave proud.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="space-y-5">
              <Info icon={MapPin} title="Visit" line="Koregaon Park · Pune 411001" />
              <Info icon={Phone} title="Call" line="+91 99999 99999" href="tel:+919999999999" />
              <Info icon={Mail} title="Email" line="hello@andhradosa.co" href="mailto:hello@andhradosa.co" />
              <Info icon={Clock} title="Hours" line="7 AM – 11 PM · 7 days a week" />
            </div>

            <div className="mt-10 flex items-center gap-3">
              {[Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-11 h-11 rounded-full bg-[#1a0f08] text-white grid place-items-center hover:bg-[#D62828] transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="bg-[#FAF6EE] rounded-3xl p-6 sm:p-8 space-y-4"
            >
              <div className="text-[10px] uppercase tracking-[0.35em] text-[#D62828] font-bold">Reserve a table</div>
              <h2 className="font-display font-black text-3xl">Book your seat.</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                <Field label="Name" name="name" />
                <Field label="Phone" name="phone" type="tel" />
                <Field label="Date" name="date" type="date" />
                <Field label="Guests" name="guests" type="number" />
              </div>
              <Field label="Special notes" name="notes" textarea />
              <button
                type="submit"
                disabled={sent}
                className="w-full rounded-full bg-[#D62828] text-white py-3.5 font-semibold disabled:opacity-60"
              >
                {sent ? "Thank you — we'll call to confirm" : "Reserve"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Info({ icon: Icon, title, line, href }: { icon: any; title: string; line: string; href?: string }) {
  const Wrap: any = href ? "a" : "div";
  return (
    <Wrap href={href} className="flex items-start gap-4 group">
      <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#FAF6EE] grid place-items-center group-hover:bg-[#D62828] transition-colors">
        <Icon className="w-5 h-5 text-[#D62828] group-hover:text-white transition-colors" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#1a0f08]/50">{title}</div>
        <div className="font-display font-bold text-xl">{line}</div>
      </div>
    </Wrap>
  );
}

function Field({ label, name, type = "text", textarea }: { label: string; name: string; type?: string; textarea?: boolean }) {
  const common = "w-full rounded-xl bg-white border border-[#1a0f08]/10 px-4 py-3 text-sm focus:outline-none focus:border-[#D62828]";
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1a0f08]/55">{label}</span>
      {textarea ? (
        <textarea name={name} rows={3} className={`${common} mt-1`} />
      ) : (
        <input name={name} type={type} className={`${common} mt-1`} />
      )}
    </label>
  );
}