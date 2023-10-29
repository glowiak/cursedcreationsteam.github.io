import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

const config = {
	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: undefined,
			precompress: false,
			strict: true
		})
	},
	onwarn: (warning, handler) => {
		if (warning.code.startsWith('a11y-')) {
			return;
		}
		handler(warning);
	},
	preprocess: preprocess()
};

config.paths = { base: process.argv.includes("dev") ? "" : process.env.BASE_PATH };

export default config;