var Files, MPQ, StormLib, attr, ref;

attr = require('attr-accessor');

ref = require('ref');

Files = require('./files');

StormLib = require('./storm-lib');

MPQ = (function() {
  var get, ref1, self, set;

  module.exports = self = MPQ;

  ref1 = attr.accessors(MPQ), get = ref1[0], set = ref1[1], MPQ.get = ref1[2], MPQ.set = ref1[3];

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

  function MPQ(path1, flags1, handle1) {
    this.path = path1;
    this.flags = flags1;
    this.handle = handle1;
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

  MPQ.prototype.patch = function(path, prefix) {
    var flags;
    if (prefix == null) {
      prefix = null;
    }
    if (!(this.flags & self.OPEN.READ_ONLY)) {
      throw new Error('archive must be read-only');
    }
    flags = 0;
    return StormLib.SFileOpenPatchArchive(this.handle, path, prefix, flags);
  };

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
