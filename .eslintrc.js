module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard', 'plugin:react/recommended', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],

  rules: {
    semi: ['error', 'always'],
    'no-console': 'warn',
    'id-length': ['error', { min: 2, exceptions: ['x', 'y', 'z', 'i'] }],
  },
};
