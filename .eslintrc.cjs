module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  globals: {},

  parser: 'vue-eslint-parser', // 用于解析.vue文件

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    '.autoImport/.eslintrc-auto-import.json',
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: ['vue', '@typescript-eslint'],

  rules: {},
}
