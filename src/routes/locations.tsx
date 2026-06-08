import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Reveal } from "@/components/Reveal";
import { MapPin, Phone, Clock, Star, Navigation } from "lucide-react";
import interior from "@/assets/interior.jpg";
import galleryImg1 from "@/assets/gallary/2655b4fb-a390-4bf0-b2ab-6008f85a3b0a.jpg (1).jpeg";
import galleryImg2 from "@/assets/gallary/2655b4fb-a390-4bf0-b2ab-6008f85a3b0a.jpg.jpeg";
import galleryImg3 from "@/assets/gallary/39d7febe-27ce-45c0-8d95-56182eb52799.jpg.jpeg";
import galleryImg4 from "@/assets/gallary/3c903ac1-58b6-4116-856d-da58e6147bd6.jpg.jpeg";
import galleryImg5 from "@/assets/gallary/d3b6b160-c453-42a8-b21c-97cb8e844f10.jpg.jpeg";
import logoSvg from "@/assets/logo.svg";

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
    phone: "+91 7977996930",
    hours: "7 AM – 11 PM · Daily",
    status: "open",
    image: galleryImg3,
    directions: "https://www.google.com/maps/search/?api=1&query=Andhra+Dosa+Co+Marol+Mumbai",
  },
  {
    name: "Western Exp Highway",
    address: "Andheri-Kurla Road, next to Andheri Fly over, Andheri (E), Mumbai, 400069",
    phone: "+91 7977996930",
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background">
      {loading && (
        <div className="fixed inset-0 z-50 bg-[#F8F3E8]/80 backdrop-blur-md flex items-center justify-center transition-opacity duration-700 ease-out">
          <div className="flex flex-col items-center gap-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-primary/15 ring-1 ring-primary/30 p-2 flex items-center justify-center animate-pulse">
              <img src={logoSvg} alt="Andhra Dosa Co." className="w-full h-full object-contain" />
            </div>
            <div className="text-primary font-display font-black text-xl sm:text-2xl tracking-wider animate-pulse">
              Andhra Dosa Co.
            </div>
          </div>
        </div>
      )}
      <section className="relative pt-36 pb-16 bg-[#FAF6EE]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.35em] text-[#C9A227] font-bold mb-3">Locations</div>
            <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl leading-[0.9] text-[#1B3022]">
              Find us near<br />
              <span className="text-[#E9C46A]">you.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {LOCATIONS.map((loc, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className={`relative overflow-hidden rounded-3xl ${loc.status === "coming-soon" ? "bg-[#FAF6EE]" : "bg-white border border-[#2F2F2F]/10"}`}>
                  {loc.image && (
                    <div className="aspect-[16/9] overflow-hidden">
                      <img src={loc.image} alt={loc.name} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-8">
                    {loc.status === "coming-soon" ? (
                      <>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                            <Clock className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <div className="font-display font-black text-2xl text-[#1B3022]">{loc.name}</div>
                            <div className="text-sm text-secondary font-semibold">Stay Tuned</div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-[#2F2F2F] font-medium">
                            <MapPin className="w-5 h-5 text-primary" />
                            <span>{loc.address}</span>
                          </div>
                          <div className="flex items-center gap-3 text-[#2F2F2F] font-medium">
                            <Clock className="w-5 h-5 text-primary" />
                            <span>{loc.hours}</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="font-display font-black text-2xl text-[#1B3022]">{loc.name}</div>
                            <div className="flex items-center gap-1 mt-2">
                              <Star className="w-4 h-4 fill-primary text-primary" />
                              <span className="text-sm font-semibold text-foreground">4.9</span>
                              <span className="text-sm text-[#5F5F5F]">· 2k+ reviews</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2a7a3a]/10 rounded-full">
                            <div className="w-2 h-2 rounded-full bg-[#2a7a3a] animate-pulse" />
                            <span className="text-xs font-bold text-[#2a7a3a]">OPEN</span>
                          </div>
                        </div>
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3 text-[#2F2F2F] font-medium">
                            <MapPin className="w-5 h-5 text-[#FF7A00]" />
                            <span>{loc.address}</span>
                          </div>
                          <div className="flex items-center gap-3 text-[#2F2F2F] font-medium">
                            <Phone className="w-5 h-5 text-[#FF7A00]" />
                            <span>{loc.phone}</span>
                          </div>
                          <div className="flex items-center gap-3 text-[#2F2F2F] font-medium">
                            <Clock className="w-5 h-5 text-[#FF7A00]" />
                            <span>{loc.hours}</span>
                          </div>
                        </div>
                        <a
                          href={`tel:${loc.phone}`}
                          className="inline-flex items-center gap-2 rounded-full bg-secondary text-foreground px-6 py-3 font-bold hover:bg-secondary/90 transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          Call Now
                        </a>
                        <a
                          href={loc.directions || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-3 inline-flex items-center gap-2 rounded-full border border-[#2F2F2F]/20 text-foreground px-6 py-3 font-bold hover:bg-[#FAF6EE] transition-colors"
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
