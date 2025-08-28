// .eslintrc.cjs
module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended', // Integrates Prettier rules
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'prettier',
    ],
    rules: {
        // Add custom ESLint rules or override recommended ones here
        'prettier/prettier': 'error', // Enforces Prettier formatting as an error
    },
    ignorePatterns: ['node_modules/', 'dist/'], // Ignore generated files and dependencies
};