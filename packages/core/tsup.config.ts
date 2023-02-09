// eslint-disable-next-line import/no-relative-packages
import { defineConfig } from "../../tsup.config";

export default defineConfig({
	entryPoints: [__dirname + "/src/index.ts"],
	outDir: __dirname + "/dist",
});
