import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { l as logoSvg, R as Reveal } from "./logo-Dh7d9n9L.mjs";
import { a as galleryImg3, c as galleryImg5, b as galleryImg4, g as galleryImg1 } from "./d3b6b160-c453-42a8-b21c-97cb8e844f10.jpg-DkjvEnZh.mjs";
import { d as Clock, f as MapPin, j as Star, P as Phone, N as Navigation } from "../_libs/lucide-react.mjs";
const LOCATIONS = [{
  name: "Marol, Mumbai",
  address: "Metro Station, Naka, Marol, Mumbai, Maharashtra 400059",
  phone: "+91 7977996930",
  hours: "7 AM – 11 PM · Daily",
  status: "open",
  image: galleryImg3,
  directions: "https://www.google.com/maps/search/?api=1&query=Andhra+Dosa+Co+Marol+Mumbai"
}, {
  name: "Western Exp Highway",
  address: "Andheri-Kurla Road, next to Andheri Fly over, Andheri (E), Mumbai, 400069",
  phone: "+91 7977996930",
  hours: "Opening in 15 days",
  status: "coming-soon",
  image: galleryImg5,
  directions: "https://www.google.com/maps/search/?api=1&query=Western+Exp+Highway+Mumbai+Andheri"
}, {
  name: "Koregaon Park, Pune",
  address: "Coming Soon",
  phone: "—",
  hours: "Opening Soon",
  status: "coming-soon",
  image: galleryImg4
}, {
  name: "Viman Nagar, Pune",
  address: "Coming Soon",
  phone: "—",
  hours: "Opening Soon",
  status: "coming-soon",
  image: galleryImg1
}];
function LocationsPage() {
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1e3);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-[#F8F3E8]/80 backdrop-blur-md flex items-center justify-center transition-opacity duration-700 ease-out", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-primary/15 ring-1 ring-primary/30 p-2 flex items-center justify-center animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoSvg, alt: "Andhra Dosa Co.", className: "w-full h-full object-contain" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary font-display font-black text-xl sm:text-2xl tracking-wider animate-pulse", children: "Andhra Dosa Co." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pt-36 pb-16 bg-[#FAF6EE]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.35em] text-[#C9A227] font-bold mb-3", children: "Locations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-black text-6xl sm:text-7xl lg:text-8xl leading-[0.9] text-[#1B3022]", children: [
        "Find us near",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#E9C46A]", children: "you." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8", children: LOCATIONS.map((loc, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative overflow-hidden rounded-3xl ${loc.status === "coming-soon" ? "bg-[#FAF6EE]" : "bg-white border border-[#2F2F2F]/10"}`, children: [
      loc.image && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/9] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: loc.image, alt: loc.name, loading: "lazy", className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8", children: loc.status === "coming-soon" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-2xl text-[#1B3022]", children: loc.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-secondary font-semibold", children: "Stay Tuned" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[#2F2F2F] font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: loc.address })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[#2F2F2F] font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: loc.hours })
          ] })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-2xl text-[#1B3022]", children: loc.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-primary text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: "4.9" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-[#5F5F5F]", children: "· 2k+ reviews" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-3 py-1.5 bg-[#2a7a3a]/10 rounded-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-[#2a7a3a] animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-[#2a7a3a]", children: "OPEN" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[#2F2F2F] font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5 text-[#FF7A00]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: loc.address })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[#2F2F2F] font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5 text-[#FF7A00]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: loc.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[#2F2F2F] font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-[#FF7A00]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: loc.hours })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${loc.phone}`, className: "inline-flex items-center gap-2 rounded-full bg-secondary text-foreground px-6 py-3 font-bold hover:bg-secondary/90 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
          "Call Now"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: loc.directions || "#", target: "_blank", rel: "noopener noreferrer", className: "ml-3 inline-flex items-center gap-2 rounded-full border border-[#2F2F2F]/20 text-foreground px-6 py-3 font-bold hover:bg-[#FAF6EE] transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { className: "w-4 h-4" }),
          "Directions"
        ] })
      ] }) })
    ] }) }, i)) }) }) })
  ] });
}
export {
  LocationsPage as component
};
