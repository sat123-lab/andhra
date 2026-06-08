import { useEffect, useState, useRef } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, ChevronRight, ChevronDown, X, Instagram, Facebook, MapPin, UtensilsCrossed, Star, Sparkles, Leaf, Flame, Circle, Coffee, Soup, type LucideIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import logoSvg from "@/assets/1767550022189.jpg";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu", hasDropdown: true },
  { to: "/story", label: "Our Story" },
  { to: "/about", label: "Why Andhra" },
  { to: "/locations", label: "Locations" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

const MENU_CATEGORIES: { name: string; count: number; color: string; Icon: LucideIcon }[] = [
  { name: "Pesarattu Specials", count: 6, color: "#B8E0C8", Icon: Leaf },
  { name: "Andhra Dosas", count: 14, color: "#D4A090", Icon: Flame },
  { name: "Bigger Idlis", count: 5, color: "#D4A090", Icon: Circle },
  { name: "Tiffins", count: 9, color: "#FDDFA0", Icon: UtensilsCrossed },
  { name: "Andhra Meals", count: 7, color: "#D4A090", Icon: Sparkles },
  { name: "Chutneys & Podis", count: 8, color: "#B8E0C8", Icon: Star },
  { name: "Drumstick Sambar", count: 3, color: "#D4A090", Icon: Soup },
  { name: "Filter Coffee & Beverages", count: 6, color: "#2F2F2F", Icon: Coffee },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* ── Top announcement bar ── */}
      <div
        className={`w-full transition-all duration-500 overflow-hidden hidden sm:block ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
        style={{ background: "linear-gradient(90deg, #F8F3E8 0%, #B8E0C8 50%, #F8F3E8 100%)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-8 flex items-center justify-between h-9">
          <div className="flex items-center gap-2 text-[11px] tracking-[0.15em] text-[#D4A090] uppercase font-semibold">
            <Sparkles className="w-3 h-3 text-[#D4A090]" />
            <span>Now Available on Swiggy & Zomato</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px] text-[#2F2F2F]">
            <a href="tel:+917977996930" className="flex items-center gap-1.5 hover:text-[#D4A090] transition-colors">
              <Phone className="w-3 h-3" /> +91 7977996930
            </a>
            <span className="w-px h-3 bg-[#2F2F2F]/20" />
            <a href="https://www.instagram.com/andhradosaco/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#D4A090] transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>

      {/* ── Main navigation bar ── */}
      <div
        className={`w-full transition-all duration-500 ${
          scrolled
            ? "bg-[#F8F3E8]/95 backdrop-blur-2xl shadow-[0_4px_40px_rgba(47,47,47,0.08)] py-0"
            : "bg-white backdrop-blur-xl border-b border-[#D4A090]/15 shadow-sm py-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-8 flex items-center justify-between h-16 sm:h-18 lg:h-20">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-3 sm:gap-4 group shrink-0">
            <div
              className={`relative w-11 h-11 sm:w-13 sm:h-13 rounded-xl overflow-hidden p-0.5 transition-all duration-300 group-hover:scale-105 ${
                scrolled ? "bg-[#D4A090]/20 ring-1 ring-[#D4A090]/30" : "bg-[#F8F3E8]"
              }`}
            >
              <img src={logoSvg} alt="Andhra Dosa Co" className="w-full h-full object-contain rounded-lg" />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-extrabold text-lg sm:text-xl lg:text-2xl tracking-tight text-[#0F4D2E]">
                Andhra Dosa Co.
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="h-px w-4 bg-[#D4A090]/60" />
                <div className="text-[8px] sm:text-[9px] uppercase tracking-[0.28em] text-[#D4A090] font-semibold">
                  Flavours of Coastal Andhra
                </div>
                <div className="h-px w-4 bg-[#D4A090]/60" />
              </div>
            </div>
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV.map((n) => {
              const active = pathname === n.to;
              const hasDropdown = "hasDropdown" in n && n.hasDropdown;
              return (
                <div key={n.to} className="relative" ref={hasDropdown ? dropdownRef : undefined}>
                  <Link
                    to={n.to}
                    className={`relative flex items-center gap-1 px-4 py-2.5 text-[13px] tracking-wide font-semibold transition-all duration-300 group ${
                      active
                        ? "text-[#C96A3D]"
                        : "text-[#2F2F2F] hover:text-[#D4A090]"
                    }`}
                    onMouseEnter={() => hasDropdown && setMenuOpen(true)}
                  >
                    {n.label}
                    {hasDropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`} />
                    )}
                    <span
                      className={`absolute bottom-1 left-3 right-3 h-[1.5px] rounded-full transition-all duration-300 origin-center ${
                        active
                          ? "bg-[#C96A3D] scale-x-100"
                          : "bg-[#C96A3D] scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>

                  {/* ── Mega dropdown ── */}
                  {hasDropdown && menuOpen && (
                    <div
                      className="absolute top-full left-0 mt-3 w-[580px] rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(47,47,47,0.14)] border border-[#D4A090]/20 animate-dropdown"
                      onMouseLeave={() => setMenuOpen(false)}
                    >
                      {/* Dropdown header */}
                      <div className="bg-gradient-to-r from-[#F8F3E8] via-[#B8E0C8] to-[#F8F3E8] px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#D4A090]/20 flex items-center justify-center">
                            <UtensilsCrossed className="w-4 h-4 text-[#D4A090]" />
                          </div>
                          <div>
                            <div className="text-[#2F2F2F] font-display font-bold text-sm">Our Menu</div>
                            <div className="text-[10px] uppercase tracking-[0.2em] text-[#D4A090] font-medium">Authentic Andhra Cuisine</div>
                          </div>
                        </div>
                        <Link
                          to="/menu"
                          className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D4A090] hover:text-[#FDDFA0] transition-colors border border-[#D4A090]/30 hover:border-[#D4A090]/60 rounded-full px-3 py-1.5"
                          onClick={() => setMenuOpen(false)}
                        >
                          Full Menu <ChevronRight className="w-3 h-3" />
                        </Link>
                      </div>
                      {/* Dropdown grid */}
                      <div className="bg-white p-4 grid grid-cols-2 gap-1.5">
                        {MENU_CATEGORIES.map((c, idx) => (
                          <Link
                            key={c.name}
                            to="/menu"
                            hash={c.name.toLowerCase().replace(/[^a-z]+/g, "-")}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-3 rounded-xl px-3.5 py-3 hover:bg-[#F8F3E8] transition-all duration-200 group/item border border-transparent hover:border-[#D4A090]/20"
                            style={{ animationDelay: `${idx * 30}ms` }}
                          >
                            <div
                              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover/item:scale-110"
                              style={{ backgroundColor: `${c.color}12` }}
                            >
                              <c.Icon className="w-4 h-4" style={{ color: c.color }} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[13px] font-semibold text-[#2F2F2F] group-hover/item:text-[#D4A090] transition-colors truncate">
                                {c.name}
                              </div>
                              <div className="text-[10px] text-[#5F5F5F] font-medium mt-0.5">
                                {c.count} items
                              </div>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-[#5F5F5F] group-hover/item:text-[#D4A090] group-hover/item:translate-x-0.5 transition-all duration-200 shrink-0" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* ── Right — mobile trigger ── */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Mobile drawer trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className={`lg:hidden inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 ${
                    scrolled
                      ? "bg-[#D4A090]/15 text-[#2F2F2F] hover:bg-[#D4A090]/25 ring-1 ring-[#D4A090]/20"
                      : "bg-[#F8F3E8] text-[#2F2F2F] hover:bg-[#B8E0C8]"
                  }`}
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[90vw] sm:w-[400px] md:w-[440px] p-0 border-l border-[#D4A090]/20 bg-white"
              >
                <MobileDrawer pathname={pathname} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileDrawer({ pathname }: { pathname: string }) {
  const [menuExpanded, setMenuExpanded] = useState(false);
  return (
    <div className="h-full flex flex-col">
      {/* Header band — stays fixed */}
      <div className="relative shrink-0 overflow-x-hidden px-5 sm:px-6 pt-6 pb-8" style={{ background: "linear-gradient(135deg, #F8F3E8 0%, #B8E0C8 60%, #F8F3E8 100%)" }}>
        <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-[#D4A090]/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 w-32 h-32 rounded-full bg-[#FDDFA0]/8 blur-2xl" />
        <div className="absolute right-4 bottom-0 text-[70px] sm:text-[90px] font-display italic text-[#F8F3E8] leading-none select-none pointer-events-none">
          ఆంధ్ర
        </div>
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-[#D4A090]/15 ring-1 ring-[#D4A090]/30 p-0.5 flex items-center justify-center">
              <img src={logoSvg} alt="Logo" className="w-full h-full object-contain rounded-lg" />
            </div>
            <div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#D4A090] font-bold">
                Authentic · Flavours of Coastal Andhra
              </div>
              <div className="font-display font-black text-xl sm:text-2xl text-[#2F2F2F] mt-0.5">Andhra Dosa Co.</div>
            </div>
          </div>
          <SheetClose asChild>
            <button
              aria-label="Close menu"
              className="w-9 h-9 rounded-full bg-white/80 hover:bg-[#F8F3E8] ring-1 ring-[#D4A090]/20 grid place-items-center transition-colors"
            >
              <X className="w-4 h-4 text-[#2F2F2F]" />
            </button>
          </SheetClose>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
      {/* Pages */}
      <div className="px-4 sm:px-5 pt-5 pb-2">
        <div className="text-[9px] uppercase tracking-[0.3em] text-[#2F2F2F] font-bold mb-3 px-2">
          Navigate
        </div>
        <ul className="space-y-1">
          {NAV.map((n, idx) => {
            const active = pathname === n.to;
            const hasDropdown = "hasDropdown" in n && n.hasDropdown;
            return (
              <li
                key={n.to}
                className="animate-reveal"
                style={{ animationDelay: `${0.05 + idx * 0.04}s` }}
              >
                {hasDropdown ? (
                  <>
                    <button
                      onClick={() => setMenuExpanded((p) => !p)}
                      className={`w-full group flex items-center justify-between rounded-xl px-4 py-3 sm:py-3.5 transition-all duration-300 ${
                        active
                          ? "bg-[#F8F3E8] text-[#2F2F2F] shadow-lg"
                          : "text-[#2F2F2F] hover:bg-[#F8F3E8]"
                      }`}
                    >
                      <span className="font-display text-base sm:text-lg font-semibold">{n.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          menuExpanded ? "rotate-180" : ""
                        } ${active ? "text-[#D4A090]" : "text-[#5F5F5F]"}`}
                      />
                    </button>
                    {menuExpanded && (
                      <ul className="mt-1 space-y-1 pl-2 pr-1">
                        <li>
                          <SheetClose asChild>
                            <Link
                              to="/menu"
                              className="flex items-center gap-2 rounded-lg px-3 py-2 text-[12px] font-bold uppercase tracking-[0.15em] text-[#D4A090] hover:bg-[#D4A090]/10 transition-colors"
                            >
                              Full Menu <ChevronRight className="w-3 h-3" />
                            </Link>
                          </SheetClose>
                        </li>
                        {MENU_CATEGORIES.map((c) => (
                          <li key={c.name}>
                            <SheetClose asChild>
                              <Link
                                to="/menu"
                                hash={c.name.toLowerCase().replace(/[^a-z]+/g, "-")}
                                className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-[#F8F3E8] transition-all duration-200 group/cat"
                              >
                                <div
                                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                                  style={{ backgroundColor: `${c.color}14` }}
                                >
                                  <c.Icon className="w-3.5 h-3.5" style={{ color: c.color }} />
                                </div>
                                <span className="flex-1 text-[13px] font-medium text-[#2F2F2F]">{c.name}</span>
                                <span className="text-[10px] font-bold text-[#5F5F5F] tabular-nums">{c.count.toString().padStart(2, "0")}</span>
                              </Link>
                            </SheetClose>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <SheetClose asChild>
                    <Link
                      to={n.to}
                      className={`group flex items-center justify-between rounded-xl px-4 py-3 sm:py-3.5 transition-all duration-300 ${
                        active
                          ? "bg-[#F8F3E8] text-[#2F2F2F] shadow-lg"
                          : "text-[#2F2F2F] hover:bg-[#F8F3E8]"
                      }`}
                    >
                      <span className="font-display text-base sm:text-lg font-semibold">{n.label}</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
                          active ? "text-[#D4A090]" : "text-[#5F5F5F]"
                        }`}
                      />
                    </Link>
                  </SheetClose>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Footer of drawer */}
      <div className="mt-auto px-4 sm:px-5 pt-4 pb-6 border-t border-[#D4A090]/20">
        <a
          href="tel:+917977996930"
          className="flex items-center justify-center gap-2 rounded-xl py-3 sm:py-3.5 font-bold mb-3 transition-all duration-300 hover:scale-[1.02] active:scale-95 text-[#2F2F2F] shadow-[0_4px_20px_rgba(47,47,47,0.12)]"
          style={{ background: "linear-gradient(135deg, #FDDFA0 0%, #D4A090 100%)" }}
        >
          <Phone className="w-4 h-4" /> +91 7977996930
        </a>
        <div className="flex items-center justify-between text-[11px] sm:text-[12px] text-[#5F5F5F]">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#B8E0C8]" /> Coastal Andhra · Premium Cuisine
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/andhradosaco/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#D4A090] transition-colors"><Instagram className="w-4 h-4 text-[#2F2F2F]" /></a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}