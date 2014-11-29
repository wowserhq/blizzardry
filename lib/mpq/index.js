var Files, MPQ, StormLib, attr, ref;

attr = require('attr-accessor');

ref = require('ref');

Files = require('./files');

StormLib = require('./storm-lib');

MPQ = (function() {
  var get, set, _ref;

  module.exports = MPQ;

  _ref = attr.accessors(MPQ), get = _ref[0], set = _ref[1], MPQ.get = _ref[2], MPQ.set = _ref[3];

  MPQ.OPEN = {
    READ_ONLY: 0x00000100,
    WRITE_SHARE: 0x00000200,
    USE_BITMAP: 0x00000400,
    NO_LISTFILE: 0x00010000,
    NO_ATTRIBUTES: 0x00020000,
    NO_HEADER_SEARCH: 0x00040000,
    FORCE_MPQ_V1: 0x00080000,
    CHECK_SECTOR_CRC: 0x00100000
  };

  MPQ.CREATE = {
    LISTFILE: 0x00100000,
    ATTRIBUTES: 0x00200000,
    SIGNATURE: 0x00400000,
    ARCHIVE_V1: 0x00000000,
    ARCHIVE_V2: 0x01000000,
    ARCHIVE_V3: 0x02000000,
    ARCHIVE_V4: 0x03000000
  };

  function MPQ(path, flags, handle) {
    this.path = path;
    this.flags = flags;
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

  MPQ.set({
    locale: function(locale) {
      return StormLib.SFileSetLocale(locale);
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
      mpq = new this(path, flags, handle);
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
    var errno, flags, handlePtr, maxFileCount;
    flags = 0;
    maxFileCount = 0;
    handlePtr = ref.alloc(StormLib.HANDLEPtr);
    if (StormLib.SFileCreateArchive(path, flags, maxFileCount, handlePtr)) {
      return this.open(path, callback);
    } else {
      errno = StormLib.GetLastError();
      throw new Error("archive could not be created (" + errno + ")");
    }
  };

  return MPQ;

})();
