import r from 'restructure';

class CompFixed16 {

  constructor() {
  }

  decode(stream, parent) {
    const value = r.uint16le.decode(stream, parent);
    return (value - 32767.0) / 32767.0;
  }

}

export default new CompFixed16();
