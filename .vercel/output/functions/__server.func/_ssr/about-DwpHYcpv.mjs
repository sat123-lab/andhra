import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { l as logoSvg, R as Reveal } from "./logo-Dh7d9n9L.mjs";
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
function AboutPage() {
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pt-36 pb-16 bg-[#FAF6EE] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.35em] text-[#C9A227] font-bold mb-3", children: "Why Andhra" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-black text-6xl sm:text-7xl lg:text-8xl leading-[0.9] max-w-4xl text-[#1B3022]", children: [
        "Different state.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-[#B35C38]", children: "Different soul." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-[#FAF6EE] text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-5xl sm:text-6xl text-[#1B3022]", children: [
        "We are not South Indian.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-[#E9C46A]", children: "We are Andhra." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-[#2F2F2F] max-w-2xl mx-auto text-lg font-medium", children: "The map matters. The spice matters. The chutney matters." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/menu", className: "mt-8 inline-flex items-center gap-2 rounded-full bg-secondary text-foreground px-7 py-3.5 font-semibold hover:bg-secondary/90 transition-colors", children: [
        "See the menu ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }) }) })
  ] });
}
export {
  AboutPage as component
};
