import adapter from '@sveltejs/adapter-vercel": "^6.3.3';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			runtime: 'nodejs20.x'     // 18.x এর পরিবর্তে 20.x রাখো
		})
	}
};
