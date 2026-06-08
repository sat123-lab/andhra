import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Reveal } from "@/components/Reveal";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import logoSvg from "@/assets/logo.svg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Reservations — Andhra Dosa Co." },
      { name: "description", content: "Find us, call us, reserve a table." },
      { property: "og:title", content: "Contact — Andhra Dosa Co." },
      { property: "og:description", content: "Visit, call or reserve a table at Andhra Dosa Co." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [loading, setLoading] = useState(true);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background">
      {loading && (
        <div className="fixed inset-0 z-50 bg-[#F8F3E8]/80 backdrop-blur-md flex items-center justify-center transition-opacity duration-700 ease-out">
          <div className="flex flex-col items-center gap-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-primary/15 ring-1 ring-primary/30 p-2 flex items-center justify-center animate-pulse">
              <img src={logoSvg} alt="Andhra Dosa Co." className="w-full h-full object-contain" />
            </div>
            <div className="text-primary font-display font-black text-xl sm:text-2xl tracking-wider animate-pulse">
              Andhra Dosa Co.
            </div>
          </div>
        </div>
      )}
      <section className="relative pt-36 pb-16 bg-[#FAF6EE]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.35em] text-[#C9A227] font-bold mb-3">Contact</div>
            <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl leading-[0.9] text-[#1B3022]">
              Come <span className="text-[#B35C38]">hungry.</span><br />
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
              <Info icon={Phone} title="Call" line="+91 7977996930" href="tel:+917977996930" />
              <Info icon={Mail} title="Email" line="hello@andhradosa.co" href="mailto:hello@andhradosa.co" />
              <Info icon={Clock} title="Hours" line="7 AM – 11 PM · 7 days a week" />
            </div>

            <div className="mt-10 flex items-center gap-3">
              <a href="https://www.instagram.com/andhradosaco/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-secondary text-white grid place-items-center hover:bg-secondary/90 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="bg-[#FAF6EE] rounded-3xl p-6 sm:p-8 space-y-4"
            >
              <div className="text-[10px] uppercase tracking-[0.35em] text-[#C9A227] font-bold">Reserve a table</div>
              <h2 className="font-display font-black text-3xl text-[#1B3022]">Book your seat.</h2>
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
                className="w-full rounded-full bg-secondary text-foreground py-3.5 font-semibold disabled:opacity-60 hover:bg-secondary/90 transition-colors"
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
      <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#FAF6EE] grid place-items-center group-hover:bg-secondary transition-colors">
        <Icon className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#2F2F2F]">{title}</div>
        <div className="font-display font-bold text-xl text-[#1B3022]">{line}</div>
      </div>
    </Wrap>
  );
}

function Field({ label, name, type = "text", textarea }: { label: string; name: string; type?: string; textarea?: boolean }) {
  const common = "w-full rounded-xl bg-white border border-[#2F2F2F]/10 px-4 py-3 text-sm focus:outline-none focus:border-secondary";
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#2F2F2F]">{label}</span>
      {textarea ? (
        <textarea name={name} rows={3} className={`${common} mt-1`} />
      ) : (
        <input name={name} type={type} className={`${common} mt-1`} />
      )}
    </label>
  );
}