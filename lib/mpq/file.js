var File, StormLib, attr;

attr = require('attr-accessor');

StormLib = require('./storm-lib');

File = (function() {
  var get;

  module.exports = File;

  get = attr.accessors(File)[0];

  function File(handle) {
    this.handle = handle;
  }

  get({
    size: function() {
      return this.handle && StormLib.SFileGetFileSize(this.handle, null);
    }
  });

  return File;

})();
