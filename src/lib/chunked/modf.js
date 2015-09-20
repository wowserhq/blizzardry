const r = require('restructure');
const Chunk = require('./chunk');
const { Vec3Float } = require('../types');

module.exports = Chunk({
  entries: new r.Array(new r.Struct({
    index: r.uint32le,
    id: r.uint32le,
    position: Vec3Float,
    rotation: Vec3Float,
    minBoundingBox: Vec3Float,
    maxBoundingBox: Vec3Float,
    flags: r.uint16le,
    doodadSet: r.uint16le,
    nameSet: r.uint16le,
    padding: new r.Reserved(r.uint16le),

    filename: function() {
      return this.parent.parent.MWMO.filenames[this.index];
    }
  }), 'size', 'bytes')
});
