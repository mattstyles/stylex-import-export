
# stylex external dependency example

> Goal is to publish, consume, and build an external dependency that uses [stylex](https://stylexjs.com/) to author styling

## Getting started

This is not a monorepo, each folder is a separate thing. Use [pnpm](https://pnpm.io/) to install dependencies in each folder/package.

`stylex-component-export` is published to npm. It uses vite to build with a tsconfig scaffolded from `pnpm create vite`. It transpiles each file from `src` (stylex will need this for variable support, and we also want to support preserving directives for React Server Components) and does not apply the stylex plugin as it will rely on the consumer to do that. As such the babel file here is redundant. See [evaluation](#evaluation) for more details.

`nextjs-stylex-import` is scaffolded using `pnpx create-next-app` and stylex integration follows instructions from the stylex docs (adding babelrc and plugin to next config).

## Evaluation

Stylex is still fairly new as a public package so things move quickly. I have added notes against specific versions, expect things to change.

Stylex version in packages will be updated so if you want a historical reference find the diff that bumped stylex version (I'll try to add tags when this happens).

### Stylex 0.4.1

* External dependencies _can_ bundle css, but stylex works best when consumers build the css. ESM is not currently supported, [this diff](https://github.com/facebook/stylex/commit/059c800db038310ac52bbdb333ea220cd18010c5) _might_ fix that (or maybe some BABEL_ENV stuff).
* Dependencies using stylex also need to be included in NextJS transpile modules (possibly for the babel interop stuff).
* A custom babel config is required to enable the stylex plugin which disables SWC as a compiler for Next. This, in turn, invalidates _some_ NextJS packages (next/font, probably server actions, probably more). [This diff](https://github.com/facebook/stylex/issues/297) will likely fix this. 
* Repo contains a babel config for `stylex-component-export` but this is unnecessary. It is kept as we want to test building css for each package alongside exporting the JS only (consumer builds css).