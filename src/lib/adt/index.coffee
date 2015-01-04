r = require('restructure')
{floatle, int8, int32le, uint8, uint16le, uint32le, Vec3Float} = require('../types')
Chunk = require('../chunked/chunk')
Chunked = require('../chunked')
SkipChunk = require('../chunked/skip-chunk')

MHDR = Chunk(
  flags: uint32le

  offsetMCIN: uint32le
  offsetMTEX: uint32le
  offsetMMDX: uint32le
  offsetMMID: uint32le
  offsetMWMO: uint32le
  offsetMWID: uint32le
  offsetMDDF: uint32le
  offsetMODF: uint32le
  offsetMH2O: uint32le
  offsetMCNKs: uint32le
  offsetMFBO: uint32le
  offsetMXTF: uint32le
  offsetMXTP: uint32le

  skip: new r.Reserved(uint32le, 2)
)

MTEX = Chunk(
  filenames: new r.Array(new r.String(null), 'size', 'bytes')
)

MMDX = Chunk(
  filenames: new r.Array(new r.String(null), 'size', 'bytes')
)

MCVT = Chunk(
  heights: new r.Array(floatle, 145)
)

MCNR = Chunk(
  normals: new r.Array(new r.Struct(
    x: int8
    z: int8
    y: int8
  ), 145)
  skip: new r.Reserved(uint8, 13)
)

MCLY = Chunk(
  layers: new r.Array(new r.Struct(
    textureID: uint32le
    offsetMCAL: uint32le
    skip: uint32le
    skip2: int32le
  ), 'size', 'bytes')
)

MCNK = Chunk(
  flags: uint32le
  indexX: uint32le
  indexY: uint32le
  layerCount: uint32le
  doodadRefs: uint32le
  offsetMCVT: uint32le
  offsetMCNR: uint32le
  offsetMCLY: uint32le
  offsetMCRF: uint32le
  offsetMCAL: uint32le
  sizeAlpha: uint32le
  offsetMCSH: uint32le
  sizeShadow: uint32le
  areaID: uint32le
  mapObjRefCount: uint32le
  holes: uint32le

  textureMaps: new r.Reserved(uint16le, 8)

  predTex: uint32le
  noEffectDoodad: uint32le
  offsetMCSE: uint32le
  soundEmittersCount: uint32le
  offsetMCLQ: uint32le
  sizeLiquid: uint32le
  position: Vec3Float
  offsetMCCV: uint32le

  skip: new r.Reserved(uint32le, 2)

  MCVT: MCVT
  MCCV: new r.Optional(SkipChunk, -> @offsetMCCV)
  MCNR: MCNR
  MCLY: MCLY
  MCRF: SkipChunk
  MCSH: SkipChunk
  MCAL: SkipChunk
  MLCQ: new r.Optional(SkipChunk, -> @offsetMCLQ)
  MCSE: SkipChunk
)

module.exports = Chunked(
  MHDR: MHDR
  MCIN: SkipChunk
  MTEX: MTEX
  MMDX: MMDX
  MMID: SkipChunk
  MWMO: require('../chunked/mwmo')
  MWID: SkipChunk
  MDDF: SkipChunk
  MODF: SkipChunk
  MH2O: SkipChunk
  MCNKs: new r.Array(MCNK, 256)
  MFBO: new r.Optional(SkipChunk, -> @offsetMFBO)
  MTXF: new r.Optional(SkipChunk, -> @offsetMTXF)
  MTXP: new r.Optional(SkipChunk, -> @offsetMTXP)
)
