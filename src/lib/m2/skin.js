const r = require('restructure');
const Nofs = require('./nofs');

module.exports = new r.Struct({
  id: r.uint32le,

  indices: new Nofs(r.uint16le),
  // TODO: Speed up triangle decoding by dropping sub-array
  triangles: new Nofs(new r.Array(r.uint16le, 3), function(length) {
    return length / 3;
  }),
  properties: new Nofs(),
  submeshes: new Nofs(),
  textureUnits: new Nofs(),
  bones: r.uint32le
});
