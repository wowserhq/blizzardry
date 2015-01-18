var LocalizedStringRef, StringRef, r, uint32le;

r = require('restructure');

uint32le = require('../types').uint32le;

StringRef = require('./string-ref');

LocalizedStringRef = (function() {
  module.exports = new LocalizedStringRef();

  function LocalizedStringRef() {
    this.strings = new r.Array(StringRef, 17);
  }

  LocalizedStringRef.prototype.decode = function(stream, parent) {
    return this.strings.decode(stream, parent)[0];
  };

  return LocalizedStringRef;

})();
