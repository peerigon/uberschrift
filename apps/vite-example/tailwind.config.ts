import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	plugins: [typography],
} satisfies Config;
