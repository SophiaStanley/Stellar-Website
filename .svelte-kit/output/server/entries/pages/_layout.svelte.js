import { a as attr, s as slot, b as stringify } from "../../chunks/root.js";
import { b as base } from "../../chunks/server.js";
import "../../chunks/url.js";
import "@sveltejs/kit/internal/server";
function _layout($$renderer, $$props) {
  $$renderer.push(`<header class="svelte-12qhfyh"><a${attr("href", `${stringify(base)}/`)}><img${attr("src", `${stringify(base)}/StellarConnectionLogo.png`)} alt="Stellar Connection Logo" width="20%" height="20%"/></a> <nav class="svelte-12qhfyh"><ul class="svelte-12qhfyh"><li class="svelte-12qhfyh"><a${attr("href", `${stringify(base)}/`)} class="svelte-12qhfyh">Home</a></li> <li class="svelte-12qhfyh"><a${attr("href", `${stringify(base)}/members`)} class="svelte-12qhfyh">Members</a></li> <li class="svelte-12qhfyh"><a${attr("href", `${stringify(base)}/game`)} class="svelte-12qhfyh">Game</a></li></ul></nav></header> <main class="svelte-12qhfyh"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></main> <footer class="svelte-12qhfyh"><p>© 2026 My Svelte App. All rights reserved.</p></footer>`);
}
export {
  _layout as default
};
