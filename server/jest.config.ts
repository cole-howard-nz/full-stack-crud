/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',

  testEnvironment: 'node',
  testEnvironmentOptions: {
    NODE_ENV: 'test'
  },

  transform: {
    '^.+\\.ts$': 'ts-jest',
  },

  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.ts'],
  testMatch: ['**/__tests__/**/*.test.ts'],
  clearMocks: true,
}

export default config
