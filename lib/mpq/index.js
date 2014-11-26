var Files, MPQ, StormLib, attr, ref;

attr = require('attr-accessor');

ref = require('ref');

Files = require('./files');

StormLib = require('./storm-lib');

MPQ = (function() {
  var get, set, _ref;

  module.exports = MPQ;

  _ref = attr.accessors(MPQ), get = _ref[0], set = _ref[1], MPQ.get = _ref[2];

  MPQ.READ_ONLY = 0x00000100;

  MPQ.WRITE_SHARE = 0x00000200;

  MPQ.USE_BITMAP = 0x00000400;

  MPQ.NO_LISTFILE = 0x00010000;

  MPQ.NO_ATTRIBUTES = 0x00020000;

  MPQ.NO_HEADER_SEARCH = 0x00040000;

  MPQ.FORCE_MPQ_V1 = 0x00080000;

  MPQ.CHECK_SECTOR_CRC = 0x00100000;

  function MPQ(path, handle) {
    this.path = path;
    this.handle = handle;
    this.files = new Files(this);
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

  MPQ.open = function(path, flags, callback) {
    var errno, handle, handlePtr, mpq, priority;
    if (flags == null) {
      flags = 0;
    }
    if (typeof flags === 'function' && (callback == null)) {
      return this.open(path, null, flags);
    }
    priority = 0;
    handlePtr = ref.alloc(StormLib.HANDLEPtr);
    if (StormLib.SFileOpenArchive(path, priority, flags, handlePtr)) {
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
