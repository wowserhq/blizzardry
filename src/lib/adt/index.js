const r = require('restructure');
const Chunk = require('../chunked/chunk');
const Chunked = require('../chunked');
const SkipChunk = require('../chunked/skip-chunk');
const { Vec3Float } = require('../types');

const MHDR = Chunk({
  flags: r.uint32le,

  offsetMCIN: r.uint32le,
  offsetMTEX: r.uint32le,
  offsetMMDX: r.uint32le,
  offsetMMID: r.uint32le,
  offsetMWMO: r.uint32le,
  offsetMWID: r.uint32le,
  offsetMDDF: r.uint32le,
  offsetMODF: r.uint32le,
  offsetMFBO: r.uint32le,
  offsetMH2O: r.uint32le,
  offsetMTXF: r.uint32le,

  skip: new r.Reserved(r.uint32le, 4)
});

const MTEX = Chunk({
  filenames: new r.Array(new r.String(null), 'size', 'bytes')
});

const MMDX = Chunk({
  filenames: new r.Array(new r.String(null), 'size', 'bytes')
});

const MCVT = Chunk({
  heights: new r.Array(r.floatle, 145)
});

const MCNR = Chunk({
  normals: new r.Array(new r.Struct({
    x: r.int8,
    z: r.int8,
    y: r.int8
  }), 145),
  skip: new r.Reserved(r.uint8, 13)
});

const MCLY = Chunk({
  layers: new r.Array(new r.Struct({
    textureID: r.uint32le,
    offsetMCAL: r.uint32le,
    skip: r.uint32le,
    skip2: r.int32le
  }), 'size', 'bytes')
});

const MCSH = Chunk({
  // Incorrect size reported by MCSH in some ADTs
  actualSize: function() {
    return this.parent.sizeMCSH;
  },
  skip: new r.Reserved(r.uint8, 'actualSize')
});

const MCAL = Chunk({
  // Incorrect size reported by MCAL in some ADTs
  actualSize: function() {
    return this.parent.sizeMCAL;
  },
  skip: new r.Reserved(r.uint8, 'actualSize')
});

const MCNK = Chunk({
  flags: r.uint32le,
  indexX: r.uint32le,
  indexY: r.uint32le,
  layerCount: r.uint32le,
  doodadRefs: r.uint32le,
  offsetMCVT: r.uint32le,
  offsetMCNR: r.uint32le,
  offsetMCLY: r.uint32le,
  offsetMCRF: r.uint32le,
  offsetMCAL: r.uint32le,
  sizeMCAL: r.uint32le,
  offsetMCSH: r.uint32le,
  sizeMCSH: r.uint32le,
  areaID: r.uint32le,
  mapObjRefCount: r.uint32le,
  holes: r.uint32le,

  textureMaps: new r.Reserved(r.uint16le, 8),

  predTex: r.uint32le,
  noEffectDoodad: r.uint32le,
  offsetMCSE: r.uint32le,
  soundEmitterCount: r.uint32le,
  offsetMCLQ: r.uint32le,
  sizeLiquid: r.uint32le,
  position: Vec3Float,
  offsetMCCV: r.uint32le,

  skip: new r.Reserved(r.uint32le, 2),

  MCVT: MCVT,
  MCCV: new r.Optional(SkipChunk, function() {
    return this.offsetMCCV;
  }),
  MCNR: MCNR,
  MCLY: MCLY,
  MCRF: SkipChunk,
  MCSH: new r.Optional(MCSH, function() {
    return this.flags & 0x01;
  }),
  MCAL: MCAL,
  MLCQ: new r.Optional(SkipChunk, function() {
    return this.offsetMCLQ;
  }),
  MCSE: SkipChunk
});

module.exports = Chunked({
  MHDR: MHDR,
  MCIN: SkipChunk,
  MTEX: MTEX,
  MMDX: MMDX,
  MMID: SkipChunk,
  MWMO: require('../chunked/mwmo'),
  MWID: SkipChunk,
  MDDF: new r.Optional(SkipChunk, function() {
    return this.MHDR.offsetMDDF;
  }),
  MODF: new r.Optional(require('../chunked/modf'), function() {
    return this.MHDR.offsetMODF;
  }),
  MH2O: new r.Optional(SkipChunk, function() {
    return this.MHDR.offsetMH2O;
  }),
  MCNKs: new r.Array(MCNK, 256),
  MFBO: new r.Optional(SkipChunk, function() {
    return this.MHDR.offsetMFBO;
  }),
  MTXF: new r.Optional(SkipChunk, function() {
    return this.MHDR.offsetMTXF;
  }),
  MTXP: new r.Optional(SkipChunk, function() {
    return this.MHDR.offsetMTXP;
  }),

  flags: function() {
    return this.MHDR.flags;
  }
});
