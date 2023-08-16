import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.e030880b.js","_app/immutable/chunks/scheduler.f6fc8aee.js","_app/immutable/chunks/index.16182d92.js","_app/immutable/chunks/index.a448b83c.js","_app/immutable/chunks/stores.f3a9ee41.js","_app/immutable/chunks/singletons.3ec1ba3e.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/linkedin.svg.87f10183.js"];
export const stylesheets = ["_app/immutable/assets/0.f5447ab6.css"];
export const fonts = [];
