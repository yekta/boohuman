function withOpacityValue(variable) {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgb(var(${variable}))`;
		}
		return `rgb(var(${variable}) / ${opacityValue})`;
	};
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		transitionDuration: {
			DEFAULT: '200ms',
			150: '150ms',
			200: '200ms',
			250: '250ms',
			300: '300ms',
			350: '350ms',
			400: '400ms',
			500: '500ms',
			600: '600ms',
			700: '700ms',
			800: '800ms',
			1000: '1000ms'
		},
		transitionTimingFunction: {
			DEFAULT: 'cubic-bezier(0, 0.5, 0.5, 1)'
		},
		extend: {
			colors: {
				'c-primary': withOpacityValue('--c-primary'),
				'c-primary-shaded': withOpacityValue('--c-primary-shaded'),
				'c-on-primary': withOpacityValue('--c-on-primary'),
				'c-secondary': withOpacityValue('--c-secondary'),
				'c-bg': withOpacityValue('--c-bg'),
				'c-color-1': withOpacityValue('--c-color-1'),
				'c-color-2': withOpacityValue('--c-color-2'),
				'c-color-3': withOpacityValue('--c-color-3'),
				'c-color-4': withOpacityValue('--c-color-4'),
				'c-color-5': withOpacityValue('--c-color-5'),
				'c-bg-secondary': withOpacityValue('--c-bg-secondary'),
				'c-bg-tertiary': withOpacityValue('--c-bg-tertiary'),
				'c-on-bg': withOpacityValue('--c-on-bg'),
				'c-danger': withOpacityValue('--c-danger'),
				'c-success': withOpacityValue('--c-success'),
				'c-ban': withOpacityValue('--c-ban'),
				'c-shadow': withOpacityValue('--c-shadow'),
				'c-barrier': withOpacityValue('--c-barrier')
			},
			spacing: {
				'2px': '2px'
			},
			fontSize: {
				'9xl': '7rem',
				'10xl': '8rem'
			},
			scale: {
				101: '1.01',
				102: '1.02',
				103: '1.03',
				104: '1.04'
			}
		}
	},
	plugins: []
};
