import colors from 'tailwindcss/colors';
const withOpacity = (colorVariable) => {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${colorVariable}), ${opacityValue})`;
		}
		return `rgba(var(${colorVariable}))`;
	};
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
			mono: ['Fira Code', 'monospace']
		},
		extend: {
			textColor: {
				base: withOpacity('--color-text-base'),
				inverted: withOpacity('--color-text-inverted')
			},
			colors: {
				primary: {
					50: withOpacity('--color-primary-50'),
					100: withOpacity('--color-primary-100'),
					200: withOpacity('--color-primary-200'),
					300: withOpacity('--color-primary-300'),
					400: withOpacity('--color-primary-400'),
					500: withOpacity('--color-primary-500'),
					600: withOpacity('--color-primary-600'),
					700: withOpacity('--color-primary-700'),
					800: withOpacity('--color-primary-800'),
					900: withOpacity('--color-primary-900'),
					950: withOpacity('--color-primary-90')
				},
				neutral: colors.slate,
				base: withOpacity('--base'),
				inverted: withOpacity('--base-inverted'),
				transparent: colors.transparent
			}
		}
	}
};
