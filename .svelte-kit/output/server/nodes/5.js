import * as universal from '../entries/pages/experience/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/experience/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/experience/+page.ts";
export const imports = ["_app/immutable/nodes/5.6d7aa05e.js","_app/immutable/chunks/scheduler.f6fc8aee.js","_app/immutable/chunks/index.16182d92.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/spread.8a54911c.js"];
export const stylesheets = ["_app/immutable/assets/5.0855936b.css"];
export const fonts = [];
