module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/no-cycle': 'off',
    'import/no-mutable-exports': 'off',
    'import/extensions': 'off',
    'no-useless-return': 'off',
    'no-inner-declarations': 'off',
    'func-names': 'off',
    'no-restricted-syntax': 'off',
  },
};
