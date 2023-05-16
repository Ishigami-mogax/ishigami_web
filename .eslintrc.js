module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard-with-typescript"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
            allowDirectConstAssertionInArrowFunctions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true
          }
        ],
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          {
            accessibility: "no-public"
          }
        ],
        "@typescript-eslint/typedef": [
          "error",
          {
            parameter: true,
            variableDeclaration: true,
            memberVariableDeclaration: true,
            propertyDeclaration: true,
            arrowParameter: true,
            callSignature: true,
            arrowCallSignature: true, // permet de ne pas vérifier le typage des destructurations
            destructuring: true, // permet de ne pas vérifier les types des variables déclarées à l'intérieur de boucles for
            variableDeclarationIgnoreForLoop: true, // permet de ne pas vérifier les déclarations de fonction
            variableDeclarationIgnoreFunction: true
          }
        ],
        "@typescript-eslint/array-type": [
          "error",
          {
            default: "array-simple",
            readonly: "array-simple"
          }
        ],
        "@typescript-eslint/no-useless-constructor": "error"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    quotes: "off",
    "no-empty-pattern": "off",
    eqeqeq: [
      "error",
      "always",
      {
        null: "ignore"
      }
    ],
    "prefer-arrow-callback": "error",
    "no-useless-constructor": "off"
  }
}
