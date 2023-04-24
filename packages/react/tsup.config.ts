import { defineConfig } from "@uberschrift/tsconfig/tsup";

export default defineConfig({
	entry: [__dirname + "/src/*"],
	outDir: __dirname + "/dist",
});
