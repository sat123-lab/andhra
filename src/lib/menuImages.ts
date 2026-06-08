import plainDosa from "@/assets/menu/plain-dosa.jpg";
import masalaDosa from "@/assets/menu/masala-dosa.jpg";
import pesarattuHero from "@/assets/pesarattu-hero.jpg";
import idliSambar from "@/assets/idli-sambar.jpg";
import drumstickSambar from "@/assets/drumstick-sambar.jpg";
import meduVada from "@/assets/menu/medu-vada.jpg";
import uttappam from "@/assets/menu/uttappam.jpg";
import lemonRice from "@/assets/menu/lemon-rice.jpg";
import curdRice from "@/assets/menu/curd-rice.jpg";
import upma from "@/assets/menu/upma.jpg";
import gheeButter from "@/assets/menu/ghee-butter.jpg";
import cheese from "@/assets/menu/cheese.jpg";
import filterCoffee from "@/assets/menu/filter-coffee.jpg";
import gingerTea from "@/assets/menu/ginger-tea.jpg";
import lassi from "@/assets/menu/lassi.jpg";
import chaas from "@/assets/menu/chaas.jpg";
import milkshake from "@/assets/menu/milkshake.jpg";
import fruitJuice from "@/assets/menu/fruit-juice.jpg";
import smoothie from "@/assets/menu/smoothie.jpg";
import icedTea from "@/assets/menu/iced-tea.jpg";
import dosa1 from "@/assets/dosa-1.jpg";
import dosa2 from "@/assets/dosa-2.jpg";
import dosa3 from "@/assets/dosa-3.jpg";
import dosa4 from "@/assets/dosa-4.jpg";
import dosa5 from "@/assets/dosa-5.jpg";
import dosa6 from "@/assets/dosa-6.jpg";
import heroDosa from "@/assets/hero-dosa.jpg";

/** Returns the best matching food image for a menu item. */
export function getMenuItemImage(name: string, category: string): string {
  const n = name.toLowerCase();

  if (n.includes("pesarattu")) return pesarattuHero;
  if (n.includes("idli")) return idliSambar;
  if (n.includes("vada")) return meduVada;
  if (n.includes("uttappam")) return uttappam;
  if (n.includes("upma")) return upma;

  if (n.includes("sambhar") || n.includes("sambar")) return drumstickSambar;
  if (n.includes("lemon rice") || n.includes("tomato rice") || n.includes("tamarind rice")) return lemonRice;
  if (n.includes("curd rice")) return curdRice;

  if (category === "EXTRA") {
    if (n.includes("cheese")) return cheese;
    return gheeButter;
  }

  if (category === "BEVERAGES" || category === "GO HEALTHY (FRESH FRUIT)") {
    if (n.includes("filter coffee") || (n.includes("coffee") && !n.includes("cold") && !n.includes("iced"))) return filterCoffee;
    if (n.includes("cold coffee") || n.includes("iced")) return icedTea;
    if (n.includes("tea") || n.includes("chai") || n.includes("kahwa")) return gingerTea;
    if (n.includes("chaas")) return chaas;
    if (n.includes("lassi")) return lassi;
    if (n.includes("juice") && !n.includes("milkshake") && !n.includes("shake")) return fruitJuice;
    if (n.includes("milkshake") || n.includes("smoothie") || n.includes("shake")) return milkshake;
    if (n.includes("chocolate") || n.includes("mango") || n.includes("strawberry") || n.includes("banana")) return smoothie;
    if (n.includes("soda") || n.includes("lime") || n.includes("water")) return fruitJuice;
    return smoothie;
  }

  if (n.includes("rava")) return dosa6;
  if (n.includes("paneer")) return dosa1;
  if (n.includes("karam")) return dosa2;
  if (n.includes("mysore")) return dosa5;
  if (n.includes("podi")) return heroDosa;
  if (n.includes("benne")) return dosa2;
  if (n.includes("ghee") && n.includes("dosa")) return dosa3;
  if (n.includes("masala")) return masalaDosa;
  if (n.includes("plain")) return plainDosa;

  return plainDosa;
}
