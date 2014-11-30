var ArrayType, FIND_DATA, FixedString, HANDLE, HANDLEPtr, LPDWORD, Struct, bool, ffi, int32, ref, string, uint32, voidPtr, _ref;

ffi = require('ffi');

ref = require('ref');

ArrayType = require('ref-array');

Struct = require('ref-struct');

_ref = ref.types, bool = _ref.bool, int32 = _ref.int32, uint32 = _ref.uint32;

string = ref.types.CString;

voidPtr = ref.refType(ref.types["void"]);

FixedString = function(length) {
  return {
    size: length,
    alignment: length,
    indirection: 1,
    name: 'pointer',
    get: function(buffer, offset) {
      return buffer.readCString(offset);
    }
  };
};

FIND_DATA = Struct({
  filename: FixedString(1024),
  name: string,
  hashIndex: uint32,
  blockIndex: uint32,
  fileSize: uint32,
  fileFlags: uint32,
  compSize: uint32,
  fileTimeLo: uint32,
  fileTimeHi: uint32,
  locale: uint32
});

HANDLE = voidPtr;

HANDLEPtr = ref.refType(HANDLE);

LPDWORD = voidPtr;

module.exports = new ffi.Library('libstorm', {
  SFileGetLocale: [uint32, []],
  SFileSetLocale: [uint32, [uint32]],
  SFileOpenArchive: [bool, [string, uint32, uint32, HANDLEPtr]],
  SFileCreateArchive: [ref.types.char, [string, uint32, uint32, HANDLEPtr]],
  SFileCloseArchive: [bool, [HANDLE]],
  SFileOpenPatchArchive: [bool, [HANDLE, string, string, uint32]],
  SFileIsPatchedArchive: [bool, [HANDLE]],
  SFileHasFile: [bool, [HANDLE, string]],
  SFileOpenFileEx: [bool, [HANDLE, string, uint32, HANDLEPtr]],
  SFileGetFileSize: [uint32, [HANDLE, LPDWORD]],
  SFileSetFilePointer: [uint32, [HANDLE, int32, int32, uint32]],
  SFileReadFile: [bool, [HANDLE, voidPtr, uint32, LPDWORD, voidPtr]],
  SFileGetFileName: [bool, [HANDLE, voidPtr]],
  SFileFindFirstFile: [HANDLE, [HANDLE, string, voidPtr, string]],
  SFileFindNextFile: [bool, [HANDLE, voidPtr]],
  SFileFindClose: [bool, [HANDLE]],
  GetLastError: [int32, []]
});

module.exports.FIND_DATA = FIND_DATA;

module.exports.HANDLE = HANDLE;

module.exports.HANDLEPtr = HANDLEPtr;

module.exports.LPDWORD = LPDWORD;
