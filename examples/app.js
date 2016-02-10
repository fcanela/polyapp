'use strict';

var PolyApp = require('../lib/polyapp');
var poly = new PolyApp();
poly.port = 6969;

var testModule = require('./test_route_module');

poly.include(testModule);

poly.start();

module.exports = poly;
