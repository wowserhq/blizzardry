var BLP, BLPLib, CLib, Mipmap, attr, crypto, fs, path, temp;

attr = require('attr-accessor');

crypto = require('crypto');

fs = require('fs');

path = require('path');

temp = require('temp');

BLPLib = require('./blp-lib');

CLib = require('../c-lib');

Mipmap = require('./mipmap');

BLP = (function() {
  var get, self;

  module.exports = self = BLP;

  get = attr.accessors(BLP)[0];

  BLP.TMP_PREFIX = "blp-" + (crypto.randomBytes(6).toString('hex')) + "-";

  function BLP(path, handle, file) {
    var i;
    this.path = path;
    this.handle = handle;
    this.file = file;
    this.mipmaps = (function() {
      var _i, _ref, _results;
      _results = [];
      for (i = _i = 0, _ref = this.mipmapCount; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        _results.push(new Mipmap(this, i));
      }
      return _results;
    }).call(this);
  }

  BLP.prototype.close = function() {
    var file, handle;
    if (handle = this.handle) {
      this.handle = null;
      BLPLib.blp_release(handle);
    }
    if (file = this.file) {
      this.file = null;
      CLib.fclose(file);
      if (this.path.match(self.TMP_PREFIX)) {
        return fs.unlinkSync(this.path);
      }
    }
  };

  get({
    opened: function() {
      return !!this.file;
    }
  });

  get({
    version: function() {
      return BLPLib.blp_version(this.handle);
    }
  });

  get({
    mipmapCount: function() {
      return BLPLib.blp_nbMipLevels(this.handle);
    }
  });

  get({
    smallest: function() {
      return this.mipmaps[this.mipmapCount - 1];
    }
  });

  get({
    largest: function() {
      return this.mipmaps[0];
    }
  });

  BLP.open = function(path, callback) {
    var blp, file, handle;
    file = CLib.fopen(path, 'r');
    if (!file.isNull()) {
      handle = BLPLib.blp_processFile(file);
      if (!handle.isNull()) {
        blp = new this(path, handle, file);
        if (callback != null) {
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
  };

  BLP.from = function(buffer, callback) {
    var e, tmp;
    tmp = temp.path({
      prefix: this.TMP_PREFIX
    });
    fs.writeFileSync(tmp, buffer);
    try {
      return this.open(tmp, callback);
    } catch (_error) {
      e = _error;
      fs.unlinkSync(tmp);
      throw e;
    }
  };

  return BLP;

})();
