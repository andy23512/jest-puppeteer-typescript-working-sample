module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.test\\.ts$',
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
}
