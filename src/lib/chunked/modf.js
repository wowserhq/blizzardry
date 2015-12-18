import r from 'restructure';

import Chunk from './chunk';
import { Vec3Float } from '../types';

export default Chunk({
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
