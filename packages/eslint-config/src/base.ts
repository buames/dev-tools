import type { Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['airbnb-base'],
  rules: {
    // Annoying. Some class methods are nice to not be static
    'class-methods-use-this': 'off',

    // Allow either kind of comments (docblocks vs inline)
    'multiline-comment-style': 'off',

    // Prefer object destructuring
    // 'prefer-destructuring': ['error', { object: true, array: false }],
    'prefer-destructuring': 'off',

    // Avoid bad or problematic syntax/patterns
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'error',
    'no-dupe-else-if': 'error',
    'no-import-assign': 'error',
    'no-native-reassign': 'error',
    'no-negated-condition': 'error',
    // 'no-param-reassign': ['error', { props: false }],
    'no-promise-executor-return': 'error',
    'no-setter-return': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
    'no-useless-call': 'error',
    'require-atomic-updates': 'error',

    // Prefer explicitness for readability
    'no-implicit-coercion': 'error',

    // Prefer compact syntax when applicable
    'prefer-exponentiation-operator': 'error',
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

    // Overkill
    'require-unicode-regexp': 'off',

    // Doesn't scope correctly with `this` in arrow functions
    'no-invalid-this': 'off',

    // Allow modern APIs
    'no-restricted-syntax': 'off',
  },
};

export default config;
