module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    semi: [2, 'never'],
    'no-console': 'off',
    'linebreak-style': 'off',
  },
}
