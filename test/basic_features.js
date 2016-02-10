'use strict';

var should = require('should');
var request = require('supertest');

var Polyapp = require('../lib/polyapp');
var emptyModule = require('../examples/empty_module');
var testModule = require('../examples/test_route_module');

describe('Polyapp', function() {
  var poly;

  beforeEach(function() {
    poly = new Polyapp();
  });

  afterEach(function(done) {
    poly.stop(done);
  });

  it('should be instanciable', function() {
    poly.should.be.type('object');
  });

  it('should start without modules', function() {
    (poly._modules.length).should.be.exactly(0);
  });

  it('should be able to include modules', function() {
    poly.include(emptyModule);
    (poly._modules.length).should.be.exactly(1);
  });

  it('should be able to expose modules', function(done) {
    poly.include(testModule);
    poly.start();

    request(poly._server)
      .get('/api/test')
      .expect(200)
      .expect('It works!', done);
  });

  it('should be able to customize the routes prefix', function(done) {
    var prefix = '/hakunamatata'
    var poly = new Polyapp({ routesPrefix: prefix });
    poly.include(testModule);
    poly.start();

    request(poly._server)
      .get(prefix + '/test')
      .expect(200)
      .expect('It works!', function() {
        poly.stop(done);
      });
  });
});
