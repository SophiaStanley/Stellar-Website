import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.COJY07AJ.js","_app/immutable/chunks/DeHgFPFA.js","_app/immutable/chunks/DoRaYvMx.js","_app/immutable/chunks/Y11YX_sR.js","_app/immutable/chunks/12e7OTuy.js","_app/immutable/chunks/CEQtY0i4.js"];
export const stylesheets = ["_app/immutable/assets/0.BwE5xxM3.css"];
export const fonts = [];
