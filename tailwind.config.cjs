/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'celeste': '#07F6FD',
				'morado': '#160E23',
				'pera': '#C0F6B8',
			},
		},
	},
	plugins: [],
}
