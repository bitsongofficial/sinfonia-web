import { defineNuxtConfig } from 'nuxt'
import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	typescript: {
		shim: false,
		tsConfig: {
			types: ['@pinia/nuxt'],
		},
	},
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},
	},
	css: ['@/assets/css/typography.css', '@/assets/css/main.css'],
	head: {
		link: [{ rel: 'icon', type: 'image/x-icon', href: '@/public/favicon.ico' }],
	},
	vite: {
		plugins: [svgLoader()],
	},
	modules: ['@pinia/nuxt'],
	runtimeConfig: {
		public: {
			countdownDate: '2022-07-10T22:00:00.000Z',
			newsletter: {
				apiUrl: 'https://mc.bitsong.io/',
				listID: 'd55c3fe099',
			},
		},
	},
})
