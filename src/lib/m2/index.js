import r from 'restructure';

import AnimationBlock from './animation-block';
import Nofs from './nofs';
import { Vec3Float } from '../types';
import { color16, compfixed16, compfixed16array4, float32array2, float32array3 } from '../types';

const Animation = new r.Struct({
  id: r.uint16le,
  subID: r.uint16le,
  length: r.uint32le,
  movementSpeed: r.floatle,
  flags: r.uint32le,
  probability: r.int16le,

  unknowns: new r.Reserved(r.uint16le, 5),

  blendTime: r.uint32le,
  minBoundingBox: Vec3Float,
  maxBoundingBox: Vec3Float,
  boundingRadius: r.floatle,
  nextAnimationID: r.int16le,
  alias: r.uint16le
});

const Bone = new r.Struct({
  keyBoneID: r.int32le,
  flags: r.uint32le,
  parentID: r.int16le,
  submeshID: r.int16le,

  unknowns: new r.Reserved(r.uint16le, 2),

  translation: new AnimationBlock(float32array3),
  rotation: new AnimationBlock(compfixed16array4),
  scaling: new AnimationBlock(float32array3),

  pivotPoint: float32array3,

  billboardType: function() {
    // Spherical
    if (this.flags & 0x08) {
      return 0;
    // Cylindrical; locked to x
    } else if (this.flags & 0x10) {
      return 1;
    // Cylindrical; locked to y
    } else if (this.flags & 0x20) {
      return 2;
    // Cylindrical; locked to z
    } else if (this.flags & 0x40) {
      return 3;
    } else {
      return null;
    }
  },

  billboarded: function() {
    return this.billboardType !== null;
  },

  animated: function() {
    return this.translation.animated ||
           this.rotation.animated ||
           this.scaling.animated ||
           this.billboarded;
  }
});

const Material = new r.Struct({
  renderFlags: r.uint16le,
  blendingMode: r.uint16le
});

const Texture = new r.Struct({
  type: r.uint32le,
  flags: r.uint32le,
  length: r.uint32le,
  filename: new r.Pointer(r.uint32le, new r.String(null), 'global')
});

const Vertex = new r.Struct({
  position: float32array3,
  boneWeights: new r.Array(r.uint8, 4),
  boneIndices: new r.Array(r.uint8, 4),
  normal: float32array3,
  textureCoords: new r.Array(float32array2, 2)
});

const Color = new r.Struct({
  color: new AnimationBlock(float32array3),
  alpha: new AnimationBlock(color16)
});

const UVAnimation = new r.Struct({
  translation: new AnimationBlock(float32array3),
  rotation: new AnimationBlock(compfixed16array4),
  scaling: new AnimationBlock(float32array3),

  animated: function() {
    return this.translation.animated ||
      this.rotation.animated ||
      this.scaling.animated;
  }
});

export default new r.Struct({
  signature: new r.String(4),
  version: r.uint32le,

  names: new Nofs(new r.String()),
  name: function() {
    return this.names[0];
  },

  flags: r.uint32le,

  sequences: new Nofs(r.uint32le),
  animations: new Nofs(Animation),
  animationLookups: new Nofs(),
  bones: new Nofs(Bone),
  keyBoneLookups: new Nofs(r.int16le),

  vertices: new Nofs(Vertex),

  viewCount: r.uint32le,

  vertexColorAnimations: new Nofs(Color),
  textures: new Nofs(Texture),
  transparencyAnimations: new Nofs(new AnimationBlock(color16)),
  uvAnimations: new Nofs(UVAnimation),
  replacableTextures: new Nofs(),
  materials: new Nofs(Material),
  boneLookups: new Nofs(r.int16le),
  textureLookups: new Nofs(r.int16le),
  textureMappings: new Nofs(r.int16le),
  transparencyAnimationLookups: new Nofs(r.int16le),
  uvAnimationLookups: new Nofs(r.int16le),

  minVertexBox: Vec3Float,
  maxVertexBox: Vec3Float,
  vertexRadius: r.floatle,

  minBoundingBox: Vec3Float,
  maxBoundingBox: Vec3Float,
  boundingRadius: r.floatle,

  boundingTriangles: new Nofs(),
  boundingVertices: new Nofs(),
  boundingNormals: new Nofs(),
  attachments: new Nofs(),
  attachmentLookups: new Nofs(),
  events: new Nofs(),
  lights: new Nofs(),
  cameras: new Nofs(),
  cameraLookups: new Nofs(),
  ribbonEmitters: new Nofs(),
  particleEmitters: new Nofs(),

  blendingOverrides: new r.Optional(new Nofs(r.uint16le), function() {
    return (this.flags & 0x08) !== 0;
  }),

  overrideBlending: function() {
    return (this.flags & 0x08) !== 0;
  },

  canInstance: function() {
    let instance = true;

    this.bones.forEach((bone) => {
      if (bone.animated) {
        instance = false;
      }
    });

    return instance;
  },

  animated: function() {
    let animated = false;

    this.bones.forEach((bone) => {
      if (bone.animated) {
        animated = true;
      }
    });

    this.uvAnimations.forEach((uvAnimation) => {
      if (uvAnimation.animated) {
        animated = true;
      }
    });

    this.transparencyAnimations.forEach((transparency) => {
      if (transparency.animated) {
        if (transparency.keyframeCount > 1) {
          animated = true;
        } else if (transparency.firstKeyframe.value !== 1.0) {
          animated = true;
        }
      }
    });

    this.vertexColorAnimations.forEach((color) => {
      if (color.color.animated || color.alpha.animated) {
        animated = true;
      }
    });

    return animated;
  }
});
