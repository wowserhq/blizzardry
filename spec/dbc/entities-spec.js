var entities, expect, fixtures, inflect, memo, ref, sinon;

ref = require('../spec-helper'), expect = ref.expect, fixtures = ref.fixtures, memo = ref.memo, sinon = ref.sinon;

inflect = require('inflected');

entities = require('../../lib/dbc/entities');

describe('DBC.Entities', function() {
  var name, results;
  results = [];
  for (name in entities) {
    results.push((function(name) {
      return it("exposes " + name + " entity", function() {
        var entity, filename;
        entity = entities[name];
        filename = inflect.dasherize(inflect.underscore(name));
        return expect(entity).to.eq(require("../../lib/dbc/entities/" + filename));
      });
    })(name));
  }
  return results;
});
