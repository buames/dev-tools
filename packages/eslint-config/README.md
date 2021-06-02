# @buames/eslint-config

## Installation

Install with yarn

```sh
yarn add --dev @buames/eslint-config
```

Or install with npm

```sh
npm install @buames/eslint-config
```

## Usage

The [base] config includes rules for any TypeScript-based project. Includes recommended and optional
rules from [eslint], [prettier], [eslint-plugin-import], [eslint-plugin-unicorn],
[eslint-plugin-jest], and more. TypeScript specific rules are enabled using
[@typescript-eslint/eslint-plugin] and [@typescript-eslint/parser].

```js
module.exports = {
  root: true,
  extends: ['@buames/eslint-config'],
};
```

### Presets

Not included by default, these additional preset configs can also be extended.

| Name    | Description                                                                                 |
| ------- | ------------------------------------------------------------------------------------------- |
| [node]  | Sets the environment to Node.js and enabled node specific rules using [eslint-plugin-node]. |
| [react] | _... todo_                                                                                  |

Be sure to include the full scope name when extending these additional presets.

```js
// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    '@buames/eslint-config',
    '@buames/eslint-config/node',
    // ... and so on
  ],
};
```

[base]: src/base.ts
[node]: src/node.ts
[react]: src/react.ts
[eslint]: https://eslint.org
[eslint-plugin-import]: https://github.com/benmosher/eslint-plugin-import
[eslint-plugin-jest]: https://github.com/jest-community/eslint-plugin-jest
[eslint-plugin-node]: https://github.com/mysticatea/eslint-plugin-node
[eslint-plugin-unicorn]: https://github.com/sindresorhus/eslint-plugin-unicorn
[prettier]: https://prettier.io
[@typescript-eslint/parser]: https://github.com/typescript-eslint/typescript-eslint
[@typescript-eslint/eslint-plugin]: https://github.com/typescript-eslint/typescript-eslint
