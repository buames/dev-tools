import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  env: {
    browser: true,
  },
  overrides: [
    {
      files: ['**/tests/**/*.test.{ts,tsx}', '**/tests/**/*.{ts,tsx}', 'test.{ts,tsx}'],
      env: {
        browser: false,
      },
    },
  ],
};

export default config;
