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
		charset: 'utf-8',
		meta: [
			{
				name: 'theme-color',
				content: '#1B0929',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'keywords',
				name: 'keywords',
				content: 'Artist, Fan, $BTSG, Labels, Crypto, Buy, Swap, Sell, Music, Trading, Blockchain, Sinfonia',
			},
			{
				hid: 'description',
				name: 'description',
				content: 'Your Music FanToken Marketplace powered by BitSong on Osmosis',
			},
			{
				hid: 'og:site_name',
				property: 'og:site_name',
				content: 'Sinfonia',
			},
			{
				hid: 'og:title',
				name: 'og:title',
				content: 'Sinfonia',
			},
			{
				hid: 'og:description',
				name: 'og:description',
				content: 'Your Music FanToken Marketplace powered by BitSong on Osmosis',
			},
			{
				hid: 'og:type',
				property: 'og:type',
				content: 'website',
			},
			{
				hid: 'og:url',
				name: 'og:url',
				content: 'https://www.sinfonia.zone/',
			},
			{
				hid: 'og:image',
				name: 'og:image',
				content: 'https://www.sinfonia.zone/cover.jpeg',
			},
			{
				hid: 'og:image:width',
				name: 'og:image:width',
				content: '2220',
			},
			{
				hid: 'og:image:height',
				name: 'og:image:height',
				content: '1186',
			},
			{
				hid: 'twitter:card',
				name: 'twitter:card',
				content: 'summary_large_image',
			},
			{
				hid: 'twitter:site',
				name: 'twitter:site',
				content: '@sinfoniazone',
			},
			{
				hid: 'twitter:title',
				name: 'twitter:title',
				content: 'Sinfonia',
			},
			{
				hid: 'twitter:description',
				name: 'twitter:description',
				content: 'Your Music FanToken Marketplace powered by BitSong on Osmosis',
			},
			{
				hid: 'twitter:creator',
				name: 'twitter:creator',
				content: '@sinfoniazone',
			},
			{
				hid: 'twitter:image',
				name: 'twitter:image',
				content: 'https://www.sinfonia.zone/cover.jpeg',
			},
			{
				hid: 'twitter:image:alt',
				name: 'twitter:image:alt',
				content: 'Sinfonia',
			},
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '@/public/favicon.ico' }],
	},
	vite: {
		plugins: [svgLoader()],
	},
	modules: ['@pinia/nuxt'],
	runtimeConfig: {
		public: {
			countdownDate: '2022-07-11T20:30:00.000Z',
			newsletter: {
				apiUrl: 'https://mc.bitsong.io/',
				listID: 'd55c3fe099',
			},
			analytics: {
				appName: 'Sinfonia Web',
				measurementID: 'G-R3N4BYQW2T',
			},
		},
	},
})
