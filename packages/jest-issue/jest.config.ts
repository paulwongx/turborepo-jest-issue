import type {Config} from 'jest';
import path from 'path';

const config: Config = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // To handle absolute paths
    '^@/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['./jest.setup.ts'],
  // https://stackoverflow.com/a/49676319
  "transformIgnorePatterns": [
    // "/node_modules/(?!(oauth4webapi)/)",
    `${path.join(process.cwd(), "../..")}/node_modules/(?!(oauth4webapi))`,
    // `../../node_modules/(?!(oauth4webapi))`,
    // "<rootDir>/../../node_modules/(?!(oauth4webapi)/)"
  ],
};

export default config;

