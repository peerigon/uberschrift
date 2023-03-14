module.exports = {
	extends: [
		"peerigon/presets/prettier-typescript-react.js",
		"plugin:@next/next/recommended",
		"./node_modules/@uberschrift/config/.eslintrc.js",
	],
	parserOptions: {
		project: "tsconfig.json",
		tsconfigRootDir: __dirname,
		sourceType: "module",
	},
	ignorePatterns: ["next-env.d.ts"],
};
