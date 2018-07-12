module.exports = {
  plugins: ['vue'],
  extends: ['plugin:vue/recommended', 'prettier'],
  rules: {
    'object-shorthand': 'error',
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'prefer-template': 'error',
    'no-useless-concat': 'error',
    'no-unused-vars': 'error',
    'no-undefined': 'error',
    'no-undef-init': 'error',
    'no-undef': 'error',
  },
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
};
