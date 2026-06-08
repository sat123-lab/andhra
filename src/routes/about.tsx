import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import pesarattu from "@/assets/pesarattu-hero.jpg";
import logoSvg from "@/assets/logo.svg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Why Andhra — Andhra Dosa Co." },
      { name: "description", content: "Why Andhra cuisine deserves its own stage in Maharashtra. Six reasons we are obsessed." },
      { property: "og:title", content: "Why Andhra — Andhra Dosa Co." },
      { property: "og:description", content: "Pesarattu, drumstick sambar, allam chutney — the Andhra you have been missing." },
      { property: "og:image", content: pesarattu },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
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
      <section className="relative pt-36 pb-16 bg-[#FAF6EE] overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.35em] text-[#C9A227] font-bold mb-3">Why Andhra</div>
            <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl leading-[0.9] max-w-4xl text-[#1B3022]">
              Different state.<br />
              <span className="font-medium text-[#B35C38]">Different soul.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-[#FAF6EE] text-foreground">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-black text-5xl sm:text-6xl text-[#1B3022]">
              We are not South Indian.<br />
              <span className="font-medium text-[#E9C46A]">We are Andhra.</span>
            </h2>
            <p className="mt-5 text-[#2F2F2F] max-w-2xl mx-auto text-lg font-medium">
              The map matters. The spice matters. The chutney matters.
            </p>
            <Link to="/menu" className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary text-foreground px-7 py-3.5 font-semibold hover:bg-secondary/90 transition-colors">
              See the menu <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}