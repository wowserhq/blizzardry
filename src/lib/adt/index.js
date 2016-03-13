import r from 'restructure';

import Chunk from '../chunked/chunk';
import Chunked from '../chunked';
import MCAL from './mcal';
import MH2O from './mh2o';
import MODF from '../chunked/modf';
import MWMO from '../chunked/mwmo';
import SkipChunk from '../chunked/skip-chunk';
import { Vec3Float } from '../types';

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

const MDDF = Chunk({
  entries: new r.Array(new r.Struct({
    index: r.uint32le,
    id: r.uint32le,
    position: Vec3Float,
    rotation: Vec3Float,
    scale: r.uint16le,
    flags: r.uint16le,

    filename: function() {
      return this.parent.parent.MMDX.filenames[this.index];
    }
  }), 'size', 'bytes')
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
    flags: r.uint32le,
    offsetMCAL: r.uint32le,
    effectID: r.int16le,
    skip: r.int16le,

    compressed: function() {
      return this.flags & 0x200;
    }
  }), 'size', 'bytes')
});

const MCRF = Chunk({
  MDDFs: new r.Array(r.uint32le, function() {
    return this.parent.doodadCount;
  }),

  MODFs: new r.Array(r.uint32le, function() {
    return this.parent.wmoCount;
  }),

  doodadEntries: function() {
    const entries = this.parent.parent.MDDF.entries;
    return this.MDDFs.map((id) => entries[id]);
  },

  wmoEntries: function() {
    const entries = this.parent.parent.MODF.entries;
    return this.MODFs.map((id) => entries[id]);
  }
});

const MCSH = Chunk({
  // Incorrect size reported by MCSH in some ADTs
  actualSize: function() {
    return this.parent.sizeMCSH;
  },
  skip: new r.Reserved(r.uint8, 'actualSize')
});

const MCLQ = Chunk({
  // Incorrect size reported by MCLQ in some ADTs
  actualSize: function() {
    return this.parent.sizeMCLQ - 8;
  },
  skip: new r.Reserved(r.uint8, 'actualSize')
});

const MCNK = Chunk({
  flags: r.uint32le,
  indexX: r.uint32le,
  indexY: r.uint32le,
  layerCount: r.uint32le,
  doodadCount: r.uint32le,
  offsetMCVT: r.uint32le,
  offsetMCNR: r.uint32le,
  offsetMCLY: r.uint32le,
  offsetMCRF: r.uint32le,
  offsetMCAL: r.uint32le,
  sizeMCAL: r.uint32le,
  offsetMCSH: r.uint32le,
  sizeMCSH: r.uint32le,
  areaID: r.uint32le,
  wmoCount: r.uint32le,
  holes: r.uint16le,
  unknown: r.uint16le,

  textureMaps: new r.Reserved(r.uint16le, 8),

  predTex: r.uint32le,
  noEffectDoodad: r.uint32le,
  offsetMCSE: r.uint32le,
  soundEmitterCount: r.uint32le,
  offsetMCLQ: r.uint32le,
  sizeMCLQ: r.uint32le,
  position: Vec3Float,
  offsetMCCV: r.uint32le,

  skip: new r.Reserved(r.uint32le, 2),

  MCVT: MCVT,
  MCCV: new r.Optional(SkipChunk, function() {
    return this.offsetMCCV;
  }),
  MCNR: MCNR,
  MCLY: MCLY,
  MCRF: MCRF,
  MCSH: new r.Optional(MCSH, function() {
    return this.flags & 0x01;
  }),
  MCAL: MCAL,
  MCLQ: new r.Optional(MCLQ, function() {
    return this.offsetMCLQ;
  }),
  MCSE: new r.Optional(SkipChunk, function() {
    return this.offsetMCSE;
  })
});

const ADT = function(wdtFlags) {
  return Chunked({
    MHDR: MHDR,

    flags: function() {
      return this.MHDR.flags;
    },

    wdtFlags: function() {
      return wdtFlags;
    },

    MCIN: SkipChunk,
    MTEX: MTEX,
    MMDX: MMDX,
    MMID: SkipChunk,
    MWMO: MWMO,
    MWID: SkipChunk,
    MDDF: new r.Optional(MDDF, function() {
      return this.MHDR.offsetMDDF;
    }),
    MODF: new r.Optional(MODF, function() {
      return this.MHDR.offsetMODF;
    }),
    MH2O: new r.Optional(MH2O, function() {
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
    })
  });
};

ADT.decode = function(stream) {
  return ADT().decode(stream);
};

export default ADT;
