const r = require('restructure');
const Chunk = require('../chunked/chunk');
const Chunked = require('../chunked');
const {Vec3Float} = require('../types');

const MOHD = Chunk({
  textureCount: r.uint32le,
  groupCount: r.uint32le,
  portalCount: r.uint32le,
  lightCount: r.uint32le,
  modelCount: r.uint32le,
  doodadCount: r.uint32le,
  doodadSetCount: r.uint32le,
  colors: new r.Array(r.uint8, 4),
  wmoID: r.uint32le,
  minBoundingBox: Vec3Float,
  maxBoundingBox: Vec3Float,
  flags: r.uint32le
});

const MOTX = Chunk({
  // TODO: Discard padding zeroes
  filenames: new r.Array(new r.String(null), 'size', 'bytes')
});

module.exports = Chunked({
  MOHD: MOHD,
  MOTX: MOTX,

  flags: function() {
    return this.MOHD.flags;
  }
});
