# DEVELOPING

## Tech stack

1. skeleton app set up with [React + TypeScript + Vite](https://vitejs.dev/guide/)
1. [pnpm](https://pnpm.io/) as package manager
1. [vitest](https://vitest.dev/) as testing suite

## Prerequisites

Make sure you have installed the following:

1. [Node.js](https://nodejs.org/en/download/current)
2. [pnpm](https://pnpm.io/installation)

## Getting started

1. inside the app folder run `pnpm install`
1. then run `pnpm dev` to spin up the app
1. as you change the code, the app should refresh itself
1. you can run `pnpm test` in a separate terminal to keep an eye on tests

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
