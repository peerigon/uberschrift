// @ts-check

const esbuild = require("esbuild");
const { nodeExternalsPlugin } = require("esbuild-node-externals");

/**
 * @type {import("esbuild").BuildOptions}
 */
const defaultOptions = {
	bundle: true,
	minify: true,
	treeShaking: true,
	platform: "node",
	format: "cjs",
	target: "node14",
	plugins: [nodeExternalsPlugin()],
};

module.exports = (
	/** @type {import("esbuild").BuildOptions} */
	options
) =>
	esbuild
		.build({
			...defaultOptions,
			...options,
		})
		.catch(() => process.exit(1));
