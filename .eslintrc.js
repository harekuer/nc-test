module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'standard',
    'plugin:vue/vue3-essential', // https://eslint.vuejs.org/user-guide/#installation
    'prettier',
    'prettier/standard',
    'prettier/vue',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      { semi: false, singleQuote: true, 'end-of-line': 'lf' },
    ],
    'spaced-comment': 'off',
  },
  ignorePatterns: ['**/dist/', '**/*.html'],
  overrides: [
    {
      files: ['**/__tests__/**'],
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],
}
