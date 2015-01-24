var Skin, expect, fixtures, fs, memo, r, sinon, _ref;

_ref = require('../spec-helper'), expect = _ref.expect, fixtures = _ref.fixtures, memo = _ref.memo, sinon = _ref.sinon;

fs = require('fs');

r = require('restructure');

Skin = require('../../lib/m2/skin');

describe('Skin', function() {
  var dummy;
  dummy = (function() {
    var data, stream;
    data = fs.readFileSync(fixtures + 'Rabbit00.skin');
    stream = new r.DecodeStream(data);
    return Skin.decode(stream);
  })();
  describe('#id', function() {
    return xit('returns identifier');
  });
  describe('#indices', function() {
    return it('returns indices', function() {
      var indices;
      indices = dummy.indices;
      expect(indices).to.have.length(154);
      expect(indices.slice(0, 4)).to.deep.eq([52, 58, 115, 0]);
      return expect(indices.slice(-4)).to.deep.eq([29, 75, 76, 23]);
    });
  });
  describe('#triangles', function() {
    return it('returns triangles', function() {
      var triangles;
      triangles = dummy.triangles;
      expect(triangles).to.have.length(107);
      expect(triangles.slice(0, 2)).to.deep.eq([[0, 1, 2], [3, 4, 5]]);
      return expect(triangles.slice(-2)).to.deep.eq([[150, 137, 151], [152, 148, 153]]);
    });
  });
  describe('#properties', function() {
    return xit('returns properties');
  });
  describe('#submeshes', function() {
    return xit('returns submeshes');
  });
  describe('#textureUnits', function() {
    return xit('returns texture units');
  });
  return describe('#bones', function() {
    return xit('returns bones');
  });
});
