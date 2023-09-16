/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				blue: {
					'50': '#E3F2FD',
					'100': '#BBDEFB',
					'200': '#90CAF9',
					'300': '#64B5F6',
					'400': '#42A5F5',
					'500': '#2196F3', // Azul principal
					'600': '#1E88E5',
					'700': '#1976D2',
					'800': '#1565C0',
					'900': '#0D47A1',
				},
				white: '#FFFFFF', // Blanco puro
				gray: {
					'50': '#FAFAFA',
					'100': '#F5F5F5',
					'200': '#EEEEEE',
					'300': '#E0E0E0',
					'400': '#BDBDBD',
					'500': '#9E9E9E',
					'600': '#757575',
					'700': '#616161',
					'800': '#424242',
					'900': '#212121',
				},
				'blue-accent-light': '#4DA1FF', // Azul Claro de Acento
				'blue-accent-dark': '#0056B3', // Azul Oscuro de Acento
				'gray-light': '#F5F5F5', // Gris Claro
				'gray-medium': '#CCCCCC', // Gris Medio
				'gray-dark': '#333333', // Gris Oscuro
			},
		},
	},
	plugins: [],
}
