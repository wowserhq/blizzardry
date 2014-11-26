var File, Files, StormLib, attr, ref;

attr = require('attr-accessor');

ref = require('ref');

File = require('./file');

StormLib = require('./storm-lib');

Files = (function() {
  var get, self;

  module.exports = self = Files;

  get = attr.accessors(Files)[0];

  Files.FROM_MPQ = 0x00000000;

  Files.FROM_LOCAL = 0xFFFFFFFF;

  function Files(mpq) {
    this.mpq = mpq;
  }

  get({
    handle: function() {
      return this.mpq.handle;
    }
  });

  Files.prototype.contains = function(file) {
    return !!this.handle && StormLib.SFileHasFile(this.handle, file);
  };

  Files.prototype.get = function(file) {
    var fileHandlePtr;
    if (this.handle) {
      fileHandlePtr = ref.alloc(StormLib.HANDLEPtr);
      if (StormLib.SFileOpenFileEx(this.handle, file, self.FROM_MPQ, fileHandlePtr)) {
        return new File(fileHandlePtr.deref());
      }
    }
    return null;
  };

  return Files;

})();
