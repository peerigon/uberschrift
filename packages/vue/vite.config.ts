// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [
		dts({
			rollupTypes: true,
		}),
		vue(),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "vueberschrift",
			fileName: "index",
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				globals: {
					vue: "Vue",
				},
			},
		},
	},
});
