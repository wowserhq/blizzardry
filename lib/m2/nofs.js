var Nofs, r;

r = require('restructure');

Nofs = (function() {
  module.exports = Nofs;

  function Nofs(type, length1) {
    this.type = type;
    this.length = length1;
  }

  Nofs.prototype.decode = function(stream, parent) {
    var length, pointer;
    length = r.uint32le.decode(stream);
    if (typeof this.length === 'function') {
      length = this.length.call(null, length);
    }
    if (this.type) {
      pointer = new r.Pointer(r.uint32le, new r.Array(this.type, length), 'global');
      return pointer.decode(stream, parent);
    } else {
      r.uint32le.decode(stream);
      return length;
    }
  };

  return Nofs;

})();
