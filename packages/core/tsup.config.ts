// eslint-disable-next-line import/no-relative-packages
import { defineConfig } from "./node_modules/@uberschrift/config/tsup.base";

export default defineConfig({
	entry: [__dirname + "/src/index.ts"],
	outDir: __dirname + "/dist",
});
