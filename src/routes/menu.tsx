import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Flame, Leaf, Search } from "lucide-react";
import { Reveal } from "@/components/Reveal";

import pesarattu from "@/assets/pesarattu-hero.jpg";
import dosa1 from "@/assets/dosa-1.jpg";
import dosa2 from "@/assets/dosa-2.jpg";
import dosa3 from "@/assets/dosa-3.jpg";
import dosa4 from "@/assets/dosa-4.jpg";
import dosa5 from "@/assets/dosa-5.jpg";
import dosa6 from "@/assets/dosa-6.jpg";
import idli from "@/assets/idli-sambar.jpg";
import drumstick from "@/assets/drumstick-sambar.jpg";
import chutneys from "@/assets/chutneys.jpg";
import gal2 from "@/assets/gallery-2.jpg";
import gal4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Andhra Dosa Co." },
      { name: "description", content: "Pesarattu, Andhra dosas, bigger idlis, drumstick sambar, chutneys & podis. The full Andhra menu." },
      { property: "og:title", content: "Menu — Andhra Dosa Co." },
      { property: "og:description", content: "Pesarattu, Andhra dosas, bigger idlis and drumstick sambar." },
      { property: "og:image", content: pesarattu },
    ],
  }),
  component: MenuPage,
});

type Item = { cat: string; name: string; desc: string; price: string; veg: boolean; spice: number; img: string; tag?: string };

const CATS = [
  "Pesarattu Specials",
  "Andhra Dosas",
  "Bigger Idlis",
  "Tiffins",
  "Andhra Meals",
  "Chutneys & Podis",
  "Drumstick Sambar",
  "Filter Coffee & Beverages",
];

const ITEMS: Item[] = [
  // Pesarattu
  { cat: "Pesarattu Specials", name: "Classic Pesarattu", desc: "Green moong, ginger, green chili", price: "₹160", veg: true, spice: 2, img: pesarattu, tag: "Hero" },
  { cat: "Pesarattu Specials", name: "Upma Pesarattu (MLA)", desc: "Stuffed with rava upma, allam chutney", price: "₹210", veg: true, spice: 2, img: pesarattu, tag: "Famous" },
  { cat: "Pesarattu Specials", name: "Onion Pesarattu", desc: "Crisp onions, curry leaves, kobbari", price: "₹180", veg: true, spice: 2, img: pesarattu },
  { cat: "Pesarattu Specials", name: "Cheese Pesarattu", desc: "Modern take, gooey centre", price: "₹220", veg: true, spice: 1, img: pesarattu, tag: "New" },

  // Andhra Dosas
  { cat: "Andhra Dosas", name: "Ghee Karam Dosa", desc: "Red chili karam, ghee finish", price: "₹220", veg: true, spice: 4, img: dosa2, tag: "Signature" },
  { cat: "Andhra Dosas", name: "Andhra Masala Dosa", desc: "Spiced potato, three chutneys", price: "₹180", veg: true, spice: 3, img: dosa1 },
  { cat: "Andhra Dosas", name: "Guntur Karam Dosa", desc: "Sun-dried red chili paste", price: "₹230", veg: true, spice: 5, img: dosa5, tag: "Spicy" },
  { cat: "Andhra Dosas", name: "Mysore Masala", desc: "Red chutney inside, ghee", price: "₹210", veg: true, spice: 3, img: dosa5 },
  { cat: "Andhra Dosas", name: "Plain Dosa", desc: "Stone-ground batter", price: "₹120", veg: true, spice: 1, img: dosa3 },
  { cat: "Andhra Dosas", name: "Rava Onion Dosa", desc: "Lacy semolina, curry leaves", price: "₹190", veg: true, spice: 3, img: dosa4 },

  // Bigger Idlis
  { cat: "Bigger Idlis", name: "Bigger Idli (2 pc)", desc: "Banana-leaf soft, fluffy", price: "₹130", veg: true, spice: 1, img: idli, tag: "Big" },
  { cat: "Bigger Idlis", name: "Ghee Karam Idli", desc: "Bigger idli, ghee + karam podi", price: "₹160", veg: true, spice: 3, img: idli },
  { cat: "Bigger Idlis", name: "Sambar Idli Bowl", desc: "Drowned in drumstick sambar", price: "₹170", veg: true, spice: 2, img: idli },

  // Tiffins
  { cat: "Tiffins", name: "Vada Sambar", desc: "Twin medu vadas", price: "₹120", veg: true, spice: 2, img: dosa6 },
  { cat: "Tiffins", name: "Upma", desc: "Rava, cashew, curry leaf", price: "₹110", veg: true, spice: 1, img: gal2 },
  { cat: "Tiffins", name: "Pongal", desc: "Ghee pongal with sambar", price: "₹140", veg: true, spice: 1, img: gal2 },

  // Andhra Meals
  { cat: "Andhra Meals", name: "Andhra Veg Thali", desc: "Rice, sambar, 3 curries, podi, papad", price: "₹320", veg: true, spice: 3, img: gal4, tag: "Combo" },
  { cat: "Andhra Meals", name: "Andhra Chicken Bowl", desc: "Gongura chicken, rice", price: "₹380", veg: false, spice: 4, img: gal4 },

  // Chutneys
  { cat: "Chutneys & Podis", name: "Allam Pachadi", desc: "Ginger chutney, signature", price: "₹60", veg: true, spice: 3, img: chutneys, tag: "Iconic" },
  { cat: "Chutneys & Podis", name: "Kobbari Chutney", desc: "Fresh coconut, mustard tempered", price: "₹50", veg: true, spice: 1, img: chutneys },
  { cat: "Chutneys & Podis", name: "Tomato Chutney", desc: "Sun-dried red chili, garlic", price: "₹55", veg: true, spice: 3, img: chutneys },
  { cat: "Chutneys & Podis", name: "Karam Podi", desc: "Dry red chili podi + ghee", price: "₹70", veg: true, spice: 4, img: chutneys },

  // Drumstick Sambar
  { cat: "Drumstick Sambar", name: "Drumstick Sambar Bowl", desc: "Full bowl, drumstick guaranteed", price: "₹90", veg: true, spice: 2, img: drumstick, tag: "Promise" },
  { cat: "Drumstick Sambar", name: "Sambar Rice", desc: "Steamed rice, drumstick sambar, ghee", price: "₹180", veg: true, spice: 2, img: drumstick },

  // Beverages
  { cat: "Filter Coffee & Beverages", name: "Filter Coffee", desc: "Davara + tumbler, frothed", price: "₹80", veg: true, spice: 0, img: gal2, tag: "Cult" },
  { cat: "Filter Coffee & Beverages", name: "Masala Chai", desc: "Hand-pulled, cardamom", price: "₹60", veg: true, spice: 0, img: gal2 },
  { cat: "Filter Coffee & Beverages", name: "Buttermilk", desc: "Salted, ginger, curry leaf", price: "₹50", veg: true, spice: 1, img: gal2 },
];

function Spice({ level }: { level: number }) {
  return (
    <span className="inline-flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Flame key={i} className={`w-3 h-3 ${i <= level ? "text-[#D62828] fill-[#D62828]" : "text-[#1a0f08]/15"}`} />
      ))}
    </span>
  );
}

function MenuPage() {
  const [activeCat, setActiveCat] = useState<string>(CATS[0]);
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return ITEMS.filter((i) => i.cat === activeCat).filter((i) =>
      ql ? i.name.toLowerCase().includes(ql) || i.desc.toLowerCase().includes(ql) : true,
    );
  }, [activeCat, q]);

  return (
    <div className="bg-white">
      {/* Title */}
      <section className="relative pt-44 sm:pt-40 pb-16 bg-[#FAF6EE] overflow-hidden">
        <div className="absolute right-0 top-0 font-display italic text-[#D62828]/[0.05] text-[22rem] leading-none select-none pointer-events-none hidden md:block">
          మెనూ
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.35em] text-[#D62828] font-bold mb-3">The full menu</div>
            <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl leading-[0.9]">
              Tap a category.<br />
              <span className="font-medium">Eat what Andhra eats.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-[80px] z-30 bg-white/90 backdrop-blur-md border-b border-[#1a0f08]/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-3">
          <div className="flex-1 overflow-x-auto">
            <div className="flex gap-2">
              {CATS.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCat(c)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    activeCat === c ? "bg-[#1a0f08] text-white" : "bg-[#FAF6EE] text-[#1a0f08]/70 hover:text-[#1a0f08]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 rounded-full bg-[#FAF6EE] px-4 py-2 w-64">
            <Search className="w-4 h-4 text-[#1a0f08]/40" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search dish..."
              className="bg-transparent text-sm focus:outline-none flex-1"
            />
          </div>
        </div>
      </div>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal key={activeCat}>
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-8">{activeCat}</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((it, i) => (
              <Reveal key={it.name} delay={i * 50}>
                <article className="group bg-white rounded-3xl border border-[#1a0f08]/8 overflow-hidden hover:shadow-xl transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF6EE]">
                    <img src={it.img} alt={it.name} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    {it.tag && (
                      <span className="absolute top-3 left-3 bg-[#D62828] text-white text-[10px] font-bold uppercase tracking-wider rounded-full px-3 py-1">{it.tag}</span>
                    )}
                    <span className="absolute top-3 right-3 grid place-items-center w-7 h-7 rounded bg-white">
                      <span className={`w-2.5 h-2.5 rounded-full ${it.veg ? "bg-[#2a7a3a]" : "bg-[#D62828]"}`} />
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display font-bold text-xl leading-snug">{it.name}</h3>
                      <div className="font-display font-black text-xl text-[#D62828] shrink-0">{it.price}</div>
                    </div>
                    <p className="mt-1 text-sm text-[#1a0f08]/60">{it.desc}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <Spice level={it.spice} />
                      <button className="text-[12px] font-bold uppercase tracking-wider text-[#D62828] hover:text-[#1a0f08] transition-colors">
                        + Add
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#1a0f08]/50">No dishes match that search.</div>
          )}
        </div>
      </section>
    </div>
  );
}