'use strict';

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }

var _require = require('../spec-helper');

var expect = _require.expect;
var fixtures = _require.fixtures;
var memo = _require.memo;
var sinon = _require.sinon;

var fs = require('fs');
var r = require('restructure');

var M2 = require('../../lib/m2');

describe('M2', function () {

  var dummy = (function () {
    var data = fs.readFileSync(fixtures + 'Rabbit.m2');
    var stream = new r.DecodeStream(data);
    return M2.decode(stream);
  })();

  describe('#signature', function () {
    it('returns MD20', function () {
      expect(dummy.signature).to.eq('MD20');
    });
  });

  describe('#version', function () {
    it('returns version number', function () {
      expect(dummy.version).to.eq(264);
    });
  });

  describe('#names', function () {
    it('returns all names', function () {
      expect(dummy.names).to.deep.eq(['Rabbit', '', '', '', '', '', '']);
    });
  });

  describe('#name', function () {
    it('returns first name', function () {
      expect(dummy.name).to.eq('Rabbit');
    });
  });

  describe('#flags', function () {
    it('returns flags', function () {
      expect(dummy.flags).to.eq(1);
    });
  });

  describe('#sequences', function () {
    it('returns sequences', function () {
      expect(dummy.sequences).to.deep.eq([0]);
    });
  });

  describe('#animations', function () {
    xit('returns animations');
  });

  describe('#animationLookups', function () {
    xit('returns animation lookups');
  });

  describe('#bones', function () {
    it('returns bones', function () {
      var bones = dummy.bones;

      var _bones = _slicedToArray(bones, 1);

      var bone = _bones[0];

      expect(bones.length).to.eq(40);
      expect(bone).to.deep.eq({
        keyBoneID: -1,
        flags: 512,
        parentID: -1,
        subMeshID: 0,
        translation: {
          interpolationType: 1,
          globalSequenceID: -1,
          timestamps: [[0, 67, 100, 300, 467, 500, 600], [0, 33, 66, 133, 200, 300, 433, 566, 600, 666, 800, 1066], [], [], [], [], []],
          values: [[{ x: -0.19142328202724457, y: 0, z: 0 }, { x: -0.16588594019412994, y: 0, z: 0 }, { x: -0.13896071910858154, y: 0, z: 0 }, { x: 0.010932332836091518, y: 0, z: 0 }, { x: -0.10703905671834946, y: 0, z: 0 }, { x: -0.13896071910858154, y: 0, z: 0 }, { x: -0.19142328202724457, y: 0, z: 0 }], [{ x: 0, y: 0, z: 0.06224280595779419 }, { x: 0.00043202718370594084, y: 0, z: 0.05004602670669556 }, { x: 0.0011520830448716879, y: 0, z: 0.02453119494020939 }, { x: 0.002126916777342558, y: 0, z: -0.019348416477441788 }, { x: 0.001152083626948297, y: 0, z: -0.016964027658104897 }, { x: -0.00015508344222325832, y: 0, z: 0.008056527934968472 }, { x: -0.0003323339333292097, y: 0, z: 0.049219001084566116 }, { x: 0.00043202718370594084, y: 0, z: 0.05004602670669556 }, { x: 0.0011520830448716879, y: 0, z: 0.02453119494020939 }, { x: 0.002126916777342558, y: 0, z: -0.019348416477441788 }, { x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 0.06224280595779419 }], [], [], [], [], []]
        },
        rotation: {
          interpolationType: 1,
          globalSequenceID: -1,
          timestamps: [[], [0, 33, 66, 100, 166, 200, 233, 266, 300, 333, 400, 466, 500, 533, 566, 600, 633, 700, 733, 766, 800, 833, 866, 1000, 1033, 1066], [], [], [], [], [0]],
          values: [[], [{ x: 32767, y: 37869, z: 32767, w: 65135 }, { x: 32767, y: 37711, z: 32767, w: 65159 }, { x: 32767, y: 37024, z: 32767, w: 65257 }, { x: 32767, y: 36123, z: 32767, w: 65362 }, { x: 32767, y: 34527, z: 32767, w: 65487 }, { x: 32767, y: 33621, z: 32767, w: 65523 }, { x: 32767, y: 32927, z: 32767, w: 65534 }, { x: 32767, y: 32767, z: 32767, w: 65535 }, { x: 32767, y: 33127, z: 32767, w: 65533 }, { x: 32767, y: 33727, z: 32767, w: 65520 }, { x: 32767, y: 35326, z: 32767, w: 65434 }, { x: 32767, y: 36918, z: 32767, w: 65271 }, { x: 32767, y: 37513, z: 32767, w: 65189 }, { x: 32767, y: 37869, z: 32767, w: 65135 }, { x: 32767, y: 37711, z: 32767, w: 65159 }, { x: 32767, y: 37024, z: 32767, w: 65257 }, { x: 32767, y: 36123, z: 32767, w: 65362 }, { x: 32767, y: 34527, z: 32767, w: 65487 }, { x: 32767, y: 33621, z: 32767, w: 65523 }, { x: 32767, y: 32927, z: 32767, w: 65534 }, { x: 32767, y: 32767, z: 32767, w: 65535 }, { x: 32767, y: 33127, z: 32767, w: 65533 }, { x: 32767, y: 33727, z: 32767, w: 65520 }, { x: 32767, y: 36918, z: 32767, w: 65271 }, { x: 32767, y: 37513, z: 32767, w: 65189 }, { x: 32767, y: 37869, z: 32767, w: 65135 }], [], [], [], [], [{ x: 32767, y: 32771, z: 32767, w: 65535 }]]
        },
        scaling: {
          interpolationType: 0,
          globalSequenceID: -1,
          timestamps: [],
          values: []
        },
        pivotPoint: { x: 0, y: 0, z: 0 }
      });
    });
  });

  describe('#keyBoneLookups', function () {
    it('returns key bone lookups', function () {
      expect(dummy.keyBoneLookups).to.deep.eq([-1, -1, -1, -1, -1, -1, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 35, 20, -1, -1, -1, 1]);
    });
  });

  describe('#vertices', function () {
    it('returns vertices', function () {
      var vertices = dummy.vertices;
      var first = vertices[0];
      var last = vertices[vertices.length - 1];
      expect(vertices.length).to.eq(154);
      expect(first).to.deep.eq({
        position: [-0.2735399901866913, -0.003535992233082652, 0.3579200804233551],
        boneWeights: [255, 0, 0, 0],
        boneIndices: [2, 0, 0, 0],
        normal: [-0.44266101717948914, 0.004395408555865288, 0.8966782689094543],
        textureCoords: [0.9776850342750549, 0.27029675245285034],
        random: [0, 0]
      });
      expect(last).to.deep.eq({
        position: [0.1501760482788086, -0.0035360539332032204, 0.05207005515694618],
        boneWeights: [64, 64, 64, 63],
        boneIndices: [7, 8, 14, 9],
        normal: [0.48488274216651917, -0.00041133747436106205, -0.8745790719985962],
        textureCoords: [0.16209588944911957, 0.3589469790458679],
        random: [0, 0]
      });
    });
  });

  describe('#viewCount', function () {
    it('returns view count', function () {
      expect(dummy.viewCount).to.eq(1);
    });
  });

  describe('#colors', function () {
    xit('returns colors');
  });

  describe('#textures', function () {
    xit('returns textures');
  });

  describe('#transparencies', function () {
    xit('returns transparencies');
  });

  describe('#uvAnimations', function () {
    xit('returns UV animations');
  });

  describe('#replacableTextures', function () {
    xit('returns replacable textures');
  });

  describe('#renderFlags', function () {
    xit('returns render flags');
  });

  describe('#boneLookups', function () {
    xit('returns bone lookups');
  });

  describe('#textureLookups', function () {
    xit('returns texture lookups');
  });

  describe('#textureUnits', function () {
    xit('returns texture units');
  });

  describe('#transparencyLookups', function () {
    xit('returns transparency lookups');
  });

  describe('#uvAnimationLookups', function () {
    xit('returns UV animation lookups');
  });

  describe('#minVertexBox', function () {
    it('returns minimum vertex box', function () {
      expect(dummy.minVertexBox).to.deep.eq({
        x: -0.6340768337249756,
        y: -0.3105764091014862,
        z: -0.15670306980609894
      });
    });
  });

  describe('#maxVertexBox', function () {
    it('returns maximum vertex box', function () {
      expect(dummy.maxVertexBox).to.deep.eq({
        x: 0.47685110569000244,
        y: 0.47006168961524963,
        z: 0.8000571727752686
      });
    });
  });

  describe('#vertexRadius', function () {
    xit('returns vertex radius');
  });

  describe('#minBoundingBox', function () {
    it('returns minimum bounding box', function () {
      expect(dummy.minBoundingBox).to.deep.eq({
        x: -0.3055555522441864,
        y: -0.3055555522441864,
        z: 0
      });
    });
  });

  describe('#maxBoundingBox', function () {
    it('returns maximum bounding box', function () {
      expect(dummy.maxBoundingBox).to.deep.eq({
        x: 0.3055555522441864,
        y: 0.3055555522441864,
        z: 2.031277894973755
      });
    });
  });

  describe('#boundingRadius', function () {
    xit('returns bounding radius');
  });

  describe('#boundingTriangles', function () {
    xit('returns bounding triangles');
  });

  describe('#boundingVertices', function () {
    xit('returns bounding vertices');
  });

  describe('#boundingNormals', function () {
    xit('returns bounding normals');
  });

  describe('#attachments', function () {
    xit('returns attachments');
  });

  describe('#attachmentLookups', function () {
    xit('returns attachment lookups');
  });

  describe('#events', function () {
    xit('returns events');
  });

  describe('#lights', function () {
    xit('returns lights');
  });

  describe('#cameras', function () {
    xit('returns cameras');
  });

  describe('#cameraLookups', function () {
    xit('returns camera lookups');
  });

  describe('#ribbonEmitters', function () {
    xit('returns ribbon emitters');
  });

  describe('#particleEmitters', function () {
    xit('returns particle emitters');
  });
});