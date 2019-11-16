module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    'dot-notation': ['error'],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/camelcase': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/jsx-curly-brace-presence': ['error'],
    'object-shorthand': ['error', 'always'],
    'import/order': ['error', { 'newlines-between': 'always' }],
    curly: 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    'jsx-quotes': ['error', 'prefer-double'],
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx', '*.spec.tsx'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 0,
      },
    },
  ],
};

