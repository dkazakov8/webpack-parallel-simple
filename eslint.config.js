const path = require('path');

/**
 * @docs: https://eslint.org/docs/user-guide/configuring/language-options
 * @type {import("eslint").Linter.BaseConfig }
 *
 * A click on a rule leads to TS docs
 *
 */

const eslintConfig = {
  env: { node: true },
  parser: '@typescript-eslint/parser',
  extends: ['./_eslint/rules.js', 'prettier'],
  plugins: ['prettier', 'import', '@typescript-eslint'],
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: path.resolve(__dirname, './tsconfig.json'),
      },
    },
  },
  parserOptions: { sourceType: 'module', ecmaVersion: 6 },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['./_eslint/rulesTs.js'],
      parserOptions: { project: [path.resolve(__dirname, './tsconfig.json')] },
    },
  ],
};

module.exports = eslintConfig;
