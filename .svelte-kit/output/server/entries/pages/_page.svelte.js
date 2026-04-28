import { a as attr, b as stringify } from "../../chunks/root.js";
import { b as base } from "../../chunks/server.js";
import "../../chunks/url.js";
import "@sveltejs/kit/internal/server";
function _page($$renderer) {
  $$renderer.push(`<h1 class="svelte-1uha8ag">The official website of the hit pop group!</h1> <img${attr("src", `${stringify(base)}/TitleScreen.png`)} alt="Stellar Connection group shot" class="svelte-1uha8ag"/> <br class="svelte-1uha8ag"/> <hr class="svelte-1uha8ag"/> <div class="svelte-1uha8ag"><p class="svelte-1uha8ag">Stellar*Connection is a new pop group utilising their talents from across the entertainment industry to take the music world by storm. Consisting of Iris (Pop Singer and Model), Gwyn (Former Snow Boys member), Ace (An actor on 'Satellite Street'), Enid (A member of the dance troupe BURN IT BACK), and Elodie (The breakout star of Talent Academy Season 1), their unique perspectives provide "a fresh new take on pop music", as described by Marin Magazine.</p></div>`);
}
export {
  _page as default
};
