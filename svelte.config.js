import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { getRoutes } from './build-utils/getRoutes.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({ postcss: true }),

	kit: {
		adapter: adapter(),
		alias: {
			'$components/*': './src/lib/components',
			'$ts/*': './src/lib/ts',
			'$css/*': './src/lib/css'
		},
		prerender: {
			crawl: true,
			enabled: true,
			concurrency: 10,
			entries: await getRoutes()
		}
	}
};

export default config;
