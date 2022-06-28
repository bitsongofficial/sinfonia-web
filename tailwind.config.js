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
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1560px',
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#FFFFFF',
			primary: '#1B0929',
			secondary: '#FF005C',
			red: '#E7166C',
			purple: '#9C589C',
			purple2: '#B79BC1',
			purple3: '#250F31',
			green: '#0AF9B1',
			success: '#12A481',
			error: '#DC004F',
		},
		fontFamily: {
			'circular-std': ['"Circular Std"', 'sans-serif'],
		},
		fontSize: {
			xs: '.75rem',
			sm: ['.875rem', '1.125rem'], // 14px
			tiny: ['.875rem', '1.125rem'], // 14px
			base: ['1rem', '1.25rem'], // 16px
			lg: ['1.125rem', '1.5rem'], // 18px
			p1: ['1.25rem', '1.5rem'], // 20px
			basexl: ['1.5rem', '1.875rem'], // 24px
			'1xl': ['1.75rem', '2rem'], // 28px
			'1.5xl': '1.875rem', // 30px
			'2xl': ['2rem', '2.5rem'], // 32px
			'3xl': ['2.25rem', '2.875rem'], // 36px
			'4xl': ['2.5rem', '2.75rem'], // 40px
			'5xl': '3rem', // 48px
			'6xl': '3.25rem', // 52px
			'7xl': ['4rem', '4.375rem'], // 64px
			'8xl': ['5.125rem', '5.625rem'], // 82px
			'9xl': ['6rem', '6.25rem'], // 96px
			'10xl': ['8rem', '8rem'], // 128px
		},
		extend: {
			spacing: {
				4.5: '1.125rem', // 18px
				5.5: '1.375rem', // 22px
				6.5: '1.625rem', // 26px
				7.5: '1.875rem', // 30px
				10.5: '2.625rem', // 42px
				11.5: '2.875rem', // 46px
				13: '3.25rem', // 52px
				15: '3.75rem', // 60px
				18: '4.625rem', // 74px
				21: '5.375rem', // 86px
				24.5: '6.125rem', // 98px
				25: '6.5rem', // 104px
				26: '6.75rem', // 108px
				29: '7.5rem', // 120px
				33: '8.375rem', // 134px
				34: '8.5rem', // 136px
				35: '8.75rem', // 140px
				39: '9.5rem', // 152px
				43: '10.75rem', // 172px
				45: '11.5rem', // 184px
				49: '12.125rem', // 194px
				59: '14.5rem', // 232px
				71: '17.5rem', // 280px
				95: '23.375rem', // 374px
			},
			width: {
				'3/20': '15%',
			},
			maxWidth: {
				unset: 'unset',
				mdbutton: '8.75rem', // 140px
				lgbutton: '9.5rem', // 152px
				xlbutton: '10.125rem', // 162px
				'2xlbutton': '12.75rem', // 204px
				lginput: '19.625rem', // 314px
			},
			borderRadius: {
				medium: '1.25rem', // 20px
				'4xl': '1.875rem', // 30px
				'8xl': '6.25rem', // 100px
			},
			blur: {
				full: '1000px',
			},
			backgroundImage: {
				'custom-l-gradient': 'linear-gradient(176deg, var(--tw-gradient-from) 21.78%, var(--tw-gradient-to) 79.22%)',
				'custom-l-text-gradient': 'linear-gradient(105deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 60.98%)',
				'custom-radial-gradient':
					'radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-from) 72.92%, var(--tw-gradient-to) 100%)',
			},
			strokeWidth: {
				3: '3px',
			},
			dropShadow: {
				'3xl': 'drop-shadow(0px 0px 20px rgba(20, 20, 46, 0.2))',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
