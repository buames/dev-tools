import type { Linter } from 'eslint';

const config: Linter.Config = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      rules: {
        // Doesn't find namespaces
        'no-undef': 'off',

        // Preference
        'no-useless-constructor': 'off',

        // Handled by TypeScript
        'no-redeclare': 'off',
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',

        // Allow inferrence
        '@typescript-eslint/explicit-function-return-type': 'off',

        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/method-signature-style': 'error',
        '@typescript-eslint/no-explicit-any': [
          'error',
          { fixToUnknown: true, ignoreRestArgs: true },
        ],
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-redeclare': ['error', { ignoreDeclarationMerge: true }],
        '@typescript-eslint/no-shadow': [
          'error',
          {
            ignoreTypeValueShadow: true,
            ignoreFunctionTypeParameterNameValueShadow: true,
          },
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
          { vars: 'all', args: 'none', caughtErrors: 'all', ignoreRestSiblings: true },
        ],
        '@typescript-eslint/no-use-before-define': [
          'warn',
          { functions: false, classes: false, variables: false, typedefs: false },
        ],
      },
    },
  ],
};

export default config;
