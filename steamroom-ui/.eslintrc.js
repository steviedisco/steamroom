module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-var-requires": "off",
    "react/react-in-jsx-scope": "off"
  },
  globals: {
    React: "writable",
  },
  overrides: [
    {
      files: [
        '**/*.js'
      ],
      parserOptions: {
        parser: 'babel-eslint',
      },
    },
    {
      files: [
        '**/*.ts', '**/*.tsx'
      ],
      parserOptions: {
        parser: 'typescript-eslint-parser',
      },
      rules: {
        "@typescript-eslint/explicit-function-return-type": ["error"]
      }
    }
  ],
};
