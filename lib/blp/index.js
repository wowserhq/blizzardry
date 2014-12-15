var BLP, BLPLib, CLib, Mipmap, attr;

attr = require('attr-accessor');

BLPLib = require('./blp-lib');

CLib = require('../c-lib');

Mipmap = require('./mipmap');

BLP = (function() {
  var get;

  module.exports = BLP;

  get = attr.accessors(BLP)[0];

  function BLP(path, file) {
    var i;
    this.path = path;
    this.file = file;
    this.handle = BLPLib.blp_processFile(this.file);
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
      return CLib.fclose(file);
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
    var blp, file;
    file = CLib.fopen(path, 'r');
    if (!file.isNull()) {
      blp = new this(path, file);
      if (callback != null) {
        callback(blp);
        blp.close();
        return true;
      } else {
        return blp;
      }
    } else {
      throw new Error('image could not be found or opened');
    }
  };

  return BLP;

})();
