const r = require('restructure');
const Chunk = require('../chunked/chunk');
const Chunked = require('../chunked');
const PaddedStrings = require('../chunked/padded-strings');
const SkipChunk = require('../chunked/skip-chunk');
const { Vec3Float } = require('../types');

const MOHD = Chunk({
  textureCount: r.uint32le,
  groupCount: r.uint32le,
  portalCount: r.uint32le,
  lightCount: r.uint32le,
  modelCount: r.uint32le,
  doodadCount: r.uint32le,
  doodadSetCount: r.uint32le,
  color: r.uint32le,
  wmoID: r.uint32le,
  minBoundingBox: Vec3Float,
  maxBoundingBox: Vec3Float,
  flags: r.uint32le
});

const MOTX = Chunk({
  filenames: new PaddedStrings('size', 'bytes')
});

const MOMT = Chunk({
  materials: new r.Array(new r.Struct({
    flags: r.uint32le,
    shader: r.uint32le,
    blendMode: r.uint32le,

    textures: new r.Array(new r.Struct({
      offset: r.uint32le,
      color: r.uint32le,
      flags: r.uint32le
    }), 3),

    unknowns: new r.Reserved(r.uint32le, 4)
  }), 'size', 'bytes')
});

const MOGN = Chunk({
  names: new r.Array(new r.String(null), 'size', 'bytes')
});

const MOGI = Chunk({
  groups: new r.Array(new r.Struct({
    flags: r.uint32le,
    minBoundingBox: Vec3Float,
    maxBoundingBox: Vec3Float,
    nameOffset: r.int32le
  }), 'size', 'bytes')
});

const MOSB = Chunk({
  skybox: new r.String('size')
});

const MODS = Chunk({
  sets: new r.Array(new r.Struct({
    name: new r.String(20),
    startIndex: r.uint32le,
    doodadCount: r.uint32le,
    unused: new r.Reserved(r.uint32le)
  }), 'size', 'bytes')
});

const MFOG = Chunk({
  fogs: new r.Array(new r.Struct({
    flags: r.uint32le,
    position: Vec3Float,
    smallerRadius: r.floatle,
    largerRadius: r.floatle,
    fogEnd: r.floatle,
    fogStartMultiplier: r.floatle,
    color: r.uint32le,
    unknowns: new r.Reserved(r.floatle, 2),
    color2: r.uint32le
  }), 'size', 'bytes')
});

module.exports = Chunked({
  MOHD: MOHD,
  MOTX: MOTX,
  MOMT: MOMT,
  MOGN: MOGN,
  MOGI: MOGI,
  MOSB: MOSB,
  MOPV: SkipChunk,
  MOPT: SkipChunk,
  MOPR: SkipChunk,
  MOVV: SkipChunk,
  MOVB: SkipChunk,
  MOLT: SkipChunk,
  MODS: MODS,
  MODN: SkipChunk,
  MODD: SkipChunk,
  MFOG: MFOG,
  // TODO: Optional MCVP chunk

  flags: function() {
    return this.MOHD.flags;
  }
});
