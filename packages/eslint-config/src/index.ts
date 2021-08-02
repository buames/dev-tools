import type { Linter } from 'eslint';

// Latest ECMA version and syntax to support
const ECMA_VERSION = 2020;

const config: Linter.Config = {
  extends: [
    'airbnb-base',
    require.resolve('./base.js'),
    require.resolve('./typescript.js'),
    require.resolve('./import.js'),
    require.resolve('./unicorn.js'),
    require.resolve('./tests.js'),
    require.resolve('./prettier.js'),
  ],
  env: {
    [`es${ECMA_VERSION}`]: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: ECMA_VERSION,
  },
  reportUnusedDisableDirectives: true,
};

export default config;
