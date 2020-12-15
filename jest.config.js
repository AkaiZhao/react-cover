module.exports = {
  setupFilesAfterEnv: ['<rootDir>jest.setup.js'],
  testTimeout: 120000,
  moduleNameMapper: {
    '^.+\\.(css|less)$': 'identity-obj-proxy',
  },
  testEnvironmentOptions: {
    resources: 'usable',
  },
}
