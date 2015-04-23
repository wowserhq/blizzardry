var Blizzardry, expect, fixtures, memo, ref, sinon;

ref = require('./spec-helper'), expect = ref.expect, fixtures = ref.fixtures, memo = ref.memo, sinon = ref.sinon;

Blizzardry = require('../lib');

describe('Blizzardry', function() {
  return it('exposes restructure', function() {
    expect(Blizzardry.restructure).to.eq(require('../lib/restructure'));
    return expect(Blizzardry.restructure).to.eq(require('restructure'));
  });
});
