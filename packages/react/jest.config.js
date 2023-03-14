module.exports = {
	extends: "@uberschrift/config/jest.config.js",
	testEnvironment: "jest-environment-jsdom",
	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
