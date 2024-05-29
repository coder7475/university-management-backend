import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.ts'],
    rules: {
      eqeqeq: 'error',
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-trailing-spaces': 'warn',
      'no-console': 'warn',
      'no-shadow': 'error',
    },
  },
];
