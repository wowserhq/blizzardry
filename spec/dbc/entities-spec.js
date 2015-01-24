var DBC, expect, fixtures, memo, sinon, _ref;

_ref = require('../spec-helper'), expect = _ref.expect, fixtures = _ref.fixtures, memo = _ref.memo, sinon = _ref.sinon;

DBC = require('../../lib/dbc/entities');

describe('DBC.Entities', function() {
  it('exposes AnimationData entity', function() {
    return expect(DBC.AnimationData).to.eq(require('../../lib/dbc/entities/animation-data'));
  });
  it('exposes Faction entity', function() {
    return expect(DBC.Faction).to.eq(require('../../lib/dbc/entities/faction'));
  });
  return it('exposes Map entity', function() {
    return expect(DBC.Map).to.eq(require('../../lib/dbc/entities/map'));
  });
});
