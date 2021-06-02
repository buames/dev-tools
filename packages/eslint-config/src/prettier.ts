import type { Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};

export default config;
