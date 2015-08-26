const r = require('restructure');
const Nofs = require('./nofs');

module.exports = new r.Struct({
  id: r.uint32le,

  indices: new Nofs(r.uint16le),
  triangles: new Nofs(r.uint16le),
  properties: new Nofs(),
  submeshes: new Nofs(),
  textureUnits: new Nofs(),
  bones: r.uint32le
});
