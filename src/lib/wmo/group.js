import r from 'restructure';
import Chunk from '../chunked/chunk';
import Chunked from '../chunked';
import SkipChunk from '../chunked/skip-chunk';
import { float2, float3, Vec3Float } from '../types';

const MOGP = Chunk({
  nameOffset: r.uint32le,
  descriptionOffset: r.uint32le,
  flags: r.uint32le,
  minBoundingBox: Vec3Float,
  maxBoundingBox: Vec3Float,
  portalOffset: r.uint16le,
  aBatchCount: r.uint16le,
  interiorBatchCount: r.uint16le,
  exteriorBatchCount: r.uint16le,
  fogOffsets: new r.Array(r.uint8, 4),
  unknown: new r.Reserved(r.uint32le),
  groupID: r.uint32le,
  unknowns: new r.Reserved(r.uint32le, 3)
});

const MOPY = Chunk({
  triangles: new r.Array(new r.Struct({
    flags: r.uint8,
    materialID: r.int8
  }), 'size', 'bytes')
});

const MOVI = Chunk({
  triangles: new r.Array(r.uint16le, 'size', 'bytes')
});

const MOVT = Chunk({
  vertices: new r.Array(float3, 'size', 'bytes')
});

const MONR = Chunk({
  normals: new r.Array(float3, 'size', 'bytes')
});

const MOTV = Chunk({
  textureCoords: new r.Array(float2, 'size', 'bytes')
});

const MOBA = Chunk({
  batches: new r.Array(new r.Struct({
    skips: new r.Reserved(r.int16le, 2 * 3),
    firstIndex: r.uint32le,
    indexCount: r.uint16le,
    firstVertex: r.uint16le,
    lastVertex: r.uint16le,
    skip: new r.Reserved(r.uint8),
    materialID: r.uint8
  }), 'size', 'bytes')
});

export default Chunked({
  MOGP: MOGP,
  MOPY: MOPY,
  MOVI: MOVI,
  MOVT: MOVT,
  MONR: MONR,
  MOTV: MOTV,
  MOBA: MOBA,

  flags: function() {
    return this.MOGP.flags;
  },

  MOBN: new r.Optional(SkipChunk, function() {
    return this.flags & 0x1;
  }),
  MOBR: new r.Optional(SkipChunk, function() {
    return this.flags & 0x1;
  }),
  MOCV: new r.Optional(SkipChunk, function() {
    return this.flags & 0x4;
  }),
  MOLR: new r.Optional(SkipChunk, function() {
    return this.flags & 0x200;
  }),
  MODR: new r.Optional(SkipChunk, function() {
    return this.flags & 0x800;
  })
});
