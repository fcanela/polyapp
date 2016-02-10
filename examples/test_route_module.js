'use strict';

var express = require('express');
var OK_STATUS_CODE = 200;

module.exports = function Module(server, options, services) {
  this.router = express.Router();

  this.router.get('/test', function(req, res, next) {
    res.status(OK_STATUS_CODE).send('It works!');
  });
};
