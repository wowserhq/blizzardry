'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var attr = require('attr-accessor');
var ref = require('ref');
var StormLib = require('./storm-lib');

module.exports = (function () {
  function File(handle) {
    _classCallCheck(this, File);

    this.handle = handle;
  }

  _createClass(File, [{
    key: 'close',
    value: function close() {
      var handle = this.handle;
      if (handle) {
        this.handle = null;
        return StormLib.SFileCloseFile(handle);
      }
    }
  }, {
    key: 'opened',
    get: function () {
      return !!this.handle;
    }
  }, {
    key: 'name',
    get: function () {
      if (this.handle) {
        var _name = new Buffer(this.constructor.MAX_PATH);
        if (!StormLib.SFileGetFileName(this.handle, _name)) {
          return null;
        }
        return _name.readCString();
      }
    }
  }, {
    key: 'size',
    get: function () {
      return this.handle && StormLib.SFileGetFileSize(this.handle, null);
    }
  }, {
    key: 'data',
    get: function () {
      if (this.handle) {
        var data = new Buffer(this.size);
        this.position = 0;
        if (!StormLib.SFileReadFile(this.handle, data, this.size, null, null)) {
          return null;
        }
        return data;
      }
    }
  }, {
    key: 'position',
    set: function (offset) {
      return StormLib.SFileSetFilePointer(this.handle, offset, null, this.constructor.FILE_BEGIN);
    }
  }], [{
    key: 'FILE_BEGIN',
    value: 0,
    enumerable: true
  }, {
    key: 'FILE_CURRENT',
    value: 1,
    enumerable: true
  }, {
    key: 'FILE_END',
    value: 2,
    enumerable: true
  }, {
    key: 'MAX_PATH',
    value: 260,
    enumerable: true
  }]);

  return File;
})();