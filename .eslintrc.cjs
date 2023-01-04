/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
  env: {
    'vue/setup-compiler-macros': true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
    'no-undef': 'error',
    indent: ['error', 2, {SwitchCase: 1}],
    quotes: ['error', 'single'],
    'keyword-spacing': ['error', {before: true, after: true}],
    'comma-spacing': ['error', {before: false, after: true}],
    'vue/multi-word-component-names': 'off'
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     'singleQuote': true,
    //     'semi': false,
    //     'useTabs': false,
    //     'trailingComma': 'none'
    //   }
    // ]
  }
}
