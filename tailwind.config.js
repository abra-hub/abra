const theme = require('tailwindcss/defaultTheme');
const typography = require('@tailwindcss/typography');

//const colorBrand = 'var(--color-pretty)';

// Utils
const round = (num) => num.toFixed(7).replace(/(\.[0-9]+?)0+$/, '$1').replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;
const px = (px) => `${px}px`;

module.exports = {
	important: false, // See https://tailwindcss.com/docs/configuration#important
	experimental: {
		// See https://github.com/tailwindlabs/tailwindcss/pull/2159
		applyComplexClasses: true
	},
	purge: {
		enabled: process.env.HUGO_ENVIRONMENT === 'production',
		content: [ './hugo_stats.json' ],
		mode: 'all',
		options: {
			//whitelist: [ 'pl-1', 'pl-3' ],
			defaultExtractor: (content) => {
				let els = JSON.parse(content).htmlElements;
				els = els.tags.concat(els.classes, els.ids);
				return els;
			}
		}
	},
	theme: {
		container: {
			center: true,
			padding: '2rem'
		},
		extend: {
			borderWidth: {
				default: '1px',
			  },
			margin: {
				'-72': '-18rem',
			},
			padding: {
				'60': '12rem',
			},
			colors: {
				text: "#16141A",
				header: "#414042",
				accent: "#414042",
				primary: {
					"100": "#41404210",
					"900": "#414042",
				},
				secondary: "#66747c"

			},
			zIndex: {
				'-10': '-10',
			}
		},
		typography: {
			default: {
			  css: {
				color: '#1a1a1a',
				a: {
				  color: '#3182ce',
				  '&:hover': {
					color: '#2c5282',
				  },
				},
			  },
			},
		  },
	},
	plugins: [ typography ]
};
