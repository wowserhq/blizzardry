const {expect, fixtures} = require('../spec-helper');

const fs = require('fs');
const r = require('restructure');

const WDT = require('../../lib/wdt');

describe('WDT', function() {

  const dummy = (function() {
    const data = fs.readFileSync(fixtures + 'Azeroth.wdt');
    const stream = new r.DecodeStream(data);
    return WDT.decode(stream);
  }());

  describe('#version', function() {
    it('returns version identifier', function() {
      expect(dummy.version).to.eq(18);
    });
  });

  describe('#flags', function() {
    it('returns flags', function() {
      expect(dummy.flags).to.eq(0);
    });
  });

  describe('#tiles', function() {
    it('returns tiles', function() {
      expect(dummy.tiles.length).to.eq(64 * 64);
      expect(dummy.tiles.slice(2000, 2064)).to.deep.eq([
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0
      ]);
    });
  });

});
