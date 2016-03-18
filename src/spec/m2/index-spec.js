import { expect, fixtures } from '../spec-helper';

import fs from 'fs';
import r from 'restructure';

import M2 from '../../lib/m2';

describe('M2', function() {

  const dummy = (function() {
    const data = fs.readFileSync(fixtures + 'Rabbit.m2');
    const stream = new r.DecodeStream(data);
    return M2.decode(stream);
  }());

  describe('#signature', function() {
    it('returns MD20', function() {
      expect(dummy.signature).to.eq('MD20');
    });
  });

  describe('#version', function() {
    it('returns version number', function() {
      expect(dummy.version).to.eq(264);
    });
  });

  describe('#names', function() {
    it('returns all names', function() {
      expect(dummy.names).to.deep.eq([
        'Rabbit', '', '', '', '', '', ''
      ]);
    });
  });

  describe('#name', function() {
    it('returns first name', function() {
      expect(dummy.name).to.eq('Rabbit');
    });
  });

  describe('#flags', function() {
    it('returns flags', function() {
      expect(dummy.flags).to.eq(1);
    });
  });

  describe('#sequences', function() {
    it('returns sequences', function() {
      expect(dummy.sequences).to.deep.eq([0]);
    });
  });

  describe('#animations', function() {
    it('returns animations', function() {
      const animations = dummy.animations;
      const [animation] = animations;
      expect(animations.length).to.eq(7);
      expect(animation).to.deep.eq({
        alias: 0,
        blendTime: 150,
        boundingRadius: 0.593786895275116,
        flags: 32,
        id: 4,
        length: 600,
        maxBoundingBox: {
          x: 0.3882249891757965,
          y: 0.283809095621109,
          z: 0.6345268487930298
        },
        minBoundingBox: {
          x: -0.6340768337249756,
          y: -0.28730660676956177,
          z: -0.05693187937140465
        },
        movementSpeed: 2.5,
        nextAnimationID: -1,
        probability: 32767,
        subID: 0
      });
    });
  });

  describe('#animationLookups', function() {
    xit('returns animation lookups');
  });

  describe('#bones', function() {
    it('returns bones', function() {
      const bones = dummy.bones;
      const [bone] = bones;
      expect(bones.length).to.eq(40);
      expect(bone).to.deep.eq({
        keyBoneID: -1,
        flags: 512,
        parentID: -1,
        submeshID: 0,
        translation: {
          interpolationType: 1,
          globalSequenceID: -1,
          timestamps: [
            [0, 67, 100, 300, 467, 500, 600],
            [0, 33, 66, 133, 200, 300, 433, 566, 600, 666, 800, 1066],
            [], [], [], [], []
          ],
          values: [
            [
              { x: -0.19142328202724457, y: 0, z: 0 },
              { x: -0.16588594019412994, y: 0, z: 0 },
              { x: -0.13896071910858154, y: 0, z: 0 },
              { x: 0.010932332836091518, y: 0, z: 0 },
              { x: -0.10703905671834946, y: 0, z: 0 },
              { x: -0.13896071910858154, y: 0, z: 0 },
              { x: -0.19142328202724457, y: 0, z: 0 }
            ],
            [
              { x: 0, y: 0, z: 0.06224280595779419 },
              { x: 0.00043202718370594084, y: 0, z: 0.05004602670669556 },
              { x: 0.0011520830448716879, y: 0, z: 0.02453119494020939 },
              { x: 0.002126916777342558, y: 0, z: -0.019348416477441788 },
              { x: 0.001152083626948297, y: 0, z: -0.016964027658104897 },
              { x: -0.00015508344222325832, y: 0, z: 0.008056527934968472 },
              { x: -0.0003323339333292097, y: 0, z: 0.049219001084566116 },
              { x: 0.00043202718370594084, y: 0, z: 0.05004602670669556 },
              { x: 0.0011520830448716879, y: 0, z: 0.02453119494020939 },
              { x: 0.002126916777342558, y: 0, z: -0.019348416477441788 },
              { x: 0, y: 0, z: 0 },
              { x: 0, y: 0, z: 0.06224280595779419 }
            ],
            [], [], [], [], []
          ],
          tracks: [
            {
              animationIndex: 0,
              keyframes: [
                { time: 0, value: { x: -0.19142328202724457, y: 0, z: 0 } },
                { time: 67, value: { x: -0.16588594019412994, y: 0, z: 0 } },
                { time: 100, value: { x: -0.13896071910858154, y: 0, z: 0 } },
                { time: 300, value: { x: 0.010932332836091518, y: 0, z: 0 } },
                { time: 467, value: { x: -0.10703905671834946, y: 0, z: 0 } },
                { time: 500, value: { x: -0.13896071910858154, y: 0, z: 0 } },
                { time: 600, value: { x: -0.19142328202724457, y: 0, z: 0 } }
              ]
            },
            {
              animationIndex: 1,
              keyframes: [
                { time: 0, value: { x: 0, y: 0, z: 0.06224280595779419 } },
                { time: 33, value: { x: 0.00043202718370594084, y: 0, z: 0.05004602670669556 } },
                { time: 66, value: { x: 0.0011520830448716879, y: 0, z: 0.02453119494020939 } },
                { time: 133, value: { x: 0.002126916777342558, y: 0, z: -0.019348416477441788 } },
                { time: 200, value: { x: 0.001152083626948297, y: 0, z: -0.016964027658104897 } },
                { time: 300, value: { x: -0.00015508344222325832, y: 0, z: 0.008056527934968472 } },
                { time: 433, value: { x: -0.0003323339333292097, y: 0, z: 0.049219001084566116 } },
                { time: 566, value: { x: 0.00043202718370594084, y: 0, z: 0.05004602670669556 } },
                { time: 600, value: { x: 0.0011520830448716879, y: 0, z: 0.02453119494020939 } },
                { time: 666, value: { x: 0.002126916777342558, y: 0, z: -0.019348416477441788 } },
                { time: 800, value: { x: 0, y: 0, z: 0 } },
                { time: 1066, value: { x: 0, y: 0, z: 0.06224280595779419 } }
              ]
            },
            { animationIndex: 2, keyframes: [] },
            { animationIndex: 3, keyframes: [] },
            { animationIndex: 4, keyframes: [] },
            { animationIndex: 5, keyframes: [] },
            { animationIndex: 6, keyframes: [] }
          ],
          trackCount: 7,
          maxTrackLength: 12,
          keyframeCount: 19,
          firstKeyframe: {
            time: 0,
            value: {
              x: -0.19142328202724457,
              y: 0,
              z: 0
            }
          },
          empty: false,
          animated: true
        },
        rotation: {
          interpolationType: 1,
          globalSequenceID: -1,
          timestamps: [
            [],
            [
              0, 33, 66, 100, 166, 200, 233, 266, 300, 333, 400, 466, 500, 533,
              566, 600, 633, 700, 733, 766, 800, 833, 866, 1000, 1033, 1066
            ],
            [], [], [], [],
            [0]
          ],
          values: [
            [],
            [
              { x: 0, y: 0.15570543534653766, z: 0, w: 0.9878231147190771 },
              { x: 0, y: 0.15088351084933013, z: 0, w: 0.988555558946501 },
              { x: 0, y: 0.12991729483932005, z: 0, w: 0.9915463728751488 },
              { x: 0, y: 0.10242011780144658, z: 0, w: 0.9947508163701285 },
              { x: 0, y: 0.05371257667775506, z: 0, w: 0.9985656300546282 },
              { x: 0, y: 0.026062807092501604, z: 0, w: 0.999664296395764 },
              { x: 0, y: 0.004882961516159551, z: 0, w: 1 },
              { x: 0, y: 0, z: 0, w: 1.000030518509476 },
              { x: 0, y: 0.01098666341135899, z: 0, w: 0.999969481490524 },
              { x: 0, y: 0.029297769096957305, z: 0, w: 0.999572740867336 },
              { x: 0, y: 0.07809686574907682, z: 0, w: 0.9969481490524003 },
              { x: 0, y: 0.12668233283486435, z: 0, w: 0.9919736320078127 },
              { x: 0, y: 0.14484084597308267, z: 0, w: 0.9894711142307809 },
              { x: 0, y: 0.15570543534653766, z: 0, w: 0.9878231147190771 },
              { x: 0, y: 0.15088351084933013, z: 0, w: 0.988555558946501 },
              { x: 0, y: 0.12991729483932005, z: 0, w: 0.9915463728751488 },
              { x: 0, y: 0.10242011780144658, z: 0, w: 0.9947508163701285 },
              { x: 0, y: 0.05371257667775506, z: 0, w: 0.9985656300546282 },
              { x: 0, y: 0.026062807092501604, z: 0, w: 0.999664296395764 },
              { x: 0, y: 0.004882961516159551, z: 0, w: 1 },
              { x: 0, y: 0, z: 0, w: 1.000030518509476 },
              { x: 0, y: 0.01098666341135899, z: 0, w: 0.999969481490524 },
              { x: 0, y: 0.029297769096957305, z: 0, w: 0.999572740867336 },
              { x: 0, y: 0.12668233283486435, z: 0, w: 0.9919736320078127 },
              { x: 0, y: 0.14484084597308267, z: 0, w: 0.9894711142307809 },
              { x: 0, y: 0.15570543534653766, z: 0, w: 0.9878231147190771 }
            ],
            [], [], [], [],
            [{ x: 0, y: 0.00012207403790398877, z: 0, w: 1.000030518509476 }]
          ],
          tracks: [
            { animationIndex: 0, keyframes: [] },
            {
              animationIndex: 1,
              keyframes: [
                { time: 0, value: { x: 0, y: 0.15570543534653766, z: 0, w: 0.9878231147190771 } },
                { time: 33, value: { x: 0, y: 0.15088351084933013, z: 0, w: 0.988555558946501 } },
                { time: 66, value: { x: 0, y: 0.12991729483932005, z: 0, w: 0.9915463728751488 } },
                { time: 100, value: { x: 0, y: 0.10242011780144658, z: 0, w: 0.9947508163701285 } },
                { time: 166, value: { x: 0, y: 0.05371257667775506, z: 0, w: 0.9985656300546282 } },
                { time: 200, value: { x: 0, y: 0.026062807092501604, z: 0, w: 0.999664296395764 } },
                { time: 233, value: { x: 0, y: 0.004882961516159551, z: 0, w: 1 } },
                { time: 266, value: { x: 0, y: 0, z: 0, w: 1.000030518509476 } },
                { time: 300, value: { x: 0, y: 0.01098666341135899, z: 0, w: 0.999969481490524 } },
                { time: 333, value: { x: 0, y: 0.029297769096957305, z: 0, w: 0.999572740867336 } },
                { time: 400, value: { x: 0, y: 0.07809686574907682, z: 0, w: 0.9969481490524003 } },
                { time: 466, value: { x: 0, y: 0.12668233283486435, z: 0, w: 0.9919736320078127 } },
                { time: 500, value: { x: 0, y: 0.14484084597308267, z: 0, w: 0.9894711142307809 } },
                { time: 533, value: { x: 0, y: 0.15570543534653766, z: 0, w: 0.9878231147190771 } },
                { time: 566, value: { x: 0, y: 0.15088351084933013, z: 0, w: 0.988555558946501 } },
                { time: 600, value: { x: 0, y: 0.12991729483932005, z: 0, w: 0.9915463728751488 } },
                { time: 633, value: { x: 0, y: 0.10242011780144658, z: 0, w: 0.9947508163701285 } },
                { time: 700, value: { x: 0, y: 0.05371257667775506, z: 0, w: 0.9985656300546282 } },
                { time: 733, value: { x: 0, y: 0.026062807092501604, z: 0, w: 0.999664296395764 } },
                { time: 766, value: { x: 0, y: 0.004882961516159551, z: 0, w: 1 } },
                { time: 800, value: { x: 0, y: 0, z: 0, w: 1.000030518509476 } },
                { time: 833, value: { x: 0, y: 0.01098666341135899, z: 0, w: 0.999969481490524 } },
                { time: 866, value: { x: 0, y: 0.029297769096957305, z: 0, w: 0.999572740867336 } },
                { time: 1000, value: { x: 0, y: 0.12668233283486435, z: 0, w: 0.9919736320078127 } },
                { time: 1033, value: { x: 0, y: 0.14484084597308267, z: 0, w: 0.9894711142307809 } },
                { time: 1066, value: { x: 0, y: 0.15570543534653766, z: 0, w: 0.9878231147190771 } }
              ]
            },
            { animationIndex: 2, keyframes: [] },
            { animationIndex: 3, keyframes: [] },
            { animationIndex: 4, keyframes: [] },
            { animationIndex: 5, keyframes: [] },
            {
              animationIndex: 6,
              keyframes: [
                { time: 0, value: { x: 0, y: 0.00012207403790398877, z: 0, w: 1.000030518509476 } }
              ]
            }
          ],
          trackCount: 7,
          maxTrackLength: 26,
          keyframeCount: 27,
          firstKeyframe: {
            time: 0,
            value: {
              x: 0,
              y: 0.15570543534653766,
              z: 0,
              w: 0.9878231147190771
            },
          },
          empty: false,
          animated: true
        },
        scaling: {
          interpolationType: 0,
          globalSequenceID: -1,
          timestamps: [],
          values: [],
          tracks: [],
          trackCount: 0,
          maxTrackLength: 0,
          keyframeCount: 0,
          firstKeyframe: null,
          empty: true,
          animated: false
        },
        pivotPoint: { x: 0, y: 0, z: 0 },
        billboardType: null,
        billboarded: false,
        animated: true
      });
    });
  });

  describe('#keyBoneLookups', function() {
    it('returns key bone lookups', function() {
      expect(dummy.keyBoneLookups).to.deep.eq([
        -1, -1, -1, -1, -1, -1, 7, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, 35, 20, -1, -1, -1, 1
      ]);
    });
  });

  describe('#vertices', function() {
    it('returns vertices', function() {
      const vertices = dummy.vertices;
      const first = vertices[0];
      const last = vertices[vertices.length - 1];
      expect(vertices.length).to.eq(154);
      expect(first).to.deep.eq({
        position: [
          -0.2735399901866913,
          -0.003535992233082652,
          0.3579200804233551
        ],
        boneWeights: [255, 0, 0, 0],
        boneIndices: [2, 0, 0, 0],
        normal: [
          -0.44266101717948914,
          0.004395408555865288,
          0.8966782689094543
        ],
        textureCoords: [0.9776850342750549, 0.27029675245285034],
        random: [0, 0]
      });
      expect(last).to.deep.eq({
        position: [
          0.1501760482788086,
          -0.0035360539332032204,
          0.05207005515694618
        ],
        boneWeights: [64, 64, 64, 63],
        boneIndices: [7, 8, 14, 9],
        normal: [
          0.48488274216651917,
          -0.00041133747436106205,
          -0.8745790719985962
        ],
        textureCoords: [0.16209588944911957, 0.3589469790458679],
        random: [0, 0]
      });
    });
  });

  describe('#viewCount', function() {
    it('returns view count', function() {
      expect(dummy.viewCount).to.eq(1);
    });
  });

  describe('#colors', function() {
    xit('returns colors');
  });

  describe('#textures', function() {
    it('returns textures', function() {
      expect(dummy.textures).to.deep.eq([
        {
          type: 11,
          flags: 0,
          length: 1,
          filename: ''
        }
      ]);
    });
  });

  describe('#transparencies', function() {
    it('returns transparencies', function() {
      expect(dummy.transparencies).to.deep.eq([
        {
          animated: true,
          empty: false,
          firstKeyframe: {
            time: 0,
            value: 32767
          },
          globalSequenceID: -1,
          interpolationType: 0,
          keyframeCount: 1,
          maxTrackLength: 1,
          timestamps: [[0]],
          values: [[32767]],
          trackCount: 1,
          tracks: [
            {
              animationIndex: 0,
              keyframes: [
                {
                  time: 0,
                  value: 32767
                }
              ]
            }
          ]
        }
      ]);
    });
  });

  describe('#uvAnimations', function() {
    xit('returns UV animations');
  });

  describe('#replacableTextures', function() {
    xit('returns replacable textures');
  });

  describe('#renderFlags', function() {
    it('returns render flags', function() {
      expect(dummy.renderFlags).to.deep.eq([
        {
          flags: 0,
          blendingMode: 1
        }
      ]);
    });
  });

  describe('#boneLookups', function() {
    xit('returns bone lookups');
  });

  describe('#textureLookups', function() {
    xit('returns texture lookups');
  });

  describe('#textureUnits', function() {
    it('returns texture units', function() {
      expect(dummy.textureUnits).to.deep.eq([0]);
    });
  });

  describe('#transparencyLookups', function() {
    xit('returns transparency lookups');
  });

  describe('#uvAnimationLookups', function() {
    xit('returns UV animation lookups');
  });

  describe('#minVertexBox', function() {
    it('returns minimum vertex box', function() {
      expect(dummy.minVertexBox).to.deep.eq({
        x: -0.6340768337249756,
        y: -0.3105764091014862,
        z: -0.15670306980609894
      });
    });
  });

  describe('#maxVertexBox', function() {
    it('returns maximum vertex box', function() {
      expect(dummy.maxVertexBox).to.deep.eq({
        x: 0.47685110569000244,
        y: 0.47006168961524963,
        z: 0.8000571727752686
      });
    });
  });

  describe('#vertexRadius', function() {
    xit('returns vertex radius');
  });

  describe('#minBoundingBox', function() {
    it('returns minimum bounding box', function() {
      expect(dummy.minBoundingBox).to.deep.eq({
        x: -0.3055555522441864,
        y: -0.3055555522441864,
        z: 0
      });
    });
  });

  describe('#maxBoundingBox', function() {
    it('returns maximum bounding box', function() {
      expect(dummy.maxBoundingBox).to.deep.eq({
        x: 0.3055555522441864,
        y: 0.3055555522441864,
        z: 2.031277894973755
      });
    });
  });

  describe('#boundingRadius', function() {
    xit('returns bounding radius');
  });

  describe('#boundingTriangles', function() {
    xit('returns bounding triangles');
  });

  describe('#boundingVertices', function() {
    xit('returns bounding vertices');
  });

  describe('#boundingNormals', function() {
    xit('returns bounding normals');
  });

  describe('#attachments', function() {
    xit('returns attachments');
  });

  describe('#attachmentLookups', function() {
    xit('returns attachment lookups');
  });

  describe('#events', function() {
    xit('returns events');
  });

  describe('#lights', function() {
    xit('returns lights');
  });

  describe('#cameras', function() {
    xit('returns cameras');
  });

  describe('#cameraLookups', function() {
    xit('returns camera lookups');
  });

  describe('#ribbonEmitters', function() {
    xit('returns ribbon emitters');
  });

  describe('#particleEmitters', function() {
    xit('returns particle emitters');
  });

});
