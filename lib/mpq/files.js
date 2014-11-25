var File, Files, StormLib, attr, ref;

attr = require('attr-accessor');

ref = require('ref');

File = require('./file');

StormLib = require('./storm-lib');

Files = (function() {
  var get;

  module.exports = Files;

  get = attr.accessors(Files)[0];

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
      if (StormLib.SFileOpenFileEx(this.handle, file, 0, fileHandlePtr)) {
        return new File(fileHandlePtr.deref());
      }
    }
    return null;
  };

  return Files;

})();
