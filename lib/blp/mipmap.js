var BLPLib, Mipmap, attr;

attr = require('attr-accessor');

BLPLib = require('./blp-lib');

Mipmap = (function() {
  var get;

  module.exports = Mipmap;

  get = attr.accessors(Mipmap)[0];

  function Mipmap(blp, level) {
    this.blp = blp;
    this.level = level;
  }

  get({
    width: function() {
      return BLPLib.blp_width(this.blp.handle, this.level);
    }
  });

  get({
    height: function() {
      return BLPLib.blp_height(this.blp.handle, this.level);
    }
  });

  return Mipmap;

})();
