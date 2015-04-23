var BLP, Mipmap, expect, fixtures, memo, ref, sinon;

ref = require('../spec-helper'), expect = ref.expect, fixtures = ref.fixtures, memo = ref.memo, sinon = ref.sinon;

BLP = require('../../lib/blp');

Mipmap = require('../../lib/blp/mipmap');

describe('BLP.Mipmap', function() {
  var dummy;
  dummy = memo().is(function() {
    return BLP.open(fixtures + 'RabbitSkin.blp').largest;
  });
  describe('#level', function() {
    return it('returns mipmap level', function() {
      return expect(dummy().level).to.eq(0);
    });
  });
  describe('#width', function() {
    return it('returns texture width', function() {
      return expect(dummy().width).to.eq(128);
    });
  });
  describe('#height', function() {
    return it('returns texture height', function() {
      return expect(dummy().height).to.eq(128);
    });
  });
  describe('#data', function() {
    return it('returns pixel data', function() {
      var pixels;
      pixels = dummy().data;
      expect(pixels.length).to.eq(65536);
      expect(pixels.slice(0, 4)).to.deep.eq(new Buffer([0xa2, 0xa2, 0xa2, 0xdd]));
      return expect(pixels.slice(-4)).to.deep.eq(new Buffer([0x2c, 0x4a, 0x65, 0xdd]));
    });
  });
  describe('#bgra', function() {
    return it('returns pixel data in BGRA format', function() {
      return expect(dummy().bgra).to.deep.eq(dummy().data);
    });
  });
  return describe('#rgba', function() {
    return it('returns pixel data in RGBA format', function() {
      var pixels;
      pixels = dummy().rgba;
      expect(pixels.length).to.eq(65536);
      expect(pixels.slice(0, 4)).to.deep.eq(new Buffer([0xa2, 0xa2, 0xa2, 0xdd]));
      return expect(pixels.slice(-4)).to.deep.eq(new Buffer([0x65, 0x4a, 0x2c, 0xdd]));
    });
  });
});
