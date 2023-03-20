module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: '18.2.0',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'import'],
  extends: ['plugin:@web-bee-ru/react', 'plugin:import/recommended', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    // @TODO: разобраться почему всё в ошибках, если это убрать
    'react/jsx-key': 'off',
    'unicorn/filename-case': 'off',
    // @NOTE: typescript это контролирует
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'index', 'parent', 'sibling'],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
      },
    ],
    'quote-props': 'off',
    'react/display-name': 'off',
  },
};
