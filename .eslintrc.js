const { eslintConfig } = require("@chealt/check");

module.exports = {
  ...eslintConfig,
  extends: [
    ...eslintConfig.extends,
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  settings: {
    "import/resolver": "webpack",
    parserOptions: {
      requireConfigFile: false,
      ecmaFeatures: {
        jsx: true,
      },
    },
    react: {
      version: "detect",
    },
  },
  plugins: [...eslintConfig.plugins, "react"],
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
  },
};
