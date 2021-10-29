module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'eslint:recommended',
        "plugin:import/recommended",
        "plugin:react/recommended",
        'plugin:@typescript-eslint/recommended',
        "plugin:prettier/recommended",
        "plugin:jest/style",
		    "plugin:testing-library/react",
    ],
    plugins: [
        "react",
        "@typescript-eslint",
        "prettier",
        "react-hooks",
        "jest",
        "testing-library"
    ],
    rules: {
        "no-shadow": 0,
        "prettier/prettier": ['error', {endOfLine: 'auto'}],
        "@typescript-eslint/no-explicit-any": 0,
        "testing-library/prefer-screen-queries": "off",
        "testing-library/render-result-naming-convention": "off",
        'import/no-unresolved': 0,
        'import/named': 0,
        'import/namespace': 0,
        "import/order": [
          "error",
          {
            "groups": ["builtin", "external", "internal"],
            "pathGroups": [
              {
                "pattern": "react+(|-native)",
                "group": "external",
                "position": "before"
              },
              {
                "pattern": "@/**",
                "group": "internal",
                "position": "before"
              }
            ],
            "pathGroupsExcludedImportTypes": ["react+(|-native)", "@/**"],
            "newlines-between": "always",
            "alphabetize": {
              "order": "asc",
              "caseInsensitive": true
            }
          }
        ],
    }
};
