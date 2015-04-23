var AnimationBlock, Nofs, QuatShort, Vec3Float, r, ref;

r = require('restructure');

AnimationBlock = require('./animation-block');

Nofs = require('./nofs');

ref = require('../types'), QuatShort = ref.QuatShort, Vec3Float = ref.Vec3Float;

module.exports = new r.Struct({
  keyBoneID: r.int32le,
  flags: r.uint32le,
  parentID: r.int16le,
  subMeshID: r.int16le,
  unknowns: new r.Reserved(r.uint16le, 2),
  translation: new AnimationBlock(Vec3Float),
  rotation: new AnimationBlock(QuatShort),
  scaling: new AnimationBlock(Vec3Float),
  pivotPoint: Vec3Float
});
