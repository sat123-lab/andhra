import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const style = { transitionDelay: `${delay}ms` };
  const Component = Tag;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ref, className: `reveal ${className}`, style, children });
}
const logoSvg = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20200%20220'%20fill='none'%3e%3c!--%20Dark%20green%20background%20circle%20--%3e%3ccircle%20cx='100'%20cy='110'%20r='100'%20fill='%231a3a1a'/%3e%3c!--%20Leaf/petal%20shape%20outline%20—%20sharper%20pointed%20top%20--%3e%3cpath%20d='M100%2018%20C65%2050,%2038%2088,%2042%20128%20C46%20160,%2070%20178,%20100%20182%20C130%20178,%20154%20160,%20158%20128%20C162%2088,%20135%2050,%20100%2018Z'%20stroke='%23D4A017'%20stroke-width='5'%20fill='none'/%3e%3c!--%20Dosa%20(large%20crescent)%20--%3e%3cellipse%20cx='100'%20cy='108'%20rx='48'%20ry='26'%20fill='%23C8962E'/%3e%3cpath%20d='M52%20108%20A48%2026%200%200%201%20148%20108'%20fill='%23D4A017'/%3e%3c!--%20Dosa%20dots/texture%20--%3e%3ccircle%20cx='70'%20cy='100'%20r='1.8'%20fill='%238B6914'%20opacity='0.5'/%3e%3ccircle%20cx='82'%20cy='96'%20r='1.3'%20fill='%238B6914'%20opacity='0.5'/%3e%3ccircle%20cx='95'%20cy='94'%20r='1.8'%20fill='%238B6914'%20opacity='0.5'/%3e%3ccircle%20cx='108'%20cy='95'%20r='1.3'%20fill='%238B6914'%20opacity='0.5'/%3e%3ccircle%20cx='120'%20cy='97'%20r='1.8'%20fill='%238B6914'%20opacity='0.5'/%3e%3ccircle%20cx='132'%20cy='100'%20r='1.3'%20fill='%238B6914'%20opacity='0.5'/%3e%3ccircle%20cx='88'%20cy='102'%20r='1'%20fill='%238B6914'%20opacity='0.4'/%3e%3ccircle%20cx='112'%20cy='102'%20r='1'%20fill='%238B6914'%20opacity='0.4'/%3e%3c!--%20Left%20chutney%20bowl%20(red/tomato)%20--%3e%3ccircle%20cx='78'%20cy='142'%20r='16'%20fill='%236B8E3A'%20stroke='%234A6B2A'%20stroke-width='2.5'/%3e%3ccircle%20cx='78'%20cy='142'%20r='11.5'%20fill='%238B2500'/%3e%3cpath%20d='M74%20139%20C75%20137%2078%20137%2080%20140'%20fill='%232E7D32'%20opacity='0.8'/%3e%3c!--%20Right%20chutney%20bowl%20(white/coconut)%20--%3e%3ccircle%20cx='122'%20cy='142'%20r='16'%20fill='%236B8E3A'%20stroke='%234A6B2A'%20stroke-width='2.5'/%3e%3ccircle%20cx='122'%20cy='142'%20r='11.5'%20fill='%23F5F5DC'/%3e%3ccircle%20cx='118'%20cy='140'%20r='1.2'%20fill='%232C1810'%20opacity='0.6'/%3e%3ccircle%20cx='124'%20cy='143'%20r='1.2'%20fill='%232C1810'%20opacity='0.6'/%3e%3ccircle%20cx='120'%20cy='146'%20r='1'%20fill='%232C1810'%20opacity='0.5'/%3e%3ccircle%20cx='126'%20cy='139'%20r='0.8'%20fill='%232C1810'%20opacity='0.4'/%3e%3c!--%20Small%20V/chevron%20between%20bowls%20--%3e%3cpath%20d='M96%20137%20L100%20144%20L104%20137'%20stroke='%23D4A017'%20stroke-width='2.5'%20fill='none'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
export {
  Reveal as R,
  logoSvg as l
};
