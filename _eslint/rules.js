/**
 * @docs: https://eslint.org/docs/rules/
 * @type { import("eslint/rules").ESLintRules }
 *
 * A click on a rule leads to TS docs
 *
 * Applied to TS & JS (mostly config) files. Rules intersecting with @typescript-eslint are excluded
 *
 */

const rulesConfig = {
  yoda: 'error',
  radix: 'error',
  strict: 'error',
  'no-new': 'error',
  'no-var': 'error',
  'no-eval': 'error',
  'no-with': 'error',
  'new-cap': 'error',
  'no-tabs': 'error',
  'no-alert': 'error',
  'no-octal': 'error',
  'no-proto': 'error',
  'no-empty': 'error',
  'no-caller': 'error',
  'no-labels': 'error',
  'use-isnan': 'error',
  'func-names': 'error',
  'new-parens': 'error',
  'no-bitwise': 'error',
  'wrap-regex': 'error',
  'no-iterator': 'error',
  'no-new-func': 'error',
  'vars-on-top': 'error',
  'no-debugger': 'error',
  'default-case': 'error',
  'dot-notation': 'error',
  'guard-for-in': 'error',
  'no-div-regex': 'error',
  'no-loop-func': 'error',
  'no-multi-str': 'error',
  'no-sequences': 'error',
  'no-ex-assign': 'error',
  'no-obj-calls': 'error',
  'no-lonely-if': 'error',
  'no-extra-bind': 'error',
  'no-script-url': 'error',
  'prefer-spread': 'error',
  'no-new-object': 'error',
  'no-delete-var': 'error',
  'no-undef-init': 'error',
  'accessor-pairs': 'error',
  'no-else-return': 'error',
  'no-fallthrough': 'error',
  'no-lone-blocks': 'error',
  'no-self-assign': 'error',
  'no-process-env': 'error',
  'no-func-assign': 'error',
  'no-implied-eval': 'error',
  'no-new-wrappers': 'error',
  'no-octal-escape': 'error',
  'no-self-compare': 'error',
  'no-useless-call': 'error',
  'no-class-assign': 'error',
  'prefer-template': 'error',
  'no-regex-spaces': 'error',
  'no-multi-assign': 'error',
  'space-infix-ops': 'error',
  'space-unary-ops': 'error',
  'no-empty-pattern': 'error',
  'no-extend-native': 'error',
  'no-global-assign': 'error',
  'no-return-assign': 'error',
  'no-throw-literal': 'error',
  'no-await-in-loop': 'error',
  'no-control-regex': 'error',
  'no-sparse-arrays': 'error',
  'consistent-return': 'error',
  'no-param-reassign': 'error',
  'no-useless-concat': 'error',
  'no-useless-escape': 'error',
  'no-useless-return': 'error',
  'constructor-super': 'error',
  'no-useless-rename': 'error',
  'no-duplicate-case': 'error',
  'no-invalid-regexp': 'error',
  'no-unsafe-finally': 'error',
  'no-nested-ternary': 'error',
  'no-confusing-arrow': 'error',
  'prefer-rest-params': 'error',
  'no-unsafe-negation': 'error',
  'no-mixed-operators': 'error',
  'no-floating-decimal': 'error',
  'no-implicit-globals': 'error',
  'no-compare-neg-zero': 'error',
  'no-unneeded-ternary': 'error',
  'no-case-declarations': 'error',
  'no-implicit-coercion': 'error',
  'no-duplicate-imports': 'error',
  'array-callback-return': 'error',
  'no-unused-expressions': 'error',
  'no-constant-condition': 'error',
  'no-extra-boolean-cast': 'error',
  'no-inner-declarations': 'error',
  'no-useless-constructor': 'error',
  'lines-around-directive': 'error',
  'no-useless-computed-key': 'error',
  'prefer-numeric-literals': 'error',
  'no-unexpected-multiline': 'error',
  'no-empty-character-class': 'error',
  'no-shadow-restricted-names': 'error',
  'no-template-curly-in-string': 'error',
  'no-unmodified-loop-condition': 'error',
  'prefer-promise-reject-errors': 'error',

  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'one-var': ['error', 'never'],
  'wrap-iife': ['error', 'inside'],
  'max-depth': ['error', { max: 4 }],
  'jsx-quotes': ['error', 'prefer-double'],
  'max-params': ['error', { max: 3 }],
  'no-console': ['error', { allow: ['warn', 'error'] }],
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  'dot-location': ['error', 'property'],
  'prefer-const': ['error', { destructuring: 'all' }],
  'spaced-comment': ['error', 'always'],
  'no-cond-assign': ['error', 'always'],
  'object-shorthand': ['error', 'always', { avoidQuotes: true }],
  'func-name-matching': ['error', 'never'],
  'operator-assignment': ['off', 'never'],
  'no-underscore-dangle': ['error', { allowAfterThis: true }],
  'max-nested-callbacks': ['error', { max: 4 }],
  'prefer-destructuring': ['error', { array: false, object: false }], // ?
  'no-restricted-imports': ['error', { patterns: ['lodash/*'] }],
  'generator-star-spacing': ['error', { before: false, after: true }],
  'no-irregular-whitespace': ['error', { skipTemplates: true, skipStrings: true }],
  'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
  'nonblock-statement-body-position': ['error', 'beside'],
  'no-restricted-syntax': [
    'error',
    {
      selector: 'FunctionDeclaration[async=true]',
      message: 'Using async functions is restricted. Use Promise. ',
    },
    {
      selector: 'FunctionDeclaration[generator=true]',
      message: 'Using generator functions is restricted. Use Promise. ',
    },
    {
      selector: 'AwaitExpression',
      message: 'Using await construction is restricted. Use Promise. ',
    },
    {
      selector: 'YieldExpression',
      message: 'Using yield construction is restricted. Use Promise. ',
    },
  ],

  /**
   * @docs: https://github.com/benmosher/eslint-plugin-import
   *
   * Actually no TS types available
   *
   */

  'import/first': 'error',
  'import/no-absolute-path': 'error',
  'import/no-default-export': 'error',
  'import/no-mutable-exports': 'error',
  'import/order': [
    'error',
    {
      'newlines-between': 'always',
      groups: ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index'],
    },
  ],
  'import/no-restricted-paths': [
    'error',
    { basePath: __dirname, zones: [{ target: '../src', from: '../server' }] },
  ],

  /**
   * @docs: https://prettier.io/docs/en/options.html
   *
   * Actually no TS types available
   *
   */

  'prettier/prettier': [
    'warn',
    {
      semi: true,
      tabWidth: 2,
      proseWrap: 'never',
      printWidth: 100,
      arrowParens: 'always',
      singleQuote: true,
      trailingComma: 'es5',
      bracketSpacing: true,
      jsxBracketSameLine: false,
    },
  ],
};

module.exports = {
  rules: rulesConfig,
};
