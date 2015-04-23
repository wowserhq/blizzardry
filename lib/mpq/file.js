var File, StormLib, attr, ref;

attr = require('attr-accessor');

ref = require('ref');

StormLib = require('./storm-lib');

File = (function() {
  var get, ref1, self, set;

  module.exports = self = File;

  ref1 = attr.accessors(File), get = ref1[0], set = ref1[1];

  File.FILE_BEGIN = 0;

  File.FILE_CURRENT = 1;

  File.FILE_END = 2;

  File.MAX_PATH = 260;

  function File(handle1) {
    this.handle = handle1;
  }

  File.prototype.close = function() {
    var handle;
    if (handle = this.handle) {
      this.handle = null;
      return StormLib.SFileCloseFile(handle);
    }
  };

  get({
    opened: function() {
      return !!this.handle;
    }
  });

  get({
    name: function() {
      var name;
      if (this.handle) {
        name = new Buffer(self.MAX_PATH);
        if (!StormLib.SFileGetFileName(this.handle, name)) {
          return null;
        }
        return name.readCString();
      }
    }
  });

  get({
    size: function() {
      return this.handle && StormLib.SFileGetFileSize(this.handle, null);
    }
  });

  get({
    data: function() {
      var data;
      if (this.handle) {
        data = new Buffer(this.size);
        this.position = 0;
        if (!StormLib.SFileReadFile(this.handle, data, this.size, null, null)) {
          return null;
        }
        return data;
      }
    }
  });

  set({
    position: function(offset) {
      return StormLib.SFileSetFilePointer(this.handle, offset, null, self.FILE_BEGIN);
    }
  });

  return File;

})();
