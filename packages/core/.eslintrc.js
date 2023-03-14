module.exports = {
	extends: ["./node_modules/@uberschrift/config/.eslintrc.js"],
	parserOptions: {
		project: "tsconfig.json",
		tsconfigRootDir: __dirname,
		sourceType: "module",
	},
};
