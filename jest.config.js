module.exports = {
  name: '@salespark/mailerlite-api',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['jest-extended'],
};
