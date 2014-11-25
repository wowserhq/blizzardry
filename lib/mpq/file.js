var File, StormLib, attr, ref;

attr = require('attr-accessor');

ref = require('ref');

StormLib = require('./storm-lib');

File = (function() {
  var get;

  module.exports = File;

  get = attr.accessors(File)[0];

  function File(handle) {
    this.handle = handle;
  }

  get({
    name: function() {
      var name;
      if (this.handle) {
        name = new Buffer(260);
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

  return File;

})();
