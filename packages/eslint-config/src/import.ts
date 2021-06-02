import type { Linter } from 'eslint';

const config: Linter.Config = {
  plugins: ['import'],
  settings: {
    'import/extensions': ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: { extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.json'] },
    },
  },
  rules: {
    'import/imports-first': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
        mjs: 'always',
        cjs: 'always',
        json: 'always',
      },
    ],

    // Prefer short paths
    'import/no-useless-path-segments': ['error', { noUselessIndex: true, commonjs: false }],

    // Too abrasive
    'import/no-relative-parent-imports': 'off',

    // Avoid deprecated APIs
    'import/no-deprecated': 'error',

    // Prefer named exports
    'import/no-anonymous-default-export': 'error',
    'import/no-default-export': 'off',
    'import/no-named-export': 'off',
    'import/prefer-default-export': 'off',

    // Don't resolve custom TS paths, but do others
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true, ignore: ['^:[a-z]'] }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/default': 'off',
        'import/no-cycle': 'off',

        // Prefer modern esm and mjs
        'import/no-amd': 'error',
        'import/no-commonjs': ['error', { allowRequire: true, allowConditionalRequire: true }],
      },
    },
  ],
};

export default config;
