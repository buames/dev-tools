import type { Linter } from 'eslint';

const config: Linter.Config = {
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx'],
      extends: ['plugin:jest/recommended'],
      env: {
        node: true,
        jest: true,
      },
      rules: {
        'max-classes-per-file': 'off',
        'no-console': 'off',
        'no-magic-numbers': 'off',
        'sort-keys': 'off',

        // Some imports are dev dependencies
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};

export default config;
