// @ts-check
import { defineConfig as defineDefaultConfig } from "tsup";

/**
 * @type import("tsup").Options
 */
const defaultOptions = {
	bundle: true,
	minify: true,
	platform: "browser",
	format: ["cjs", "esm"],
	target: "es2022",
	dts: true,
	clean: true,
};

/**
 * @type typeof import("tsup").defineConfig
 */
export const defineConfig = (options) =>
	defineDefaultConfig({ ...options, ...defaultOptions });
