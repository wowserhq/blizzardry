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

  get({
    data: function() {
      var data, size;
      data = BLPLib.blp_convert(this.blp.file, this.blp.handle, this.level);
      size = this.width * this.height * 4;
      return data.reinterpret(size, 0);
    }
  });

  get({
    bgra: function() {
      return this.data;
    }
  });

  get({
    rgba: function() {
      var blue, i, j, len, pixels, red;
      pixels = this.data;
      for (i = j = 0, len = pixels.length; j < len; i = j += 4) {
        blue = pixels[i];
        red = pixels[i + 2];
        pixels[i] = red;
        pixels[i + 2] = blue;
      }
      return pixels;
    }
  });

  return Mipmap;

})();
