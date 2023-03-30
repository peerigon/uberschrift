import { defineConfig } from "@uberschrift/tsconfig/tsup";

export default defineConfig({
	entry: [__dirname + "/src/index.ts"],
	outDir: __dirname + "/dist",
});
