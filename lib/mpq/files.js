var Files, StormLib, attr, ref;

attr = require('attr-accessor');

ref = require('ref');

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
    return this.handle && StormLib.SFileHasFile(this.handle, file);
  };

  return Files;

})();
