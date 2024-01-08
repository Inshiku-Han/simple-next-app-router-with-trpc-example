/* eslint-disable no-undef */

module.exports = {
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'no-unused-vars': 'off',
    'prefer-const': [
      'warn',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],
    'react/jsx-curly-brace-presence': [
      'warn',
      {
        props: 'never',
        children: 'never',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        fixStyle: 'inline-type-imports',
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
  },
}
