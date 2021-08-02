import type { Linter } from 'eslint';

const config: Linter.Config = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      rules: {
        // Allow all types (except `any`)
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-invalid-void-type': 'off',
        '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],

        // Allow inferrence
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        // Prefer explicit type declarations
        '@typescript-eslint/method-signature-style': 'error',
        '@typescript-eslint/no-inferrable-types': [
          'error',
          { ignoreParameters: true, ignoreProperties: true },
        ],

        // Prefer interfaces
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],

        // Too abrasive
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-var-requires': 'off',

        // Doesn't find namespaces
        'no-undef': 'off',

        // Handled by TypeScropt
        'no-redeclare': 'off',
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',

        '@typescript-eslint/no-redeclare': ['error', { ignoreDeclarationMerge: true }],
        '@typescript-eslint/no-shadow': ['error', { ignoreTypeValueShadow: true }],
        '@typescript-eslint/no-unused-vars': [
          'error',
          { vars: 'all', args: 'none', caughtErrors: 'all', ignoreRestSiblings: true },
        ],
        '@typescript-eslint/no-use-before-define': [
          'warn',
          { classes: true, enums: true, functions: false, typedefs: false, variables: true },
        ],
        '@typescript-eslint/no-useless-constructor': 'error',
      },
    },
  ],
};

export default config;
