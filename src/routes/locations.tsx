import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { MapPin, Phone, Clock, Star, Navigation } from "lucide-react";
import interior from "@/assets/interior.jpg";
import galleryImg1 from "@/assets/gallary/2655b4fb-a390-4bf0-b2ab-6008f85a3b0a.jpg (1).jpeg";
import galleryImg2 from "@/assets/gallary/2655b4fb-a390-4bf0-b2ab-6008f85a3b0a.jpg.jpeg";
import galleryImg3 from "@/assets/gallary/39d7febe-27ce-45c0-8d95-56182eb52799.jpg.jpeg";
import galleryImg4 from "@/assets/gallary/3c903ac1-58b6-4116-856d-da58e6147bd6.jpg.jpeg";
import galleryImg5 from "@/assets/gallary/d3b6b160-c453-42a8-b21c-97cb8e844f10.jpg.jpeg";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations — Andhra Dosa Co." },
      { name: "description", content: "Find Andhra Dosa Co. locations near you. Visit us for authentic Andhra flavours." },
      { property: "og:title", content: "Locations — Andhra Dosa Co." },
      { property: "og:description", content: "Visit our outlets for authentic Andhra cuisine." },
      { property: "og:image", content: interior },
    ],
  }),
  component: LocationsPage,
});

const LOCATIONS = [
  {
    name: "Marol, Mumbai",
    address: "Metro Station, Naka, Marol, Mumbai, Maharashtra 400059",
    phone: "+91 99999 99999",
    hours: "7 AM – 11 PM · Daily",
    status: "open",
    image: galleryImg3,
    directions: "https://www.google.com/maps/search/?api=1&query=Andhra+Dosa+Co+Marol+Mumbai",
  },
  {
    name: "Western Exp Highway",
    address: "Andheri-Kurla Road, next to Andheri Fly over, Andheri (E), Mumbai, 400069",
    phone: "+91 99999 99999",
    hours: "Opening in 15 days",
    status: "coming-soon",
    image: galleryImg5,
    directions: "https://www.google.com/maps/search/?api=1&query=Western+Exp+Highway+Mumbai+Andheri",
  },
  {
    name: "Koregaon Park, Pune",
    address: "Coming Soon",
    phone: "—",
    hours: "Opening Soon",
    status: "coming-soon",
    image: galleryImg4,
  },
  {
    name: "Viman Nagar, Pune",
    address: "Coming Soon",
    phone: "—",
    hours: "Opening Soon",
    status: "coming-soon",
    image: galleryImg1,
  },
];

function LocationsPage() {
  return (
    <div className="bg-white">
      <section className="relative pt-36 pb-16 bg-[#FAF6EE]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.35em] text-[#D62828] font-bold mb-3">Locations</div>
            <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl leading-[0.9]">
              Find us near<br />
              <span className="text-[#FF7A00]">you.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {LOCATIONS.map((loc, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className={`relative overflow-hidden rounded-3xl ${loc.status === "coming-soon" ? "bg-[#FAF6EE]" : "bg-white border border-[#1a0f08]/10"}`}>
                  {loc.image && (
                    <div className="aspect-[16/9] overflow-hidden">
                      <img src={loc.image} alt={loc.name} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-8">
                    {loc.status === "coming-soon" ? (
                      <>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-12 h-12 rounded-full bg-[#D4A017]/20 flex items-center justify-center">
                            <Clock className="w-6 h-6 text-[#D4A017]" />
                          </div>
                          <div>
                            <div className="font-display font-black text-2xl text-[#1a0f08]">{loc.name}</div>
                            <div className="text-sm text-[#D62828] font-semibold">Stay Tuned</div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-[#1a0f08]/70">
                            <MapPin className="w-5 h-5 text-[#FF7A00]" />
                            <span>{loc.address}</span>
                          </div>
                          <div className="flex items-center gap-3 text-[#1a0f08]/70">
                            <Clock className="w-5 h-5 text-[#FF7A00]" />
                            <span>{loc.hours}</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="font-display font-black text-2xl text-[#1a0f08]">{loc.name}</div>
                            <div className="flex items-center gap-1 mt-2">
                              <Star className="w-4 h-4 fill-[#D4A017] text-[#D4A017]" />
                              <span className="text-sm font-semibold text-[#1a0f08]">4.9</span>
                              <span className="text-sm text-[#1a0f08]/50">· 2k+ reviews</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2a7a3a]/10 rounded-full">
                            <div className="w-2 h-2 rounded-full bg-[#2a7a3a] animate-pulse" />
                            <span className="text-xs font-bold text-[#2a7a3a]">OPEN</span>
                          </div>
                        </div>
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3 text-[#1a0f08]/70">
                            <MapPin className="w-5 h-5 text-[#FF7A00]" />
                            <span>{loc.address}</span>
                          </div>
                          <div className="flex items-center gap-3 text-[#1a0f08]/70">
                            <Phone className="w-5 h-5 text-[#FF7A00]" />
                            <span>{loc.phone}</span>
                          </div>
                          <div className="flex items-center gap-3 text-[#1a0f08]/70">
                            <Clock className="w-5 h-5 text-[#FF7A00]" />
                            <span>{loc.hours}</span>
                          </div>
                        </div>
                        <a
                          href={`tel:${loc.phone}`}
                          className="inline-flex items-center gap-2 rounded-full bg-[#D62828] text-white px-6 py-3 font-bold hover:bg-[#b81e1e] transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          Call Now
                        </a>
                        <a
                          href={loc.directions || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-3 inline-flex items-center gap-2 rounded-full border border-[#1a0f08]/20 text-[#1a0f08] px-6 py-3 font-bold hover:bg-[#FAF6EE] transition-colors"
                        >
                          <Navigation className="w-4 h-4" />
                          Directions
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
