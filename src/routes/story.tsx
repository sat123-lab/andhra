import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import tawaPour from "@/assets/tawa-pour.jpg";
import chef from "@/assets/chef.jpg";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — Andhra Dosa Co." },
      { name: "description", content: "From Guntur flavours to Maharashtra. The story of Andhra Dosa Co." },
      { property: "og:title", content: "Our Story — Andhra Dosa Co." },
      { property: "og:description", content: "Three generations. One kitchen. The journey from Guntur to Pune." },
      { property: "og:image", content: tawaPour },
    ],
  }),
  component: StoryPage,
});

const TIMELINE = [
  { year: "1987", title: "A Guntur kitchen", note: "Sundaramma starts a 4-seat tiffin counter near her home in Guntur." },
  { year: "1996", title: "Pesarattu spreads", note: "Word travels. The MLA Pesarattu becomes a local legend." },
  { year: "2009", title: "The next generation", note: "Her son carries the recipes — and the cast iron tawa — into the family." },
  { year: "2021", title: "Maharashtra calling", note: "Pune saw plenty of dosas. Not Andhra ones. We crossed states." },
  { year: "2026", title: "Today", note: "Two cities, one promise: real Andhra. Nothing diluted." },
];

function StoryPage() {
  return (
    <div className="bg-white">
      <section className="relative pt-36 pb-20 bg-[#FAF6EE]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.35em] text-[#D62828] font-bold mb-3">Our story</div>
            <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl leading-[0.9]">
              From <span className="text-[#D62828]">Guntur flavours</span><br />
              to your table.
            </h1>
            <p className="mt-6 text-lg text-[#1a0f08]/70 max-w-2xl mx-auto">
              Three generations. One recipe book. Zero shortcuts.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img src={tawaPour} alt="Pouring dosa batter on a cast iron tawa" loading="lazy" width={1600} height={1200} className="w-full aspect-[4/5] object-cover rounded-3xl" />
          </Reveal>
          <Reveal delay={150}>
            <h2 className="font-display font-black text-4xl sm:text-5xl leading-tight">
              Maharashtra had dosas.<br />
              <span className="font-medium text-[#FF7A00]">It didn't have Andhra ones.</span>
            </h2>
            <p className="mt-5 text-[#1a0f08]/70 text-lg">
              Tamil. Karnataka. Everywhere. Beautiful dosas — but mild.
              We came to bring the karam. The pesarattu. The sambar with drumstick still on the bone.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#1a0f08] text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <div className="text-[10px] uppercase tracking-[0.35em] text-[#FFC300] font-bold mb-3">The journey</div>
              <h2 className="font-display font-black text-5xl sm:text-6xl">Forty years, one tawa.</h2>
            </div>
          </Reveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/15" />
            <ul className="space-y-12">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i * 100}>
                  <li className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>div]:col-start-2" : ""}`}>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-[#FFC300] ring-4 ring-[#1a0f08]" />
                    <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-12" : "md:text-right md:pr-12"}`}>
                      <div className="font-display font-black text-5xl text-[#D62828]">{t.year}</div>
                      <div className="font-display font-bold text-2xl mt-2">{t.title}</div>
                      <div className="text-white/65 mt-2">{t.note}</div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <img src={chef} alt="Chef at work" loading="lazy" width={1024} height={1024} className="w-full aspect-square object-cover rounded-3xl" />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display font-black text-4xl sm:text-5xl">
              The recipe never <span className="text-[#D62828]">changed.</span>
            </h2>
            <p className="mt-4 text-[#1a0f08]/70 text-lg">
              Same soak time. Same stone grinder. Same cast iron tawa.
              We expanded the dining room, not the shortcuts.
            </p>
            <Link to="/menu" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#D62828] text-white px-6 py-3 font-semibold">
              Try the recipes <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}