import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative bg-[#1a0f08] text-white pt-20 pb-8 overflow-hidden">
      <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-[#D62828]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-[#FF7A00]/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <div className="font-display font-black text-3xl">Andhra Dosa Co.</div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#FFC300] mt-1 font-semibold">
              Bringing Andhra to Maharashtra
            </div>
            <p className="mt-5 text-white/65 max-w-md leading-relaxed">
              Pesarattu, drumstick sambar, ginger chutney, bigger idlis. The flavours
              of Guntur, Vijayawada and Rayalaseema — served fresh in your city.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/8 hover:bg-[#D62828] grid place-items-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#FFC300] mb-4 font-semibold">
              Visit
            </div>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-[#FF7A00] shrink-0" /> Koregaon Park, Pune 411001</li>
              <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-[#FF7A00] shrink-0" /> +91 99999 99999</li>
              <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-[#FF7A00] shrink-0" /> hello@andhradosa.co</li>
              <li className="flex gap-2"><Clock className="w-4 h-4 mt-0.5 text-[#FF7A00] shrink-0" /> 7 AM – 11 PM · Daily</li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#FFC300] mb-4 font-semibold">
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
                <Link key={l.to} to={l.to} className="text-white/70 hover:text-[#FFC300] transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-white/50">
          <div>© {new Date().getFullYear()} Andhra Dosa Co. · All rights reserved.</div>
          <div className="font-display italic text-[#FFC300]/80">"రుచి. సంప్రదాయం. ఆంధ్ర."</div>
        </div>
      </div>
    </footer>
  );
}