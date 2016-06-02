import { expect, fixtures } from '../spec-helper';

import fs from 'fs';
import r from 'restructure';

import Skin from '../../lib/m2/skin';

describe('Skin', function() {

  const dummy = (function() {
    const data = fs.readFileSync(fixtures + 'Rabbit00.skin');
    const stream = new r.DecodeStream(data);
    return Skin.decode(stream);
  }());

  describe('#signature', function() {
    it('returns SKIN', function() {
      expect(dummy.signature).to.eq('SKIN');
    });
  });

  describe('#indices', function() {
    it('returns indices', function() {
      const indices = dummy.indices;
      expect(indices).to.have.length(154);
      expect(indices.slice(0, 4)).to.deep.eq([52, 58, 115, 0]);
      expect(indices.slice(-4)).to.deep.eq([29, 75, 76, 23]);
    });
  });

  describe('#triangles', function() {
    it('returns triangles', function() {
      const triangles = dummy.triangles;
      expect(triangles).to.have.length(321);
      expect(triangles.slice(0, 6)).to.deep.eq([
        0, 1, 2,
        3, 4, 5
      ]);
      expect(triangles.slice(-6)).to.deep.eq([
        150, 137, 151,
        152, 148, 153
      ]);
    });
  });

  describe('#boneIndices', function() {
    it('returns bone indices', function() {
      const indices = dummy.boneIndices;
      expect(indices).to.have.length(154);
      expect(indices.slice(0, 3)).to.deep.eq([
        [1, 0, 0, 0],
        [0, 2, 0, 0],
        [0, 2, 3, 0]
      ]);
      expect(indices.slice(-3)).to.deep.eq([
        [17, 16, 0, 0],
        [17, 16, 0, 0],
        [17, 0, 0, 0]
      ]);
    });
  });

  describe('#submeshes', function() {
    it('returns submeshes', function() {
      expect(dummy.submeshes).to.deep.eq([
        {
          partID: 0,
          level: 0,
          startVertex: 0,
          vertexCount: 154,
          startTriangle: 0,
          triangleCount: 321,
          boneCount: 18,
          startBone: 54,
          boneInfluences: 4,
          rootBone: 3,
          centerMass: {
            x: -0.028278673067688942,
            y: -0.005275045055896044,
            z: 0.09622777253389359
          },
          centerBoundingBox: {
            x: -0.09150424599647522,
            y: -0.0035360679030418396,
            z: 0.24830669164657593
          },
          radius: 0.4231628179550171
        }
      ]);
    });
  });

  describe('#batches', function() {
    it('returns batches', function() {
      expect(dummy.batches).to.deep.eq([
        {
          flags: 16,
          shaderID: 0,
          submeshIndex: 0,
          submeshIndex2: 0,
          vertexColorAnimationIndex: -1,
          materialIndex: 0,
          layer: 0,
          opCount: 1,
          textureLookup: 0,
          textureMappingIndex: 0,
          transparencyAnimationLookup: 0,
          uvAnimationLookup: 0
        }
      ]);
    });
  });

  describe('#boneCount', function() {
    it('returns number of bones', function() {
      expect(dummy.boneCount).to.eq(21);
    });
  });

});
