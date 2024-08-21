module.exports = {
  testEnvironment: "node",
  preset: 'ts-jest',
  testMatch: [
    "**/__tests__/**/*.js?(x)",
    "**/__tests__/**/*.ts?(x)",
    "**/?(*.)+(spec|test)?(x)",
  ],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
  coveragePathIgnorePatterns: ["/node_modules/"],
};
