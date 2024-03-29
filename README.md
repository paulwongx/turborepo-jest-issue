# Turborepo / Jest - Unable to transpile external ESM package

### Issue
Unable to transpile external package exported in ESM syntax

### Jest Version

29.5.0

### Steps to reproduce

1. Clone my repo at https://github.com/paulwongx/turborepo-jest-issue
2. Install packages `yarn workspace jest-issue install`
3. Run the test `yarn workspace jest-issue test example`

### Expected behavior

I expect the test to compile, run and pass

### Actual behavior
Jest encounters an unexpected token (see below)

```js
`Jest encountered an unexpected token`
    /Users/.../turborepo_jest_issue/node_modules/oauth4webapi/build/index.js:7
    export const clockSkew = Symbol();
    ^^^^^^

    SyntaxError: Unexpected token 'export'

    > 1 | import * as o from "oauth4webapi";
        | ^
      2 |
      3 | export const value = o.skipStateCheck;
```
### Additional context

- `@babel/plugin-transform-modules-commonjs` in `.babelrc` isn't working to convert the esm exports in the external package build file
- `transformIgnorePatterns` in `jest.config.ts` isn't working to transform the external package

### Environment

```shell
System:
    OS: macOS 13.4
    CPU: (4) x64 Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz
  Binaries:
    Node: 16.14.2 - /usr/local/bin/node
    Yarn: 1.22.18 - /usr/local/bin/yarn
    npm: 8.5.0 - /usr/local/bin/npm
```

### jest.config.ts
```js
import type {Config} from 'jest';
import path from 'path';

const config: Config = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  "transformIgnorePatterns": [
    `${path.join(process.cwd(), "../..")}/node_modules/(?!(oauth4webapi))`,
  ],
};

export default config;

```

## .babelrc
```js
{
  "env": {
    "test": {
      "plugins": ["@babel/plugin-transform-modules-commonjs"]
    }
  }
}
```

### example.ts
```js
import * as o from "oauth4webapi";

export const value = o.skipStateCheck;
```

### example.spec.ts
```js
import {value} from "./example";

describe("example", () => {
  it("should be true", () => {
    expect(value).toBe(true);
  });
});
```
