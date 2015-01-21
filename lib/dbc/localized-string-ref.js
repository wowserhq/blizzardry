var LocalizedStringRef, StringRef, r;

r = require('restructure');

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
