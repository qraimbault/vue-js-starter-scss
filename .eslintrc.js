module.exports = {
  plugins: ["vue"],
  extends: ["plugin:vue/recommended", "prettier"],
  rules: {
    "object-shorthand": "error",
    semi: ["error", "always"],
    "comma-dangle": ["error", "always"],
  }
};
