'use strict';

var _require = require('../spec-helper');

var expect = _require.expect;
var fixtures = _require.fixtures;
var memo = _require.memo;
var sinon = _require.sinon;

var BLP = require('../../lib/blp');
var Mipmap = require('../../lib/blp/mipmap');

describe('BLP.Mipmap', function () {

  var dummy = memo().is(function () {
    return BLP.open(fixtures + 'RabbitSkin.blp').largest;
  });

  describe('#level', function () {
    it('returns mipmap level', function () {
      expect(dummy().level).to.eq(0);
    });
  });

  describe('#width', function () {
    it('returns texture width', function () {
      expect(dummy().width).to.eq(128);
    });
  });

  describe('#height', function () {
    it('returns texture height', function () {
      expect(dummy().height).to.eq(128);
    });
  });

  describe('#data', function () {
    it('returns pixel data', function () {
      var pixels = dummy().data;
      expect(pixels.length).to.eq(65536);
      expect(pixels.slice(0, 4)).to.deep.eq(new Buffer([162, 162, 162, 221]));
      expect(pixels.slice(-4)).to.deep.eq(new Buffer([44, 74, 101, 221]));
    });
  });

  describe('#bgra', function () {
    it('returns pixel data in BGRA format', function () {
      expect(dummy().bgra).to.deep.eq(dummy().data);
    });
  });

  describe('#rgba', function () {
    it('returns pixel data in RGBA format', function () {
      var pixels = dummy().rgba;
      expect(pixels.length).to.eq(65536);
      expect(pixels.slice(0, 4)).to.deep.eq(new Buffer([162, 162, 162, 221]));
      expect(pixels.slice(-4)).to.deep.eq(new Buffer([101, 74, 44, 221]));
    });
  });
});