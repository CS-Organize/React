/** @type {import("prettier").Config} */
const config = {
  useTabs: false,
  tabWidth: 2,
  singleQuote: true,
  semi: true,
  printWidth: 80,
  endOfLine: 'auto',

  proseWrap: 'preserve',
  bracketSpacing: false,
  arrowParens: 'always',
  htmlWhitespaceSensitivity: 'css',
  quoteProps: 'as-needed',
  trailingComma: 'all',

  jsxSingleQuote: false,
  jsxBracketSameLine: false,

  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],

  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/.*$', '^[./]'],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
};

module.exports = config;
