module.exports = {
	roots: ["<rootDir>/src"],
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	// testEnvironment: "jest-environment-jsdom",
	// setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
	moduleFileExtensions: ["ts", "js", "json", "node"],
};
