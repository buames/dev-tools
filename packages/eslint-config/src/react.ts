import type { Linter } from 'eslint';

const config: Linter.Config = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['airbnb', 'airbnb/hooks'],
      env: {
        browser: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        // Support the new JSX runtime
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',

        // Allow spreading of props
        'react/jsx-props-no-spreading': 'off',

        // Allow to avoid references
        'react/destructuring-assignment': 'off',

        // Prefer shorthand fragments
        'react/jsx-no-useless-fragment': 'error',

        // Allow initialization to happen anywhere
        'react/state-in-constructor': 'off',

        // Props are handled with TypeScript
        'react/jsx-sort-default-props': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/sort-prop-types': 'off',

        // Avoid deprecated APIs, Bad Patterns
        'react/no-typos': 'error',
        'react/no-unsafe': 'error',

        // More
        'react/jsx-pascal-case': ['error', { allowAllCaps: true, allowNamespace: true }],
        'react/jsx-filename-extension': [
          'error',
          { allow: 'as-needed', extensions: ['.ts', '.tsx'] },
        ],
        'react/static-property-placement': 'off', // sorting

        // Disabled by Prettier (https://github.com/prettier/eslint-config-prettier/blob/main/index.js#L122)
        'react/jsx-child-element-spacing': 'off',
        'react/jsx-closing-bracket-location': 'off',
        'react/jsx-closing-tag-location': 'off',
        'react/jsx-curly-newline': 'off',
        'react/jsx-curly-spacing': 'off',
        'react/jsx-equals-spacing': 'off',
        'react/jsx-first-prop-new-line': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-max-props-per-line': 'off',
        'react/jsx-newline': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-props-no-multi-spaces': 'off',
        'react/jsx-tag-spacing': 'off',
        'react/jsx-wrap-multilines': 'off',
      },
    },
    {
      files: ['*.test.tsx'],
      rules: {
        'react/jsx-no-bind': 'off',
      },
    },
  ],
};

export default config;
