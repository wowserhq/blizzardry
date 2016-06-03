import r from 'restructure';

class Color16 {

  constructor() {
  }

  decode(stream, parent) {
    const value = r.uint16le.decode(stream, parent);
    return value / 32767.0;
  }

}

export default new Color16();
