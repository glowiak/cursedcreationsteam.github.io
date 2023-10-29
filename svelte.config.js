import adapter from "@sveltejs/adapter-static";

const config = {
	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};

config.paths = { base: process.argv.includes("dev") ? "" : process.env.BASE_PATH };

export default config;