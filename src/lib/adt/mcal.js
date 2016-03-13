import Chunk from '../chunked/chunk';

class MCAL {

  static ALPHA_MAP_SIZE = 4096;
  static ALPHA_MAP_HALF_SIZE = 2048;

  constructor() {
    this.chunk = Chunk();
  }

  decode(stream, parent) {
    const data = this.chunk.decode(stream, parent);

    // Skip the fully opaque initial layer
    const layers = parent.MCLY.layers.slice(1);
    data.alphaMaps = layers.map((layer) => {
      if (layer.compressed) {
        return this.decodeCompressed(stream);
      }
      return this.decodeUncompressed(stream, parent);
    });

    return data;
  }

  decodeCompressed(stream) {
    const size = this.constructor.ALPHA_MAP_SIZE;
    const buffer = stream.buffer;
    const alpha = new Buffer(size);

    let writePos = 0;
    while (writePos < size) {
      const fill = buffer[stream.pos] & 0x80;
      const count = buffer[stream.pos] & 0x7F;
      stream.pos++;
      for (let i = 0; i < count; ++i) {
        if (writePos === size) {
          break;
        }
        alpha[writePos] = buffer[stream.pos];
        writePos++;
        if (!fill) {
          stream.pos++;
        }
      }
      if (fill) {
        stream.pos++;
      }
    }

    return alpha;
  }

  decodeUncompressed(stream, parent) {
    const size = this.constructor.ALPHA_MAP_SIZE;
    const wdtFlags = parent.parent.wdtFlags;
    if (wdtFlags & 0x4 || wdtFlags & 0x80) {
      return stream.readBuffer(size);
    }

    const halfSize = this.constructor.ALPHA_MAP_HALF_SIZE;
    const buffer = stream.readBuffer(halfSize);
    const alpha = new Buffer(size);
    const side = Math.sqrt(size);

    for (let i = 0; i < halfSize; ++i) {
      const value = buffer[i];
      const offset = i * 2;
      alpha[offset] = (value & 0x0F) * 17;
      alpha[offset + 1] = (value >> 4) * 17;

      // Correct broken alpha maps unless flagged as correct by chunk
      // See: http://www.pxr.dk/wowdev/wiki/index.php?title=ADT/v18#Uncompressed_.282048.29
      if (!(parent.flags & 0x200)) {
        if (offset > size - side) {
          alpha[offset] = alpha[offset - side];
          alpha[offset + 1] = alpha[offset + 1 - side];
        }
        if (offset % side === (side - 2)) {
          alpha[offset + 1] = alpha[offset];
        }
      }
    }

    return alpha;
  }

}

export default new MCAL();
