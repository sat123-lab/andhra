import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import chutneys from "@/assets/chutneys.jpg";
import idli from "@/assets/idli-sambar.jpg";
import drumstick from "@/assets/drumstick-sambar.jpg";
import tawa from "@/assets/tawa-pour.jpg";
import dosa1 from "@/assets/dosa-1.jpg";
import adc4 from "@/assets/idly/adc 4.png";
import adc from "@/assets/idly/ADC.png";
import dsbf4 from "@/assets/idly/dsbf 4.png";
import galleryImg1 from "@/assets/gallary/2655b4fb-a390-4bf0-b2ab-6008f85a3b0a.jpg (1).jpeg";
import galleryImg2 from "@/assets/gallary/2655b4fb-a390-4bf0-b2ab-6008f85a3b0a.jpg.jpeg";
import galleryImg3 from "@/assets/gallary/39d7febe-27ce-45c0-8d95-56182eb52799.jpg.jpeg";
import galleryImg4 from "@/assets/gallary/3c903ac1-58b6-4116-856d-da58e6147bd6.jpg.jpeg";
import galleryImg5 from "@/assets/gallary/d3b6b160-c453-42a8-b21c-97cb8e844f10.jpg - Copy.jpeg";
import galleryImg6 from "@/assets/gallary/d3b6b160-c453-42a8-b21c-97cb8e844f10.jpg.jpeg";
import galleryImg7 from "@/assets/gallary/dc44d23f-87e7-4e2d-be61-0847082a5245.jpg.jpeg";
import galleryImg8 from "@/assets/gallary/ee8182df-0b89-4f56-9122-0eb2ebdea58f.jpg.jpeg";
import galleryImg9 from "@/assets/gallary/fe8a6b40-db43-4ba7-8858-d05203527d88.jpg.jpeg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Andhra Dosa Company" },
      { name: "description", content: "The kitchen, the food, the moments." },
      { property: "og:title", content: "Gallery — Andhra Dosa Company" },
      { property: "og:description", content: "Photos from the kitchen and the dining room." },
      { property: "og:image", content: adc4 },
    ],
  }),
  component: GalleryPage,
});

const IMGS = [
  { src: adc4, h: "tall" },
  { src: adc, h: "short" },
  { src: dsbf4, h: "tall" },
  { src: chutneys, h: "short" },
  { src: idli, h: "tall" },
  { src: drumstick, h: "short" },
  { src: tawa, h: "short" },
  { src: dosa1, h: "tall" },
  { src: galleryImg1, h: "tall" },
  { src: galleryImg2, h: "short" },
  { src: galleryImg3, h: "tall" },
  { src: galleryImg4, h: "short" },
  { src: galleryImg5, h: "tall" },
  { src: galleryImg6, h: "short" },
  { src: galleryImg7, h: "tall" },
  { src: galleryImg8, h: "short" },
  { src: galleryImg9, h: "tall" },
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