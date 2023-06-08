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
    // `../../node_modules/(?!(oauth4webapi))`,
    // "<rootDir>/../../node_modules/(?!(oauth4webapi)/)"
  ],
};

export default config;

