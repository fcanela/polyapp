# PolyApp

[![Build Status][ci-image]][ci-url]
[![Code Climate][cq-image]][cq-url]
[![Dependencies][deps-image]][deps-url]

> Runs Express applications as modules

`PolyApp` is a simple package which aims to solve two needs:

* Create [`Express`](http://expressjs.com/) applications without the hurdle of reimplementing the server logic
* Easy deploying of containers which have one or more [`Express`](http://expressjs.com/) modules

## Table of Contents

* [Installation](#installation)
* [How it works](#how-it-works)
* [Usage](#usage)
    * [Module example](#module-example)
* [Documentation](#docs)
* [Contributing](#contributing)
    * [Bug reports, feature requests and discussion](#contributing)
    * [Developing](#contributing)
    * [Features wishlist](#wishlist)
* [License](#license)
* [Frequently Asked Questions](#faq)

## <a name="installation"></a> Installation

`PolyApp` is available on `npm`. To be able to create a container with `PolyApp` and some `modules` you need to install the `PolyApp` dependency first:

    npm install --save polyapp

## <a name="how-it-works"></a> How it works

There are two elements: **PolyApp** (this package) and **PolyApp modules** (packages which simply exposes a [Express router](http://expressjs.com/en/4x/api.html#router)).

## <a name="usage"></a> Usage

Here you have a container example. You simply initialize `PolyApp` and include as many modules as you want. There is a basic module example following this piece of code.

```js
var PolyApp = require('../polyapp');
var poly = new PolyApp();
poly.port = 8080;

var testModule = require('./test_module');

poly.include(testModule);

poly.start();
```

### <a name="module-example"></a> Module example

This example is very stupid but it works for illustrating the API. Modules become more interesting when your router exposes full services with multiple endpoints.

```js
var express = require('express');
var OK_STATUS_CODE = 200;

module.exports = function Module(server, options) {
  this.router = express.Router();

  this.router.get('/test', function(req, res, next) {

    res.status(OK_STATUS_CODE).send('It works!');
  });
};
```

## <a name="docs"></a> Documentation

Documentation is available [here](doc/api.md).

## <a name="contributing"></a> Contributing

### <a name="bugs"></a> Bug reports, feature requests and discussion

Feel free to use the [GitHub issue tracker](https://github.com/fcanela/polyapp/issues) to report any bugs or file feature requests. In case you found a bug and have no GitHub account, feel free to email me: fcanela.dev at gmail dot com.

### <a name="developing"></a> Developing

Pull requests are welcome. I also love technical discussions, so feel free to open a issue on the [tracker](https://github.com/fcanela/polyapp/issues).

To begin developing clone the GitHub repository and install dependencies with `npm install`.

The module has some `npm` scripts which could be useful for developing purpose:

* `npm start` watches for changes and runs tests
* `npm run health` lints the library and runs tests
* `npm run docs` generates the markdown documentation from JsDocs

### <a name="wishlist"></a> Features wishlist

* CORS fast and easy management
* Cluster
* API to include middleware

## <a name="license"></a> License

Copyright (c) 2016 Francisco Canela. Licensed under the MIT license.

## <a name="faq"></a> Frequently Asked Questions

### Is the code production ready?

This project uses [Semver](http://semver.org/) for versioning.

Until the software reaches 1.0.0 I would discourage the use for non-recreative projects.

### Why [Express](http://expressjs.com/) instead of [Koa](http://koajs.com/)?

Koa will break the routes callback API as soon as async/await support is introduced in Node ([source](https://github.com/koajs/koa#v2-alpha)). I may migrate PolyApp to Koa when that happens. The later have a lot of features that fits with the project concept.

### What about HTTPS?

A reverse proxy (for example, nginx) in front of PolyApp should work. It also makes updating the certificates and configuring SSL a lot easier.

If a reverse proxy does not solve your problem, please, open a issue explaining your case so we can discuss about it.

### Isn't this a framework? Why anoooother one?

This project is so simple that I hesitate to call it framework, but as it forces you to certain architecture yes, it could be considered a framework.

Worse, this can be considered a framework on top of another framework. Please, ask your deity for my forgiveness: I created another monster.

My excuse: It solves a problem that I have.

[ci-image]: https://travis-ci.org/fcanela/polyapp.svg?branch=master
[ci-url]: https://travis-ci.org/fcanela/polyapp
[cq-image]: https://codeclimate.com/github/fcanela/polyapp/badges/gpa.svg
[cq-url]: https://codeclimate.com/github/fcanela/polyapp
[deps-image]: https://david-dm.org/fcanela/polyapp.svg
[deps-url]: https://david-dm.org/fcanela/polyapp
