var Nofs, r, uint32le;

r = require('restructure');

uint32le = require('../types').uint32le;

Nofs = (function() {
  module.exports = Nofs;

  function Nofs(type) {
    this.type = type;
    this.count = uint32le;
  }

  Nofs.prototype.decode = function(stream, parent) {
    var length, pointer;
    length = this.count.decode(stream);
    if (this.type) {
      pointer = new r.Pointer(uint32le, new r.Array(this.type, length));
      return pointer.decode(stream, parent);
    } else {
      uint32le.decode(stream);
      return length;
    }
  };

  return Nofs;

})();
