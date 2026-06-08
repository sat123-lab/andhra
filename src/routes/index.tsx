import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  Flame, Leaf, ChefHat, Sparkles, ArrowRight, Star, ChevronDown,
  Clock, Truck, Award, MapPin, BookOpen,
} from "lucide-react";

import pesarattu from "@/assets/pesarattu-hero.jpg";
import chutneys from "@/assets/chutneys.jpg";
import idliSambar from "@/assets/idli-sambar.jpg";
import drumstickSambar from "@/assets/drumstick-sambar.jpg";
import dosa1 from "@/assets/dosa-1.jpg";
import dosa2 from "@/assets/dosa-2.jpg";
import dosa4 from "@/assets/dosa-4.jpg";
import dosa5 from "@/assets/dosa-5.jpg";
import logoSvg from "@/assets/logo.svg";
import galleryImg1 from "@/assets/gallary/2655b4fb-a390-4bf0-b2ab-6008f85a3b0a.jpg (1).jpeg";
import galleryImg2 from "@/assets/gallary/2655b4fb-a390-4bf0-b2ab-6008f85a3b0a.jpg.jpeg";
import galleryImg3 from "@/assets/gallary/39d7febe-27ce-45c0-8d95-56182eb52799.jpg.jpeg";
import galleryImg4 from "@/assets/gallary/3c903ac1-58b6-4116-856d-da58e6147bd6.jpg.jpeg";
import galleryImg5 from "@/assets/gallary/d3b6b160-c453-42a8-b21c-97cb8e844f10.jpg.jpeg";

import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Andhra Dosa Co. — Authentic Andhra Flavours in Maharashtra" },
      { name: "description", content: "Pesarattu, drumstick sambar, ginger chutney and bigger idlis. Authentic Andhra cuisine, brought from Coastal Andhra to Maharashtra." },
      { property: "og:title", content: "Andhra Dosa Co." },
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
  "Coastal Andhra Karam", "Filter Coffee", "Coconut Chutney", "Rayalaseema Spice",
];

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {loading && (
        <div className="fixed inset-0 z-50 bg-[#F8F3E8]/80 backdrop-blur-md flex items-center justify-center transition-opacity duration-700 ease-out">
          <div className="flex flex-col items-center gap-6">
            <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-2xl bg-primary/15 ring-1 ring-primary/30 p-2 flex items-center justify-center animate-pulse">
              <img src={logoSvg} alt="Andhra Dosa Co." className="w-full h-full object-contain" />
            </div>
            <div className="text-primary font-display font-black text-xl sm:text-2xl tracking-wider animate-pulse">
              Andhra Dosa Co.
            </div>
          </div>
        </div>
      )}
      <Hero />
      <MarqueeStrip />
      <StorySection />
      <FeaturedDishes />
      <ProcessStrip />
      <MenuPreview />
      <GalleryHighlight />
      <BigCTA />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   HERO — Premium static layout, readable on every background image
   ═══════════════════════════════════════════════════════════════════ */
const HERO_IMAGES = [drumstickSambar, pesarattu, chutneys, idliSambar, dosa2];

const HERO_TEXT_SHADOW = "0 2px 8px rgba(255,255,255,0.85), 0 4px 16px rgba(255,255,255,0.55)";
const HERO_TITLE_SHADOW = "0 3px 12px rgba(255,255,255,0.9), 0 6px 24px rgba(255,255,255,0.6), 0 2px 6px rgba(0,0,0,0.12)";

function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Andhra+Dosa+Co+Pune";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen">
      {/* Full-screen background */}
      <div className="absolute inset-0 min-h-full">
        {HERO_IMAGES.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: i === currentIdx ? 1 : 0,
              objectPosition: "center 50%",
              filter: "brightness(0.88) contrast(1.05) saturate(1.06) blur(1px)",
              transition: "opacity 2.5s ease-in-out",
            }}
          />
        ))}
      </div>

      {/* Soft center glow — no box, image stays full & visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 80% 70% at 50% 48%, rgba(255,252,245,0.42) 0%, rgba(248,243,232,0.22) 50%, transparent 78%)",
            "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, transparent 40%, rgba(0,0,0,0.10) 100%)",
          ].join(", "),
        }}
      />

      {/* Content — padded below navbar, extra bottom space so buttons aren't cropped */}
      <div className="relative min-h-screen flex flex-col items-center px-4 z-10 pt-[9.5rem] pb-24 sm:pb-28">
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center my-auto">
          {/* Overline */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 mb-5 sm:mb-6">
            <span className="flex items-center gap-1 text-[#B35C38]" aria-hidden="true">
              <span className="block w-8 sm:w-10 h-px bg-[#B35C38]/60" />
              <span className="text-[6px] leading-none">◆</span>
              <span className="block w-3 h-px bg-[#B35C38]/60" />
              <span className="text-[11px] tracking-normal ml-0.5">—›</span>
            </span>
            <span
              className="font-montserrat uppercase text-[#B35C38]"
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textShadow: HERO_TEXT_SHADOW,
              }}
            >
              AUTHENTIC ANDHRA CUISINE
            </span>
            <span className="flex items-center gap-1 text-[#B35C38]" aria-hidden="true">
              <span className="text-[11px] tracking-normal mr-0.5">‹—</span>
              <span className="block w-3 h-px bg-[#B35C38]/60" />
              <span className="text-[6px] leading-none">◆</span>
              <span className="block w-8 sm:w-10 h-px bg-[#B35C38]/60" />
            </span>
          </div>

          {/* Main title — 3 clean lines, no overlap */}
          <div className="relative inline-block">
            <span
              className="absolute -left-8 sm:-left-10 top-[12%] w-6 sm:w-7"
              aria-hidden="true"
            >
              <svg viewBox="0 0 32 32" className="w-full h-auto" fill="none">
                <circle cx="18" cy="16" r="5" fill="#E9C46A" />
                <line x1="4" y1="10" x2="10" y2="13" stroke="#E9C46A" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="3" y1="16" x2="10" y2="16" stroke="#E9C46A" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="4" y1="22" x2="10" y2="19" stroke="#E9C46A" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>

            <h1
              className="font-display"
              style={{
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-1.5px",
                fontSize: "clamp(2.5rem, 6.5vw, 6rem)",
                textShadow: HERO_TITLE_SHADOW,
              }}
            >
              <span className="block mb-1 sm:mb-2" style={{ color: "#0F4D2E" }}>
                Eat the real
              </span>
              <span className="block mb-1 sm:mb-2" style={{ color: "#B35C38" }}>
                Coastal
              </span>
              <span className="block" style={{ color: "#0F4D2E" }}>
                Andhra
                <span
                  className="inline-block align-middle ml-1 rounded-full"
                  style={{ width: "0.2em", height: "0.2em", backgroundColor: "#E9C46A" }}
                />
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mt-6 sm:mt-7 flex flex-col items-center">
            <span
              className="text-[#B35C38] text-[8px] mb-2.5 leading-none"
              style={{ textShadow: HERO_TEXT_SHADOW }}
              aria-hidden="true"
            >
              ◆
            </span>
            <p
              className="font-display text-[#1B3022] flex items-center justify-center gap-3 sm:gap-4"
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
                fontWeight: 600,
                textShadow: HERO_TEXT_SHADOW,
              }}
            >
              <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-[#B35C38] shrink-0" strokeWidth={2} />
              Coastal Andhra Cuisine
              <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-[#B35C38] shrink-0 scale-x-[-1]" strokeWidth={2} />
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-9">
            <Link
              to="/menu"
              className="font-montserrat inline-flex items-center gap-2.5 rounded-full bg-[#E9C46A] text-[#1B3022] px-7 sm:px-8 py-3.5 sm:py-4 font-bold text-sm sm:text-base shadow-[0_4px_18px_rgba(0,0,0,0.12)]"
            >
              <BookOpen className="w-4 h-4 shrink-0" strokeWidth={2.5} />
              Explore Menu
              <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.5} />
            </Link>
            <button
              type="button"
              onClick={() => window.open(GOOGLE_MAPS_URL, "_blank")}
              className="font-montserrat inline-flex items-center gap-2.5 rounded-full bg-white border border-[#D4A090] text-[#1B3022] px-7 sm:px-8 py-3.5 sm:py-4 font-bold text-sm sm:text-base shadow-[0_4px_18px_rgba(0,0,0,0.08)]"
            >
              <MapPin className="w-4 h-4 shrink-0" strokeWidth={2.5} />
              Visit Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MARQUEE STRIP
   ═══════════════════════════════════════════════════════════════════ */
function MarqueeStrip() {
  return (
    <section className="relative py-5 sm:py-6 bg-[#F8F3E8] border-y border-[#2F2F2F]/10 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F8F3E8] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F8F3E8] to-transparent z-10 pointer-events-none" />
      <div className="flex gap-10 sm:gap-14 whitespace-nowrap animate-marquee">
        {[...MARQUEE, ...MARQUEE, ...MARQUEE].map((w, i) => (
          <span key={i} className="flex items-center gap-10 sm:gap-14 font-display text-2xl sm:text-3xl md:text-4xl text-[#2F2F2F] hover:text-[#B35C38] transition-colors duration-300 cursor-default font-semibold">
            {w}
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
          </span>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   STORY SECTION — Split layout with parallax image
   ═══════════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40 bg-[#F8F3E8]">
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image side */}
        <Reveal>
          <div className="relative group">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={pesarattu}
                alt="Pesarattu being prepared"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2F2F2F]/15 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            {/* REMOVED: Red floating badge */}
          </div>
        </Reveal>

        {/* Text side */}
        <Reveal delay={150}>
          <div className="text-[10px] uppercase tracking-[0.4em] text-[#C9A227] font-bold mb-5">Our Story</div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.92] text-[#1B3022]">
            From Coastal Andhra<br />
            <span className="font-medium text-[#E9C46A]">kitchen to you.</span>
          </h2>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-[#2F2F2F] leading-relaxed max-w-lg font-medium">
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
              <div key={s.v} className="rounded-xl bg-white border border-[#2F2F2F]/12 p-3 sm:p-4 text-center group hover:bg-[#FDDFA0]/20 hover:border-[#E9C46A]/40 transition-all duration-500 cursor-default shadow-sm">
                <div className="font-montserrat font-bold text-xl sm:text-2xl text-[#C9A227] group-hover:scale-110 transition-transform">{s.k}</div>
                <div className="text-[9px] uppercase tracking-wider text-[#2F2F2F] mt-1 font-bold">{s.v}</div>
              </div>
            ))}
          </div>

          <Link to="/story" className="group inline-flex items-center gap-2 mt-8 sm:mt-10 text-[#C9A227] font-bold text-sm sm:text-base hover:gap-3 transition-all">
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B3022]/90 via-[#1B3022]/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <div className="text-[9px] uppercase tracking-[0.3em] font-bold mb-2" style={{ color: accent }}>{subtitle}</div>
          <div className="font-display font-black text-xl sm:text-2xl text-white" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>{title}</div>
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
    { img: pesarattu, title: "Pesarattu", subtitle: "The Hero", accent: "#B8E0C8" },
    { img: drumstickSambar, title: "Drumstick Sambar", subtitle: "The Soul", accent: "#D4A090" },
    { img: chutneys, title: "Triple Chutneys", subtitle: "The Trio", accent: "#F6B77A" },
    { img: idliSambar, title: "Bigger Idlis", subtitle: "The Cloud", accent: "#FDDFA0" },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#F8F3E8]">
      <div className="absolute left-1/2 -translate-x-1/2 top-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14 sm:mb-20">
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#C9A227] font-bold mb-4">Signature Dishes</div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.92] text-[#1B3022]">
              Crafted with<br />
              <span className="font-medium text-[#E9C46A]">obsession.</span>
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
    <section className="relative py-20 sm:py-28 bg-[#F8F3E8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14 sm:mb-18">
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#B35C38] font-bold mb-4">The Process</div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1B3022]">
              Four steps. <span className="font-medium text-[#B35C38]">Zero shortcuts.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="group relative bg-white/80 border border-[#2F2F2F]/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-center h-full hover:bg-white/90 hover:border-secondary/30 hover:-translate-y-2 transition-all duration-500">
                {/* Step number */}
                <div className="font-display italic font-black text-5xl sm:text-6xl text-[#F8F3E8] absolute top-3 right-4 group-hover:text-[#F8F3E8] transition-colors duration-500">
                  {s.num}
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-2xl bg-secondary/10 border border-secondary/20 grid place-items-center group-hover:bg-secondary/20 transition-all duration-500">
                  <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                </div>
                <div className="font-display font-bold text-lg sm:text-xl text-[#1B3022] mt-4 sm:mt-5">{s.title}</div>
                <div className="text-[11px] sm:text-xs text-[#2F2F2F] font-medium mt-2">{s.note}</div>
                {/* Connector */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 sm:-right-4 w-4 sm:w-6 h-px bg-foreground/10" />
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
    { img: pesarattu, name: "Pesarattu", tag: "Hero", price: "₹160" },
    { img: dosa2, name: "Ghee Karam Dosa", tag: "Signature", price: "₹220" },
    { img: dosa5, name: "Andhra Masala Dosa", tag: "Bestseller", price: "₹180" },
    { img: dosa4, name: "Mysore Masala", tag: "Classic", price: "₹210" },
  ];
  return (
    <section className="relative py-24 sm:py-32 bg-[#F8F3E8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-16">
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-[#C9A227] font-bold mb-4">From the menu</div>
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[0.92] text-[#1B3022]">
                Pick. Tap. <span className="font-medium text-[#E9C46A]">Devour.</span>
              </h2>
            </div>
            <Link to="/menu" className="group inline-flex items-center gap-2 font-bold text-sm text-[#B35C38] hover:gap-3 transition-all">
              Full menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={i * 100}>
              <Link to="/menu" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-3xl bg-white/80 border border-[#2F2F2F]/10">
                  <img src={it.img} alt={it.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B3022]/75 via-[#1B3022]/15 to-transparent" />
                  <span className="absolute top-3 left-3 bg-white/90 text-[#1B3022] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-full px-3 py-1">{it.tag}</span>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <div className="font-display font-bold text-base sm:text-lg text-white" style={{ textShadow: "0 2px 6px rgba(0,0,0,0.5)" }}>{it.name}</div>
                    <div className="text-[#E9C46A] font-bold text-sm mt-1" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>{it.price}</div>
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
   GALLERY HIGHLIGHT — Showcase outlet photos
   ═══════════════════════════════════════════════════════════════════ */
function GalleryHighlight() {
  const galleryImages = [
    galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#F8F3E8]">
      <div className="absolute left-1/2 -translate-x-1/2 top-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14 sm:mb-20">
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#B35C38] font-bold mb-4">Our Outlets</div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.92] text-[#1B3022]">
              Experience the<br />
              <span className="font-medium text-[#E9C46A]">atmosphere.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryImages.map((img, i) => (
            <Reveal key={i} delay={i * 100}>
              <Link to="/gallery" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl sm:rounded-3xl bg-white/80 border border-[#2F2F2F]/10">
                  <img src={img} alt="Andhra Dosa Co. outlet" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2F2F2F]/50 via-[#2F2F2F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-foreground font-bold text-sm tracking-wide">View Gallery</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <div className="text-center mt-12">
            <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full border border-primary/30 text-primary px-7 py-3 font-bold hover:bg-primary/10 transition-all">
              See All Photos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
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
        <div className="absolute inset-0 bg-[#2F2F2F]/60 backdrop-blur-sm" />
      </div>

      {/* Glows */}
      <div className="absolute -right-20 -top-20 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[120px]" />
      <div className="absolute -left-20 -bottom-20 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[120px]" />

      {/* Telugu watermark */}
      <div className="absolute font-display italic text-[#F8F3E8] text-[20rem] sm:text-[30rem] leading-none -bottom-32 left-1/2 -translate-x-1/2 select-none pointer-events-none">
        ఆంధ్ర
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div className="text-[10px] uppercase tracking-[0.5em] text-[#E9C46A] font-bold mb-5">
            Come hungry. Leave proud.
          </div>
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.88] text-white" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.45)" }}>
            Eat the real<br />
            <span className="font-medium text-[#E9C46A]">Coastal Andhra.</span>
          </h2>
          <p className="mt-5 sm:mt-8 text-white/90 text-sm sm:text-base max-w-lg mx-auto font-medium" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}>
            Coastal Andhra Cuisine
          </p>
          <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-4">
            <Link to="/menu" className="group inline-flex items-center gap-2 rounded-full bg-secondary text-foreground px-7 sm:px-9 py-4 sm:py-5 font-bold text-sm sm:text-base hover:bg-secondary/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_8px_40px_rgba(212,160,144,0.35)]">
              View Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              type="button"
              onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Andhra+Dosa+Co+Pune", "_blank")}
              className="inline-flex items-center gap-2 rounded-full border border-[#2F2F2F]/10 backdrop-blur-sm text-foreground px-7 sm:px-9 py-4 sm:py-5 font-bold text-sm sm:text-base hover:bg-[#FFF8EF] hover:border-[#2F2F2F]/20 transition-all duration-300"
            >
              <MapPin className="w-4 h-4" /> Visit Us
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}