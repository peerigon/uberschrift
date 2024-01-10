/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: ["peerigon/presets/typescript-react.js"],
	env: {
		node: true,
		browser: true,
	},
	root: true,
	rules: {
		"no-console": "warn",
	},
};
