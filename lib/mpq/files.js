var File, Files, StormLib, attr, path, ref;

attr = require('attr-accessor');

path = require('path');

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

  Files.prototype.extract = function(file, target) {
    var errno;
    if (!StormLib.SFileExtractFile(this.handle, file, target, self.FROM_MPQ)) {
      errno = StormLib.GetLastError();
      throw new Error("file could not be extracted (" + errno + ")");
    }
    return true;
  };

  Files.prototype.all = function() {
    return this.find('*');
  };

  Files.prototype.find = function(pattern) {
    var data, handle, next, results;
    handle = null;
    next = (function(_this) {
      return function() {
        var data;
        data = new StormLib.FIND_DATA();
        if (!handle) {
          handle = StormLib.SFileFindFirstFile(_this.handle, pattern, data.ref(), null);
          if (!handle.isNull()) {
            return data;
          }
        } else {
          if (StormLib.SFileFindNextFile(handle, data.ref())) {
            return data;
          }
        }
      };
    })(this);
    results = (function() {
      var _results;
      _results = [];
      while (data = next()) {
        _results.push(data);
      }
      return _results;
    })();
    StormLib.SFileFindClose(handle);
    return results;
  };

  return Files;

})();
