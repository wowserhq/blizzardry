var M2, expect, fixtures, fs, memo, r, sinon, _ref;

_ref = require('../spec-helper'), expect = _ref.expect, fixtures = _ref.fixtures, memo = _ref.memo, sinon = _ref.sinon;

fs = require('fs');

r = require('restructure');

M2 = require('../../lib/m2');

describe('M2', function() {
  var dummy;
  dummy = memo().is(function() {
    var data, stream;
    data = fs.readFileSync(fixtures + 'Rabbit.m2');
    stream = new r.DecodeStream(data);
    return M2.decode(stream);
  });
  describe('#signature', function() {
    return it('returns MD20', function() {
      return expect(dummy().signature).to.eq('MD20');
    });
  });
  describe('#version', function() {
    return it('returns version number', function() {
      return expect(dummy().version).to.eq(264);
    });
  });
  describe('#names', function() {
    return it('returns all names', function() {
      return expect(dummy().names).to.deep.eq(['Rabbit', '', '', '', '', '', '']);
    });
  });
  describe('#name', function() {
    return it('returns first name', function() {
      return expect(dummy().name).to.eq('Rabbit');
    });
  });
  describe('#flags', function() {
    return it('returns flags', function() {
      return expect(dummy().flags).to.eq(1);
    });
  });
  describe('#sequences', function() {
    return it('returns sequences', function() {
      return expect(dummy().sequences).to.deep.eq([0]);
    });
  });
  describe('#animations', function() {
    return xit('returns animations');
  });
  describe('#animationLookups', function() {
    return xit('returns animation lookups');
  });
  describe('#bones', function() {
    return xit('returns bones');
  });
  describe('#keyBoneLookups', function() {
    return xit('returns key bone lookups');
  });
  describe('#vertices', function() {
    return it('returns vertices', function() {
      var first, last, vertices, _ref1;
      _ref1 = vertices = dummy().vertices, first = _ref1[0], last = _ref1[_ref1.length - 1];
      expect(vertices.length).to.eq(154);
      expect(first).to.deep.eq({
        position: [-0.2735399901866913, -0.003535992233082652, 0.3579200804233551],
        boneWeights: [255, 0, 0, 0],
        boneIndices: [2, 0, 0, 0],
        normal: [-0.44266101717948914, 0.004395408555865288, 0.8966782689094543],
        textureCoords: [0.9776850342750549, 0.27029675245285034],
        random: [0, 0]
      });
      return expect(last).to.deep.eq({
        position: [0.1501760482788086, -0.0035360539332032204, 0.05207005515694618],
        boneWeights: [64, 64, 64, 63],
        boneIndices: [7, 8, 14, 9],
        normal: [0.48488274216651917, -0.00041133747436106205, -0.8745790719985962],
        textureCoords: [0.16209588944911957, 0.3589469790458679],
        random: [0, 0]
      });
    });
  });
  describe('#viewCount', function() {
    return it('returns view count', function() {
      return expect(dummy().viewCount).to.eq(1);
    });
  });
  describe('#colors', function() {
    return xit('returns colors');
  });
  describe('#textures', function() {
    return xit('returns textures');
  });
  describe('#transparencies', function() {
    return xit('returns transparencies');
  });
  describe('#uvAnimations', function() {
    return xit('returns UV animations');
  });
  describe('#replacableTextures', function() {
    return xit('returns replacable textures');
  });
  describe('#renderFlags', function() {
    return xit('returns render flags');
  });
  describe('#boneLookups', function() {
    return xit('returns bone lookups');
  });
  describe('#textureLookups', function() {
    return xit('returns texture lookups');
  });
  describe('#textureUnits', function() {
    return xit('returns texture units');
  });
  describe('#transparencyLookups', function() {
    return xit('returns transparency lookups');
  });
  describe('#uvAnimationLookups', function() {
    return xit('returns UV animation lookups');
  });
  describe('#minVertexBox', function() {
    return it('returns minimum vertex box', function() {
      return expect(dummy().minVertexBox).to.deep.eq({
        x: -0.6340768337249756,
        y: -0.3105764091014862,
        z: -0.15670306980609894
      });
    });
  });
  describe('#maxVertexBox', function() {
    return it('returns maximum vertex box', function() {
      return expect(dummy().maxVertexBox).to.deep.eq({
        x: 0.47685110569000244,
        y: 0.47006168961524963,
        z: 0.8000571727752686
      });
    });
  });
  describe('#vertexRadius', function() {
    return xit('returns vertex radius');
  });
  describe('#minBoundingBox', function() {
    return it('returns minimum bounding box', function() {
      return expect(dummy().minBoundingBox).to.deep.eq({
        x: -0.3055555522441864,
        y: -0.3055555522441864,
        z: 0
      });
    });
  });
  describe('#maxBoundingBox', function() {
    return it('returns maximum bounding box', function() {
      return expect(dummy().maxBoundingBox).to.deep.eq({
        x: 0.3055555522441864,
        y: 0.3055555522441864,
        z: 2.031277894973755
      });
    });
  });
  describe('#boundingRadius', function() {
    return xit('returns bounding radius');
  });
  describe('#boundingTriangles', function() {
    return xit('returns bounding triangles');
  });
  describe('#boundingVertices', function() {
    return xit('returns bounding vertices');
  });
  describe('#boundingNormals', function() {
    return xit('returns bounding normals');
  });
  describe('#attachments', function() {
    return xit('returns attachments');
  });
  describe('#attachmentLookups', function() {
    return xit('returns attachment lookups');
  });
  describe('#events', function() {
    return xit('returns events');
  });
  describe('#lights', function() {
    return xit('returns lights');
  });
  describe('#cameras', function() {
    return xit('returns cameras');
  });
  describe('#cameraLookups', function() {
    return xit('returns camera lookups');
  });
  describe('#ribbonEmitters', function() {
    return xit('returns ribbon emitters');
  });
  return describe('#particleEmitters', function() {
    return xit('returns particle emitters');
  });
});
