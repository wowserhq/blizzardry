'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var attr = require('attr-accessor');
var crypto = require('crypto');
var fs = require('fs');
var path = require('path');
var temp = require('temp');
var BLPLib = require('./blp-lib');
var CLib = require('../c-lib');
var Mipmap = require('./mipmap');

module.exports = (function () {
  function BLP(path, handle, file) {
    _classCallCheck(this, BLP);

    this.path = path;
    this.handle = handle;
    this.file = file;

    this.mipmaps = [];
    for (var i = 0; i < this.mipmapCount; ++i) {
      this.mipmaps.push(new Mipmap(this, i));
    }
  }

  _createClass(BLP, [{
    key: 'close',
    value: function close() {
      var handle = this.handle;
      if (handle) {
        this.handle = null;
        BLPLib.blp_release(handle);
      }

      var file = this.file;
      if (file) {
        this.file = null;
        CLib.fclose(file);

        if (this.path.match(this.constructor.TMP_PREFIX)) {
          fs.unlinkSync(this.path);
        }
      }
    }
  }, {
    key: 'opened',
    get: function () {
      return !!this.file;
    }
  }, {
    key: 'version',
    get: function () {
      return BLPLib.blp_version(this.handle);
    }
  }, {
    key: 'mipmapCount',
    get: function () {
      return BLPLib.blp_nbMipLevels(this.handle);
    }
  }, {
    key: 'smallest',
    get: function () {
      return this.mipmaps[this.mipmapCount - 1];
    }
  }, {
    key: 'largest',
    get: function () {
      return this.mipmaps[0];
    }
  }], [{
    key: 'TMP_PREFIX',
    value: 'blp-' + crypto.randomBytes(6).toString('hex') + '-',
    enumerable: true
  }, {
    key: 'open',
    value: function open(path, callback) {
      var file = CLib.fopen(path, 'r');
      if (!file.isNull()) {
        var handle = BLPLib.blp_processFile(file);
        if (!handle.isNull()) {
          var blp = new this(path, handle, file);

          if (callback) {
            callback(blp);
            blp.close();
            return true;
          } else {
            return blp;
          }
        } else {
          throw new Error('image could not be opened');
        }
      } else {
        throw new Error('image could not be found');
      }
    }
  }, {
    key: 'from',
    value: function from(buffer, callback) {
      var tmp = temp.path({ prefix: this.TMP_PREFIX });
      fs.writeFileSync(tmp, buffer);
      try {
        return this.open(tmp, callback);
      } catch (e) {
        fs.unlinkSync(tmp);
        throw e;
      }
    }
  }]);

  return BLP;
})();