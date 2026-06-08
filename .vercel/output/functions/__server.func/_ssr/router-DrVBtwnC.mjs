import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { R as Root, b as Trigger, P as Portal, a as Content, C as Close, O as Overlay, T as Title, D as Description } from "../_libs/radix-ui__react-dialog.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as Sparkles, P as Phone, I as Instagram, a as ChevronDown, U as UtensilsCrossed, b as ChevronRight, L as Leaf, F as Flame, c as Circle, j as Star, h as Soup, e as Coffee, g as Menu, f as MapPin, M as Mail, d as Clock, X } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-BkNF_PTV.css";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Sheet = Root;
const SheetTrigger = Trigger;
const SheetClose = Close;
const SheetPortal = Portal;
const SheetOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = reactExports.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
    ] }),
    children
  ] })
] }));
SheetContent.displayName = Content.displayName;
const SheetTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = Title.displayName;
const SheetDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = Description.displayName;
const logoSvg = "/assets/1767550022189-3UCkIv7q.jpg";
const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu", hasDropdown: true },
  { to: "/story", label: "Our Story" },
  { to: "/about", label: "Why Andhra" },
  { to: "/locations", label: "Locations" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" }
];
const MENU_CATEGORIES = [
  { name: "Pesarattu Specials", count: 6, color: "#B8E0C8", Icon: Leaf },
  { name: "Andhra Dosas", count: 14, color: "#D4A090", Icon: Flame },
  { name: "Bigger Idlis", count: 5, color: "#D4A090", Icon: Circle },
  { name: "Tiffins", count: 9, color: "#FDDFA0", Icon: UtensilsCrossed },
  { name: "Andhra Meals", count: 7, color: "#D4A090", Icon: Sparkles },
  { name: "Chutneys & Podis", count: 8, color: "#B8E0C8", Icon: Star },
  { name: "Drumstick Sambar", count: 3, color: "#D4A090", Icon: Soup },
  { name: "Filter Coffee & Beverages", count: 6, color: "#2F2F2F", Icon: Coffee }
];
function SiteHeader() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  const dropdownRef = reactExports.useRef(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed top-0 inset-x-0 z-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `w-full transition-all duration-500 overflow-hidden hidden sm:block ${scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"}`,
        style: { background: "linear-gradient(90deg, #F8F3E8 0%, #B8E0C8 50%, #F8F3E8 100%)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-8 flex items-center justify-between h-9", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px] tracking-[0.15em] text-[#D4A090] uppercase font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-[#D4A090]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Now Available on Swiggy & Zomato" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex items-center gap-4 text-[11px] text-[#2F2F2F]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+917977996930", className: "flex items-center gap-1.5 hover:text-[#D4A090] transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3 h-3" }),
              " +91 7977996930"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-px h-3 bg-[#2F2F2F]/20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/andhradosaco/?utm_source=ig_web_button_share_sheet", target: "_blank", rel: "noopener noreferrer", "aria-label": "Instagram", className: "hover:text-[#D4A090] transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-3.5 h-3.5" }) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `w-full transition-all duration-500 ${scrolled ? "bg-[#F8F3E8]/95 backdrop-blur-2xl shadow-[0_4px_40px_rgba(47,47,47,0.08)] py-0" : "bg-white backdrop-blur-xl border-b border-[#D4A090]/15 shadow-sm py-0"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-8 flex items-center justify-between h-16 sm:h-18 lg:h-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 sm:gap-4 group shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `relative w-11 h-11 sm:w-13 sm:h-13 rounded-xl overflow-hidden p-0.5 transition-all duration-300 group-hover:scale-105 ${scrolled ? "bg-[#D4A090]/20 ring-1 ring-[#D4A090]/30" : "bg-[#F8F3E8]"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoSvg, alt: "Andhra Dosa Co", className: "w-full h-full object-contain rounded-lg" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-extrabold text-lg sm:text-xl lg:text-2xl tracking-tight text-[#0F4D2E]", children: "Andhra Dosa Co." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-4 bg-[#D4A090]/60" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] sm:text-[9px] uppercase tracking-[0.28em] text-[#D4A090] font-semibold", children: "Flavours of Coastal Andhra" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-4 bg-[#D4A090]/60" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-0.5", children: NAV.map((n) => {
            const active = pathname === n.to;
            const hasDropdown = "hasDropdown" in n && n.hasDropdown;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref: hasDropdown ? dropdownRef : void 0, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: n.to,
                  className: `relative flex items-center gap-1 px-4 py-2.5 text-[13px] tracking-wide font-semibold transition-all duration-300 group ${active ? "text-[#C96A3D]" : "text-[#2F2F2F] hover:text-[#D4A090]"}`,
                  onMouseEnter: () => hasDropdown && setMenuOpen(true),
                  children: [
                    n.label,
                    hasDropdown && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `w-3.5 h-3.5 transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `absolute bottom-1 left-3 right-3 h-[1.5px] rounded-full transition-all duration-300 origin-center ${active ? "bg-[#C96A3D] scale-x-100" : "bg-[#C96A3D] scale-x-0 group-hover:scale-x-100"}`
                      }
                    )
                  ]
                }
              ),
              hasDropdown && menuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "absolute top-full left-0 mt-3 w-[580px] rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(47,47,47,0.14)] border border-[#D4A090]/20 animate-dropdown",
                  onMouseLeave: () => setMenuOpen(false),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-[#F8F3E8] via-[#B8E0C8] to-[#F8F3E8] px-6 py-4 flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-[#D4A090]/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UtensilsCrossed, { className: "w-4 h-4 text-[#D4A090]" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#2F2F2F] font-display font-bold text-sm", children: "Our Menu" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] text-[#D4A090] font-medium", children: "Authentic Andhra Cuisine" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Link,
                        {
                          to: "/menu",
                          className: "flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D4A090] hover:text-[#FDDFA0] transition-colors border border-[#D4A090]/30 hover:border-[#D4A090]/60 rounded-full px-3 py-1.5",
                          onClick: () => setMenuOpen(false),
                          children: [
                            "Full Menu ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-4 grid grid-cols-2 gap-1.5", children: MENU_CATEGORIES.map((c, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: "/menu",
                        hash: c.name.toLowerCase().replace(/[^a-z]+/g, "-"),
                        onClick: () => setMenuOpen(false),
                        className: "flex items-center gap-3 rounded-xl px-3.5 py-3 hover:bg-[#F8F3E8] transition-all duration-200 group/item border border-transparent hover:border-[#D4A090]/20",
                        style: { animationDelay: `${idx * 30}ms` },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover/item:scale-110",
                              style: { backgroundColor: `${c.color}12` },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.Icon, { className: "w-4 h-4", style: { color: c.color } })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold text-[#2F2F2F] group-hover/item:text-[#D4A090] transition-colors truncate", children: c.name }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-[#5F5F5F] font-medium mt-0.5", children: [
                              c.count,
                              " items"
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-[#5F5F5F] group-hover/item:text-[#D4A090] group-hover/item:translate-x-0.5 transition-all duration-200 shrink-0" })
                        ]
                      },
                      c.name
                    )) })
                  ]
                }
              )
            ] }, n.to);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 sm:gap-3 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: `lg:hidden inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 ${scrolled ? "bg-[#D4A090]/15 text-[#2F2F2F] hover:bg-[#D4A090]/25 ring-1 ring-[#D4A090]/20" : "bg-[#F8F3E8] text-[#2F2F2F] hover:bg-[#B8E0C8]"}`,
                "aria-label": "Open menu",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5" })
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SheetContent,
              {
                side: "right",
                className: "w-[90vw] sm:w-[400px] md:w-[440px] p-0 border-l border-[#D4A090]/20 bg-white",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(MobileDrawer, { pathname })
              }
            )
          ] }) })
        ] })
      }
    )
  ] });
}
function MobileDrawer({ pathname }) {
  const [menuExpanded, setMenuExpanded] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative shrink-0 overflow-x-hidden px-5 sm:px-6 pt-6 pb-8", style: { background: "linear-gradient(135deg, #F8F3E8 0%, #B8E0C8 60%, #F8F3E8 100%)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-12 -top-12 w-48 h-48 rounded-full bg-[#D4A090]/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 bottom-0 w-32 h-32 rounded-full bg-[#FDDFA0]/8 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-4 bottom-0 text-[70px] sm:text-[90px] font-display italic text-[#F8F3E8] leading-none select-none pointer-events-none", children: "ఆంధ్ర" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-[#D4A090]/15 ring-1 ring-[#D4A090]/30 p-0.5 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoSvg, alt: "Logo", className: "w-full h-full object-contain rounded-lg" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#D4A090] font-bold", children: "Authentic · Flavours of Coastal Andhra" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-xl sm:text-2xl text-[#2F2F2F] mt-0.5", children: "Andhra Dosa Co." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            "aria-label": "Close menu",
            className: "w-9 h-9 rounded-full bg-white/80 hover:bg-[#F8F3E8] ring-1 ring-[#D4A090]/20 grid place-items-center transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 text-[#2F2F2F]" })
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 sm:px-5 pt-5 pb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-[0.3em] text-[#2F2F2F] font-bold mb-3 px-2", children: "Navigate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: NAV.map((n, idx) => {
          const active = pathname === n.to;
          const hasDropdown = "hasDropdown" in n && n.hasDropdown;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "li",
            {
              className: "animate-reveal",
              style: { animationDelay: `${0.05 + idx * 0.04}s` },
              children: hasDropdown ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => setMenuExpanded((p) => !p),
                    className: `w-full group flex items-center justify-between rounded-xl px-4 py-3 sm:py-3.5 transition-all duration-300 ${active ? "bg-[#F8F3E8] text-[#2F2F2F] shadow-lg" : "text-[#2F2F2F] hover:bg-[#F8F3E8]"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base sm:text-lg font-semibold", children: n.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        ChevronDown,
                        {
                          className: `w-4 h-4 transition-transform duration-300 ${menuExpanded ? "rotate-180" : ""} ${active ? "text-[#D4A090]" : "text-[#5F5F5F]"}`
                        }
                      )
                    ]
                  }
                ),
                menuExpanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-1 space-y-1 pl-2 pr-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/menu",
                      className: "flex items-center gap-2 rounded-lg px-3 py-2 text-[12px] font-bold uppercase tracking-[0.15em] text-[#D4A090] hover:bg-[#D4A090]/10 transition-colors",
                      children: [
                        "Full Menu ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" })
                      ]
                    }
                  ) }) }),
                  MENU_CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/menu",
                      hash: c.name.toLowerCase().replace(/[^a-z]+/g, "-"),
                      className: "flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-[#F8F3E8] transition-all duration-200 group/cat",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-7 h-7 rounded-lg flex items-center justify-center shrink-0",
                            style: { backgroundColor: `${c.color}14` },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.Icon, { className: "w-3.5 h-3.5", style: { color: c.color } })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-[13px] font-medium text-[#2F2F2F]", children: c.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-[#5F5F5F] tabular-nums", children: c.count.toString().padStart(2, "0") })
                      ]
                    }
                  ) }) }, c.name))
                ] })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: n.to,
                  className: `group flex items-center justify-between rounded-xl px-4 py-3 sm:py-3.5 transition-all duration-300 ${active ? "bg-[#F8F3E8] text-[#2F2F2F] shadow-lg" : "text-[#2F2F2F] hover:bg-[#F8F3E8]"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base sm:text-lg font-semibold", children: n.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronRight,
                      {
                        className: `w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${active ? "text-[#D4A090]" : "text-[#5F5F5F]"}`
                      }
                    )
                  ]
                }
              ) })
            },
            n.to
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto px-4 sm:px-5 pt-4 pb-6 border-t border-[#D4A090]/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "tel:+917977996930",
            className: "flex items-center justify-center gap-2 rounded-xl py-3 sm:py-3.5 font-bold mb-3 transition-all duration-300 hover:scale-[1.02] active:scale-95 text-[#2F2F2F] shadow-[0_4px_20px_rgba(47,47,47,0.12)]",
            style: { background: "linear-gradient(135deg, #FDDFA0 0%, #D4A090 100%)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
              " +91 7977996930"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] sm:text-[12px] text-[#5F5F5F]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 text-[#B8E0C8]" }),
            " Coastal Andhra · Premium Cuisine"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/andhradosaco/?utm_source=ig_web_button_share_sheet", target: "_blank", rel: "noopener noreferrer", "aria-label": "Instagram", className: "hover:text-[#D4A090] transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-4 h-4 text-[#2F2F2F]" }) }) })
        ] })
      ] })
    ] })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative bg-[#F8F3E8] text-[#2F2F2F] pt-20 pb-8 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-[#FDDFA0]/20 blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-[#B8E0C8]/15 blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-10 mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-3xl", children: "Andhra Dosa Co." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-[#D4A090] mt-1 font-semibold", children: "Taking Andhra Across India" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-[#B8E0C8] mt-1 font-semibold", children: "Exclusively from the House of Foodys" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-[#4F4F4F] max-w-md leading-relaxed", children: "Pesarattu, drumstick sambar, ginger chutney, bigger idlis. The flavours of Coastal Andhra, Vijayawada and Rayalaseema — served fresh in your city." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://www.instagram.com/andhradosaco/?utm_source=ig_web_button_share_sheet",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "w-10 h-10 rounded-full bg-white/80 hover:bg-[#D4A090]/15 grid place-items-center transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-4 h-4 text-[#2F2F2F]" })
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-[#D4A090] mb-4 font-semibold", children: "Visit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-[#4F4F4F]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 mt-0.5 text-[#B8E0C8] shrink-0" }),
              " Koregaon Park, Pune 411001"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 mt-0.5 text-[#B8E0C8] shrink-0" }),
              " +91 7977996930"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 mt-0.5 text-[#B8E0C8] shrink-0" }),
              " hello@andhradosa.co"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 mt-0.5 text-[#B8E0C8] shrink-0" }),
              " 7 AM – 11 PM · Daily"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-[#D4A090] mb-4 font-semibold", children: "Explore" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 text-sm", children: [
            { to: "/", label: "Home" },
            { to: "/menu", label: "Menu" },
            { to: "/story", label: "Our Story" },
            { to: "/about", label: "Why Andhra" },
            { to: "/locations", label: "Locations" },
            { to: "/gallery", label: "Gallery" },
            { to: "/contact", label: "Contact" }
          ].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "text-[#2F2F2F] hover:text-[#D4A090] transition-colors", children: l.label }, l.to)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-6 border-t border-[#D4A090]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[#5F5F5F]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Andhra Dosa Co. · All rights reserved. · Designed By Blaze The Entity"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-2 text-center sm:text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display italic text-[#D4A090]", children: '"రుచి. సంప్రదాయం. ఆంధ్ర."' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-[#5F5F5F]", children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-[#5F5F5F]", children: '"Authentic Taste of Andhra."' })
        ] })
      ] })
    ] })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Andhra Dosa — Authentic Andhra Cuisine, Cinematic Experience" },
      { name: "description", content: "Andhra Dosa Restaurant — authentic spicy Andhra dosas, premium South Indian cuisine. Order online, book a table." },
      { name: "author", content: "Andhra Dosa" },
      { property: "og:title", content: "Andhra Dosa Restaurant" },
      { property: "og:description", content: "Cinematic Andhra cuisine. Crafted by master chefs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,500;0,700;0,900;1,700;1,900&family=Inter:wght@300;400;500;600;700;800&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-white text-[#1a0f08]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] }) });
}
const $$splitComponentImporter$6 = () => import("./story-CQeNrWaX.mjs");
const Route$6 = createFileRoute("/story")({
  head: () => ({
    meta: [{
      title: "Our Story — Andhra Dosa Co."
    }, {
      name: "description",
      content: "Our journey bringing authentic Coastal Andhra cuisine from the kitchen to your table."
    }, {
      property: "og:title",
      content: "Our Story — Andhra Dosa Co."
    }, {
      property: "og:description",
      content: "The story of authentic Andhra cuisine."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const dosa1 = "/assets/dosa-1-Dm8conaE.jpg";
const $$splitComponentImporter$5 = () => import("./menu-CQl8p1UI.mjs");
const Route$5 = createFileRoute("/menu")({
  head: () => ({
    meta: [{
      title: "Menu — Andhra Dosa Co."
    }, {
      name: "description",
      content: "Explore the full Coastal Andhra menu with dosas, idlis, uttappams, beverages and fresh fruit shakes."
    }, {
      property: "og:title",
      content: "Menu — Andhra Dosa Co."
    }, {
      property: "og:description",
      content: "Explore the full Coastal Andhra menu with dosas, idlis, uttappams, beverages and fresh fruit shakes."
    }, {
      property: "og:image",
      content: dosa1
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const interior = "/assets/interior-CgugWahT.jpg";
const $$splitComponentImporter$4 = () => import("./locations-CmZMCiVe.mjs");
const Route$4 = createFileRoute("/locations")({
  head: () => ({
    meta: [{
      title: "Locations — Andhra Dosa Co."
    }, {
      name: "description",
      content: "Find Andhra Dosa Co. locations near you. Visit us for authentic Andhra flavours."
    }, {
      property: "og:title",
      content: "Locations — Andhra Dosa Co."
    }, {
      property: "og:description",
      content: "Visit our outlets for authentic Andhra cuisine."
    }, {
      property: "og:image",
      content: interior
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const adc4 = "/assets/adc%204-BseX8Ab3.png";
const $$splitComponentImporter$3 = () => import("./gallery-BJgudsQ7.mjs");
const Route$3 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — Andhra Dosa Co."
    }, {
      name: "description",
      content: "The kitchen, the food, the moments."
    }, {
      property: "og:title",
      content: "Gallery — Andhra Dosa Co."
    }, {
      property: "og:description",
      content: "Photos from the kitchen and the dining room."
    }, {
      property: "og:image",
      content: adc4
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-BcIgpLhZ.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact & Reservations — Andhra Dosa Co."
    }, {
      name: "description",
      content: "Find us, call us, reserve a table."
    }, {
      property: "og:title",
      content: "Contact — Andhra Dosa Co."
    }, {
      property: "og:description",
      content: "Visit, call or reserve a table at Andhra Dosa Co."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const pesarattu = "/assets/pesarattu-hero-XLuwJs7n.jpg";
const $$splitComponentImporter$1 = () => import("./about-DwpHYcpv.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "Why Andhra — Andhra Dosa Co."
    }, {
      name: "description",
      content: "Why Andhra cuisine deserves its own stage in Maharashtra. Six reasons we are obsessed."
    }, {
      property: "og:title",
      content: "Why Andhra — Andhra Dosa Co."
    }, {
      property: "og:description",
      content: "Pesarattu, drumstick sambar, allam chutney — the Andhra you have been missing."
    }, {
      property: "og:image",
      content: pesarattu
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-BdGBL3fY.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Andhra Dosa Co. — Authentic Andhra Flavours in Maharashtra"
    }, {
      name: "description",
      content: "Pesarattu, drumstick sambar, ginger chutney and bigger idlis. Authentic Andhra cuisine, brought from Coastal Andhra to Maharashtra."
    }, {
      property: "og:title",
      content: "Andhra Dosa Co."
    }, {
      property: "og:description",
      content: "Pesarattu is our hero. Drumstick sambar, allam chutney, bigger idlis — the real Andhra."
    }, {
      property: "og:image",
      content: pesarattu
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const StoryRoute = Route$6.update({
  id: "/story",
  path: "/story",
  getParentRoute: () => Route$7
});
const MenuRoute = Route$5.update({
  id: "/menu",
  path: "/menu",
  getParentRoute: () => Route$7
});
const LocationsRoute = Route$4.update({
  id: "/locations",
  path: "/locations",
  getParentRoute: () => Route$7
});
const GalleryRoute = Route$3.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  GalleryRoute,
  LocationsRoute,
  MenuRoute,
  StoryRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  adc4 as a,
  dosa1 as d,
  pesarattu as p,
  router as r
};
