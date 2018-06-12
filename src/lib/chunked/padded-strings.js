import r from 'restructure';

class PaddedStrings extends r.Array {
  constructor(length, lengthType) {
    super(new r.String(null), length, lengthType);
  }

  decode(stream, parent) {
    const res = {};

    let index = -1;
    super.decode(stream, parent).forEach(function (item) {
      index += 1;
      if (item.length) {
        res[index] = item;
      }
      index += item.length;
    });

    return res;
  }
}

export default PaddedStrings;
