import { c as create_ssr_component, e as escape, d as each, v as validate_component } from "../../../chunks/ssr.js";
const Study_card_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".card.svelte-1jhg57.svelte-1jhg57{height:fit-content;background-color:#fff2;backdrop-filter:blur(8px);padding-inline:24px;padding-top:18px;padding-bottom:4px;margin-bottom:8px;box-shadow:2px 2px 10px 1px #0008}.card.svelte-1jhg57.svelte-1jhg57:last-child{margin-bottom:0}h2.svelte-1jhg57.svelte-1jhg57{width:100%;font-size:1.6rem;color:#fff;margin-bottom:8px}h3.svelte-1jhg57.svelte-1jhg57{font-size:1.2rem;font-weight:bold;color:#E14242;margin:2px 0 2px 0}.h3-span.svelte-1jhg57.svelte-1jhg57{padding-left:10px;font-weight:initial;color:#fff}.date.svelte-1jhg57.svelte-1jhg57{padding-right:10px}.desc.svelte-1jhg57.svelte-1jhg57{margin-bottom:4px;color:#ddd;font-size:0.9rem}.techno.svelte-1jhg57>span.svelte-1jhg57{color:#fff;font-style:normal;font-weight:bold;padding-right:10px;border-right:1px solid #444}.techno.svelte-1jhg57>strong.svelte-1jhg57{color:#000;font-weight:bold;font-style:italic;padding-left:10px}@media(max-width: 768px){.card.svelte-1jhg57.svelte-1jhg57{padding:12px 16px 6px 16px}h2.svelte-1jhg57.svelte-1jhg57{font-size:1.5rem}}",
  map: null
};
const Study_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { date } = $$props;
  let { title } = $$props;
  let { place } = $$props;
  let { desc } = $$props;
  let { techno } = $$props;
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.place === void 0 && $$bindings.place && place !== void 0)
    $$bindings.place(place);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.techno === void 0 && $$bindings.techno && techno !== void 0)
    $$bindings.techno(techno);
  $$result.css.add(css$3);
  return `<div class="card svelte-1jhg57"><h2 class="svelte-1jhg57">${escape(title)}</h2> <h3 class="svelte-1jhg57"><span class="date svelte-1jhg57">${escape(date)}</span><span class="h3-span svelte-1jhg57">${escape(place)}</span></h3> <p class="desc svelte-1jhg57">${escape(desc)}</p> <p class="techno svelte-1jhg57"><span class="svelte-1jhg57" data-svelte-h="svelte-19pzsi1">TECHNO</span><strong class="svelte-1jhg57">${escape(techno)}</strong></p> </div>`;
});
const Exp_card_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".card.svelte-64g8l3.svelte-64g8l3{display:flex;flex-direction:column;justify-content:center;height:100%;background-color:#fff2;backdrop-filter:blur(8px);color:#fff;text-align:initial;padding-inline:24px;margin-bottom:8px;box-sizing:border-box;box-shadow:2px 2px 10px 1px #0008}.sub-header.svelte-64g8l3.svelte-64g8l3{display:inline-flex;align-items:flex-end;padding:0;font-size:2rem}.date.svelte-64g8l3.svelte-64g8l3{font-weight:bold;color:#E14242;margin-right:10px;padding-right:10px}h2.svelte-64g8l3.svelte-64g8l3{font-size:1.8rem}h3.svelte-64g8l3.svelte-64g8l3{font-size:2rem;font-weight:normal}p.svelte-64g8l3.svelte-64g8l3{color:#aaa;font-weight:bold;margin-bottom:4px;font-size:1.3rem}.desc.svelte-64g8l3 p.svelte-64g8l3{color:#ddd;font-weight:initial}.techno-block.svelte-64g8l3.svelte-64g8l3{margin-top:12px}.techno.svelte-64g8l3.svelte-64g8l3{width:100%;font-size:1.1rem;font-style:italic;display:inline-flex;justify-content:center}.techno.svelte-64g8l3>span.svelte-64g8l3{width:60px;font-style:normal;font-weight:bold;text-align:right;padding-right:10px;color:#eee;border-right:1px solid #444}.techno.svelte-64g8l3>strong.svelte-64g8l3{flex:1;color:#000;font-weight:bold;padding-left:10px}@media(max-width: 767px){.card.svelte-64g8l3.svelte-64g8l3{padding:18px}h2.svelte-64g8l3.svelte-64g8l3{font-size:1.6rem;margin-bottom:8px}.sub-header.svelte-64g8l3.svelte-64g8l3{font-size:1.3rem;margin-bottom:8px}h3.svelte-64g8l3.svelte-64g8l3{font-size:1.3rem}p.svelte-64g8l3.svelte-64g8l3{font-size:0.9rem}}@media(min-width: 768px){h2.svelte-64g8l3.svelte-64g8l3{font-size:1.6rem;margin-bottom:8px}.sub-header.svelte-64g8l3.svelte-64g8l3{font-size:1.3rem;margin-bottom:8px}h3.svelte-64g8l3.svelte-64g8l3{font-size:1.3rem}p.svelte-64g8l3.svelte-64g8l3{font-size:1rem}}@media(min-width: 992px){h2.svelte-64g8l3.svelte-64g8l3{font-size:2.2rem;margin-bottom:8px}.sub-header.svelte-64g8l3.svelte-64g8l3{font-size:1.8rem;margin-bottom:8px}h3.svelte-64g8l3.svelte-64g8l3{font-size:1.8rem}}@media(min-width: 1180px){h2.svelte-64g8l3.svelte-64g8l3{font-size:2.6rem}.sub-header.svelte-64g8l3.svelte-64g8l3{font-size:1.6rem;margin-bottom:8px}h3.svelte-64g8l3.svelte-64g8l3{font-size:1.6rem}}",
  map: null
};
const Exp_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { date } = $$props;
  let { title } = $$props;
  let { place } = $$props;
  let { desc } = $$props;
  let { techno } = $$props;
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.place === void 0 && $$bindings.place && place !== void 0)
    $$bindings.place(place);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.techno === void 0 && $$bindings.techno && techno !== void 0)
    $$bindings.techno(techno);
  $$result.css.add(css$2);
  return `<div class="card svelte-64g8l3"><h2 class="svelte-64g8l3">${escape(title)}</h2> <div class="sub-header svelte-64g8l3"><div class="date svelte-64g8l3">${escape(date)}</div> <h3 class="svelte-64g8l3">${escape(place)}</h3></div> <div class="desc svelte-64g8l3">${each(desc, (desc2) => {
    return `<p class="svelte-64g8l3">${escape(desc2)}</p>`;
  })}</div> <div class="techno-block svelte-64g8l3"><p class="techno svelte-64g8l3"><span class="svelte-64g8l3" data-svelte-h="svelte-f85hjk">WEB</span> <strong class="svelte-64g8l3">${escape(techno.web)}</strong></p> <p class="techno svelte-64g8l3"><span class="svelte-64g8l3" data-svelte-h="svelte-t57p88">MOBILE</span> <strong class="svelte-64g8l3">${escape(techno.mobile)}</strong></p> <p class="techno svelte-64g8l3"><span class="svelte-64g8l3" data-svelte-h="svelte-1rzh0f2">DESKTOP</span> <strong class="svelte-64g8l3">${escape(techno.desktop)}</strong></p></div> </div>`;
});
const Resume_card_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card.svelte-12w6s8f.svelte-12w6s8f{padding-bottom:20px;border-radius:5px;box-sizing:border-box}.desc.svelte-12w6s8f.svelte-12w6s8f{color:#eee;font-size:1.1rem;text-align:justify}p.svelte-12w6s8f strong.svelte-12w6s8f{color:#777}@media(min-width: 768px){p.svelte-12w6s8f.svelte-12w6s8f{font-size:1.2rem}}",
  map: null
};
const Resume_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="card svelte-12w6s8f" data-svelte-h="svelte-nsmbxv"><div class="desc svelte-12w6s8f"><p class="svelte-12w6s8f">Depuis janvier 2022, j&#39;exerce le métier de <strong class="svelte-12w6s8f">Développeur Java / Angular</strong> au sein de 
            l&#39;entreprise <strong class="svelte-12w6s8f">CGI Amiens</strong></p> <p class="svelte-12w6s8f">Je travaille actuellement sur une des nombreuses applications du Ministère de la Transition Écologique et du 
            Développement Durable axée sur l&#39;information routière</p> <p class="svelte-12w6s8f">Cette application est composée d&#39;un <strong class="svelte-12w6s8f">site web</strong>, d&#39;un <strong class="svelte-12w6s8f">web service</strong>, d&#39;un <strong class="svelte-12w6s8f">CMS</strong>
            , d&#39;une <strong class="svelte-12w6s8f">webapp</strong> disponible aussi sur <strong class="svelte-12w6s8f">Android</strong> et <strong class="svelte-12w6s8f">iOS</strong> et d&#39;une 
            application <strong class="svelte-12w6s8f">desktop</strong></p> <p class="svelte-12w6s8f">Les principales technologies utilisées sont <strong class="svelte-12w6s8f">Java</strong> et <strong class="svelte-12w6s8f">Angular</strong> mais également 
            <strong class="svelte-12w6s8f">Spring Boot</strong>, <strong class="svelte-12w6s8f">Typescript</strong>, <strong class="svelte-12w6s8f">Javascript</strong> et même <strong class="svelte-12w6s8f">Electron JS</strong></p> <p class="svelte-12w6s8f">Je travaille au sein d&#39;une petite équipe suivant les <strong class="svelte-12w6s8f">méthodes agiles</strong> dans des sprints d&#39;environ 4 
            semaines...</p></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'section.svelte-1fjp3jr{height:100%;background-image:url(/images/svg/section/experience.svg);background-size:cover;background-attachment:fixed;background-repeat:no-repeat;background-position-y:40%;box-sizing:border-box;padding-bottom:20px}.title_section.svelte-1fjp3jr{grid-area:title}.resume_section.svelte-1fjp3jr{grid-area:resume}.exp_section.svelte-1fjp3jr{grid-area:exp}.study_section.svelte-1fjp3jr{grid-area:study}@media(max-width: 767px){.resume_section.svelte-1fjp3jr{width:100%;padding-inline:6px;box-sizing:border-box}}@media(min-width: 768px){section.svelte-1fjp3jr{display:grid;grid-template-areas:"title title"\r\n         "resume resume"\r\n         "exp study"\r\n         "exp study";grid-template-columns:1fr 1fr;column-gap:8px;padding-bottom:16px}.study_section.svelte-1fjp3jr{display:flex;flex-direction:column;justify-content:space-between}}@media(min-width: 992px){section.svelte-1fjp3jr{max-width:1100px;margin-inline:auto;justify-content:center;grid-template-columns:3fr 2fr}.resume_section.svelte-1fjp3jr{width:90%}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section class="svelte-1fjp3jr"><h1 class="title_section svelte-1fjp3jr" data-svelte-h="svelte-vje7o7"><strong>Éxpériences</strong></h1> <div class="resume_section svelte-1fjp3jr">${validate_component(Resume_card, "ResumeCard").$$render($$result, {}, {}, {})}</div> <div class="exp_section svelte-1fjp3jr"> ${each(data.experiences, (exp) => {
    return `${validate_component(Exp_card, "ExpCard").$$render($$result, Object.assign({}, exp), {}, {})}`;
  })}</div> <div class="study_section svelte-1fjp3jr"> ${each(data.studies, (study) => {
    return `${validate_component(Study_card, "StudyCard").$$render($$result, Object.assign({}, study), {}, {})}`;
  })}</div> </section>`;
});
export {
  Page as default
};
