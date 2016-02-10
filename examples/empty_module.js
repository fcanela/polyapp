'use strict';

var express = require('express');

module.exports = function Module(server, options, services) {
  this.router = express.Router();
};
