import type {Config} from 'jest';
import path from 'path';

const config: Config = {
  testEnvironment: 'jest-environment-node',
  // transform: {
  //   '^.+\\.(js|jsx)$': 'babel-jest',
  //   '^.+\\.(ts|tsx)$': 'ts-jest',
  // },
  transform: {},
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  "transformIgnorePatterns": [
    `${path.join(process.cwd(), "../..")}/node_modules/(?!(oauth4webapi))`,
    // `../../node_modules/(?!(oauth4webapi))`,
    // "<rootDir>/../../node_modules/(?!(oauth4webapi)/)"
  ],
};

export default config;

