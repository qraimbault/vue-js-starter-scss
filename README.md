# Vue.JS Starter

<p align="center">
  <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">
    <img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo">
  </a>
</p>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.5.16-brightgreen.svg" alt="vue">
  </a>
  <a href="https://travis-ci.org/PanJiaChen/vue-element-admin" rel="nofollow">
    <img src="https://travis-ci.org/PanJiaChen/vue-element-admin.svg?branch=master" alt="Build Status">
  </a>
  <img src="https://img.shields.io/npm/l/vue.svg" alt="License">
</p>

A lightweight Vue.js starter.

## Built-in modules

- [Vue.js 2](https://vuejs.org/)
- [Vue Router 3](https://router.vuejs.org/)
- [Vuex 3](https://vuex.vuejs.org/)
- [Vue Cookie](https://github.com/alfhen/vue-cookie)
- [ES6](http://es6-features.org/) using [Babel](https://babeljs.io/)
- [Webpack 4](https://webpack.js.org/)
- [Axios](https://github.com/axios/axios/)
- [SASS](http://sass-lang.com/)
- [ESLint](http://eslint.org/)
- [SASSLint](https://github.com/sasstools/sass-lint)

You can find documentation and informations about each modules by following the above links.

## Usage

We recommend using Yarn but you can also use NPM.

There is only 3 commands that you can either run using `npm run` or `yarn`:

- `start` to launch a developpement server with hot reload.
- `build` to create a production version in `/dist`.
- `serve` to launch a web server in `/dist`.

## Configuration

Application configuration is located in `src/config.js`.

Build can be configured in `webpack.config.js`, like the dev server host and port.

```js
serve: {
  host: "localhost",
  port: 3000
}
```

SASS Linter can be configured in `.sass-lint.yml`.

ESLint can be configured in `.eslintrc.js`.

## Routing

Routes are listed in `src/router/index.js` and should contain a meta node with a title, it will be displayed as the document.title, concatened with the separator and the site name in application config.

```js
{
  "path": "/",
  "name": "Home",
  "component": Index,
  "meta": {
    "title": "Accueil"
  }
}
```

## API

API use Axios and the base configuration is set in application configuration file.

```js
export const APIConfig = {
  baseURL: "",
  withCredentials: true,
  crossDomain: true,
  contentType: false,
  responseType: "json",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};
```

Axios configuration reference is available [here](https://github.com/axios/axios#request-config).

The Axios instance is then generated and exported in `src/helpers/API.js` and you can import it in your views/components this way:

```js
import api from "@API";
```

## Vuex

The Vuex store is located in `src/vuex`.

There is a main config file (`src/vuex/store.js`) and a `modules` directories.

If your application is simple, you can put your state, getters, mutators and actions directly in the store. If it is more complexe, create one sub-directory in `modules` by functionnality and import in in the store.

The store is accessible from any component/view using `this.$store`.

## Style

All your style should be located in the `src/scss` directory.

There is 3 sub-directories:

- `global` for your reset, mixins, variables, functions.
- `views` for your view specific styles.
- `components` for your components specific styles.

You should import styles in the `<script>` tag in each component.

You can also put style in the `<style>` tag in each component, scoped or not, the style injection works the same way using scss files or `<style>` tag.

## Single file component

This starter uses [Single File Components](https://vuejs.org/v2/guide/single-file-components.html) structure, which is more suitable for large project but doesn't make it harder for small apps.

### Views

Views are located in `src/views` and should have their unique styles. It can be compared to a "page". The routes are pointing to views and not to components. They can include one or more components or even none.

### Components

Components are located in `src/components` and should have their unique styles. Components must be imported and used in views. They should be separated in sub-directories organized by views or by functionnalities.

## Webpack Aliases

Webpack allows to put some aliases in the webpack config, so you can have shorter and more friendly import statements in your components/views. By default, this starter comes with some aliases listed bellow:

- `@API` pointing to `src/helpers/API.js`, so directly to the configured Axios instance
- `@Config` pointing to `src/config.js`
- `@Component` pointing to `src/components`
- `@ComponentStyle` pointing to `src/scss/components`
- `@View` pointing to `src/views`
- `@ViewStyle` pointing to `src/scss/views`

An example usage of these aliases is to get the API helper from a view/component:

```js
import api from "@API";
```

Or to get a component from a view:

```js
import Articles from "@Component/Index/Articles.vue";
```

## License

All the content is under [MIT license](https://github.com/QRaimbault/vue-js-starter-scss/blob/master/LICENSE).
