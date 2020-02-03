# Vue.JS Starter

<p align="center">
  <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">
    <img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo">
  </a>
</p>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.11-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/qraimbault/vue-js-starter-scss/releases">
    <img src="https://img.shields.io/github/v/release/qraimbault/vue-js-starter-scss.svg" alt="version">
  </a>
  <a href="https://www.travis-ci.org/qraimbault/vue-js-starter-scss" rel="nofollow">
    <img src="https://www.travis-ci.org/qraimbault/vue-js-starter-scss.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://github.com/QRaimbault/vue-js-starter-scss/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/vue.svg" alt="License">
  </a>
</p>

## Summary

A lightweight Vue.js starter.

**YOU CAN READ THIS DOC IN A MORE FRIENDLY WAY [HERE](https://qraimbault.github.io/vue-js-starter-scss/#/).**

- [Vue.JS Starter](#vuejs-starter)
  - [Summary](#summary)
  - [Built-in modules](#built-in-modules)
  - [Usage](#usage)
  - [Configuration](#configuration)
  - [Routing](#routing)
  - [Generator](#generator)
  - [API](#api)
  - [Vuex](#vuex)
  - [Style](#style)
  - [Assets](#assets)
    - [Imported assets](#imported-assets)
    - [Static assets](#static-assets)
  - [Single file components](#single-file-components)
    - [Views](#views)
    - [Components](#components)
  - [Webpack Aliases](#webpack-aliases)
  - [Unit Testing](#unit-testing)
  - [License](#license)

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
- [Jest](http://jestjs.io/) with [vue-test-utils](https://vue-test-utils.vuejs.org/)

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

## Generator

I created a generator using Yeoman, it can generate view, styles and tests. You can find it [here](https://github.com/QRaimbault/generator-qraimbault-vuejs) with installation and usage instructions.

## API

API use Axios and the base configuration is set in application configuration file.

```js
export const APIConfig = {
  baseURL: '',
  withCredentials: true,
  crossDomain: true,
  contentType: false,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
};
```

Axios configuration reference is available [here](https://github.com/axios/axios#request-config).

The Axios instance is then generated and exported in `src/helpers/API.js` and you can import it in your views/components this way:

```js
import api from '@API';
```

## Vuex

The Vuex store is located in `src/vuex`.

There is a main config file (`src/vuex/store.js`) and a `modules` directories.

If your application is simple, you can put your state, getters, mutators and actions directly in the store. If it is more complexe, create one sub-directory in `modules` by functionnality and import in in the store.

The store is accessible from any component/view using `this.$store`.

## Style

All you view/component specific styles should be placed in a file named exactly like the component, in the same directory.  
You can place project-specific style in `src/scss` and import it from the component specific styles (see example in `src/components/Index).

You should import styles in the `<script>` tag in each component.

You can also put style in the `<style>` tag in each component, scoped or not, the style injection works the same way using scss files or `<style>` tag.

## Assets

### Imported assets

Assets (images, fonts...) used directly in views (Like logo... etc) should be placed in src/assets (`@Asset`) and imported like a JavaScript module and used like a variable. Example:

```js
import logo from '@/images/logo.png';
```

You can also import it in scss using webpack resolved path or relative path as usual. Example:

```scss
.bg-image {
  background-image: url('@Asset/images/background.png');
}
// OR
.bg-image {
  background-image: url('../../assets/images/background.png');
}
```

### Static assets

Assets used directyle in `static/index.html` like favicon for example should be placed in `static/assets` and will be copied on build in the `dist/assets` directory.

## Single file components

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
- `@View` pointing to `src/views`
- `@MasterStyle` pointing to `src/scss/master.scss`
- `@Asset` pointing to `src/assets`
- `@Test` pointing to `__test__`
- `@` pointing to `src`

An example usage of these aliases is to get the API helper from a view/component:

```js
import api from '@API';
```

Or to get a component from a view:

```js
import Articles from '@Component/Index/Articles.vue';
```

## Unit Testing

Unit testing is handled using Jest, you can find an example in `src/components/Index/Articles.spec.js`. They are run in the CI build system, using Travis-CI.

You can place your stubs/mocks in `__test__` (`@Test`) directory when they are project-wide tests assets.

## License

All the content is under [MIT license](https://github.com/QRaimbault/vue-js-starter-scss/blob/master/LICENSE).
