module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  testRegex: 'test.js$',
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest"
  }
};
