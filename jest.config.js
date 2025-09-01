const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
    testEnvironment: "jsdom", // Use jsdom for React testing
    transform: {
        ...tsJestTransformCfg,
        "^.+\\.(ts|tsx|js|jsx)$": [
            "ts-jest",
            {
                tsconfig: {
                    jsx: "react-jsx", // Ensure ts-jest handles JSX syntax
                },
            },
        ],
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};