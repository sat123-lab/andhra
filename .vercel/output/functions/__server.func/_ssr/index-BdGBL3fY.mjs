import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { p as pesarattu, d as dosa1 } from "./router-DrVBtwnC.mjs";
import { c as chutneys, g as galleryImg2 } from "./2655b4fb-a390-4bf0-b2ab-6008f85a3b0a.jpg-BHkOtijQ.mjs";
import { d as drumstickSambar, i as idliSambar } from "./drumstick-sambar-DaefIhT5.mjs";
import { d as dosa2, b as dosa5, a as dosa4 } from "./dosa-4-CIU5XWa_.mjs";
import { l as logoSvg, R as Reveal } from "./logo-Dh7d9n9L.mjs";
import { g as galleryImg1, a as galleryImg3, b as galleryImg4, c as galleryImg5 } from "./d3b6b160-c453-42a8-b21c-97cb8e844f10.jpg-DkjvEnZh.mjs";
import { L as Leaf, B as BookOpen, A as ArrowRight, f as MapPin, C as ChefHat, F as Flame, T as Truck } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function useTilt(intensity = 12) {
  const ref = reactExports.useRef(null);
  const onMouseMove = reactExports.useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale3d(1.02,1.02,1.02)`;
  }, [intensity]);
  const onMouseLeave = reactExports.useCallback(() => {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateY(0) rotateX(0) scale3d(1,1,1)";
  }, []);
  return {
    ref,
    onMouseMove,
    onMouseLeave
  };
}
const MARQUEE = ["Pesarattu", "Drumstick Sambar", "Allam Chutney", "Bigger Idlis", "Coastal Andhra Karam", "Filter Coffee", "Coconut Chutney", "Rayalaseema Spice"];
function HomePage() {
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1e3);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background text-foreground overflow-x-hidden", children: [
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-[#F8F3E8]/80 backdrop-blur-md flex items-center justify-center transition-opacity duration-700 ease-out", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 h-32 sm:w-48 sm:h-48 rounded-2xl bg-primary/15 ring-1 ring-primary/30 p-2 flex items-center justify-center animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoSvg, alt: "Andhra Dosa Co.", className: "w-full h-full object-contain" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary font-display font-black text-xl sm:text-2xl tracking-wider animate-pulse", children: "Andhra Dosa Co." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MarqueeStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StorySection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedDishes, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuPreview, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GalleryHighlight, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BigCTA, {})
  ] });
}
const HERO_IMAGES = [drumstickSambar, pesarattu, chutneys, idliSambar, dosa2];
const HERO_TEXT_SHADOW = "0 2px 8px rgba(255,255,255,0.85), 0 4px 16px rgba(255,255,255,0.55)";
const HERO_TITLE_SHADOW = "0 3px 12px rgba(255,255,255,0.9), 0 6px 24px rgba(255,255,255,0.6), 0 2px 6px rgba(0,0,0,0.12)";
function Hero() {
  const [currentIdx, setCurrentIdx] = reactExports.useState(0);
  const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Andhra+Dosa+Co+Pune";
  reactExports.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6e3);
    return () => clearInterval(timer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 min-h-full", children: HERO_IMAGES.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: "", className: "absolute inset-0 w-full h-full object-cover", style: {
      opacity: i === currentIdx ? 1 : 0,
      objectPosition: "center 50%",
      filter: "brightness(0.88) contrast(1.05) saturate(1.06) blur(1px)",
      transition: "opacity 2.5s ease-in-out"
    } }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", style: {
      background: ["radial-gradient(ellipse 80% 70% at 50% 48%, rgba(255,252,245,0.42) 0%, rgba(248,243,232,0.22) 50%, transparent 78%)", "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, transparent 40%, rgba(0,0,0,0.10) 100%)"].join(", ")
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative min-h-screen flex flex-col items-center px-4 z-10 pt-[9.5rem] pb-24 sm:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center my-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 sm:gap-5 mb-5 sm:mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-[#B35C38]", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block w-8 sm:w-10 h-px bg-[#B35C38]/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[6px] leading-none", children: "◆" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block w-3 h-px bg-[#B35C38]/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-normal ml-0.5", children: "—›" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-montserrat uppercase text-[#B35C38]", style: {
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.22em",
          textShadow: HERO_TEXT_SHADOW
        }, children: "AUTHENTIC ANDHRA CUISINE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-[#B35C38]", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-normal mr-0.5", children: "‹—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block w-3 h-px bg-[#B35C38]/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[6px] leading-none", children: "◆" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block w-8 sm:w-10 h-px bg-[#B35C38]/60" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-8 sm:-left-10 top-[12%] w-6 sm:w-7", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 32 32", className: "w-full h-auto", fill: "none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "16", r: "5", fill: "#E9C46A" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "4", y1: "10", x2: "10", y2: "13", stroke: "#E9C46A", strokeWidth: "2.5", strokeLinecap: "round" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "3", y1: "16", x2: "10", y2: "16", stroke: "#E9C46A", strokeWidth: "2.5", strokeLinecap: "round" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "4", y1: "22", x2: "10", y2: "19", stroke: "#E9C46A", strokeWidth: "2.5", strokeLinecap: "round" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display", style: {
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: "-1.5px",
          fontSize: "clamp(2.5rem, 6.5vw, 6rem)",
          textShadow: HERO_TITLE_SHADOW
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mb-1 sm:mb-2", style: {
            color: "#0F4D2E"
          }, children: "Eat the real" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mb-1 sm:mb-2", style: {
            color: "#B35C38"
          }, children: "Coastal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block", style: {
            color: "#0F4D2E"
          }, children: [
            "Andhra",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block align-middle ml-1 rounded-full", style: {
              width: "0.2em",
              height: "0.2em",
              backgroundColor: "#E9C46A"
            } })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 sm:mt-7 flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#B35C38] text-[8px] mb-2.5 leading-none", style: {
          textShadow: HERO_TEXT_SHADOW
        }, "aria-hidden": "true", children: "◆" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-[#1B3022] flex items-center justify-center gap-3 sm:gap-4", style: {
          fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
          fontWeight: 600,
          textShadow: HERO_TEXT_SHADOW
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-4 h-4 sm:w-5 sm:h-5 text-[#B35C38] shrink-0", strokeWidth: 2 }),
          "Coastal Andhra Cuisine",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-4 h-4 sm:w-5 sm:h-5 text-[#B35C38] shrink-0 scale-x-[-1]", strokeWidth: 2 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/menu", className: "font-montserrat inline-flex items-center gap-2.5 rounded-full bg-[#E9C46A] text-[#1B3022] px-7 sm:px-8 py-3.5 sm:py-4 font-bold text-sm sm:text-base shadow-[0_4px_18px_rgba(0,0,0,0.12)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4 shrink-0", strokeWidth: 2.5 }),
          "Explore Menu",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 shrink-0", strokeWidth: 2.5 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => window.open(GOOGLE_MAPS_URL, "_blank"), className: "font-montserrat inline-flex items-center gap-2.5 rounded-full bg-white border border-[#D4A090] text-[#1B3022] px-7 sm:px-8 py-3.5 sm:py-4 font-bold text-sm sm:text-base shadow-[0_4px_18px_rgba(0,0,0,0.08)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 shrink-0", strokeWidth: 2.5 }),
          "Visit Us"
        ] })
      ] })
    ] }) })
  ] });
}
function MarqueeStrip() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-5 sm:py-6 bg-[#F8F3E8] border-y border-[#2F2F2F]/10 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F8F3E8] to-transparent z-10 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F8F3E8] to-transparent z-10 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-10 sm:gap-14 whitespace-nowrap animate-marquee", children: [...MARQUEE, ...MARQUEE, ...MARQUEE].map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-10 sm:gap-14 font-display text-2xl sm:text-3xl md:text-4xl text-[#2F2F2F] hover:text-[#B35C38] transition-colors duration-300 cursor-default font-semibold", children: [
      w,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary" })
    ] }, i)) })
  ] });
}
function StorySection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 sm:py-32 lg:py-40 bg-[#F8F3E8]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-1/3 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: pesarattu, alt: "Pesarattu being prepared", loading: "lazy", className: "w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#2F2F2F]/15 via-transparent to-transparent" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 150, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.4em] text-[#C9A227] font-bold mb-5", children: "Our Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.92] text-[#1B3022]", children: [
          "From Coastal Andhra",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-[#E9C46A]", children: "kitchen to you." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 sm:mt-8 text-base sm:text-lg text-[#2F2F2F] leading-relaxed max-w-lg font-medium", children: "Three generations of perfecting pesarattu. Soaking green moong overnight, grinding it on stone, spreading it thin on cast iron. No rice. No shortcuts. Just the real Andhra." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 sm:mt-10 grid grid-cols-3 gap-3 max-w-md", children: [{
          k: "0g",
          v: "Rice"
        }, {
          k: "12g",
          v: "Protein"
        }, {
          k: "6hr",
          v: "Soaked"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white border border-[#2F2F2F]/12 p-3 sm:p-4 text-center group hover:bg-[#FDDFA0]/20 hover:border-[#E9C46A]/40 transition-all duration-500 cursor-default shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-montserrat font-bold text-xl sm:text-2xl text-[#C9A227] group-hover:scale-110 transition-transform", children: s.k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider text-[#2F2F2F] mt-1 font-bold", children: s.v })
        ] }, s.v)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/story", className: "group inline-flex items-center gap-2 mt-8 sm:mt-10 text-[#C9A227] font-bold text-sm sm:text-base hover:gap-3 transition-all", children: [
          "Read the full story ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
        ] })
      ] })
    ] })
  ] });
}
function TiltCard({
  img,
  title,
  subtitle,
  accent
}) {
  const {
    ref,
    onMouseMove,
    onMouseLeave
  } = useTilt(10);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, onMouseMove, onMouseLeave, className: "group cursor-default", style: {
    transition: "transform 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/[0.06]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: title, loading: "lazy", className: "w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-700" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#1B3022]/90 via-[#1B3022]/25 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-5 sm:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-[0.3em] font-bold mb-2", style: {
        color: accent
      }, children: subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-xl sm:text-2xl text-white", style: {
        textShadow: "0 2px 8px rgba(0,0,0,0.4)"
      }, children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none", style: {
      background: `radial-gradient(circle at 50% 80%, ${accent}15, transparent 70%)`
    } })
  ] }) });
}
function FeaturedDishes() {
  const dishes = [{
    img: pesarattu,
    title: "Pesarattu",
    subtitle: "The Hero",
    accent: "#B8E0C8"
  }, {
    img: drumstickSambar,
    title: "Drumstick Sambar",
    subtitle: "The Soul",
    accent: "#D4A090"
  }, {
    img: chutneys,
    title: "Triple Chutneys",
    subtitle: "The Trio",
    accent: "#F6B77A"
  }, {
    img: idliSambar,
    title: "Bigger Idlis",
    subtitle: "The Cloud",
    accent: "#FDDFA0"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 sm:py-32 bg-[#F8F3E8]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 -translate-x-1/2 top-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14 sm:mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.4em] text-[#C9A227] font-bold mb-4", children: "Signature Dishes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.92] text-[#1B3022]", children: [
          "Crafted with",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-[#E9C46A]", children: "obsession." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6", children: dishes.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TiltCard, { ...d }) }, d.title)) })
    ] })
  ] });
}
function ProcessStrip() {
  const steps = [{
    icon: Leaf,
    title: "Soak",
    note: "Green moong · 6 hours",
    num: "01"
  }, {
    icon: ChefHat,
    title: "Grind",
    note: "Stone-ground · ginger & chili",
    num: "02"
  }, {
    icon: Flame,
    title: "Tawa",
    note: "Cast iron · 220°C",
    num: "03"
  }, {
    icon: Truck,
    title: "Serve",
    note: "Hot · in 8 minutes",
    num: "04"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 sm:py-28 bg-[#F8F3E8]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14 sm:mb-18", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.4em] text-[#B35C38] font-bold mb-4", children: "The Process" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1B3022]", children: [
        "Four steps. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-[#B35C38]", children: "Zero shortcuts." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative bg-white/80 border border-[#2F2F2F]/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-center h-full hover:bg-white/90 hover:border-secondary/30 hover:-translate-y-2 transition-all duration-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display italic font-black text-5xl sm:text-6xl text-[#F8F3E8] absolute top-3 right-4 group-hover:text-[#F8F3E8] transition-colors duration-500", children: s.num }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-2xl bg-secondary/10 border border-secondary/20 grid place-items-center group-hover:bg-secondary/20 transition-all duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-5 h-5 sm:w-6 sm:h-6 text-secondary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-lg sm:text-xl text-[#1B3022] mt-4 sm:mt-5", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] sm:text-xs text-[#2F2F2F] font-medium mt-2", children: s.note }),
      i < 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-1/2 -right-3 sm:-right-4 w-4 sm:w-6 h-px bg-foreground/10" })
    ] }) }, s.title)) })
  ] }) });
}
function MenuPreview() {
  const items = [{
    img: pesarattu,
    name: "Pesarattu",
    tag: "Hero",
    price: "₹160"
  }, {
    img: dosa2,
    name: "Ghee Karam Dosa",
    tag: "Signature",
    price: "₹220"
  }, {
    img: dosa5,
    name: "Andhra Masala Dosa",
    tag: "Bestseller",
    price: "₹180"
  }, {
    img: dosa4,
    name: "Mysore Masala",
    tag: "Classic",
    price: "₹210"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 sm:py-32 bg-[#F8F3E8]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.4em] text-[#C9A227] font-bold mb-4", children: "From the menu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[0.92] text-[#1B3022]", children: [
          "Pick. Tap. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-[#E9C46A]", children: "Devour." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/menu", className: "group inline-flex items-center gap-2 font-bold text-sm text-[#B35C38] hover:gap-3 transition-all", children: [
        "Full menu ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/menu", className: "group block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-3xl bg-white/80 border border-[#2F2F2F]/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.img, alt: it.name, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#1B3022]/75 via-[#1B3022]/15 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 bg-white/90 text-[#1B3022] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-full px-3 py-1", children: it.tag }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4 sm:p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-base sm:text-lg text-white", style: {
          textShadow: "0 2px 6px rgba(0,0,0,0.5)"
        }, children: it.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#E9C46A] font-bold text-sm mt-1", style: {
          textShadow: "0 1px 4px rgba(0,0,0,0.4)"
        }, children: it.price })
      ] })
    ] }) }) }, it.name)) })
  ] }) });
}
function GalleryHighlight() {
  const galleryImages = [galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 sm:py-32 bg-[#F8F3E8]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 -translate-x-1/2 top-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14 sm:mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.4em] text-[#B35C38] font-bold mb-4", children: "Our Outlets" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.92] text-[#1B3022]", children: [
          "Experience the",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-[#E9C46A]", children: "atmosphere." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4", children: galleryImages.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gallery", className: "group block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[3/4] overflow-hidden rounded-2xl sm:rounded-3xl bg-white/80 border border-[#2F2F2F]/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: "Andhra Dosa Co. outlet", loading: "lazy", className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#2F2F2F]/50 via-[#2F2F2F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-bold text-sm tracking-wide", children: "View Gallery" }) })
      ] }) }) }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 500, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/gallery", className: "inline-flex items-center gap-2 rounded-full border border-primary/30 text-primary px-7 py-3 font-bold hover:bg-primary/10 transition-all", children: [
        "See All Photos ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] }) }) })
    ] })
  ] });
}
function BigCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-28 sm:py-36 lg:py-44 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: dosa1, alt: "", className: "w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#2F2F2F]/60 backdrop-blur-sm" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-20 -top-20 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-20 -bottom-20 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute font-display italic text-[#F8F3E8] text-[20rem] sm:text-[30rem] leading-none -bottom-32 left-1/2 -translate-x-1/2 select-none pointer-events-none", children: "ఆంధ్ర" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.5em] text-[#E9C46A] font-bold mb-5", children: "Come hungry. Leave proud." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.88] text-white", style: {
        textShadow: "0 4px 20px rgba(0,0,0,0.45)"
      }, children: [
        "Eat the real",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-[#E9C46A]", children: "Coastal Andhra." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 sm:mt-8 text-white/90 text-sm sm:text-base max-w-lg mx-auto font-medium", style: {
        textShadow: "0 2px 10px rgba(0,0,0,0.4)"
      }, children: "Coastal Andhra Cuisine" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 sm:mt-12 flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/menu", className: "group inline-flex items-center gap-2 rounded-full bg-secondary text-foreground px-7 sm:px-9 py-4 sm:py-5 font-bold text-sm sm:text-base hover:bg-secondary/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_8px_40px_rgba(212,160,144,0.35)]", children: [
          "View Menu ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => window.open("https://www.google.com/maps/search/?api=1&query=Andhra+Dosa+Co+Pune", "_blank"), className: "inline-flex items-center gap-2 rounded-full border border-[#2F2F2F]/10 backdrop-blur-sm text-foreground px-7 sm:px-9 py-4 sm:py-5 font-bold text-sm sm:text-base hover:bg-[#FFF8EF] hover:border-[#2F2F2F]/20 transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4" }),
          " Visit Us"
        ] })
      ] })
    ] }) })
  ] });
}
export {
  HomePage as component
};
