//"test:api": "jest --colors --runInBand --config=./server/jest.api.config.js",

module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFiles: ['../jest.setup.js'],
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
  testMatch: ['<rootDir>/__test__/**/*.spec.(ts|js)?(x)'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
    },
  },
};
