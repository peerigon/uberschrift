module.exports = {
	extends: ["peerigon/presets/prettier-typescript.js"],
	env: {
		node: true,
	},
	root: true,
	rules: {
		"no-console": "warn",
	},
	parserOptions: {
		project: "tsconfig.json",
		tsconfigRootDir: __dirname,
		sourceType: "module",
	},
};
