/** @type {import('prettier').Config} */
module.exports = {
	bracketSpacing: true,
	tabWidth: 2,
	singleQuote: true,
	jsxSingleQuote: true,
	printWidth: 100,
	arrowParens: 'always',
	useTabs: false,
	trailingComma: 'none',
	semi: true,

	plugins: [require('prettier-plugin-tailwindcss')]
 }
