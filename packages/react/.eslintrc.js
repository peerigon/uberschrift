module.exports = {
	extends: [
		"./node_modules/@uberschrift/config/.eslintrc.js",
		"peerigon/presets/prettier-typescript-react.js",
	],
	parserOptions: {
		project: "tsconfig.json",
		tsconfigRootDir: __dirname,
		sourceType: "module",
	},
};
