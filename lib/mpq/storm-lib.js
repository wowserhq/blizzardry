var ArrayType, HANDLE, HANDLEPtr, LPDWORD, Struct, bool, ffi, int32, ref, string, uint32, voidPtr, _ref;

ffi = require('ffi');

ArrayType = require('ref-array');

Struct = require('ref-struct');

ref = require('ref');

_ref = ref.types, bool = _ref.bool, int32 = _ref.int32, uint32 = _ref.uint32;

string = ref.types.CString;

voidPtr = ref.refType(ref.types["void"]);

HANDLE = voidPtr;

HANDLEPtr = ref.refType(HANDLE);

LPDWORD = voidPtr;

module.exports = new ffi.Library('libstorm', {
  SFileGetLocale: [uint32, []],
  SFileOpenArchive: [bool, [string, uint32, uint32, HANDLEPtr]],
  SFileCreateArchive: [ref.types.char, [string, uint32, uint32, HANDLEPtr]],
  SFileCloseArchive: [bool, [HANDLE]],
  SFileHasFile: [bool, [HANDLE, string]],
  SFileOpenFileEx: [bool, [HANDLE, string, uint32, HANDLEPtr]],
  SFileGetFileSize: [uint32, [HANDLE, LPDWORD]],
  GetLastError: [int32, []]
});

module.exports.HANDLE = HANDLE;

module.exports.HANDLEPtr = HANDLEPtr;

module.exports.LPDWORD = LPDWORD;
