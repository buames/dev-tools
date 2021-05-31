# @buames/prettier-config

Shared [Prettier](https://prettier.io) configuration. Read more on sharing prettier configurations
[here](https://prettier.io/docs/en/configuration.html#sharing-configurations).

## Installation

Install with yarn

```sh
yarn add --dev @buames/prettier-config
```

Or install with npm

```sh
npm install @buames/prettier-config
```

## Usage

**package.json**

```jsonc
{
  // ...
  "prettier": "@buames/prettier-config"
}
```

**JSON**

```jsonc
// .prettierrc.json
"@buames/prettier-config"
```

**JavaScript**

```js
// prettier.config.js or .prettierrc.js
module.exports = '@buames/prettier-config';
```

Or with overrides

```js
// prettier.config.js or .prettierrc.js
module.exports = {
  ...require('@buames/prettier-config'),
  // ... your overrides
};
```
