'use strict';

var _require = require('../spec-helper');

var expect = _require.expect;
var fixtures = _require.fixtures;
var memo = _require.memo;
var sinon = _require.sinon;

var inflect = require('inflected');

var entities = require('../../lib/dbc/entities');

describe('DBC.Entities', function () {
  for (var name in entities) {
    it('exposes ' + name + ' entity', function () {
      var entity = entities[name];
      var filename = inflect.dasherize(inflect.underscore(name));
      expect(entity).to.eq(require('../../lib/dbc/entities/' + filename));
    });
  }
});