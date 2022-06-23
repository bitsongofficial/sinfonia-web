/** @type {import('tailwindcss').Config} */
module.exports = {
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
				7.5: '1.875rem', // 30px
				11.5: '2.875rem', // 46px
				15: '3.75rem', // 60px
				26: '6.75rem', // 108px
				33: '8.375rem', // 134px
				95: '23.375rem', // 374px
			},
			blur: {
				full: '1000px',
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
		fontFamily: {
			'circular-std': ['"Circular Std"', 'sans-serif'],
		},
		fontSize: {
			xs: '.75rem',
			sm: '.875rem', // 14px
			tiny: '.875rem', // 14px
			base: '1rem', // 16px
			lg: '1.125rem', // 18px
			p1: '1.25rem', // 20px
			basexl: '1.5rem', // 24px
			'1xl': '1.75rem', // 28px
			'1.5xl': '1.875rem', // 30px
			'2xl': '2rem', // 32px
			'3xl': '2.25rem', // 36px
			'4xl': ['2.5rem', '2.75rem'], // 40px
			'5xl': '3rem', // 48px
			'6xl': '3.25rem', // 52px
			'7xl': ['4rem', '4.375rem'], // 64px
			'8xl': ['5.125rem', '5.625rem'], // 82px
			'9xl': ['6rem', '6.25rem'], // 96px
			'10xl': ['8rem', '8rem'], // 128px
		},
	},
	plugins: [],
}
