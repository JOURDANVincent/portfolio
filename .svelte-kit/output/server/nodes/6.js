import * as universal from '../entries/pages/project/_page.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/project/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/project/+page.ts";
export const imports = ["_app/immutable/nodes/6.dc418666.js","_app/immutable/chunks/scheduler.f6fc8aee.js","_app/immutable/chunks/index.16182d92.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/6.ee2e2a3d.css"];
export const fonts = [];
