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
    const wdtFlags = parent.parent.wdtFlags;
    if (wdtFlags & 0x4 || wdtFlags & 0x80) {
      return stream.readBuffer(this.constructor.ALPHA_MAP_SIZE);
    }
    const size = this.constructor.ALPHA_MAP_HALF_SIZE;
    return stream.readBuffer(size);
  }

}

export default MCAL;
