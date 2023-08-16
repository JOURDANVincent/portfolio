import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
		// default options are shown. On some platforms
		// these options are set automatically — see below
		pages: 'build',
		assets: 'build',
		fallback: undefined,
		precompress: true,
		strict: true
		}),
		paths: {
            base: process.env.NODE_ENV === 'production' ? '/Jourdan-Vincent' : '',
        }
	}
};

export default config;
