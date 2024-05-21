import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			borderWidth: {
				"1": "1px",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"custom-gradient":
					"linear-gradient(274.29deg, rgba(191, 93, 81, 0.15) 0%, rgba(255, 70, 46, 0.25) 36.97%, rgba(255, 70, 46, 0) 101.7%)",
			},
			colors: {
				orange: "#FF462E",
			},
		},
	},
	plugins: [],
};
export default config;
