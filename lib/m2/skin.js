var Nofs, r, uint16le, uint32le, _ref;

r = require('restructure');

_ref = require('../types'), uint16le = _ref.uint16le, uint32le = _ref.uint32le;

Nofs = require('./nofs');

module.exports = new r.Struct({
  id: uint32le,
  indices: new Nofs(uint16le),
  triangles: new Nofs(new r.Array(uint16le, 3), function(length) {
    return length / 3;
  }),
  properties: new Nofs(),
  submeshes: new Nofs(),
  textureUnits: new Nofs(),
  bones: uint32le
});
