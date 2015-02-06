var WDT, expect, fixtures, fs, memo, r, sinon, _ref;

_ref = require('../spec-helper'), expect = _ref.expect, fixtures = _ref.fixtures, memo = _ref.memo, sinon = _ref.sinon;

fs = require('fs');

r = require('restructure');

WDT = require('../../lib/wdt');

describe('WDT', function() {
  var dummy;
  dummy = (function() {
    var data, stream;
    data = fs.readFileSync(fixtures + 'Azeroth.wdt');
    stream = new r.DecodeStream(data);
    return WDT.decode(stream);
  })();
  describe('#version', function() {
    return it('returns version identifier', function() {
      return expect(dummy.version).to.eq(18);
    });
  });
  describe('#flags', function() {
    return it('returns flags', function() {
      return expect(dummy.flags).to.eq(0);
    });
  });
  return describe('#chunks', function() {
    return it('returns chunks', function() {
      expect(dummy.chunks.length).to.eq(64 * 64);
      return expect(dummy.chunks.slice(2000, 2064)).to.deep.eq([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
  });
});
