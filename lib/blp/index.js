var BLP, BLPLib, CLib, attr;

attr = require('attr-accessor');

BLPLib = require('./blp-lib');

CLib = require('../c-lib');

BLP = (function() {
  var get;

  module.exports = BLP;

  get = attr.accessors(BLP)[0];

  function BLP(path, file) {
    this.path = path;
    this.file = file;
    this.handle = BLPLib.blp_processFile(this.file);
  }

  BLP.prototype.close = function() {
    var file;
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
