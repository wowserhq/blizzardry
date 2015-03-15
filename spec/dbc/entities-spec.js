var entities, expect, fixtures, inflect, memo, sinon, _ref;

_ref = require('../spec-helper'), expect = _ref.expect, fixtures = _ref.fixtures, memo = _ref.memo, sinon = _ref.sinon;

inflect = require('inflected');

entities = require('../../lib/dbc/entities');

describe('DBC.Entities', function() {
  var name, _results;
  _results = [];
  for (name in entities) {
    _results.push((function(name) {
      return it("exposes " + name + " entity", function() {
        var entity, filename;
        entity = entities[name];
        filename = inflect.dasherize(inflect.underscore(name));
        return expect(entity).to.eq(require("../../lib/dbc/entities/" + filename));
      });
    })(name));
  }
  return _results;
});
