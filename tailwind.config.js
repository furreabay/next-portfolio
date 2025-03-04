const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],

	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--body-font)", ...defaultTheme.fontFamily.sans],
				display: ["var(--display-font)", ...defaultTheme.fontFamily.sans],
				body: ["var(--body-font)", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
