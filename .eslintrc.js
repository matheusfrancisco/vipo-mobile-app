module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'eslint:recommended',
        "plugin:react/recommended",
        'plugin:@typescript-eslint/recommended',
        "plugin:prettier/recommended",
    ],
    plugins: [
        "react",
        "@typescript-eslint",
        "prettier",
        "react-hooks"
    ],
    rules: {
        "no-shadow": 0,
        "prettier/prettier": ['error', {endOfLine: 'auto'}],
        "@typescript-eslint/no-explicit-any": 0,
    }
};
