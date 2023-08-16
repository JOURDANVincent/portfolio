import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1v2gc2b{background-image:url(/images/svg/section/home.svg);background-size:contain;background-size:100%;background-attachment:fixed;background-repeat:no-repeat;background-position-y:40%;box-sizing:border-box;width:100%}.hero.svelte-1v2gc2b{width:90%;margin-inline:auto;box-sizing:border-box}h1.svelte-1v2gc2b{color:#eee;font-size:5.5rem;line-height:5.6rem;margin:0}h2.svelte-1v2gc2b{color:#E14242;font-size:2.35rem;line-height:2.4rem;margin:0;margin-bottom:20px}a.svelte-1v2gc2b{text-decoration:none;backdrop-filter:blur(20px);background-color:transparent;color:#fff;font-size:1.2rem;padding-inline:16px;padding-top:4px;padding-bottom:4px;border:1px solid #E14242}a.svelte-1v2gc2b:hover{color:#fff;border:1px solid #fff;box-shadow:inset 5px 5px 20px 5px #E1424250}@media(max-width: 767px ){.hero.svelte-1v2gc2b{width:100%;padding-left:4%}h1.svelte-1v2gc2b{font-size:40px;line-height:42px;margin:0}h2.svelte-1v2gc2b{font-size:17px;line-height:20px}a.svelte-1v2gc2b{font-size:0.8rem}}@media(min-width: 768px){section.svelte-1v2gc2b{padding:0px 0px 10px 12px;max-width:900px;margin-inline:auto}}@media(min-width: 1200px){section.svelte-1v2gc2b{max-width:1400px}}",
  map: null
};
const firstName = "Vincent";
const lastName = "JOURDAN";
const subTitle = "Développeur Applications Web & Mobiles";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="svelte-1v2gc2b"><div class="hero svelte-1v2gc2b"><h1 class="svelte-1v2gc2b"><strong>${escape(firstName)}</strong><strong class="lastName">${escape(` ${lastName}`)}</strong></h1> <h2 class="svelte-1v2gc2b">${escape(subTitle)}</h2> <a type="button" aria-label="me contacter" href="/contact" class="svelte-1v2gc2b" data-svelte-h="svelte-1omn6un">Contactez-moi</a></div> </section>`;
});
export {
  Page as default
};
