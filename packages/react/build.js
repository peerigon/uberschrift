require("../../esbuild.js")({
	entryPoints: [__dirname + "/src/index.ts"],
	external: ["react", "react-dom", "react-markdown"],
	outdir: __dirname + "/dist",
});
