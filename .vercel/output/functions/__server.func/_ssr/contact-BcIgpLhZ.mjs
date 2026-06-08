import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { l as logoSvg, R as Reveal } from "./logo-Dh7d9n9L.mjs";
import { f as MapPin, P as Phone, M as Mail, d as Clock, I as Instagram } from "../_libs/lucide-react.mjs";
function ContactPage() {
  const [loading, setLoading] = reactExports.useState(true);
  const [sent, setSent] = reactExports.useState(false);
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pt-36 pb-16 bg-[#FAF6EE]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.35em] text-[#C9A227] font-bold mb-3", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-black text-6xl sm:text-7xl lg:text-8xl leading-[0.9] text-[#1B3022]", children: [
        "Come ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#B35C38]", children: "hungry." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Leave proud."
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: MapPin, title: "Visit", line: "Koregaon Park · Pune 411001" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Phone, title: "Call", line: "+91 7977996930", href: "tel:+917977996930" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Mail, title: "Email", line: "hello@andhradosa.co", href: "mailto:hello@andhradosa.co" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Clock, title: "Hours", line: "7 AM – 11 PM · 7 days a week" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/andhradosaco/?utm_source=ig_web_button_share_sheet", target: "_blank", rel: "noopener noreferrer", className: "w-11 h-11 rounded-full bg-secondary text-white grid place-items-center hover:bg-secondary/90 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-4 h-4" }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "bg-[#FAF6EE] rounded-3xl p-6 sm:p-8 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.35em] text-[#C9A227] font-bold", children: "Reserve a table" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-3xl text-[#1B3022]", children: "Book your seat." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", type: "tel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Date", name: "date", type: "date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Guests", name: "guests", type: "number" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Special notes", name: "notes", textarea: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: sent, className: "w-full rounded-full bg-secondary text-foreground py-3.5 font-semibold disabled:opacity-60 hover:bg-secondary/90 transition-colors", children: sent ? "Thank you — we'll call to confirm" : "Reserve" })
      ] }) })
    ] }) })
  ] });
}
function Info({
  icon: Icon,
  title,
  line,
  href
}) {
  const Wrap = href ? "a" : "div";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Wrap, { href, className: "flex items-start gap-4 group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 w-12 h-12 rounded-2xl bg-[#FAF6EE] grid place-items-center group-hover:bg-secondary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-secondary group-hover:text-white transition-colors" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.25em] font-bold text-[#2F2F2F]", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-xl text-[#1B3022]", children: line })
    ] })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  textarea
}) {
  const common = "w-full rounded-xl bg-white border border-[#2F2F2F]/10 px-4 py-3 text-sm focus:outline-none focus:border-secondary";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.2em] font-bold text-[#2F2F2F]", children: label }),
    textarea ? /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name, rows: 3, className: `${common} mt-1` }) : /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, className: `${common} mt-1` })
  ] });
}
export {
  ContactPage as component
};
