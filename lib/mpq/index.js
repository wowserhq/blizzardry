var MPQ, StormLib, attr, ref;

attr = require('attr-accessor');

ref = require('ref');

StormLib = require('./storm-lib');

MPQ = (function() {
  var get, set, _ref;

  module.exports = MPQ;

  _ref = attr.accessors(MPQ), get = _ref[0], set = _ref[1], MPQ.get = _ref[2];

  function MPQ(path, handle) {
    this.path = path;
    this.handle = handle;
  }

  MPQ.prototype.close = function() {
    var handle;
    if (handle = this.handle) {
      this.handle = null;
      return StormLib.SFileCloseArchive(handle);
    }
  };

  get({
    opened: function() {
      return !!this.handle;
    }
  });

  get({
    patched: function() {
      if (this.handle) {
        return StormLib.SFileIsPatchedArchive(this.handle);
      }
    }
  });

  MPQ.get({
    locale: function() {
      return StormLib.SFileGetLocale();
    }
  });

  MPQ.open = function(path, callback) {
    var errno, handle, handlePtr, mpq;
    handlePtr = ref.alloc(StormLib.HANDLEPtr);
    if (StormLib.SFileOpenArchive(path, 0, 0, handlePtr)) {
      handle = handlePtr.deref();
      mpq = new this(path, handle);
      if (callback != null) {
        callback(mpq);
        mpq.close();
        return true;
      } else {
        return mpq;
      }
    } else {
      errno = StormLib.GetLastError();
      throw new Error("archive could not be found or opened (" + errno + ")");
    }
  };

  MPQ.create = function(path, callback) {
    var errno, handlePtr;
    handlePtr = ref.alloc(StormLib.HANDLEPtr);
    if (StormLib.SFileCreateArchive(path, 0, 0, handlePtr)) {
      return this.open(path, callback);
    } else {
      errno = StormLib.GetLastError();
      throw new Error("archive could not be created (" + errno + ")");
    }
  };

  return MPQ;

})();
