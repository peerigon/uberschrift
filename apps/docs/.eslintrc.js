module.exports = {
	extends: [
		"peerigon/presets/prettier-typescript-react.js",
		"plugin:@next/next/recommended",
		"@uberschrift/eslint-config/base",
	],
	parserOptions: {
		project: "tsconfig.json",
		tsconfigRootDir: __dirname,
		sourceType: "module",
	},
	ignorePatterns: ["next-env.d.ts"],
};
