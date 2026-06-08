import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative bg-[#F8F3E8] text-[#2F2F2F] pt-20 pb-8 overflow-hidden">
      <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-[#FDDFA0]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-[#B8E0C8]/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <div className="font-display font-black text-3xl">Andhra Dosa Co.</div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#D4A090] mt-1 font-semibold">
              Taking Andhra Across India
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#B8E0C8] mt-1 font-semibold">
              Exclusively from the House of Foodys
            </div>
            <p className="mt-5 text-[#4F4F4F] max-w-md leading-relaxed">
              Pesarattu, drumstick sambar, ginger chutney, bigger idlis. The flavours
              of Coastal Andhra, Vijayawada and Rayalaseema — served fresh in your city.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/andhradosaco/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/80 hover:bg-[#D4A090]/15 grid place-items-center transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#2F2F2F]" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4A090] mb-4 font-semibold">
              Visit
            </div>
            <ul className="space-y-3 text-sm text-[#4F4F4F]">
              <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-[#B8E0C8] shrink-0" /> Koregaon Park, Pune 411001</li>
              <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-[#B8E0C8] shrink-0" /> +91 7977996930</li>
              <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-[#B8E0C8] shrink-0" /> hello@andhradosa.co</li>
              <li className="flex gap-2"><Clock className="w-4 h-4 mt-0.5 text-[#B8E0C8] shrink-0" /> 7 AM – 11 PM · Daily</li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4A090] mb-4 font-semibold">
              Explore
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/menu", label: "Menu" },
                { to: "/story", label: "Our Story" },
                { to: "/about", label: "Why Andhra" },
                { to: "/locations", label: "Locations" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-[#2F2F2F] hover:text-[#D4A090] transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#D4A090]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[#5F5F5F]">
          <div>© {new Date().getFullYear()} Andhra Dosa Co. · All rights reserved. · Designed By Blaze The Entity</div>
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-right">
            <div className="font-display italic text-[#D4A090]">"రుచి. సంప్రదాయం. ఆంధ్ర."</div>
            <span className="hidden sm:inline text-[#5F5F5F]">·</span>
            <div className="text-[11px] text-[#5F5F5F]">"Authentic Taste of Andhra."</div>
          </div>
        </div>
      </div>
    </footer>
  );
}