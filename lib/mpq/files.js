'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var attr = require('attr-accessor');
var path = require('path');
var ref = require('ref');
var File = require('./file');
var StormLib = require('./storm-lib');

module.exports = (function () {
  function Files(mpq) {
    _classCallCheck(this, Files);

    this.mpq = mpq;
  }

  _createClass(Files, [{
    key: 'handle',
    get: function () {
      return this.mpq.handle;
    }
  }, {
    key: 'contains',
    value: function contains(file) {
      return !!this.handle && StormLib.SFileHasFile(this.handle, file);
    }
  }, {
    key: 'get',
    value: function get(file) {
      if (this.handle) {
        var fileHandlePtr = ref.alloc(StormLib.HANDLEPtr);
        if (StormLib.SFileOpenFileEx(this.handle, file, this.constructor.FROM_MPQ, fileHandlePtr)) {
          return new File(fileHandlePtr.deref());
        }
      }
      return null;
    }
  }, {
    key: 'extract',
    value: function extract(file, target) {
      if (!StormLib.SFileExtractFile(this.handle, file, target, this.constructor.FROM_MPQ)) {
        var errno = StormLib.GetLastError();
        throw new Error('file could not be extracted (' + errno + ')');
      }
      return true;
    }
  }, {
    key: 'all',
    get: function () {
      return this.find('*');
    }
  }, {
    key: 'find',
    value: function find(pattern) {
      var _this = this;

      var handle = null;

      var next = function next() {
        var data = new StormLib.FIND_DATA();
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

      var results = [];
      var data;
      while (data = next()) {
        results.push(data);
      }

      StormLib.SFileFindClose(handle);
      return results;
    }
  }], [{
    key: 'FROM_MPQ',
    value: 0,
    enumerable: true
  }, {
    key: 'FROM_LOCAL',
    value: 4294967295,
    enumerable: true
  }]);

  return Files;
})();