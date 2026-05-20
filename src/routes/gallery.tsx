import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import pesarattu from "@/assets/pesarattu-hero.jpg";
import chutneys from "@/assets/chutneys.jpg";
import idli from "@/assets/idli-sambar.jpg";
import drumstick from "@/assets/drumstick-sambar.jpg";
import tawa from "@/assets/tawa-pour.jpg";
import dosa1 from "@/assets/dosa-1.jpg";
import dosa2 from "@/assets/dosa-2.jpg";
import dosa4 from "@/assets/dosa-4.jpg";
import dosa5 from "@/assets/dosa-5.jpg";
import interior from "@/assets/interior.jpg";
import chef from "@/assets/chef.jpg";
import gal1 from "@/assets/gallery-1.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Andhra Dosa Company" },
      { name: "description", content: "The kitchen, the food, the moments." },
      { property: "og:title", content: "Gallery — Andhra Dosa Company" },
      { property: "og:description", content: "Photos from the kitchen and the dining room." },
      { property: "og:image", content: pesarattu },
    ],
  }),
  component: GalleryPage,
});

const IMGS = [
  { src: pesarattu, h: "tall" },
  { src: chutneys, h: "short" },
  { src: idli, h: "tall" },
  { src: drumstick, h: "short" },
  { src: tawa, h: "short" },
  { src: dosa1, h: "tall" },
  { src: dosa2, h: "short" },
  { src: dosa4, h: "tall" },
  { src: dosa5, h: "short" },
  { src: interior, h: "tall" },
  { src: chef, h: "short" },
  { src: gal1, h: "tall" },
];

function GalleryPage() {
  return (
    <div className="bg-white">
      <section className="relative pt-36 pb-12 bg-[#FAF6EE]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.35em] text-[#D62828] font-bold mb-3">Gallery</div>
            <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl leading-[0.9]">
              Moments from<br />
              <span className="italic font-medium text-[#FF7A00]">the tawa.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {IMGS.map((it, i) => (
              <Reveal key={i} delay={(i % 6) * 60}>
                <div className={`mb-5 break-inside-avoid overflow-hidden rounded-3xl ${it.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <img src={it.src} alt="Andhra Dosa gallery" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}