import Quat16 from './quat16';

class Quat16Float {
  constructor() {
    this.quat16 = Quat16;
  }

  decode(stream, parent) {
    const quat = this.quat16.decode(stream, parent);
    for (const prop in quat) {
      const value = quat[prop];
      quat[prop] = (value < 0 ? value + 32768 : value - 32767) / 32767;
    }
    return quat;
  }
}

export default new Quat16Float();
