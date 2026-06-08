import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import tawaPour from "@/assets/tawa-pour.jpg";
import chef from "@/assets/chef.jpg";
import interior from "@/assets/interior.jpg";
import logoSvg from "@/assets/logo.svg";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — Andhra Dosa Co." },
      { name: "description", content: "Our journey bringing authentic Coastal Andhra cuisine from the kitchen to your table." },
      { property: "og:title", content: "Our Story — Andhra Dosa Co." },
      { property: "og:description", content: "The story of authentic Andhra cuisine." },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  const [loading, setLoading] = useState(true);

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
      <section className="relative pt-36 pb-20 bg-[#FAF6EE]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.35em] text-[#C9A227] font-bold mb-3">Our story</div>
            <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl leading-[0.9] text-[#1B3022]">
              From <span className="text-[#B35C38]">Coastal Andhra</span><br />
              to your table.
            </h1>
            <p className="mt-6 text-lg text-[#2F2F2F] max-w-2xl mx-auto font-medium">
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
            <h2 className="font-display font-black text-4xl sm:text-5xl leading-tight text-[#1B3022]">
              Maharashtra had dosas.<br />
              <span className="font-medium text-[#E9C46A]">It didn't have Andhra ones.</span>
            </h2>
            <p className="mt-5 text-[#2F2F2F] text-lg font-medium">
              Tamil. Karnataka. Everywhere. Beautiful dosas — but mild.
              We came to bring the karam. The pesarattu. The sambar with drumstick still on the bone.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <img src={chef} alt="Chef at work" loading="lazy" width={1024} height={1024} className="w-full aspect-square object-cover rounded-3xl" />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#1B3022]">
              The recipe never <span className="text-[#B35C38]">changed.</span>
            </h2>
            <p className="mt-4 text-[#2F2F2F] text-lg font-medium">
              Same soak time. Same stone grinder. Same cast iron tawa.
              We expanded the dining room, not the shortcuts.
            </p>
            <Link to="/menu" className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary text-foreground px-6 py-3 font-semibold hover:bg-secondary/90 transition-colors">
              Try the recipes <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}