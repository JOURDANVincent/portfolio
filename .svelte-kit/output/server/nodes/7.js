import * as universal from '../entries/pages/skill/_page.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/skill/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/skill/+page.ts";
export const imports = ["_app/immutable/nodes/7.5d243e26.js","_app/immutable/chunks/scheduler.f6fc8aee.js","_app/immutable/chunks/index.16182d92.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/spread.8a54911c.js","_app/immutable/chunks/index.a448b83c.js"];
export const stylesheets = ["_app/immutable/assets/7.e027bb3a.css"];
export const fonts = [];
