'use strict';

var _require = require('../spec-helper');

var expect = _require.expect;
var fixtures = _require.fixtures;
var memo = _require.memo;
var sinon = _require.sinon;

var fs = require('fs');
var r = require('restructure');

var Skin = require('../../lib/m2/skin');

describe('Skin', function () {

  var dummy = (function () {
    var data = fs.readFileSync(fixtures + 'Rabbit00.skin');
    var stream = new r.DecodeStream(data);
    return Skin.decode(stream);
  })();

  describe('#id', function () {
    xit('returns identifier');
  });

  describe('#indices', function () {
    it('returns indices', function () {
      var indices = dummy.indices;
      expect(indices).to.have.length(154);
      expect(indices.slice(0, 4)).to.deep.eq([52, 58, 115, 0]);
      expect(indices.slice(-4)).to.deep.eq([29, 75, 76, 23]);
    });
  });

  describe('#triangles', function () {
    it('returns triangles', function () {
      var triangles = dummy.triangles;
      expect(triangles).to.have.length(107);
      expect(triangles.slice(0, 2)).to.deep.eq([[0, 1, 2], [3, 4, 5]]);
      expect(triangles.slice(-2)).to.deep.eq([[150, 137, 151], [152, 148, 153]]);
    });
  });

  describe('#properties', function () {
    xit('returns properties');
  });

  describe('#submeshes', function () {
    xit('returns submeshes');
  });

  describe('#textureUnits', function () {
    xit('returns texture units');
  });

  describe('#bones', function () {
    xit('returns bones');
  });
});