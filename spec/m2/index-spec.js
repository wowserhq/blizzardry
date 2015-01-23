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
    return it('returns bones', function() {
      var bone, bones;
      bone = (bones = dummy().bones)[0];
      expect(bones.length).to.eq(40);
      return expect(bone).to.deep.eq({
        keyBoneID: -1,
        flags: 512,
        parentID: -1,
        subMeshID: 0,
        translation: {
          interpolationType: 1,
          globalSequenceID: -1,
          timestamps: [[0, 67, 100, 300, 467, 500, 600], [0, 33, 66, 133, 200, 300, 433, 566, 600, 666, 800, 1066], [], [], [], [], []],
          values: [
            [
              {
                x: -0.19142328202724457,
                y: 0,
                z: 0
              }, {
                x: -0.16588594019412994,
                y: 0,
                z: 0
              }, {
                x: -0.13896071910858154,
                y: 0,
                z: 0
              }, {
                x: 0.010932332836091518,
                y: 0,
                z: 0
              }, {
                x: -0.10703905671834946,
                y: 0,
                z: 0
              }, {
                x: -0.13896071910858154,
                y: 0,
                z: 0
              }, {
                x: -0.19142328202724457,
                y: 0,
                z: 0
              }
            ], [
              {
                x: 0,
                y: 0,
                z: 0.06224280595779419
              }, {
                x: 0.00043202718370594084,
                y: 0,
                z: 0.05004602670669556
              }, {
                x: 0.0011520830448716879,
                y: 0,
                z: 0.02453119494020939
              }, {
                x: 0.002126916777342558,
                y: 0,
                z: -0.019348416477441788
              }, {
                x: 0.001152083626948297,
                y: 0,
                z: -0.016964027658104897
              }, {
                x: -0.00015508344222325832,
                y: 0,
                z: 0.008056527934968472
              }, {
                x: -0.0003323339333292097,
                y: 0,
                z: 0.049219001084566116
              }, {
                x: 0.00043202718370594084,
                y: 0,
                z: 0.05004602670669556
              }, {
                x: 0.0011520830448716879,
                y: 0,
                z: 0.02453119494020939
              }, {
                x: 0.002126916777342558,
                y: 0,
                z: -0.019348416477441788
              }, {
                x: 0,
                y: 0,
                z: 0
              }, {
                x: 0,
                y: 0,
                z: 0.06224280595779419
              }
            ], [], [], [], [], []
          ]
        },
        rotation: {
          interpolationType: 1,
          globalSequenceID: -1,
          timestamps: [[], [0, 33, 66, 100, 166, 200, 233, 266, 300, 333, 400, 466, 500, 533, 566, 600, 633, 700, 733, 766, 800, 833, 866, 1000, 1033, 1066], [], [], [], [], [0]],
          values: [
            [], [
              {
                x: 32767,
                y: 37869,
                z: 32767,
                w: 65135
              }, {
                x: 32767,
                y: 37711,
                z: 32767,
                w: 65159
              }, {
                x: 32767,
                y: 37024,
                z: 32767,
                w: 65257
              }, {
                x: 32767,
                y: 36123,
                z: 32767,
                w: 65362
              }, {
                x: 32767,
                y: 34527,
                z: 32767,
                w: 65487
              }, {
                x: 32767,
                y: 33621,
                z: 32767,
                w: 65523
              }, {
                x: 32767,
                y: 32927,
                z: 32767,
                w: 65534
              }, {
                x: 32767,
                y: 32767,
                z: 32767,
                w: 65535
              }, {
                x: 32767,
                y: 33127,
                z: 32767,
                w: 65533
              }, {
                x: 32767,
                y: 33727,
                z: 32767,
                w: 65520
              }, {
                x: 32767,
                y: 35326,
                z: 32767,
                w: 65434
              }, {
                x: 32767,
                y: 36918,
                z: 32767,
                w: 65271
              }, {
                x: 32767,
                y: 37513,
                z: 32767,
                w: 65189
              }, {
                x: 32767,
                y: 37869,
                z: 32767,
                w: 65135
              }, {
                x: 32767,
                y: 37711,
                z: 32767,
                w: 65159
              }, {
                x: 32767,
                y: 37024,
                z: 32767,
                w: 65257
              }, {
                x: 32767,
                y: 36123,
                z: 32767,
                w: 65362
              }, {
                x: 32767,
                y: 34527,
                z: 32767,
                w: 65487
              }, {
                x: 32767,
                y: 33621,
                z: 32767,
                w: 65523
              }, {
                x: 32767,
                y: 32927,
                z: 32767,
                w: 65534
              }, {
                x: 32767,
                y: 32767,
                z: 32767,
                w: 65535
              }, {
                x: 32767,
                y: 33127,
                z: 32767,
                w: 65533
              }, {
                x: 32767,
                y: 33727,
                z: 32767,
                w: 65520
              }, {
                x: 32767,
                y: 36918,
                z: 32767,
                w: 65271
              }, {
                x: 32767,
                y: 37513,
                z: 32767,
                w: 65189
              }, {
                x: 32767,
                y: 37869,
                z: 32767,
                w: 65135
              }
            ], [], [], [], [], [
              {
                x: 32767,
                y: 32771,
                z: 32767,
                w: 65535
              }
            ]
          ]
        },
        scaling: {
          interpolationType: 0,
          globalSequenceID: -1,
          timestamps: [],
          values: []
        },
        pivotPoint: {
          x: 0,
          y: 0,
          z: 0
        }
      });
    });
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
