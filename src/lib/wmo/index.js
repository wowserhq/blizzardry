import r from 'restructure';

import Chunk from '../chunked/chunk';
import Chunked from '../chunked';
import SkipChunk from '../chunked/skip-chunk';
import PaddedStrings from '../chunked/padded-strings';
import { Quat, Vec3Float } from '../types';
import { float32array3 } from '../types';

const MOHD = Chunk({
  textureCount: r.uint32le,
  groupCount: r.uint32le,
  portalCount: r.uint32le,
  lightCount: r.uint32le,
  modelCount: r.uint32le,
  doodadCount: r.uint32le,
  doodadSetCount: r.uint32le,
  baseColor: new r.Struct({
    r: r.uint8,
    g: r.uint8,
    b: r.uint8,
    a: r.uint8
  }),
  wmoID: r.uint32le,
  minBoundingBox: Vec3Float,
  maxBoundingBox: Vec3Float,
  flags: r.uint32le,

  skipBaseColor: function() {
    return (this.flags & 0x02) !== 0;
  }
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
      color: new r.Struct({
        r: r.uint8,
        g: r.uint8,
        b: r.uint8,
        a: r.uint8
      }),
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
    nameOffset: r.int32le,

    indoor: function() {
      return (this.flags & 0x2000) !== 0 && (this.flags & 0x8) === 0;
    }
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

const MODN = Chunk({
  filenames: new PaddedStrings('size', 'bytes')
});

const MODD = Chunk({
  doodads: new r.Array(new r.Struct({
    filenameOffset: r.uint24le,
    filename: function() {
      return this.parent.parent.MODN.filenames[this.filenameOffset];
    },
    flags: r.uint8,
    position: Vec3Float,
    rotation: Quat,
    scale: r.floatle,
    color: r.uint32le
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

const MOPV = Chunk({
  vertices: new r.Array(float32array3, 'size', 'bytes')
});

const MOPT = Chunk({
  portals: new r.Array(new r.Struct({
    vertexOffset: r.uint16le,
    vertexCount: r.uint16le,
    plane: new r.Struct({
      normal: float32array3,
      constant: r.floatle
    })
  }), 'size', 'bytes')
});

const MOPR = Chunk({
  references: new r.Array(new r.Struct({
    portalIndex: r.uint16le,
    groupIndex: r.uint16le,
    side: r.int16le,
    unknown1: r.uint16le
  }), 'size', 'bytes')
});

export default Chunked({
  MOHD: MOHD,
  MOTX: MOTX,
  MOMT: MOMT,
  MOGN: MOGN,
  MOGI: MOGI,
  MOSB: MOSB,
  MOPV: MOPV,
  MOPT: MOPT,
  MOPR: MOPR,
  MOVV: SkipChunk,
  MOVB: SkipChunk,
  MOLT: SkipChunk,
  MODS: MODS,
  MODN: MODN,
  MODD: MODD,
  MFOG: MFOG,
  // TODO: Optional MCVP chunk

  flags: function() {
    return this.MOHD.flags;
  }
});
