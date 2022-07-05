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
			red2: '#B10651',
			purple: '#9C589C',
			purple2: '#B79BC1',
			purple3: '#250F31',
			purple4: '#2D1246',
			purple5: '#25092B',
			purple6: '#1D0A2A',
			purple7: '#2C0E38',
			grey: '#FEFEFE',
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
			p2: ['1.3125rem', '1.75rem'], // 21px
			basexl: ['1.5rem', '1.875rem'], // 24px
			'1xl': ['1.75rem', '2rem'], // 28px
			'1.5xl': '1.875rem', // 30px
			'2xl': ['2rem', '2.5rem'], // 32px
			'3xl': ['2.25rem', '2.875rem'], // 36px
			'4xl': ['2.5rem', '2.75rem'], // 40px
			'5xl': '3rem', // 48px
			'5.5xl': ['3.125rem', '3.875rem'], // 50px
			'6xl': ['3.25rem', '3.875rem'], // 52px
			'7xl': ['4rem', '4.375rem'], // 64px
			'8xl': ['5.125rem', '5.625rem'], // 82px
			'9xl': ['6rem', '6.25rem'], // 96px
			'9.5xl': ['6.26rem', '7.875rem'], // 100px
			'10xl': ['8rem', '8rem'], // 128px
		},
		extend: {
			spacing: {
				4.5: '1.125rem', // 18px
				5.5: '1.375rem', // 22px
				6.5: '1.625rem', // 26px
				7.5: '1.875rem', // 30px
				8.5: '2.125rem', // 34px
				9.5: '2.375rem', // 38px
				10.5: '2.625rem', // 42px
				11.5: '2.875rem', // 46px
				13: '3.25rem', // 52px
				13.5: '3.375rem', // 54px
				14.5: '3.625rem', // 58px
				15: '3.75rem', // 60px
				15.5: '3.875rem', // 62px
				16.5: '4.375rem', // 70px
				18: '4.625rem', // 74px
				20.5: '5.125rem', // 82px
				21: '5.375rem', // 86px
				24.5: '6.125rem', // 98px
				25: '6.5rem', // 104px
				26: '6.75rem', // 108px
				29: '7.5rem', // 120px
				30: '7.75rem', // 124px
				33: '8.375rem', // 134px
				34: '8.5rem', // 136px
				35: '8.75rem', // 140px
				39: '9.5rem', // 152px
				43: '10.75rem', // 172px
				45: '11.5rem', // 184px
				49: '12.125rem', // 194px
				55: '13.75rem', // 220px
				59: '14.5rem', // 232px
				71: '17.5rem', // 280px
				71.5: '17.625rem', // 282px
				73: '19.625rem', // 314px
				82: '21.375rem', // 342px
				95: '23.375rem', // 374px
				105: '29.125rem', // 466px
				110: '32.125rem', // 514px
				146: '44.625rem', // 714px
				200: '78.25rem', // 1252px
			},
			height: {
				'3/20': '15%',
				500: '31.25rem', // 500px
			},
			width: {
				'3/20': '15%',
				500: '31.25rem', // 500px
			},
			zIndex: {
				1: '1',
				100: '100',
			},
			minWidth: {
				6: '1.5rem',
			},
			maxWidth: {
				unset: 'unset',
				basebadge: '6.375rem', // 102px
				mdbutton: '8.75rem', // 140px
				lgbutton: '9.5rem', // 152px
				xlbutton: '10.125rem', // 162px
				'2xlbutton': '12.75rem', // 204px
				lginput: '19.625rem', // 314px
			},
			rotate: {
				135: '135deg',
				45: '45deg',
			},
			scale: {
				25: '2.5',
			},
			gridTemplateRows: {
				masonryThree: 'auto 23% auto',
				menuLayout: '1fr auto',
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
				'custom-t-l-gradient': 'linear-gradient(286.58deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)',
				'custom-l-gradient': 'linear-gradient(176deg, var(--tw-gradient-from) 21.78%, var(--tw-gradient-to) 79.22%)',
				'custom-l-text-gradient': 'linear-gradient(105deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 60.98%)',
				'custom-radial-gradient':
					'radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-from) 72.92%, var(--tw-gradient-to) 100%)',
				'custom-sphere-radial-gradient':
					'radial-gradient(408.21% 408.21% at 18.56% 400.73%, var(--tw-gradient-from) 43.75%, var(--tw-gradient-to) 90.1%)',
			},
			strokeWidth: {
				3: '3px',
			},
			dropShadow: {
				'3xl': 'drop-shadow(0px 0px 20px rgba(20, 20, 46, 0.2))',
			},
			boxShadow: {
				'3xl': '0px 0px 50px 40px rgba(31, 11, 51, 0.5)',
			},
			animation: {
				marquee: 'marquee 25s linear infinite',
				marquee2: 'marquee2 25s linear infinite',
				'spin-slow': 'spin 40s ease-in-out infinite',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' },
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
