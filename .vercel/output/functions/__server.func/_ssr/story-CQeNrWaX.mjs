import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { l as logoSvg, R as Reveal } from "./logo-Dh7d9n9L.mjs";
import { t as tawa } from "./tawa-pour-DjqFjZVV.mjs";
import { A as ArrowRight } from "../_libs/lucide-react.mjs";
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
const chef = "/assets/chef-ClmzodXY.jpg";
function StoryPage() {
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pt-36 pb-20 bg-[#FAF6EE]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.35em] text-[#C9A227] font-bold mb-3", children: "Our story" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-black text-6xl sm:text-7xl lg:text-8xl leading-[0.9] text-[#1B3022]", children: [
        "From ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#B35C38]", children: "Coastal Andhra" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "to your table."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-[#2F2F2F] max-w-2xl mx-auto font-medium", children: "Three generations. One recipe book. Zero shortcuts." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: tawa, alt: "Pouring dosa batter on a cast iron tawa", loading: "lazy", width: 1600, height: 1200, className: "w-full aspect-[4/5] object-cover rounded-3xl" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 150, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-4xl sm:text-5xl leading-tight text-[#1B3022]", children: [
          "Maharashtra had dosas.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-[#E9C46A]", children: "It didn't have Andhra ones." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-[#2F2F2F] text-lg font-medium", children: "Tamil. Karnataka. Everywhere. Beautiful dosas — but mild. We came to bring the karam. The pesarattu. The sambar with drumstick still on the bone." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: chef, alt: "Chef at work", loading: "lazy", width: 1024, height: 1024, className: "w-full aspect-square object-cover rounded-3xl" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 120, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-4xl sm:text-5xl text-[#1B3022]", children: [
          "The recipe never ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#B35C38]", children: "changed." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[#2F2F2F] text-lg font-medium", children: "Same soak time. Same stone grinder. Same cast iron tawa. We expanded the dining room, not the shortcuts." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/menu", className: "mt-6 inline-flex items-center gap-2 rounded-full bg-secondary text-foreground px-6 py-3 font-semibold hover:bg-secondary/90 transition-colors", children: [
          "Try the recipes ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  StoryPage as component
};
