import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  Flame, Leaf, ChefHat, Sparkles, ArrowRight, Star, ChevronDown,
  Clock, Truck, Award, MapPin,
} from "lucide-react";

import pesarattu from "@/assets/pesarattu-hero.jpg";
import chutneys from "@/assets/chutneys.jpg";
import idliSambar from "@/assets/idli-sambar.jpg";
import drumstickSambar from "@/assets/drumstick-sambar.jpg";
import heroDosa from "@/assets/hero-dosa.jpg";
import dosa1 from "@/assets/dosa-1.jpg";
import dosa2 from "@/assets/dosa-2.jpg";
import dosa5 from "@/assets/dosa-5.jpg";
import adc4 from "@/assets/idly/adc 4.png";
import adc from "@/assets/idly/ADC.png";
import dsbf4 from "@/assets/idly/dsbf 4.png";
import logoSvg from "@/assets/logo.svg";

import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Andhra Dosa Company — Authentic Andhra Flavours in Maharashtra" },
      { name: "description", content: "Pesarattu, drumstick sambar, ginger chutney and bigger idlis. Authentic Andhra cuisine, brought from Guntur to Maharashtra." },
      { property: "og:title", content: "Andhra Dosa Company" },
      { property: "og:description", content: "Pesarattu is our hero. Drumstick sambar, allam chutney, bigger idlis — the real Andhra." },
      { property: "og:image", content: pesarattu },
    ],
  }),
  component: HomePage,
});

/* ─────────────────── HOOKS ─────────────────── */

function useCountUp(end: number, duration = 2000, trigger = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<number | null>(null);
  useEffect(() => {
    if (!trigger) return;
    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) ref.current = requestAnimationFrame(step);
    };
    ref.current = requestAnimationFrame(step);
    return () => { if (ref.current) cancelAnimationFrame(ref.current); };
  }, [end, duration, trigger]);
  return count;
}

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* 3D tilt hook — mouse-driven perspective rotation */
function useTilt(intensity = 12) {
  const ref = useRef<HTMLDivElement>(null);
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale3d(1.02,1.02,1.02)`;
  }, [intensity]);
  const onMouseLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateY(0) rotateX(0) scale3d(1,1,1)";
  }, []);
  return { ref, onMouseMove, onMouseLeave };
}

/* ─────────────────── PAGE ─────────────────── */

const MARQUEE = [
  "Pesarattu", "Drumstick Sambar", "Allam Chutney", "Bigger Idlis",
  "Guntur Karam", "Filter Coffee", "Coconut Chutney", "Rayalaseema Spice",
];

function HomePage() {
  return (
    <div className="bg-[#0a0604] text-white overflow-x-hidden">
      <Hero />
      <MarqueeStrip />
      <StatsCounter />
      <StorySection />
      <FeaturedDishes />
      <ProcessStrip />
      <MenuPreview />
      <BigCTA />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   HERO — Cinematic full-screen with parallax & text reveal
   ═══════════════════════════════════════════════════════════════════ */
const HERO_IMAGES = [pesarattu, dosa1, chutneys, drumstickSambar, dosa2];

function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoaded(true);
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    /* parallax on scroll */
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (heroRef.current) {
          const y = window.scrollY * 0.3;
          heroRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { clearInterval(timer); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax background images */}
      <div ref={heroRef} className="absolute inset-0 will-change-transform">
        {HERO_IMAGES.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{
              opacity: i === currentIdx ? 1 : 0,
              transform: i === currentIdx ? "scale(1.08)" : "scale(1)",
              transition: "opacity 2s ease-in-out, transform 8s ease-out",
            }}
          />
        ))}
      </div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`
      }} />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 pt-24 sm:pt-20 z-10">
        {/* Overline */}
        <div className={`text-[10px] sm:text-xs uppercase tracking-[0.5em] text-[#D4A017] font-semibold mb-4 sm:mb-6 transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Authentic Andhra Cuisine
        </div>

        {/* Main title — 3D perspective text */}
        <h1 className={`font-display font-black text-center leading-[0.88] transition-all duration-[1200ms] delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          style={{ perspective: "1000px" }}
        >
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            style={{
              background: "linear-gradient(135deg, #FFC300 0%, #D4A017 50%, #FF7A00 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              textShadow: "none",
            }}
          >
            Andhra Dosa Company
          </span>
        </h1>

        {/* Tagline */}
        <p className={`font-display italic text-base sm:text-lg lg:text-xl text-white/50 mt-5 sm:mt-8 text-center tracking-wide max-w-md transition-all duration-1000 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Three generations of Guntur's finest, brought to your plate.
        </p>

        {/* CTA buttons */}
        <div className={`flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 transition-all duration-1000 delay-[900ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Link to="/menu" className="group relative inline-flex items-center gap-2 rounded-full bg-[#D62828] text-white px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base hover:bg-[#b81e1e] transition-all duration-300 shadow-[0_8px_32px_rgba(214,40,40,0.4)] hover:shadow-[0_12px_48px_rgba(214,40,40,0.6)] hover:scale-105 active:scale-95">
            Explore Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/story" className="inline-flex items-center gap-2 rounded-full border border-white/20 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base hover:bg-white/10 hover:border-white/40 transition-all duration-300">
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 delay-[1300ms] ${loaded ? "opacity-100" : "opacity-0"}`}>
        <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-transparent via-white/30 to-white/60 animate-pulse" />
        <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.5em] text-white/40 font-semibold">Scroll</span>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0604] to-transparent" />
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MARQUEE STRIP
   ═══════════════════════════════════════════════════════════════════ */
function MarqueeStrip() {
  return (
    <section className="relative py-5 sm:py-6 bg-[#0a0604] border-y border-white/5 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0604] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0604] to-transparent z-10 pointer-events-none" />
      <div className="flex gap-10 sm:gap-14 whitespace-nowrap animate-marquee">
        {[...MARQUEE, ...MARQUEE, ...MARQUEE].map((w, i) => (
          <span key={i} className="flex items-center gap-10 sm:gap-14 font-display italic text-2xl sm:text-3xl md:text-4xl text-white/60 hover:text-[#FFC300] transition-colors duration-300 cursor-default">
            {w}
            <span className="w-1.5 h-1.5 rounded-full bg-[#D62828]" />
          </span>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   STATS — Animated counters
   ═══════════════════════════════════════════════════════════════════ */
function StatsCounter() {
  const { ref, inView } = useInView(0.3);
  const customers = useCountUp(12000, 2500, inView);
  const recipes = useCountUp(100, 2000, inView);
  const years = useCountUp(37, 1800, inView);
  const rating = useCountUp(49, 2000, inView);

  const stats = [
    { value: `${(customers / 1000).toFixed(customers >= 10000 ? 0 : 1)}k+`, label: "Happy Customers", icon: Star },
    { value: `${recipes}%`, label: "Authentic Recipes", icon: Award },
    { value: `${years} yr`, label: "Family Legacy", icon: Clock },
    { value: `${(rating / 10).toFixed(1)}★`, label: "Average Rating", icon: Sparkles },
  ];

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-[#0f0a06] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 w-[400px] h-[400px] rounded-full bg-[#D62828]/5 blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 w-[400px] h-[400px] rounded-full bg-[#D4A017]/5 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-white/[0.03] border border-white/[0.08] grid place-items-center mb-4 backdrop-blur-sm">
                <s.icon className="w-6 h-6 text-[#FFC300]" />
              </div>
              <div className="font-montserrat font-bold text-4xl sm:text-5xl md:text-6xl text-white">
                {s.value}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/35 mt-3 font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   STORY SECTION — Split layout with parallax image
   ═══════════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40 bg-[#0a0604] overflow-hidden">
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-[#D62828]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image side */}
        <Reveal>
          <div className="relative group">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#D4A017]/20 via-transparent to-[#D62828]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={pesarattu}
                alt="Pesarattu being prepared"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-[#D62828] text-white rounded-2xl p-4 sm:p-5 shadow-[0_20px_60px_rgba(214,40,40,0.3)]">
              <div className="font-montserrat font-bold text-2xl sm:text-3xl">37+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-white/70 mt-1">Years Legacy</div>
            </div>
          </div>
        </Reveal>

        {/* Text side */}
        <Reveal delay={150}>
          <div className="text-[10px] uppercase tracking-[0.4em] text-[#D4A017] font-bold mb-5">Our Story</div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.92] text-white">
            From a Guntur<br />
            <span className="italic font-medium text-[#D4A017]">kitchen to you.</span>
          </h2>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-white/55 leading-relaxed max-w-lg">
            Three generations of perfecting pesarattu. Soaking green moong overnight,
            grinding it on stone, spreading it thin on cast iron. No rice. No shortcuts.
            Just the real Andhra.
          </p>

          <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-3 max-w-md">
            {[
              { k: "0g", v: "Rice" },
              { k: "12g", v: "Protein" },
              { k: "6hr", v: "Soaked" },
            ].map((s) => (
              <div key={s.v} className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-3 sm:p-4 text-center group hover:bg-[#D4A017]/10 hover:border-[#D4A017]/30 transition-all duration-500 cursor-default">
                <div className="font-montserrat font-bold text-xl sm:text-2xl text-[#FFC300] group-hover:scale-110 transition-transform">{s.k}</div>
                <div className="text-[9px] uppercase tracking-wider text-white/40 mt-1 font-semibold">{s.v}</div>
              </div>
            ))}
          </div>

          <Link to="/story" className="group inline-flex items-center gap-2 mt-8 sm:mt-10 text-[#D4A017] font-bold text-sm sm:text-base hover:gap-3 transition-all">
            Read the full story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FEATURED DISHES — 3D tilt cards
   ═══════════════════════════════════════════════════════════════════ */
function TiltCard({ img, title, subtitle, accent }: { img: string; title: string; subtitle: string; accent: string }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(10);
  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group cursor-default"
      style={{ transition: "transform 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)" }}
    >
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/[0.06]">
        <img src={img} alt={title} loading="lazy" className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <div className="text-[9px] uppercase tracking-[0.3em] font-bold mb-2" style={{ color: accent }}>{subtitle}</div>
          <div className="font-display font-black text-xl sm:text-2xl text-white">{title}</div>
        </div>
        {/* Glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle at 50% 80%, ${accent}15, transparent 70%)` }}
        />
      </div>
    </div>
  );
}

function FeaturedDishes() {
  const dishes = [
    { img: pesarattu, title: "Pesarattu", subtitle: "The Hero", accent: "#4ade80" },
    { img: drumstickSambar, title: "Drumstick Sambar", subtitle: "The Soul", accent: "#D62828" },
    { img: chutneys, title: "Triple Chutneys", subtitle: "The Trio", accent: "#FF7A00" },
    { img: idliSambar, title: "Bigger Idlis", subtitle: "The Cloud", accent: "#FFC300" },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#0a0604] overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-20 w-[600px] h-[600px] bg-[#D4A017]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14 sm:mb-20">
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#D4A017] font-bold mb-4">Signature Dishes</div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.92] text-white">
              Crafted with<br />
              <span className="italic font-medium text-[#D4A017]">obsession.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {dishes.map((d, i) => (
            <Reveal key={d.title} delay={i * 100}>
              <TiltCard {...d} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PROCESS STRIP — Dark luxury steps
   ═══════════════════════════════════════════════════════════════════ */
function ProcessStrip() {
  const steps = [
    { icon: Leaf, title: "Soak", note: "Green moong · 6 hours", num: "01" },
    { icon: ChefHat, title: "Grind", note: "Stone-ground · ginger & chili", num: "02" },
    { icon: Flame, title: "Tawa", note: "Cast iron · 220°C", num: "03" },
    { icon: Truck, title: "Serve", note: "Hot · in 8 minutes", num: "04" },
  ];
  return (
    <section className="relative py-20 sm:py-28 bg-[#0f0a06] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14 sm:mb-18">
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#D62828] font-bold mb-4">The Process</div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white">
              Four steps. <span className="italic font-medium text-[#D62828]">Zero shortcuts.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-center h-full hover:bg-white/[0.05] hover:border-[#D62828]/30 hover:-translate-y-2 transition-all duration-500">
                {/* Step number */}
                <div className="font-display italic font-black text-5xl sm:text-6xl text-white/[0.04] absolute top-3 right-4 group-hover:text-[#D62828]/10 transition-colors duration-500">
                  {s.num}
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-2xl bg-[#D62828]/10 border border-[#D62828]/20 grid place-items-center group-hover:bg-[#D62828]/20 transition-all duration-500">
                  <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#D62828]" />
                </div>
                <div className="font-display font-bold text-lg sm:text-xl text-white mt-4 sm:mt-5">{s.title}</div>
                <div className="text-[11px] sm:text-xs text-white/40 mt-2">{s.note}</div>
                {/* Connector */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 sm:-right-4 w-4 sm:w-6 h-px bg-white/10" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MENU PREVIEW — Premium food cards
   ═══════════════════════════════════════════════════════════════════ */
function MenuPreview() {
  const items = [
    { img: adc4, name: "Pesarattu", tag: "Hero", price: "₹160" },
    { img: adc, name: "Ghee Karam Dosa", tag: "Signature", price: "₹220" },
    { img: heroDosa, name: "Andhra Masala Dosa", tag: "Bestseller", price: "₹180" },
    { img: dsbf4, name: "Mysore Masala", tag: "Classic", price: "₹210" },
  ];
  return (
    <section className="relative py-24 sm:py-32 bg-[#0a0604] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-16">
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-[#D4A017] font-bold mb-4">From the menu</div>
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[0.92] text-white">
                Pick. Tap. <span className="italic font-medium text-[#FF7A00]">Devour.</span>
              </h2>
            </div>
            <Link to="/menu" className="group inline-flex items-center gap-2 font-bold text-sm text-[#D4A017] hover:gap-3 transition-all">
              Full menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={i * 100}>
              <Link to="/menu" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/[0.06]">
                  <img src={it.img} alt={it.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-full px-3 py-1 border border-white/10">{it.tag}</span>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <div className="font-display font-bold text-base sm:text-lg text-white">{it.name}</div>
                    <div className="text-[#FFC300] font-bold text-sm mt-1">{it.price}</div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   BIG CTA — Grand final section
   ═══════════════════════════════════════════════════════════════════ */
function BigCTA() {
  return (
    <section className="relative py-28 sm:py-36 lg:py-44 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={dosa1} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
      </div>

      {/* Glows */}
      <div className="absolute -right-20 -top-20 w-[500px] h-[500px] rounded-full bg-[#D62828]/10 blur-[120px]" />
      <div className="absolute -left-20 -bottom-20 w-[400px] h-[400px] rounded-full bg-[#D4A017]/8 blur-[120px]" />

      {/* Telugu watermark */}
      <div className="absolute font-display italic text-white/[0.02] text-[20rem] sm:text-[30rem] leading-none -bottom-32 left-1/2 -translate-x-1/2 select-none pointer-events-none">
        ఆంధ్ర
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div className="text-[10px] uppercase tracking-[0.5em] text-[#FFC300] font-bold mb-5">
            Come hungry. Leave proud.
          </div>
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.88] text-white">
            Eat the real<br />
            <span className="italic font-medium" style={{
              background: "linear-gradient(135deg, #FFC300, #D4A017, #FF7A00)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}>Andhra.</span>
          </h2>
          <p className="mt-5 sm:mt-8 text-white/45 text-sm sm:text-base max-w-lg mx-auto">
            From Guntur with love. Every dosa tells a story of three generations.
          </p>
          <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-4">
            <Link to="/menu" className="group inline-flex items-center gap-2 rounded-full bg-[#D62828] text-white px-7 sm:px-9 py-4 sm:py-5 font-bold text-sm sm:text-base hover:bg-[#b81e1e] hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_8px_40px_rgba(214,40,40,0.4)]">
              View Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 backdrop-blur-sm text-white px-7 sm:px-9 py-4 sm:py-5 font-bold text-sm sm:text-base hover:bg-white/10 hover:border-white/40 transition-all duration-300">
              <MapPin className="w-4 h-4" /> Visit Us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}