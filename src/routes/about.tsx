import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Reveal } from "@/components/Reveal";
import { Flame, Leaf, ChefHat, Award, Truck, Shield, ArrowRight } from "lucide-react";
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

const POINTS = [
  { icon: Flame, k: "5x", t: "Spicier than Tamil dosas", n: "Guntur red chili. No apologies." },
  { icon: Leaf, k: "0g", t: "Rice in Pesarattu", n: "Pure green moong protein." },
  { icon: ChefHat, k: "3", t: "Generations of recipe", n: "Carried through one family." },
  { icon: Shield, k: "100%", t: "Hand-ground masalas", n: "No commercial podis." },
  { icon: Truck, k: "30 min", t: "Hot-to-door", n: "Within 5 km radius." },
  { icon: Award, k: "#1", t: "Andhra restaurant", n: "Voted three years running." },
];

function AboutPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white">
      {loading && (
        <div className="fixed inset-0 z-50 bg-[#0a0604]/80 backdrop-blur-md flex items-center justify-center transition-opacity duration-700 ease-out">
          <div className="flex flex-col items-center gap-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-[#D4A017]/15 ring-1 ring-[#D4A017]/30 p-2 flex items-center justify-center animate-pulse">
              <img src={logoSvg} alt="Andhra Dosa Co." className="w-full h-full object-contain" />
            </div>
            <div className="text-[#D4A017] font-display font-black text-xl sm:text-2xl tracking-wider animate-pulse">
              Andhra Dosa Co.
            </div>
          </div>
        </div>
      )}
      <section className="relative pt-36 pb-16 bg-[#FAF6EE] overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.35em] text-[#D62828] font-bold mb-3">Why Andhra</div>
            <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl leading-[0.9] max-w-4xl">
              Different state.<br />
              <span className="font-medium text-[#D62828]">Different soul.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {POINTS.map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <div className="bg-[#FAF6EE] rounded-3xl p-7 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-white grid place-items-center">
                    <p.icon className="w-5 h-5 text-[#D62828]" />
                  </div>
                  <div className="mt-5 font-display font-black text-5xl text-[#D62828]">{p.k}</div>
                  <div className="mt-2 font-display font-bold text-xl">{p.t}</div>
                  <div className="mt-1 text-sm text-[#1a0f08]/60">{p.n}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a0f08] text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-black text-5xl sm:text-6xl">
              We are not South Indian.<br />
              <span className="font-medium text-[#FFC300]">We are Andhra.</span>
            </h2>
            <p className="mt-5 text-white/65 max-w-2xl mx-auto text-lg">
              The map matters. The spice matters. The chutney matters.
            </p>
            <Link to="/menu" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D62828] text-white px-7 py-3.5 font-semibold">
              See the menu <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}