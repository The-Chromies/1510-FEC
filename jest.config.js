module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  verbose: true,
  roots: [
    './src/_tests_',
  ],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  // implement coverageThreshold when applicable tests are written -
  // will fail circleci build if not met
  // "coverageThreshold": {
  //   "global": {
  //     "branches": 70,
  //     "functions": 70,
  //     "lines": 70,
  //     "statements": 70
  //   }
  // },
  setupFiles: [
    './setupTests',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
};
