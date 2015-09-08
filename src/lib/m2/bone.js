const r = require('restructure');
const AnimationBlock = require('./animation-block');
const {Quat16Float, Vec3Float} = require('../types');

module.exports = new r.Struct({
  keyBoneID: r.int32le,
  flags: r.uint32le,
  parentID: r.int16le,
  subMeshID: r.int16le,

  unknowns: new r.Reserved(r.uint16le, 2),

  translation: new AnimationBlock(Vec3Float),
  rotation: new AnimationBlock(Quat16Float),
  scaling: new AnimationBlock(Vec3Float),

  pivotPoint: Vec3Float
});
