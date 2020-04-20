module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    testMatch: [
        '**/test/**/*.spec.[jt]s?(x)'
    ],
    moduleNameMapper: {
        'Components/(.*)$': '<rootDir>/src/components/$1'
    },
    transformIgnorePatterns: [
        '/node_modules/(?!prismjs)'
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/components/**/*.vue',
    ]
};
