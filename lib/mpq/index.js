'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var attr = require('attr-accessor');
var ref = require('ref');
var Files = require('./files');
var StormLib = require('./storm-lib');

module.exports = (function () {
  function MPQ(path, flags, handle) {
    _classCallCheck(this, MPQ);

    this.path = path;
    this.flags = flags;
    this.handle = handle;
    this.files = new Files(this);
  }

  _createClass(MPQ, [{
    key: 'close',
    value: function close() {
      var handle = this.handle;
      if (handle) {
        this.handle = null;
        return StormLib.SFileCloseArchive(handle);
      }
    }
  }, {
    key: 'opened',
    get: function () {
      return !!this.handle;
    }
  }, {
    key: 'patch',
    value: function patch(path) {
      var prefix = arguments[1] === undefined ? null : arguments[1];

      if (!(this.flags & this.constructor.OPEN.READ_ONLY)) {
        throw new Error('archive must be read-only');
      }

      var flags = 0;
      return StormLib.SFileOpenPatchArchive(this.handle, path, prefix, flags);
    }
  }, {
    key: 'patched',
    get: function () {
      if (this.handle) {
        return StormLib.SFileIsPatchedArchive(this.handle);
      }
    }
  }], [{
    key: 'OPEN',
    value: {
      READ_ONLY: 256,
      WRITE_SHARE: 512,
      USE_BITMAP: 1024,
      NO_LISTFILE: 65536,
      NO_ATTRIBUTES: 131072,
      NO_HEADER_SEARCH: 262144,
      FORCE_MPQ_V1: 524288,
      CHECK_SECTOR_CRC: 1048576
    },
    enumerable: true
  }, {
    key: 'CREATE',
    value: {
      LISTFILE: 1048576,
      ATTRIBUTES: 2097152,
      SIGNATURE: 4194304,
      ARCHIVE_V1: 0,
      ARCHIVE_V2: 16777216,
      ARCHIVE_V3: 33554432,
      ARCHIVE_V4: 50331648
    },
    enumerable: true
  }, {
    key: 'locale',
    get: function () {
      return StormLib.SFileGetLocale();
    },
    set: function (locale) {
      StormLib.SFileSetLocale(locale);
    }
  }, {
    key: 'open',
    value: function open(path, _x2, callback) {
      var flags = arguments[1] === undefined ? 0 : arguments[1];

      if (typeof flags == 'function' && callback === undefined) {
        return this.open(path, null, flags);
      }

      var priority = 0;
      var handlePtr = ref.alloc(StormLib.HANDLEPtr);
      if (StormLib.SFileOpenArchive(path, priority, flags, handlePtr)) {
        var handle = handlePtr.deref();
        var mpq = new this(path, flags, handle);

        if (callback !== undefined) {
          callback(mpq);
          mpq.close();
          return true;
        } else {
          return mpq;
        }
      } else {
        var errno = StormLib.GetLastError();
        throw new Error('archive could not be found or opened (' + errno + ')');
      }
    }
  }, {
    key: 'create',
    value: function create(path, callback) {
      var flags = 0;
      var maxFileCount = 0;
      var handlePtr = ref.alloc(StormLib.HANDLEPtr);
      if (StormLib.SFileCreateArchive(path, flags, maxFileCount, handlePtr)) {
        return this.open(path, callback);
      } else {
        var errno = StormLib.GetLastError();
        throw new Error('archive could not be created (' + errno + ')');
      }
    }
  }]);

  return MPQ;
})();