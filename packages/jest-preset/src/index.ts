import type { Config } from '@jest/types';

const STATIC_EXTS = '\\.{css,ttf,eot,otf,svg,woff,woff2,gif,png,jpg,jpeg,ico,yml,yaml}$';

const config: Config.InitialOptions = {
  collectCoverage: false,
  collectCoverageFrom: ['**/src/**/*.[t]s?(x)'],
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    [STATIC_EXTS]: require.resolve('./file-mock.js'),
  },
  preset: 'ts-jest',
  roots: ['<rootDir>/packages'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  testEnvironment: 'node',
  verbose: true,
};

export default config;
