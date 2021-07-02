module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-unmodified-loop-condition': 'off',
    semi: [1, 'always']
  }
};
