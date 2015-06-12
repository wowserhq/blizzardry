'use strict';

var _require = require('../spec-helper');

var expect = _require.expect;
var fixtures = _require.fixtures;
var memo = _require.memo;
var sinon = _require.sinon;

var fs = require('fs');
var r = require('restructure');

var ADT = require('../../lib/adt');

describe('ADT', function () {

  var dummy = (function () {
    var data = fs.readFileSync(fixtures + 'Azeroth_38_46.adt');
    var stream = new r.DecodeStream(data);
    return ADT.decode(stream);
  })();

  describe('#version', function () {
    it('returns version', function () {
      expect(dummy.version).to.eq(18);
    });
  });

  describe('#flags', function () {
    it('returns flags', function () {
      expect(dummy.flags).to.eq(0);
    });
  });
});