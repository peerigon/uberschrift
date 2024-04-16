import { defineConfig } from "tsup";
import vuePlugin from "esbuild-plugin-vue";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["cjs", "esm"],
	dts: true,
	clean: true,
	esbuildPlugins: [vuePlugin()],
});
