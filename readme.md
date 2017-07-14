# ATTENTION

Not really working because theme-lint is actually not really linting all the theme files as of right now, just the translation ones.

😢😢😢😢😢😢😢😢😢😢😢😢😢😢😢😢😢😢😢😢😢😢

# mocha-shopify-lint

Runs [theme-lint](https://github.com/Shopify/theme-lint) as [mocha](http://mochajs.org) tests.

## Install

```
$ npm install mocha-shopify-lint --save-dev
```

## Usage

### Syntax:

```javascript
mochaShopifyLint(patters)
```
Where patterns is an array of [glob patterns](https://github.com/jpillora/node-glob-all).

### Example:

shopify-lint.spec.js

``` javascript
const mochaShopifyLint = require('mocha-shopify-lint')
mochaShopifyLint(['./test/files/**/*.liquid'])
```
