# Minimal reproducible repo for jest-testing in turborepo for external esm packages using yarn

## Notes
- The package to test is in `./packages/jest-issue`
- `oauth4webapi` is an external package that has a build file that is esm only
  - That is, it's using `export const XXX` in a `.js` file, so it needs to be converted to commonjs `require()` syntax to be recognized in jest

## Getting Started
1. Stay in the root of the repo
2. Install packages for `jest-issue`
```cli
yarn workspace jest-issue install
```
3. Try running the test file `./packages/jest-issue/example.spec.ts`
```cli
yarn workspace jest-issue test example

// Runs `jest --nocache example`
```

## Misc
- To get the current jest config
```cli
yarn workspace jest-issue jest --showConfig
```

## Issues
- `@babel/plugin-transform-modules-commonjs` in `.babelrc` isn't working to convert the esm exports in the external package build file
- `transformIgnorePatterns` in `jest.config.ts` isn't working to transform the external package

## Error
- When running `yarn workspace jest-issue test example`

```js
Jest encountered an unexpected token

Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

By default "node_modules" folder is ignored by transformers.

Here's what you can do:
  • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
  • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
  • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
  • If you need a custom transformation specify a "transform" option in your config.
  • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

You'll find more details and examples of these config options in the docs:
https://jestjs.io/docs/configuration
For information about custom transformations, see:
https://jestjs.io/docs/code-transformation

Details:

/Users/(...)/turborepo_jest_issue/node_modules/oauth4webapi/build/index.js:7
export const clockSkew = Symbol();
^^^^^^

SyntaxError: Unexpected token 'export'

> 1 | import * as o from "oauth4webapi";
    | ^
  2 |
  3 | export const value = o.skipStateCheck;

  at Runtime.createScriptFromCode (../../node_modules/jest-runtime/build/index.js:1495:14)
  at Object.<anonymous> (example.ts:1:1)
  at Object.<anonymous> (example.spec.ts:1:1)
```