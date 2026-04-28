export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Stellar-Website/_app",
	assets: new Set([".nojekyll","AceStar.png","AceWeb.png","ElodieStar.png","ElodieWeb.png","EnidStar.png","EnidWeb.png","favicon.png","fonts/PollerOne-Regular.ttf","GwynStar.png","GwynWeb.png","IrisStar.png","IrisWeb.png","robots.txt","StellarConnectionLogo.png","StellarStageLogo.png","styles/Background.png","styles/global.css","TitleScreen.png","TitleTemp.png"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {start:"_app/immutable/entry/start.B9_ACUoH.js",app:"_app/immutable/entry/app.DbAuhA2L.js",imports:["_app/immutable/entry/start.B9_ACUoH.js","_app/immutable/chunks/rrGKVKoo.js","_app/immutable/chunks/DoRaYvMx.js","_app/immutable/chunks/CEQtY0i4.js","_app/immutable/entry/app.DbAuhA2L.js","_app/immutable/chunks/DoRaYvMx.js","_app/immutable/chunks/BHqc-E2P.js","_app/immutable/chunks/BEY252Iv.js","_app/immutable/chunks/DeHgFPFA.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/Stellar-Website/","/Stellar-Website/game","/Stellar-Website/members"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
