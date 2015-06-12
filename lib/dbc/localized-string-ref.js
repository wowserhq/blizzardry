'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var r = require('restructure');
var StringRef = require('./string-ref');

var LocalizedStringRef = (function () {
  function LocalizedStringRef() {
    _classCallCheck(this, LocalizedStringRef);

    this.strings = new r.Array(StringRef, 17);
  }

  _createClass(LocalizedStringRef, [{
    key: 'decode',
    value: function decode(stream, parent) {
      // TODO: Add support for multiple locales
      return this.strings.decode(stream, parent)[0];
    }
  }]);

  return LocalizedStringRef;
})();

module.exports = new LocalizedStringRef();