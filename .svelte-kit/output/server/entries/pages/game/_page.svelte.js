import { a as attr, b as stringify } from "../../../chunks/root.js";
import { b as base } from "../../../chunks/server.js";
import "../../../chunks/url.js";
import "@sveltejs/kit/internal/server";
function _page($$renderer) {
  $$renderer.push(`<h1>Stellar*Stage!</h1> <p class="svelte-4p1id7">Stellar*Stage is a rhythm game developed for Windows. Watch the Stellar*Connection members move to the rhythm as you play! Hit the notes in time with the music to increase your combo, and try to get the best score!</p> <img${attr("src", `${stringify(base)}/StellarStageLogo.png`)} alt="Stellar Stage Title" class="svelte-4p1id7"/> <br/> <button class="svelte-4p1id7"><a href="https://soupstantially.itch.io/stellarstage" class="svelte-4p1id7">Download Stellar*Stage!</a></button>`);
}
export {
  _page as default
};
