var BLP, Mipmap, expect, fixtures, memo, sinon, _ref;

_ref = require('../spec-helper'), expect = _ref.expect, fixtures = _ref.fixtures, memo = _ref.memo, sinon = _ref.sinon;

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
  return describe('#data', function() {
    return it('returns pixel data', function() {
      return expect(dummy().data.length).to.eq(65536);
    });
  });
});
