import { defineConfig as defineDefaultConfig, Options } from "tsup";

const defaultOptions: Options = {
	bundle: true,
	minify: true,
	platform: "browser",
	format: "cjs",
	target: "es2022",
	dts: true,
	clean: true,
};

export const defineConfig = (options: Options) =>
	defineDefaultConfig({ ...options, ...defaultOptions });
