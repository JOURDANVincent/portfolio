import { c as create_ssr_component, a as add_attribute, b as subscribe, v as validate_component, e as escape, d as each, n as null_to_empty } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { G as Github_svg, L as Linkedin_svg } from "../../chunks/linkedin.svg.js";
import { b as base } from "../../chunks/paths.js";
const reactiveMeta = writable({
  pathname: "",
  title: "",
  desc: "",
  image: ""
});
const SITE_NAME = "Vincent JOURDAN | Développeur Applications Web & Mobile - Porte-Folio";
const META_DATA = [
  {
    pathname: "/",
    title: "Vincent JOURDAN - Développeur App Web & Mobile | CV - Porte-Folio",
    desc: "Je m'appelle Vincent JOURDAN. Je développe des sites web et des applications mobiles React Native personnels depuis maintenant 2 ans. Je suis actuellemnt développeur chez CGI Amiens, Haut-De-France",
    image: "vincent-jourdan_home.png"
  },
  {
    pathname: "/about",
    title: "Vincent JOURDAN | A propos",
    desc: "Rapide description de mon parcours et mes projets réalisés",
    image: "vincent-jourdan_about.png"
  },
  {
    pathname: "/skill",
    title: "Vincent JOURDAN | Mes Compétences de développeur",
    desc: "Rapide description de mes compétences",
    image: "vincent-jourdan_about.png"
  },
  {
    pathname: "/experience",
    title: "Vincent JOURDAN | Mes Expériences de développeur",
    desc: "Rapide description de mon parcours professionnel",
    image: "vincent-jourdan_about.png"
  },
  {
    pathname: "/project",
    title: "Vincent JOURDAN | Mes Réalisations Web & Mobile",
    desc: "Présentation de mes différents projets: Les sites réalisés en formation et mes applications personnelles React Native",
    image: "vincent-jourdan_about.png"
  },
  {
    pathname: "/contact",
    title: "Vincent JOURDAN | Contact",
    desc: "Formulaire pour me contacter",
    image: "vincent-jourdan_about.png"
  }
  // {   
  //     pathname: "/contact_old",
  //     title: "Vincent JOURDAN | Contact",
  //     desc: "Formulaire pour me contacter",
  //     image: "vincent-jourdan_about.png",
  // },
];
const Tag_svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#e02424" } = $$props;
  let { size = 20 } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"${add_attribute("height", size, 0)}${add_attribute("width", size, 0)}${add_attribute("fill", color, 0)}><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path></svg>`;
});
const About_svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#aaa" } = $$props;
  let { size = 20 } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330"${add_attribute("height", size, 0)}${add_attribute("width", size, 0)}${add_attribute("fill", color, 0)}><g><path d="M165,0.008C74.019,0.008,0,74.024,0,164.999c0,90.977,74.019,164.992,165,164.992s165-74.015,165-164.992
            C330,74.024,255.981,0.008,165,0.008z M165,299.992c-74.439,0-135-60.557-135-134.992S90.561,30.008,165,30.008
            s135,60.557,135,134.991C300,239.436,239.439,299.992,165,299.992z"></path><path d="M165,130.008c-8.284,0-15,6.716-15,15v99.983c0,8.284,6.716,15,15,15s15-6.716,15-15v-99.983
            C180,136.725,173.284,130.008,165,130.008z"></path><path d="M165,70.011c-3.95,0-7.811,1.6-10.61,4.39c-2.79,2.79-4.39,6.66-4.39,10.61s1.6,7.81,4.39,10.61
            c2.79,2.79,6.66,4.39,10.61,4.39s7.81-1.6,10.609-4.39c2.79-2.8,4.391-6.66,4.391-10.61s-1.601-7.82-4.391-10.61
            C172.81,71.61,168.95,70.011,165,70.011z"></path></g></svg>`;
});
const Computer_svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#e02424" } = $$props;
  let { size = 20 } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256"${add_attribute("height", size, 0)}${add_attribute("width", size, 0)}${add_attribute("fill", color, 0)} xml:space="preserve"><path d="M241.2,26H15.6c-7.1,0-13,5.9-13,13v149.4c0,7.1,5.9,13,13,13h81.6v21.8H76.4c-3.6,0-6.6,3-6.6,6.6v0.9c0,3.6,3,6.6,6.6,6.6
	h104.1c3.6,0,6.6-3,6.6-6.6v-0.9c0-3.6-3-6.6-6.6-6.6h-20.8v-21.8h81.6c7.1,0,13-5.9,13-13V39C254.2,31.8,248.3,26,241.2,26z
	 M120.9,186c0-4.2,3.4-7.5,7.5-7.5c4.2,0,7.5,3.4,7.5,7.5c0,4.2-3.4,7.5-7.5,7.5C124.2,193.7,120.9,190.3,120.9,186z M238.3,172.7
	H19.2V42.2h219.1V172.7z"></path></svg>`;
});
const Experience_svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#aaa" } = $$props;
  let { size = 20 } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 488.898 488.898" style="enable-background:new 0 0 488.898 488.898;" xml:space="preserve"${add_attribute("height", size, 0)}${add_attribute("width", size, 0)}${add_attribute("fill", color, 0)}><g><path d="M487.247,218.699c-17.9-168.2-171.6-228.2-269.4-217.5c-72.9,8-137.3,47.9-177.9,109.2c-6.2,9.4-4.2,21.8,5.2,28.1
            s21.8,3.1,28.1-6.2c34.3-51,88.4-84.3,148.8-90.5c103.6-10.7,203.6,52.4,224.7,181c15.5,94.4-58.6,212.6-181,224.7
            c-74.6,7.4-147.3-25.9-189.4-86.5l38.5,8.5c10.4,2.1,21.8-4.2,23.9-15.6c2.1-10.4-4.2-21.8-15.6-23.9l-81.1-17.7
            c-5.2-1-22-0.4-25,15.6l-16.6,82.2c-2.1,10.4,4.2,21.8,15.6,23.9c13,1.1,21.8-6.2,23.9-16.6l6.2-28.2
            c79.5,111.3,215.3,99.8,223.7,99C400.047,475.399,503.047,366.099,487.247,218.699z"></path><path d="M260.447,129.199c-11.4,0-20.8,9.4-20.8,20.8v94.7c0,5.2,2.1,10.4,6.2,14.6l94.7,94.7c12.2,11.6,25,4.2,30.2,1
            c8.3-8.3,8.3-20.8,0-29.1l-89.5-89.5v-86.3C281.347,138.599,271.947,129.199,260.447,129.199z"></path></g></svg>`;
});
const Skill_svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#aaa" } = $$props;
  let { size = 20 } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg id="Layer_1" viewBox="0 0 480 480"${add_attribute("height", size, 0)}${add_attribute("width", size, 0)}${add_attribute("fill", color, 0)} xmlns="http://www.w3.org/2000/svg"><path d="m469.021 179.944a31.865 31.865 0 0 0 -8.792 1.239l-142.542-123.773a37.455 37.455 0 0 0 -73.545-7.41h-132.578a41.913 41.913 0 1 0 -54.174 61.312l-26.381 304.893a39.275 39.275 0 1 0 55.714 48.87l217.349-56.109a47.189 47.189 0 0 0 80.228-48.535l87.313-116.642a31.975 31.975 0 0 0 -2.588-63.845zm-152.568-110.362 133.983 116.342a32.009 32.009 0 0 0 -13 21.009l-109.607.218a29.123 29.123 0 0 0 -24.05-23.685l-8.84-89.22a37.628 37.628 0 0 0 21.514-24.664zm-73.603-9.582a37.389 37.389 0 0 0 42.3 36.9l8.593 86.729a28.914 28.914 0 0 0 -11.743 5.14l-164.772-127.992c-.092-.259-.181-.52-.277-.777zm-123.278 15.261 155.483 120.775a29.02 29.02 0 0 0 -3.957 23.469l-87.616 19.849a27.564 27.564 0 0 0 -33.157-12.815l-51.206-115.912a41.943 41.943 0 0 0 20.453-35.366zm-69.286 335.869a39.226 39.226 0 0 0 -8.889 1.027l25.694-296.957a41.977 41.977 0 0 0 22.9-.5l51.595 116.792a27.553 27.553 0 0 0 .91 43l-77.475 139.516a39.076 39.076 0 0 0 -14.735-2.878zm243.845-31.065a46.919 46.919 0 0 0 4.443 19.968l-209.174 54.023c.111-1.2.175-2.412.175-3.64a39.252 39.252 0 0 0 -15.837-31.5l77.657-139.849a27.521 27.521 0 0 0 26.661-6.216l126.854 77.214a47.013 47.013 0 0 0 -10.779 30zm18.182-37.2-128.255-78.065a27.418 27.418 0 0 0 2.842-12.17 27.754 27.754 0 0 0 -.26-3.737l88.96-19.848a28.95 28.95 0 0 0 28.933 11.674l31.843 92.381a46.981 46.981 0 0 0 -24.063 9.765zm66.4 8.344a47.236 47.236 0 0 0 -31.541-18.009l-33.272-95.987a29.124 29.124 0 0 0 13.926-20.061l109.607-.219a32.068 32.068 0 0 0 22.57 25.667z"></path><path d="m80.919 190.226a4.991 4.991 0 0 0 -5.368 4.6l-.5 6.544a5 5 0 0 0 4.6 5.368c.131.01.26.015.389.015a5 5 0 0 0 4.98-4.617l.5-6.544a5 5 0 0 0 -4.601-5.366z"></path><path d="m78.705 220.689a5 5 0 0 0 -5.482 4.467l-8.113 79.574a5 5 0 0 0 4.467 5.482c.173.017.344.026.513.026a5 5 0 0 0 4.969-4.493l8.112-79.575a5 5 0 0 0 -4.466-5.481z"></path></svg>`;
});
const Contact_svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#e02424" } = $$props;
  let { size = 20 } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" viewBox="0 0 512 512"${add_attribute("height", size, 0)}${add_attribute("width", size, 0)}${add_attribute("fill", color, 0)}><g><path class="st0" d="M510.678,112.275c-2.308-11.626-7.463-22.265-14.662-31.054c-1.518-1.915-3.104-3.63-4.823-5.345   c-12.755-12.818-30.657-20.814-50.214-20.814H71.021c-19.557,0-37.395,7.996-50.21,20.814c-1.715,1.715-3.301,3.43-4.823,5.345   C8.785,90.009,3.63,100.649,1.386,112.275C0.464,116.762,0,121.399,0,126.087V385.92c0,9.968,2.114,19.55,5.884,28.203   c3.497,8.26,8.653,15.734,14.926,22.001c1.59,1.586,3.169,3.044,4.892,4.494c12.286,10.175,28.145,16.32,45.319,16.32h369.958   c17.18,0,33.108-6.145,45.323-16.384c1.718-1.386,3.305-2.844,4.891-4.43c6.27-6.267,11.425-13.741,14.994-22.001v-0.064   c3.769-8.653,5.812-18.171,5.812-28.138V126.087C512,121.399,511.543,116.762,510.678,112.275z M46.509,101.571   c6.345-6.338,14.866-10.175,24.512-10.175h369.958c9.646,0,18.242,3.837,24.512,10.175c1.122,1.129,2.179,2.387,3.112,3.637   L274.696,274.203c-5.348,4.687-11.954,7.002-18.696,7.002c-6.674,0-13.276-2.315-18.695-7.002L43.472,105.136   C44.33,103.886,45.387,102.7,46.509,101.571z M36.334,385.92V142.735L176.658,265.15L36.405,387.435   C36.334,386.971,36.334,386.449,36.334,385.92z M440.979,420.597H71.021c-6.281,0-12.158-1.651-17.174-4.552l147.978-128.959   l13.815,12.018c11.561,10.046,26.028,15.134,40.36,15.134c14.406,0,28.872-5.088,40.432-15.134l13.808-12.018l147.92,128.959   C453.137,418.946,447.26,420.597,440.979,420.597z M475.666,385.92c0,0.529,0,1.051-0.068,1.515L335.346,265.221L475.666,142.8   V385.92z"></path></g></svg>`;
});
const Single_navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".menu-button.svelte-9hlpyy.svelte-9hlpyy{position:fixed;z-index:998;right:12px;top:24px;background-color:transparent !important;border:none !important;outline:none !important;transition:0.5s}nav.svelte-9hlpyy.svelte-9hlpyy{z-index:999;box-sizing:border-box;width:100%;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;justify-content:space-between;transition:0.5s}.hero.svelte-9hlpyy.svelte-9hlpyy{padding-left:16px;margin-top:12px;box-sizing:border-box;transition:0.5s}.hero.svelte-9hlpyy h1.svelte-9hlpyy,.hero.svelte-9hlpyy h2.svelte-9hlpyy{margin:0;padding:0}.hero.svelte-9hlpyy h1.svelte-9hlpyy{font-size:1.66rem}.hero.svelte-9hlpyy h2.svelte-9hlpyy{font-size:0.7rem;font-weight:normal}.menu-list.svelte-9hlpyy.svelte-9hlpyy{width:100%;max-width:800px;box-sizing:border-box;padding-inline:16px;margin-inline:auto;display:flex;flex-direction:column}.menu-item.svelte-9hlpyy.svelte-9hlpyy{display:flex;flex-direction:row;align-items:center;text-decoration:none;padding:6px;padding-top:10px;box-sizing:border-box;border-bottom:1px solid #fff2;transition:0.5s}.menu-item.svelte-9hlpyy.svelte-9hlpyy:last-of-type{border-bottom:1px solid transparent}.menu-item.svelte-9hlpyy.svelte-9hlpyy:hover{background-color:#fff2}.active.svelte-9hlpyy.svelte-9hlpyy{background-color:#fff2;padding-left:16px;border-bottom:1px solid transparent;transition:0.5s}.icon.svelte-9hlpyy.svelte-9hlpyy{padding-right:16px}.link.svelte-9hlpyy.svelte-9hlpyy{color:#eee;font-size:1.4rem;padding-bottom:5px}.footer.svelte-9hlpyy.svelte-9hlpyy{width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding-inline:16px;margin-bottom:8px;box-sizing:border-box}.footer.svelte-9hlpyy a.svelte-9hlpyy{height:100%;width:40px;padding-right:12px}.footer.svelte-9hlpyy>div.svelte-9hlpyy{font-weight:bold;font-size:1rem;color:#444}.svelte.svelte-9hlpyy.svelte-9hlpyy{font-weight:bold;color:#E14242}@media(min-width: 768px ){.menu-button.svelte-9hlpyy.svelte-9hlpyy{right:36px;top:36px}.hero.svelte-9hlpyy.svelte-9hlpyy{padding-left:50px;margin-top:36px}.hero.svelte-9hlpyy h1.svelte-9hlpyy{font-size:2.8rem}.hero.svelte-9hlpyy h2.svelte-9hlpyy{font-size:1.2rem}.menu-item.svelte-9hlpyy.svelte-9hlpyy{padding-left:24px}.link.svelte-9hlpyy.svelte-9hlpyy{font-size:2rem}.icon.svelte-9hlpyy.svelte-9hlpyy{padding-right:24px}.footer.svelte-9hlpyy.svelte-9hlpyy{padding-inline:50px;margin-bottom:24px}.footer.svelte-9hlpyy>div.svelte-9hlpyy{font-size:1.2rem}}@media(min-width: 1200px ){.link.svelte-9hlpyy.svelte-9hlpyy{font-size:2.2rem}}",
  map: null
};
const Single_navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let linkIconSize;
  let footerIconSize;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const allRoutes = [
    { name: "Accueil", link: "/" },
    { name: "A Propos de moi", link: "/about" },
    {
      name: "Réalisations Web & Mobile",
      link: "/project"
    },
    {
      name: "Expériences & Formations",
      link: "/experience"
    },
    // { name: 'Compétences & Connaissances', link: '/skill', },
    {
      name: "Languages & Frameworks",
      link: "/skill"
    },
    { name: "Contact", link: "/contact" }
  ];
  let x;
  if ($$props.allRoutes === void 0 && $$bindings.allRoutes && allRoutes !== void 0)
    $$bindings.allRoutes(allRoutes);
  $$result.css.add(css$1);
  linkIconSize = 24;
  footerIconSize = 16;
  $$unsubscribe_page();
  return ` <button class="menu-button svelte-9hlpyy" aria-label="ouvrir menu">${validate_component(Tag_svg, "TagSvg").$$render(
    $$result,
    {
      size: linkIconSize,
      color: "#e02424"
    },
    {},
    {}
  )}</button> <nav class="menu svelte-9hlpyy" style="${"width: " + escape(x, true) + "; height: " + escape("0", true) + "; z-index: " + escape("-1", true) + "; background-color: " + escape("#0000", true) + "; backdrop-filter: " + escape("blur(0px", true)}"><div class="hero svelte-9hlpyy" style="${"opacity: " + escape("0", true)}"><h1 class="svelte-9hlpyy" data-svelte-h="svelte-6amlxx"><strong>Vincent JOURDAN</strong></h1> <h2 class="svelte-9hlpyy" data-svelte-h="svelte-1j4h4wa"><strong>Développeur Applications Web &amp; Mobiles</strong></h2></div> <div class="menu-list svelte-9hlpyy" style="${"opacity: " + escape("0", true)}">${each(allRoutes, (single) => {
    return `<a${add_attribute("href", single.link, 0)} style="${"opacity: " + escape("0", true) + ";"}" class="${escape(
      null_to_empty($page.url.pathname == single.link ? "menu-item active" : "menu-item"),
      true
    ) + " svelte-9hlpyy"}"><span class="icon svelte-9hlpyy">${single.link === "/" ? `${validate_component(Tag_svg, "TagSvg").$$render($$result, { size: linkIconSize, color: "#E14242" }, {}, {})}` : `${single.link === "/about" ? `${validate_component(About_svg, "AboutSvg").$$render($$result, { size: linkIconSize, color: "#E14242" }, {}, {})}` : `${single.link === "/project" ? `${validate_component(Computer_svg, "ComputerSvg").$$render($$result, { size: linkIconSize, color: "#E14242" }, {}, {})}` : `${single.link === "/skill" ? `${validate_component(Skill_svg, "SkillSvg").$$render($$result, { size: linkIconSize, color: "#E14242" }, {}, {})}` : `${single.link === "/experience" ? `${validate_component(Experience_svg, "ExperienceSvg").$$render($$result, { size: linkIconSize, color: "#E14242" }, {}, {})}` : `${single.link === "/contact" ? `${validate_component(Contact_svg, "ContactSvg").$$render($$result, { size: linkIconSize, color: "#E14242" }, {}, {})}` : ``}`}`}`}`}`}</span> <span class="link svelte-9hlpyy">${escape(base + single.name)}</span> </a>`;
  })}</div> <div class="footer svelte-9hlpyy" style="${"opacity: " + escape("0", true)}"><div class="svelte-9hlpyy"><a href="https://github.com/JOURDANVincent" target="_blank" rel="noreferrer" class="svelte-9hlpyy">${validate_component(Github_svg, "GithubSvg").$$render($$result, { size: footerIconSize, color: "#777" }, {}, {})}</a> <a href="https://www.linkedin.com/in/VincentJourdan" target="_blank" rel="noreferrer" class="svelte-9hlpyy">${validate_component(Linkedin_svg, "LinkedinSvg").$$render($$result, { size: footerIconSize, color: "#777" }, {}, {})}</a> </div> <div class="svelte-9hlpyy" data-svelte-h="svelte-196f2cu">développé avec <span class="svelte svelte-9hlpyy">Svelte JS</span></div></div> </nav>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-up57xf{min-height:100vh;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:start;text-align:justify;box-sizing:border-box}@media(max-width: 767px){main.svelte-up57xf{padding-inline:12px;padding-top:24px;padding-bottom:8px}}@media(min-width: 768px){main.svelte-up57xf{padding-inline:4%}}@media(min-width: 992px){main.svelte-up57xf{padding-inline:5%}}@media(min-width: 1180px){main.svelte-up57xf{padding-inline:6%}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $reactiveMeta, $$unsubscribe_reactiveMeta;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_reactiveMeta = subscribe(reactiveMeta, (value) => $reactiveMeta = value);
  $$result.css.add(css);
  {
    {
      let newMeta = META_DATA.find((meta) => meta.pathname == $page.url.pathname);
      reactiveMeta.update((meta) => newMeta);
    }
  }
  $$unsubscribe_page();
  $$unsubscribe_reactiveMeta();
  return `${$$result.head += `<!-- HEAD_svelte-y0i3pt_START -->${$$result.title = `<title>${escape($reactiveMeta.title)}</title>`, ""}<link rel="canonical"${add_attribute("href", $page.url.href, 0)}><meta property="og:title"${add_attribute("content", $reactiveMeta.title, 0)}><meta property="og:url"${add_attribute("content", $page.url.href, 0)}><meta property="og:site_name"${add_attribute("content", SITE_NAME, 0)}><meta property="og:description"${add_attribute("content", $reactiveMeta.desc, 0)}><meta property="og:image"${add_attribute("content", `${$page.url.origin}/${$reactiveMeta.image}`, 0)}><meta property="twitter:site"${add_attribute("content", SITE_NAME, 0)}><meta property="twitter:title"${add_attribute("content", $reactiveMeta.title, 0)}><meta property="twitter:description"${add_attribute("content", $reactiveMeta.desc, 0)}><meta property="twitter:image"${add_attribute("content", `${$page.url.origin}/${$reactiveMeta.image}`, 0)}><!-- HEAD_svelte-y0i3pt_END -->`, ""} <div class="app"><main class="svelte-up57xf">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Single_navbar, "SingleNavbar").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Layout as default
};
