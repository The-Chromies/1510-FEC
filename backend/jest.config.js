/* eslint-disable max-len */
module.exports = {
  collectCoverage: true,
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  verbose: true,
  roots: [
    './_tests_',
  ],
  // ,
  // implement coverageThreshold when applicable tests are written - will fail circleci build if not met
  // "coverageThreshold": {
  //   "global": {
  //     "branches": 70,
  //     "functions": 70,
  //     "lines": 70,
  //     "statements": 70
  //   }
  // }
  // coverage report allows code coverage to be viewed in a more succinct manner, we can decide on our preference as a group
  // ,
  // "coverageReporters": [
  //   "text-summary"
  // ]
};
