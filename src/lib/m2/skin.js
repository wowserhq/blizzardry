const r = require('restructure');
const Nofs = require('./nofs');

module.exports = new r.Struct({
  id: r.uint32le,

  indices: new Nofs(r.uint16le),
  triangles: new Nofs(r.uint16le),
  boneIndices: new Nofs(new r.Array(r.uint8, 4)),
  submeshes: new Nofs(),
  textureUnits: new Nofs(),
  bones: r.uint32le
});
