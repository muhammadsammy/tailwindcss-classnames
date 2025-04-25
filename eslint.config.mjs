import { defineConfig } from "eslint/config";
import _import from "eslint-plugin-import";
import { fixupPluginRules } from "@eslint/compat";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

const rootConfig = {
	extends: compat.extends(
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"prettier/@typescript-eslint",
		"prettier",
	),
	files: ["src/**/*.{js,ts}"],
	ignores: [
		"**/jest.config.js",
		"**/.eslintrc.js",
		"**/rollup.config.js",
		"**/tailwind.config.js",
		"**/tailwindcss-classnames.ts",
		"**/*.js",
	],
	plugins: {
		import: fixupPluginRules(_import),
	},
	languageOptions: {
		parser: tsParser,
		ecmaVersion: 2019,
		sourceType: "module",

		parserOptions: {
			project: "./tsconfig.json",
		},
	},
	rules: {
		"no-use-before-define": "off",
		"@typescript-eslint/no-unsafe-call": 0,
		"@typescript-eslint/no-unsafe-member-access": 0,
		"@typescript-eslint/explicit-member-accessibility": [
			"warn",
			{
				overrides: {
					constructors: "no-public",
				},
			},
		],
		"@typescript-eslint/explicit-function-return-type": [
			"warn",
			{
				allowExpressions: true,
			},
		],
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_",
				caughtErrorsIgnorePattern: "^_",
			},
		],

		"@typescript-eslint/no-explicit-any": 1,
		"@typescript-eslint/no-use-before-define": [
			2,
			{
				functions: false,
				classes: false,
			},
		],
		"@typescript-eslint/no-inferrable-types": [
			"warn",
			{
				ignoreParameters: true,
			},
		],
		"lines-between-class-members": [
			"error",
			"always",
			{
				exceptAfterSingleLine: true,
			},
		],
		"import/prefer-default-export": "off",
		"import/no-default-export": "error",
	},
};

const nonConfigurableClassnamesFolderConfig = {
	files: ["src/cli/lib/non-configurable/**/*.ts"],
	rules: {
		"import/no-default-export": "off",
	},
};

export default defineConfig([rootConfig, nonConfigurableClassnamesFolderConfig]);
