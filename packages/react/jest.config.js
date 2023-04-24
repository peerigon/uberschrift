module.exports = {
	extends: "@uberschrift/jest.config.js",
	testEnvironment: "jest-environment-jsdom",
	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
