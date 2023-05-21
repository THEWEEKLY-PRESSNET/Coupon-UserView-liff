module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        'plugin:react-hooks/recommended',
        'prettier',
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "no-use-before-define": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".jsx", ".tsx"] }],
        'no-multiple-empty-lines': [2, { "max": 2 }]
    }
}