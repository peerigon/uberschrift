module.exports = {
	extends: ["@uberschrift/eslint-config/base"],
	parserOptions: {
		project: "tsconfig.json",
		tsconfigRootDir: __dirname,
		sourceType: "module",
	},
};
