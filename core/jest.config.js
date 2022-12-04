/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transform: { '\\.js$': 'babel-jest' },
  transformIgnorePatterns: [
    // `antlr4` library needs to be transpiled because it contains ES modules
    '/node_modules/(?!antlr4/)'
  ]
}

module.exports = config
