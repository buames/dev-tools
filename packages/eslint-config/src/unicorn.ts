import type { Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['plugin:unicorn/recommended'],
  plugins: ['unicorn'],
  rules: {
    // Better error handling and implementation
    'unicorn/custom-error-definition': 'error',

    // Too abrasive / too many false positives
    'unicorn/consistent-destructuring': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/prefer-set-has': 'off',
    'unicorn/prevent-abbreviations': 'off',

    // Be explicit and avoid edge cases
    'unicorn/import-style': 'off',
    'unicorn/no-useless-undefined': 'off',

    // Doesn't work with naming preferences
    'unicorn/filename-case': 'off',

    // Allow any API
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-for-loop': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-regexp-test': 'off',

    // Sometimes it's more clear with the lonely if
    'unicorn/no-lonely-if': 'off',

    // Caught, handled by TypeScript
    'unicorn/no-array-callback-reference': 'off',

    // Not widely available
    'unicorn/prefer-at': 'off',
    'unicorn/prefer-object-has-own': 'off',
    'unicorn/prefer-string-replace-all': 'off',

    // Prefer modern APIs
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-node-protocol': 'off',
  },
};

export default config;
