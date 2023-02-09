import { defineConfig as defineDefaultConfig, Options } from "tsup";

const defaultOptions: Options = {
	bundle: true,
	minify: true,
	platform: "node",
	format: "cjs",
	target: "node14",
	dts: true,
	clean: true,
};

export const defineConfig = (options: Options) =>
	defineDefaultConfig({ ...options, ...defaultOptions });
