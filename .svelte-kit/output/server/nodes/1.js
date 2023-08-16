

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0b9aac33.js","_app/immutable/chunks/scheduler.f6fc8aee.js","_app/immutable/chunks/index.16182d92.js","_app/immutable/chunks/stores.f3a9ee41.js","_app/immutable/chunks/singletons.3ec1ba3e.js","_app/immutable/chunks/index.a448b83c.js"];
export const stylesheets = [];
export const fonts = [];
