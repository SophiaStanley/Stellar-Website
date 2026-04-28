
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/game" | "/members";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/game": Record<string, never>;
			"/members": Record<string, never>
		};
		Pathname(): "/" | "/game" | "/members";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.nojekyll" | "/AceStar.png" | "/AceWeb.png" | "/ElodieStar.png" | "/ElodieWeb.png" | "/EnidStar.png" | "/EnidWeb.png" | "/favicon.png" | "/fonts/PollerOne-Regular.ttf" | "/GwynStar.png" | "/GwynWeb.png" | "/IrisStar.png" | "/IrisWeb.png" | "/robots.txt" | "/StellarConnectionLogo.png" | "/StellarStageLogo.png" | "/styles/Background.png" | "/styles/global.css" | "/TitleScreen.png" | "/TitleTemp.png" | string & {};
	}
}