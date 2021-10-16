module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: [
        "react",
        "@typescript-eslint",
        "prettier",
        "react-hooks"
    ],
    rules: {
        "no-shadow": 0,
        "prettier/prettier": ['error', {endOfLine: 'auto'}]
    }
};
