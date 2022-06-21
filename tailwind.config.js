/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
	],
	theme: {
		extend: {
			spacing: {
				7.5: '1.875rem',
				15: '3.75rem',
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#FFFFFF',
			primary: '#1B0929',
			secondary: '#FF005C',
			purple: '#9C589C',
		},
	},
	plugins: [],
}
