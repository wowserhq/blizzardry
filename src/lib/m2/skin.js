const r = require('restructure');
const Nofs = require('./nofs');
const {Vec3Float} = require('../types');

const Submesh = new r.Struct({
  id: r.uint16le,
  level: r.uint16le,
  startVertex: r.uint16le,
  vertexCount: r.uint16le,
  startTriangle: r.uint16le,
  triangleCount: r.uint16le,
  boneCount: r.uint16le,
  startBone: r.uint16le,
  boneInfluences: r.uint16le,
  rootBone: r.uint16le,
  centerMass: Vec3Float,
  centerBoundingBox: Vec3Float,
  radius: r.floatle
});

module.exports = new r.Struct({
  signature: new r.String(4),
  indices: new Nofs(r.uint16le),
  triangles: new Nofs(r.uint16le),
  boneIndices: new Nofs(new r.Array(r.uint8, 4)),
  submeshes: new Nofs(Submesh),
  textureUnits: new Nofs(),
  boneCount: r.uint32le
});
