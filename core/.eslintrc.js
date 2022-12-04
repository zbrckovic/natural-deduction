module.exports = {
  env: {
    es2021: true,
    node: true,
    'jest/globals': true
  },
  ignorePatterns: ['**/antlr4-generated/*.js'],
  extends: 'standard',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['jest'],
  rules: {}
}
