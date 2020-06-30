module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/@typescript-eslint',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      {overrides: {constructors: 'no-public'}},
    ],
    '@typescript-eslint/explicit-function-return-type': ['warn', {allowExpressions: true}],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-use-before-define': [
      2,
      {
        functions: false,
      },
    ],
    '@typescript-eslint/no-inferrable-types': [
      'warn',
      {
        ignoreParameters: true,
      },
    ],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
  },
};
