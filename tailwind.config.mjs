/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			"colors": {
				"primary": "#F9F7F7",
				"secondary": "#112D4E"
			},
		},
		plugins: [],
	}
}
