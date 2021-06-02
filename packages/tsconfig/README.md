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

There are 3 different configurations that can be extended.

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
enable the `DOM` lib and set the JSX transform to `react`. This extends the `base` config.

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

[base]: tsconfig.json
[react.json]: react.json
[workspaces.json]: workspaces.json
[tsconfig]: https://www.typescriptlang.org/tsconfig
