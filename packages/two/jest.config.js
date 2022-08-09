/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json"
    }
  }
  ,
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: 'node',
};