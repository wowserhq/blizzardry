'use strict';

var _require = require('../spec-helper');

var expect = _require.expect;
var fixtures = _require.fixtures;
var memo = _require.memo;
var sinon = _require.sinon;

var fs = require('fs');
var r = require('restructure');

var WDT = require('../../lib/wdt');

describe('WDT', function () {

  var dummy = (function () {
    var data = fs.readFileSync(fixtures + 'Azeroth.wdt');
    var stream = new r.DecodeStream(data);
    return WDT.decode(stream);
  })();

  describe('#version', function () {
    it('returns version identifier', function () {
      expect(dummy.version).to.eq(18);
    });
  });

  describe('#flags', function () {
    it('returns flags', function () {
      expect(dummy.flags).to.eq(0);
    });
  });

  describe('#tiles', function () {
    it('returns tiles', function () {
      expect(dummy.tiles.length).to.eq(64 * 64);
      expect(dummy.tiles.slice(2000, 2064)).to.deep.eq([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
  });
});