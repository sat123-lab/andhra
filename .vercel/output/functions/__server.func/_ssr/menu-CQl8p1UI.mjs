import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { l as logoSvg, R as Reveal } from "./logo-Dh7d9n9L.mjs";
import { d as dosa1, p as pesarattu } from "./router-DrVBtwnC.mjs";
import { i as idliSambar, d as drumstickSambar } from "./drumstick-sambar-DaefIhT5.mjs";
import { a as dosa4, b as dosa5, d as dosa2 } from "./dosa-4-CIU5XWa_.mjs";
import { L as Leaf, i as Sparkles, j as Star, e as Coffee, S as Search } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/radix-ui__react-dialog.mjs";
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
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const plainDosa = "/assets/dosa-4-D7arSTO8.jpg";
const masalaDosa = "/assets/dosa-5-CsJ7ooeo.jpg";
const meduVada = "/assets/dosa-6-D0LeYsMs.jpg";
const uttappam = "/assets/dosa-4-D7arSTO8.jpg";
const lemonRice = "/assets/upma-BlSfONKC.jpg";
const curdRice = "/assets/curd-rice-pX6crTeX.jpg";
const upma = "/assets/upma-BlSfONKC.jpg";
const gheeButter = "/assets/dosa-3-Cqg2WhYG.jpg";
const cheese = "/assets/cheese-XvqtcHc5.jpg";
const filterCoffee = "/assets/ginger-tea-ybQ46yxW.jpg";
const gingerTea = "/assets/ginger-tea-ybQ46yxW.jpg";
const lassi = "/assets/chaas-BZ4vRh7s.jpg";
const chaas = "/assets/chaas-BZ4vRh7s.jpg";
const milkshake = "/assets/smoothie-jviz_WFI.jpg";
const fruitJuice = "/assets/smoothie-jviz_WFI.jpg";
const smoothie = "/assets/smoothie-jviz_WFI.jpg";
const icedTea = "/assets/chaas-BZ4vRh7s.jpg";
const dosa3 = "/assets/dosa-3-Cqg2WhYG.jpg";
const dosa6 = "/assets/dosa-6-D0LeYsMs.jpg";
const heroDosa = "/assets/hero-dosa-Ccd2rz3h.jpg";
function getMenuItemImage(name, category) {
  const n = name.toLowerCase();
  if (n.includes("pesarattu")) return pesarattu;
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
    if (n.includes("filter coffee") || n.includes("coffee") && !n.includes("cold") && !n.includes("iced")) return filterCoffee;
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
const gal2 = "/assets/upma-BlSfONKC.jpg";
const gal4 = "/assets/gallery-4-DWp_nK4y.jpg";
const CATEGORIES = [{
  key: "DOSA & RICE",
  label: "DOSA & RICE",
  icon: Leaf
}, {
  key: "IDLI, UPMA & UTTAPPAM",
  label: "IDLI, UPMA & UTTAPPAM",
  icon: Sparkles
}, {
  key: "EXTRA",
  label: "EXTRA",
  icon: Star
}, {
  key: "BEVERAGES",
  label: "BEVERAGES",
  icon: Coffee
}, {
  key: "GO HEALTHY (FRESH FRUIT)",
  label: "GO HEALTHY (FRESH FRUIT)",
  icon: Search
}];
const MENU_ITEMS = [{
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Plain Dosa",
  price: "Market Price",
  desc: "Premium stone-ground batter.",
  img: dosa4,
  veg: true,
  spice: 1
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Masala Dosa",
  price: "Market Price",
  desc: "Spiced potato filling.",
  img: dosa5,
  veg: true,
  spice: 2
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Benne Plain Dosa",
  price: "Market Price",
  desc: "Buttery crisp plain dosa.",
  img: dosa2,
  veg: true,
  spice: 1
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Benne Masala Dosa",
  price: "Market Price",
  desc: "Benne finish with potato masala.",
  img: dosa1,
  veg: true,
  spice: 2
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Benne Paneer Dosa",
  price: "Market Price",
  desc: "Paneer-stuffed buttery dosa.",
  img: dosa1,
  veg: true,
  spice: 2
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Ghee Podi Plain Dosa",
  price: "Market Price",
  desc: "Ghee and podi kissed dosa.",
  img: dosa3,
  veg: true,
  spice: 2
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Ghee Podi Masala Dosa",
  price: "Market Price",
  desc: "Masala dosa with ghee podi.",
  img: dosa3,
  veg: true,
  spice: 3
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Ghee Podi Paneer Dosa",
  price: "Market Price",
  desc: "Paneer loaded with ghee podi.",
  img: dosa3,
  veg: true,
  spice: 3
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Ghee Mysore Plain Dosa",
  price: "Market Price",
  desc: "Plain dosa with Mysore chutney.",
  img: dosa4,
  veg: true,
  spice: 2
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Ghee Mysore Masala Dosa",
  price: "Market Price",
  desc: "Mysore dosa stuffed with masala.",
  img: dosa4,
  veg: true,
  spice: 3
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Ghee Karam Dosa",
  price: "Market Price",
  desc: "Andhra karam with ghee finish.",
  img: dosa2,
  veg: true,
  spice: 4
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Ghee Karam Masala Dosa",
  price: "Market Price",
  desc: "Karam dosa with spiced potato.",
  img: dosa2,
  veg: true,
  spice: 4
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Ghee Karam Paneer Dosa",
  price: "Market Price",
  desc: "Paneer filling with ghee karam.",
  img: dosa2,
  veg: true,
  spice: 4
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Ghee Rava Plain Dosa",
  price: "Market Price",
  desc: "Crisp rava dosa with ghee.",
  img: dosa6,
  veg: true,
  spice: 2
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Ghee Rava Masala Dosa",
  price: "Market Price",
  desc: "Rava dosa with potato masala.",
  img: dosa6,
  veg: true,
  spice: 3
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Pesarattu Dosa",
  price: "Market Price",
  desc: "Green moong dosa, ginger chutney.",
  img: idliSambar,
  veg: true,
  spice: 2
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Pesarattu Upma Dosa",
  price: "Market Price",
  desc: "Pesarattu with rava upma.",
  img: idliSambar,
  veg: true,
  spice: 2
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Benne Podi Plain Dosa",
  price: "Market Price",
  desc: "Butter dosa with podi.",
  img: dosa3,
  veg: true,
  spice: 2
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Benne Podi Masala Dosa",
  price: "Market Price",
  desc: "Masala dosa with benne podi.",
  img: dosa3,
  veg: true,
  spice: 3
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Lemon Rice",
  price: "Market Price",
  desc: "Zesty rice with curry leaves.",
  img: gal2,
  veg: true,
  spice: 1
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Tomato Rice",
  price: "Market Price",
  desc: "Tangy tomato-seasoned rice.",
  img: gal2,
  veg: true,
  spice: 1
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Tamarind Rice",
  price: "Market Price",
  desc: "Classic pulihora rice.",
  img: gal2,
  veg: true,
  spice: 1
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Sambhar Rice",
  price: "Market Price",
  desc: "Rice soaked in drumstick sambhar.",
  img: drumstickSambar,
  veg: true,
  spice: 2
}, {
  category: "DOSA & RICE",
  categoryLabel: "Dosa & Rice",
  name: "Curd Rice",
  price: "Market Price",
  desc: "Cool curd with seasoning.",
  img: gal4,
  veg: true,
  spice: 1
}, {
  category: "IDLI, UPMA & UTTAPPAM",
  categoryLabel: "Idli, Upma & Uttappam",
  name: "Steam Idli",
  price: "Market Price",
  desc: "Soft steamed idlis.",
  img: idliSambar,
  veg: true,
  spice: 1
}, {
  category: "IDLI, UPMA & UTTAPPAM",
  categoryLabel: "Idli, Upma & Uttappam",
  name: "Idli 1pcs & Vada 1pcs",
  price: "Market Price",
  desc: "Classic idli and medu vada.",
  img: idliSambar,
  veg: true,
  spice: 1
}, {
  category: "IDLI, UPMA & UTTAPPAM",
  categoryLabel: "Idli, Upma & Uttappam",
  name: "Butter Idli",
  price: "Market Price",
  desc: "Idli tossed in butter.",
  img: idliSambar,
  veg: true,
  spice: 1
}, {
  category: "IDLI, UPMA & UTTAPPAM",
  categoryLabel: "Idli, Upma & Uttappam",
  name: "Ghee Idli",
  price: "Market Price",
  desc: "Ghee-soaked idli.",
  img: idliSambar,
  veg: true,
  spice: 1
}, {
  category: "IDLI, UPMA & UTTAPPAM",
  categoryLabel: "Idli, Upma & Uttappam",
  name: "Ghee Podi Idli",
  price: "Market Price",
  desc: "Idli with ghee podi.",
  img: idliSambar,
  veg: true,
  spice: 2
}, {
  category: "IDLI, UPMA & UTTAPPAM",
  categoryLabel: "Idli, Upma & Uttappam",
  name: "Ghee Karam Idli",
  price: "Market Price",
  desc: "Karam podi idli in ghee.",
  img: idliSambar,
  veg: true,
  spice: 3
}, {
  category: "IDLI, UPMA & UTTAPPAM",
  categoryLabel: "Idli, Upma & Uttappam",
  name: "Medu Vada",
  price: "Market Price",
  desc: "Crisp medu vada.",
  img: dosa6,
  veg: true,
  spice: 2
}, {
  category: "IDLI, UPMA & UTTAPPAM",
  categoryLabel: "Idli, Upma & Uttappam",
  name: "Ghee Onion Uttappam",
  price: "Market Price",
  desc: "Uttappam with ghee and onion.",
  img: dosa4,
  veg: true,
  spice: 2
}, {
  category: "IDLI, UPMA & UTTAPPAM",
  categoryLabel: "Idli, Upma & UTTAPPAM",
  name: "Ghee Tomato Uttappam",
  price: "Market Price",
  desc: "Tomato uttappam with ghee.",
  img: dosa4,
  veg: true,
  spice: 2
}, {
  category: "IDLI, UPMA & UTTAPPAM",
  categoryLabel: "Idli, Upma & UTTAPPAM",
  name: "Ghee Podi Uttappam",
  price: "Market Price",
  desc: "Uttappam with ghee podi.",
  img: dosa4,
  veg: true,
  spice: 2
}, {
  category: "IDLI, UPMA & UTTAPPAM",
  categoryLabel: "Idli, Upma & UTTAPPAM",
  name: "Ghee Karam Uttappam",
  price: "Market Price",
  desc: "Spicy karam uttappam.",
  img: dosa4,
  veg: true,
  spice: 3
}, {
  category: "IDLI, UPMA & UTTAPPAM",
  categoryLabel: "Idli, Upma & UTTAPPAM",
  name: "Plain Upma",
  price: "Market Price",
  desc: "Classic rava upma.",
  img: gal2,
  veg: true,
  spice: 1
}, {
  category: "IDLI, UPMA & UTTAPPAM",
  categoryLabel: "Idli, Upma & UTTAPPAM",
  name: "Ghee Upma",
  price: "Market Price",
  desc: "Upma finished with ghee.",
  img: gal2,
  veg: true,
  spice: 2
}, {
  category: "IDLI, UPMA & UTTAPPAM",
  categoryLabel: "Idli, Upma & UTTAPPAM",
  name: "Ghee Podi Upma",
  price: "Market Price",
  desc: "Upma tossed in ghee podi.",
  img: gal2,
  veg: true,
  spice: 2
}, {
  category: "EXTRA",
  categoryLabel: "Extra",
  name: "Butter",
  price: "Market Price",
  desc: "Creamy butter addition.",
  img: dosa3,
  veg: true,
  spice: 0
}, {
  category: "EXTRA",
  categoryLabel: "Extra",
  name: "Ghee",
  price: "Market Price",
  desc: "Aromatic ghee addition.",
  img: dosa3,
  veg: true,
  spice: 0
}, {
  category: "EXTRA",
  categoryLabel: "Extra",
  name: "Cheese",
  price: "Market Price",
  desc: "Melted cheese topping.",
  img: dosa3,
  veg: true,
  spice: 0
}, {
  category: "BEVERAGES",
  categoryLabel: "Beverages",
  name: "Authentic Ginger Tea (Adrak Chai)",
  price: "Market Price",
  desc: "Spiced ginger tea.",
  img: dosa5,
  veg: true,
  spice: 0
}, {
  category: "BEVERAGES",
  categoryLabel: "Beverages",
  name: "Green Tea / Kahwa",
  price: "Market Price",
  desc: "Light green tea or kahwa.",
  img: dosa5,
  veg: true,
  spice: 0
}, {
  category: "BEVERAGES",
  categoryLabel: "Beverages",
  name: "Filter Coffee",
  price: "Market Price",
  desc: "Strong South Indian filter coffee.",
  img: dosa5,
  veg: true,
  spice: 0
}, {
  category: "BEVERAGES",
  categoryLabel: "Beverages",
  name: "Hot Chocolate",
  price: "Market Price",
  desc: "Rich cocoa drink.",
  img: dosa5,
  veg: true,
  spice: 0
}, {
  category: "BEVERAGES",
  categoryLabel: "Beverages",
  name: "Peach / Lemon Ice Tea",
  price: "Market Price",
  desc: "Chilled iced tea.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "BEVERAGES",
  categoryLabel: "Beverages",
  name: "Classic Iced Cold Coffee",
  price: "Market Price",
  desc: "Iced coffee classic.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "BEVERAGES",
  categoryLabel: "Beverages",
  name: "Flavoured Cold Coffee",
  price: "Market Price",
  desc: "Cold coffee with flavor.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "BEVERAGES",
  categoryLabel: "Beverages",
  name: "Fresh Lime Water / Soda",
  price: "Market Price",
  desc: "Lime water or soda.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "BEVERAGES",
  categoryLabel: "Beverages",
  name: "Flavoured Soda",
  price: "Market Price",
  desc: "Seasonal soda flavors.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "BEVERAGES",
  categoryLabel: "Beverages",
  name: "Fresh Lassi / Flavoured Lassi",
  price: "Market Price",
  desc: "Creamy plain or flavored lassi.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "BEVERAGES",
  categoryLabel: "Beverages",
  name: "Masala Chaas",
  price: "Market Price",
  desc: "Spiced buttermilk.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "BEVERAGES",
  categoryLabel: "Beverages",
  name: "Chocolate Milkshake",
  price: "Market Price",
  desc: "Thick chocolate shake.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "BEVERAGES",
  categoryLabel: "Beverages",
  name: "Mango Pulp Base Milkshake / Smoothie",
  price: "Market Price",
  desc: "Mango pulp shake.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "BEVERAGES",
  categoryLabel: "Beverages",
  name: "Lychee Pulp Base Milkshake / Smoothie",
  price: "Market Price",
  desc: "Lychee pulp smoothie.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "BEVERAGES",
  categoryLabel: "Beverages",
  name: "Strawberry Pulp Base Milkshake / Smoothie",
  price: "Market Price",
  desc: "Strawberry pulp smoothie.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "GO HEALTHY (FRESH FRUIT)",
  categoryLabel: "Go Healthy",
  name: "Watermelon Juice",
  price: "Market Price",
  desc: "Fresh watermelon juice.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "GO HEALTHY (FRESH FRUIT)",
  categoryLabel: "Go Healthy",
  name: "Sweetlime Juice",
  price: "Market Price",
  desc: "Sweet lime refreshment.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "GO HEALTHY (FRESH FRUIT)",
  categoryLabel: "Go Healthy",
  name: "Orange Juice",
  price: "Market Price",
  desc: "Fresh-squeezed orange juice.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "GO HEALTHY (FRESH FRUIT)",
  categoryLabel: "Go Healthy",
  name: "Pineapple Juice",
  price: "Market Price",
  desc: "Tropical pineapple juice.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "GO HEALTHY (FRESH FRUIT)",
  categoryLabel: "Go Healthy",
  name: "Papaya Milkshake / Smoothie",
  price: "Market Price",
  desc: "Creamy papaya smoothie.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "GO HEALTHY (FRESH FRUIT)",
  categoryLabel: "Go Healthy",
  name: "Muskmelon Milkshake / Smoothie",
  price: "Market Price",
  desc: "Muskmelon milkshake.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "GO HEALTHY (FRESH FRUIT)",
  categoryLabel: "Go Healthy",
  name: "Mango Milkshake / Smoothie",
  price: "Market Price",
  desc: "Mango fruit smoothie.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "GO HEALTHY (FRESH FRUIT)",
  categoryLabel: "Go Healthy",
  name: "Strawberry Milkshake / Smoothie",
  price: "Market Price",
  desc: "Strawberry fruit smoothie.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "GO HEALTHY (FRESH FRUIT)",
  categoryLabel: "Go Healthy",
  name: "Banana Milkshake / Smoothie",
  price: "Market Price",
  desc: "Banana fruit smoothie.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "GO HEALTHY (FRESH FRUIT)",
  categoryLabel: "Go Healthy",
  name: "Dates Milkshake",
  price: "Market Price",
  desc: "Dates blended shake.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "GO HEALTHY (FRESH FRUIT)",
  categoryLabel: "Go Healthy",
  name: "Skip The Diet Shake",
  price: "Market Price",
  desc: "Rich indulgent shake.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "GO HEALTHY (FRESH FRUIT)",
  categoryLabel: "Go Healthy",
  name: "Carrot Milk Shake",
  price: "Market Price",
  desc: "Carrot milk shake.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "GO HEALTHY (FRESH FRUIT)",
  categoryLabel: "Go Healthy",
  name: "Choco Strawberry Milk Shake",
  price: "Market Price",
  desc: "Chocolate strawberry shake.",
  img: gal4,
  veg: true,
  spice: 0
}, {
  category: "GO HEALTHY (FRESH FRUIT)",
  categoryLabel: "Go Healthy",
  name: "Strawberry Banana Milk Shake",
  price: "Market Price",
  desc: "Strawberry banana shake.",
  img: gal4,
  veg: true,
  spice: 0
}];
function MenuPage() {
  const [loading, setLoading] = reactExports.useState(true);
  const [activeCategory, setActiveCategory] = reactExports.useState(CATEGORIES[0].key);
  const [query, setQuery] = reactExports.useState("");
  reactExports.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);
  const filteredItems = reactExports.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return MENU_ITEMS.filter((item) => item.category === activeCategory).filter((item) => normalizedQuery ? item.name.toLowerCase().includes(normalizedQuery) || item.desc.toLowerCase().includes(normalizedQuery) : true);
  }, [activeCategory, query]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-[#F8F3E8]/80 backdrop-blur-md flex items-center justify-center transition-opacity duration-700 ease-out", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-primary/15 ring-1 ring-primary/30 p-2 flex items-center justify-center animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoSvg, alt: "Andhra Dosa Co.", className: "w-full h-full object-contain" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary font-display font-black text-xl sm:text-2xl tracking-wider animate-pulse", children: "Andhra Dosa Co." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-44 sm:pt-40 pb-16 bg-[#FAF6EE] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(253,223,160,0.18),transparent_40%)] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.35em] text-[#C9A227] font-bold mb-3", children: "Premium Menu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-tight text-[#1B3022]", children: [
          "Coastal Andhra classics,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#E9C46A]", children: "elevated for every table." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base sm:text-lg text-[#2F2F2F] font-medium", children: "Explore authentic dosas, rice bowls, uttappams, fresh fruit beverages and indulgent extras curated for a refined Andhra dining experience." })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky-below-header bg-[#FFF8EF] border-b border-[#2F2F2F]/8 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: CATEGORIES.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setActiveCategory(category.key), className: `rounded-full px-4 py-2 text-sm font-semibold transition ${activeCategory === category.key ? "bg-secondary text-white" : "bg-[#FAF6EE] text-[#2F2F2F] hover:text-[#2F2F2F]"}`, children: category.label }, category.key)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-full bg-[#FAF6EE] px-4 py-2 w-full sm:w-72", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 text-[#5F5F5F]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search dish...", className: "bg-transparent text-sm focus:outline-none w-full" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-[#B35C38] font-bold", children: "Now serving" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display font-black text-3xl sm:text-4xl text-[#1B3022]", children: activeCategory })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-full bg-[#FAF6EE] px-4 py-3 text-sm text-[#2F2F2F] font-medium", children: [
          filteredItems.length,
          " premium dishes available"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: filteredItems.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: index * 60, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group overflow-hidden rounded-[2rem] border border-[#2F2F2F]/10 bg-white shadow-[0_20px_60px_rgba(26,15,8,0.05)] transition-all duration-500 hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 overflow-hidden bg-[#FAF6EE]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: getMenuItemImage(item.name, item.category), alt: item.name, loading: "lazy", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#1B3022]/25 via-transparent to-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-black text-xl text-[#1B3022]", children: item.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-[#2F2F2F] font-medium", children: item.desc })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-lg text-[#B35C38]", children: item.price })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[#2F2F2F] font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.categoryLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.veg ? "Veg" : "Non-Veg" })
          ] })
        ] })
      ] }) }, item.name)) }),
      filteredItems.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 rounded-[2rem] border border-dashed border-[#1a0f08]/20 bg-[#FAF6EE] p-16 text-center text-[#5F5F5F]", children: "No items match this search. Try another keyword or choose a different category." })
    ] }) })
  ] });
}
export {
  MenuPage as component
};
