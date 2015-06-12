'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var attr = require('attr-accessor');
var BLPLib = require('./blp-lib');

module.exports = (function () {
  function Mipmap(blp, level) {
    _classCallCheck(this, Mipmap);

    this.blp = blp;
    this.level = level;
  }

  _createClass(Mipmap, [{
    key: 'width',
    get: function () {
      return BLPLib.blp_width(this.blp.handle, this.level);
    }
  }, {
    key: 'height',
    get: function () {
      return BLPLib.blp_height(this.blp.handle, this.level);
    }
  }, {
    key: 'data',
    get: function () {
      var data = BLPLib.blp_convert(this.blp.file, this.blp.handle, this.level);
      var size = this.width * this.height * 4;
      return data.reinterpret(size, 0);
    }
  }, {
    key: 'bgra',
    get: function () {
      return this.data;
    }
  }, {
    key: 'rgba',
    get: function () {
      var pixels = this.data;
      var length = pixels.length;

      for (var i = 0; i < length; i += 4) {
        var blue = pixels[i];
        var red = pixels[i + 2];
        pixels[i] = red;
        pixels[i + 2] = blue;
      }

      return pixels;
    }
  }]);

  return Mipmap;
})();