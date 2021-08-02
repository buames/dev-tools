# @buames/tsconfig

Re-usable [tsconfig] for TypeScript projects.

## Installation

Install with yarn

```sh
yarn add --dev @buames/tsconfig
```

Or install with npm

```sh
npm install @buames/tsconfig
```

## Usage

There are 4 different configurations that can be extended.

### Base

Extend the [base] config in your root `tsconfig.json`.

```jsonc
// tsconfig.json
{
  "extends": "@buames/tsconfig",
  "compilerOptions": {
    "outDir": "dist"
    // ... your compiler options
  },
  "exclude": [],
  "include": []
}
```

### Workspaces

Enable support for project references by extending the [workspaces.json] config in your root
`tsconfig.json` and in each package's `tsconfig.json`. This extends the `base` config.

```jsonc
// tsconfig.json
{
  "extends": "@buames/tsconfig/workspaces.json",
  "files": [],
  "references": [
    { "path": "packages/<directory_name>" }
    // ... your references
  ]
}
```

```jsonc
// package/<directory_name>/tsconfig.json
{
  "extends": "@buames/tsconfig/workspaces.json",
  "compilerOptions": {
    "outDir": "dist"
    // ... your compiler options
  },
  "exclude": [],
  "include": [],
  "references": []
}
```

### React

Enable support for React by extending the [react.json] config your root `tsconfig.json`. This will
extends the `base` config, enables the `DOM` lib, and sets the JSX transform to `react`.

```jsonc
// tsconfig.json
{
  "extends": "@buames/tsconfig/react.json",
  "compilerOptions": {
    "outDir": "dist"
    // ... your compiler options
  },
  "exclude": [],
  "include": []
}
```

### Next.js

Enable support for [Next.js](https://github.com/vercel/next.js) by extending the [nextjs.json]
config your root `tsconfig.json`. This extends the `base` config and enables required
[Next.js TypeScript](https://nextjs.org/docs/basic-features/typescript) rules.

```jsonc
// tsconfig.json
{
  "extends": "@buames/tsconfig/nextjs.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "*": ["*", "src/*"]
    }
    // ... your compiler options
  },
  "exclude": ["node_modules"],
  "include": ["**/*.ts", "**/*.tsx"]
}
```

[base]: tsconfig.json
[nextjs.json]: nextjs.json
[react.json]: react.json
[workspaces.json]: workspaces.json
[tsconfig]: https://www.typescriptlang.org/tsconfig
