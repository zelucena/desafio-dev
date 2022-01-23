/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  coverageReporters: ['html'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  modulePathIgnorePatterns: ['coverage/'],
  modulePaths: [
    '<rootDir>'
  ],
  moduleNameMapper: {
    '^@shared/(.*)': '<rootDir>/shared/$1',
    '^@config/(.*)': '<rootDir>/config/$1',
    '^@modules/(.*)': '<rootDir>/modules/$1',
  }
};
