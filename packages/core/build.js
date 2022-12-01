require("../../esbuild.js")({
	entryPoints: [__dirname + "/src/index.ts"],
	outdir: __dirname + "/dist",
});
