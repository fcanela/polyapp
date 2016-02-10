'use strict';

/*
 * Module dependencies
 */

var express = require('express');
var bodyParser = require('body-parser');


// Expose the module
module.exports = PolyApp;

/**
 * Initializes a new PolyApp
 *
 * @param {Object} [opts={}] - Options object
 * @param {string} [opts.routesPrefix=/api] - A string (beginning with slash)
 * to be prepended to all modules routes
 * @param {number} [opts.port=3000] - Port number to listen to
 * @constructor
 */
function PolyApp(opts) {
  if (!(this instanceof PolyApp)) return new PolyApp(opts);

  // Options & defaults
  if (!opts) opts = {};
  this.routesPrefix = opts.routesPrefix || '/api';
  this.port = opts.port || 3000;

  // Web server
  this._server = express();
  this._server.use(bodyParser.json());

  this._modules = [];
  this._listeningServer;
}

/**
 * Open a web server
 *
 * @param {number} [port] - Optional port to listen to. If it is undefined the
 * port property is used.
 * @param {function} [callback] - Called after web server starts listening
 */
PolyApp.prototype.start = function(port, callback) {
  var listeningPort = port || this.port;
  this._listeningServer = this._server.listen(listeningPort, callback);
};

/**
 * Close the web server
 *
 * @param {function} callback - Called after web server is stopped
 */
PolyApp.prototype.stop = function(callback) {
  if (!this._listeningServer) {
    if (callback) return callback();
  }

  this._listeningServer.close(callback);
};

/**
 * Add a new module to the stack
 *
 * @param {function} Module - Module constructor
 * @param {Object} moduleOptions - Module options
 */
PolyApp.prototype.include = function(Module, moduleOptions) {
  var moduleInstance = new Module(this._server, moduleOptions);
  validate(moduleInstance);
  this._server.use(this.routesPrefix, moduleInstance.router);
  this._modules.push(moduleInstance);

  function validate(instance) {
    if (!instance.router) throw new Error('Module have no "router" property');
  }
};
