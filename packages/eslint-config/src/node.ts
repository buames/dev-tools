import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  extends: ['plugin:node/recommended'],
  plugins: ['node'],
  env: {
    browser: false,
    node: true,
  },
  rules: {
    // Ensure proper error handling
    'node/no-callback-literal': 'error',

    // Prefer globals
    'node/prefer-global/buffer': 'error',
    'node/prefer-global/console': 'error',
    'node/prefer-global/process': 'error',
    'node/prefer-global/text-decoder': 'error',
    'node/prefer-global/text-encoder': 'error',
    'node/prefer-global/url': 'error',
    'node/prefer-global/url-search-params': 'error',

    // Prefer promises APIs when they are available
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',

    // Prefer TypeScript/ES modules instead
    'node/exports-style': 'off',
    'node/no-exports-assign': 'off',
    'node/no-unsupported-features/es-syntax': 'off',

    // Handled by eslint-plugin-import
    'node/file-extension-in-import': 'off',
    'node/no-extraneous-import': 'off',
    'node/no-extraneous-require': 'off',
    'node/no-missing-import': 'off',
    'node/no-missing-require': 'off',

    // Common in node scripts
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
  },
};

export default config;
