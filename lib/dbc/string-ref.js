var DBC, StringRef, r, uint32le;

r = require('restructure');

uint32le = require('../types').uint32le;

DBC = require('./');

StringRef = (function() {
  module.exports = StringRef;

  function StringRef() {
    this.string = new r.String(null);
  }

  StringRef.prototype.decode = function(stream, parent) {
    var header, offset, pos, string;
    offset = uint32le.decode(stream, parent);
    pos = stream.pos;
    header = parent.parent;
    offset += DBC.HEADER_SIZE + header.recordCount * header.recordSize;
    stream.pos = offset;
    string = this.string.decode(stream, parent);
    stream.pos = pos;
    return string;
  };

  return StringRef;

})();
