import r from 'restructure';

import AnimationBlock from './animation-block';
import Nofs from './nofs';
import { float2, float3, Quat16Float, Vec3Float } from '../types';

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

  translation: new AnimationBlock(Vec3Float),
  rotation: new AnimationBlock(Quat16Float),
  scaling: new AnimationBlock(Vec3Float),

  pivotPoint: Vec3Float,

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

const RenderFlags = new r.Struct({
  flags: r.uint16le,
  blendingMode: r.uint16le
});

const Texture = new r.Struct({
  type: r.uint32le,
  flags: r.uint32le,
  length: r.uint32le,
  filename: new r.Pointer(r.uint32le, new r.String(null), 'global')
});

const Vertex = new r.Struct({
  position: float3,
  boneWeights: new r.Array(r.uint8, 4),
  boneIndices: new r.Array(r.uint8, 4),
  normal: float3,
  textureCoords: float2,
  random: float2
});

const Color = new r.Struct({
  color: new AnimationBlock(Vec3Float),
  alpha: new AnimationBlock(r.uint16le)
});

const UVAnimation = new r.Struct({
  translation: new AnimationBlock(Vec3Float),
  rotation: new AnimationBlock(Quat16Float),
  scaling: new AnimationBlock(Vec3Float)
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

  colors: new Nofs(Color),
  textures: new Nofs(Texture),
  transparencies: new Nofs(new AnimationBlock(r.int16le)),
  uvAnimations: new Nofs(UVAnimation),
  replacableTextures: new Nofs(),
  renderFlags: new Nofs(RenderFlags),
  boneLookups: new Nofs(),
  textureLookups: new Nofs(r.int16le),
  textureUnits: new Nofs(r.uint16le),
  transparencyLookups: new Nofs(r.int16le),
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

  unknown1: new r.Optional(r.uint32le, function() {
    return this.flags === 8;
  }),
  unknown2: new r.Optional(r.uint32le, function() {
    return this.flags === 8;
  }),

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

    this.transparencies.forEach((transparency) => {
      if (transparency.animated) {
        if (transparency.keyframeCount > 1) {
          animated = true;
        } else if (transparency.firstKeyframe.value !== 32767) {
          animated = true;
        }
      }
    });

    this.colors.forEach((color) => {
      if (color.color.animated || color.alpha.animated) {
        animated = true;
      }
    });

    return animated;
  }
});
