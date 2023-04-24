module.exports = {
	extends: [
		"@uberschrift/eslint-config/base",
		"peerigon/presets/prettier-typescript-react.js",
	],
	parserOptions: {
		project: "tsconfig.json",
		tsconfigRootDir: __dirname,
		sourceType: "module",
	},
};
