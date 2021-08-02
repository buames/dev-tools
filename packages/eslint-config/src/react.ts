import type { Linter } from 'eslint';

const config: Linter.Config = {
  overrides: [
    {
      files: ['*.tsx'],
      extends: [require.resolve('./browser.js'), 'plugin:jsx-a11y/recommended'],
      plugins: ['jsx-a11y', 'react', 'react-hooks'],
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
          pragma: 'React',
          version: 'detect',
        },
      },
      rules: {
        // Support the new JSX runtime
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',

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

        // Allow to avoid references
        'react/destructuring-assignment': 'off',

        // Allow initialization to happen anywhere
        'react/state-in-constructor': 'off',

        // Align with the DOM instead, avoid "is" prefix
        'react/boolean-prop-naming': 'off',
        'react/jsx-boolean-value': ['error', 'never'],

        // Display name is inferred from function declarations
        'react/display-name': 'off',

        // Enforce a specific function type for function components
        'react/function-component-definition': [
          'off',
          {
            namedComponents: 'function-expression',
            unnamedComponents: 'function-expression',
          },
        ],
        'react/prefer-es6-class': 'off',
        'react/prefer-stateless-function': 'error',
        'react/jsx-pascal-case': ['error', { allowAllCaps: true, allowNamespace: true }],

        // Allow multiple components in a file
        'react/no-multi-comp': 'off',

        // Always self-close when applicable
        'react/self-closing-comp': [
          'error',
          {
            component: true,
            html: true,
          },
        ],
        'react/void-dom-elements-no-children': 'error',

        // Allow component level state
        'react/no-set-state': 'off',
        'react/no-unused-state': 'error',

        // Use alternatives instead of danger
        'react/no-danger': 'error',
        'react/no-danger-with-children': 'error',

        // Avoid deprecated APIs
        'react/no-deprecated': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-is-mounted': 'error',
        'react/no-unsafe': ['error', { checkAliases: true }],

        // Avoid bad patterns
        'react/jsx-uses-vars': 'error',
        'react/no-access-state-in-setstate': 'error',
        'react/no-array-index-key': 'error',
        'react/no-children-prop': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-redundant-should-component-update': 'error',
        'react/no-render-return-value': 'error',
        'react/no-string-refs': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-typos': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unstable-nested-components': 'error',
        'react/no-will-update-set-state': 'error',
        'react/require-optimization': 'off',
        'react/style-prop-object': 'error',

        // Accessibility requirements
        'react/button-has-type': 'error',

        // Security requirements
        'react/jsx-no-script-url': 'error',
        'react/jsx-no-target-blank': 'error',

        // Prevent react contexts from taking non-stable values
        'react/jsx-no-constructed-context-values': 'error',

        // Ensure JSX is returned
        'react/require-render-return': 'error',

        // Enforce consistent JSX spacing and syntax
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-space-before-closing': 'off',

        // Avoid interpolation as much as possible
        'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],

        // Allow either extension for JSX code, since some components may return null
        'react/jsx-filename-extension': [
          'error',
          { allow: 'as-needed', extensions: ['.ts', '.tsx'] },
        ],

        // Prefer shorthand fragments
        'react/jsx-fragments': ['error', 'syntax'],
        'react/jsx-no-useless-fragment': 'error',

        // Allow spreading of props
        'react/jsx-props-no-spreading': 'off',

        // Dont restrict prop/element usage
        'react/forbid-component-props': 'off',
        'react/forbid-dom-props': 'off',
        'react/forbid-elements': 'off',
        'react/no-adjacent-inline-elements': 'off',

        // Props are handled with TypeScript
        'react/default-props-match-prop-types': 'off',
        'react/forbid-foreign-prop-types': 'off',
        'react/forbid-prop-types': 'off',
        'react/jsx-sort-default-props': 'off',
        'react/no-unused-prop-types': 'off',
        'react/prefer-read-only-props': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/sort-prop-types': 'off',

        // Ensure keys are used correctly
        'react/jsx-key': [
          'error',
          {
            checkFragmentShorthand: true,
            checkKeyMustBeforeSpread: true,
          },
        ],

        // Allow any level of nesting
        'react/jsx-max-depth': 'off',

        // Prevent usage of .bind() in JSX props
        'react/jsx-no-bind': [
          'error',
          {
            ignoreRefs: true,
            allowArrowFunctions: true,
            allowFunctions: false,
            allowBind: false,
            ignoreDOMComponents: true,
          },
        ],

        // Prevent usage of unwrapped JSX strings
        'react/jsx-no-literals': ['off', { noStrings: true }],

        // Always sort props for better readability
        'react/jsx-sort-props': [
          'error',
          {
            callbacksLast: true,
            shorthandFirst: true,
            shorthandLast: false,
            ignoreCase: false,
            noSortAlphabetically: false,
            reservedFirst: true,
          },
        ],

        // Encourage on & handle event naming
        'react/jsx-handler-names': [
          'error',
          {
            eventHandlerPrefix: 'handle',
            eventHandlerPropPrefix: 'on',
          },
        ],

        // Sort component using React instead of TypeScript
        '@typescript-eslint/member-ordering': 'off',
        'react/static-property-placement': 'error',
        'react/sort-comp': [
          'error',
          {
            order: [
              'statics',
              'properties',
              'lifecycle',
              'everything-else',
              'handlers',
              'renderers',
            ],
            groups: {
              statics: ['propTypes', 'defaultProps'],
              properties: [
                '/^(?!on).+$/',
                '/^(?!handle).+$/',
                '/^(?!render).+$/',
                '/^.+Ref$/',
                'state',
              ],
              lifecycle: [
                'constructor',
                'getDerivedStateFromProps',
                'componentDidMount',
                'shouldComponentUpdate',
                'getSnapshotBeforeUpdate',
                'componentDidUpdate',
                'componentDidCatch',
                'componentWillUnmount',
              ],
              handlers: ['/^on.+$/', '/^handle.+$/'],
              renderers: ['/^render.+$/', 'render'],
            },
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['react-hooks'],
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
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
