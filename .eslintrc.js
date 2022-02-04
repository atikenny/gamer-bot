const { eslintConfig } = require('@chealt/check');

module.exports = {
  ...eslintConfig,
  parser: '@babel/eslint-parser',
  extends: ['plugin:react/recommended'],
  settings: {
    'import/resolver': 'webpack',
    parserOptions: {
      requireConfigFile: false,
      ecmaFeatures: {
        jsx: true
      }
    },
    react: {
      version: '17'
    }
  },
  plugins: ['react', 'import', 'prettier']
};
