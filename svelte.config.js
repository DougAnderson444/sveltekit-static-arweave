import preprocess from 'svelte-preprocess';
import ipfsAdapter from 'sveltejs-adapter-ipfs'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: ipfsAdapter(),

	}
};

export default config;
