var Blizzardry, expect, fixtures, memo, sinon, _ref;

_ref = require('./spec-helper'), expect = _ref.expect, fixtures = _ref.fixtures, memo = _ref.memo, sinon = _ref.sinon;

Blizzardry = require('../lib');

describe('Blizzardry', function() {
  return it('exposes restructure', function() {
    expect(Blizzardry.restructure).to.eq(require('../lib/restructure'));
    return expect(Blizzardry.restructure).to.eq(require('restructure'));
  });
});
