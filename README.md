# Geist UI

[Geist UI](https://github.com/geist-org/react) for Svelte

## Consuming components

Your package.json has a `"svelte"` field pointing to `components/index.js`, which allows Svelte apps to import the source code directly, if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/sveltejs/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader) (where [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in your webpack config includes `"svelte"`). **This is recommended.**

> This is not available for now
> For everyone else, `npm run build` will bundle your component's source code into a plain JavaScript module (`dist/index.mjs`) and a UMD script (`dist/index.js`). This will happen automatically when you publish your component to npm, courtesy of the `prepublishOnly` hook in package.json.

## Developing

This is a monorepo with both docs and components inside here.
run `npm dev` and start editing files in components

component's source code lives in `components/`.

You can create a package that exports multiple components by adding them to the `components` directory and editing `components/index.js` to reexport them as named exports.
