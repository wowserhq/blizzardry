'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var r = require('restructure');

module.exports = (function () {
  function Nofs(type, length) {
    _classCallCheck(this, Nofs);

    this.type = type;
    this.length = length;
  }

  _createClass(Nofs, [{
    key: 'decode',
    value: function decode(stream, parent) {
      var length = r.uint32le.decode(stream);
      if (typeof this.length == 'function') {
        length = this.length.call(null, length);
      }

      if (this.type) {
        var pointer = new r.Pointer(r.uint32le, new r.Array(this.type, length), 'global');
        return pointer.decode(stream, parent);
      } else {
        r.uint32le.decode(stream);
        return length;
      }
    }
  }]);

  return Nofs;
})();