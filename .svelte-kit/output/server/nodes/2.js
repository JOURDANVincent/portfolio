

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.0ba9aacb.js","_app/immutable/chunks/scheduler.f6fc8aee.js","_app/immutable/chunks/index.16182d92.js"];
export const stylesheets = ["_app/immutable/assets/2.60937755.css"];
export const fonts = [];
