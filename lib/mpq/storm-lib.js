'use strict';

var ffi = require('ffi');
var ref = require('ref');
var Struct = require('ref-struct');

var _ref$types = ref.types;
var bool = _ref$types.bool;
var int32 = _ref$types.int32;
var uint32 = _ref$types.uint32;

var string = ref.types.CString;

var voidPtr = ref.refType(ref.types['void']);

var FixedString = function FixedString(length) {
  return {
    size: length,
    alignment: length,
    indirection: 1,
    name: 'pointer',
    get: function get(buffer, offset) {
      return buffer.readCString(offset);
    }
  };
};

var FIND_DATA = Struct({
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

var HANDLE = voidPtr;
var HANDLEPtr = ref.refType(HANDLE);

var LPDWORD = voidPtr;

module.exports = new ffi.Library('libstorm', {

  SFileGetLocale: [uint32, []],

  SFileSetLocale: [uint32, [uint32]],

  SFileOpenArchive: [bool, [string, uint32, uint32, HANDLEPtr]],

  SFileCreateArchive: [ref.types.char, [string, uint32, uint32, HANDLEPtr]],

  //   SFileCreateArchive2: [ref.types.char, [
  //     TCHARPtr,
  //     _SFILE_CREATE_MPQPtr,
  //     HANDLEPtr
  //   ]]
  //   SFileSetDownloadCallback: [ref.types.char, [
  //     HANDLE,
  //     SFILE_DOWNLOAD_CALLBACK,
  //     voidPtr
  //   ]]
  //   SFileFlushArchive: [ref.types.char, [
  //     HANDLE
  //   ]]

  SFileCloseArchive: [bool, [HANDLE]],

  //   SFileAddListFile: [ref.types.int32, [
  //     HANDLE,
  //     ref.types.CString
  //   ]]

  //   SFileSetCompactCallback: [ref.types.char, [
  //     HANDLE,
  //     SFILE_COMPACT_CALLBACK,
  //     voidPtr
  //   ]]

  //   SFileCompactArchive: [ref.types.char, [
  //     HANDLE,
  //     ref.types.CString,
  //     ref.types.char
  //   ]]

  //   SFileGetMaxFileCount: [ref.types.uint32, [
  //     HANDLE
  //   ]]

  //   SFileSetMaxFileCount: [ref.types.char, [
  //     HANDLE,
  //     ref.types.uint32
  //   ]]

  //   SFileGetAttributes: [ref.types.uint32, [
  //     HANDLE
  //   ]]

  //   SFileSetAttributes: [ref.types.char, [
  //     HANDLE,
  //     ref.types.uint32
  //   ]]

  //   SFileUpdateFileAttributes: [ref.types.char, [
  //     HANDLE,
  //     ref.types.CString
  //   ]]

  SFileOpenPatchArchive: [bool, [HANDLE, string, string, uint32]],

  SFileIsPatchedArchive: [bool, [HANDLE]],

  SFileHasFile: [bool, [HANDLE, string]],

  SFileOpenFileEx: [bool, [HANDLE, string, uint32, HANDLEPtr]],

  SFileGetFileSize: [uint32, [HANDLE, LPDWORD]],

  SFileSetFilePointer: [uint32, [HANDLE, int32, int32, uint32]],

  SFileReadFile: [bool, [HANDLE, voidPtr, uint32, LPDWORD, voidPtr]],

  SFileCloseFile: [bool, [HANDLE]],

  //   SFileGetFileInfo: [ref.types.char, [
  //     HANDLE,
  //     ref.types.uint32,
  //     voidPtr,
  //     ref.types.uint32,
  //     LPDWORD
  //   ]]

  SFileGetFileName: [bool, [HANDLE, voidPtr]],

  //   SFileFreeFileInfo: [ref.types.char, [
  //     voidPtr,
  //     ref.types.uint32
  //   ]]

  SFileExtractFile: [bool, [HANDLE, string, string, uint32]],

  //   SFileGetFileChecksums: [ref.types.char, [
  //     HANDLE,
  //     ref.types.CString,
  //     LPDWORD,
  //     ref.types.CString
  //   ]]

  //   SFileVerifyFile: [ref.types.uint32, [
  //     HANDLE,
  //     ref.types.CString,
  //     ref.types.uint32
  //   ]]

  //   SFileVerifyRawData: [ref.types.int32, [
  //     HANDLE,
  //     ref.types.uint32,
  //     ref.types.CString
  //   ]]

  //   SFileVerifyArchive: [ref.types.uint32, [
  //     HANDLE
  //   ]]

  SFileFindFirstFile: [HANDLE, [HANDLE, string, voidPtr, string]],

  SFileFindNextFile: [bool, [HANDLE, voidPtr]],

  SFileFindClose: [bool, [HANDLE]],

  //   SListFileFindFirstFile: [HANDLE, [
  //     HANDLE,
  //     ref.types.CString,
  //     ref.types.CString,
  //     SFILE_FIND_DATAPtr
  //   ]]

  //   SListFileFindNextFile: [ref.types.char, [
  //     HANDLE,
  //     SFILE_FIND_DATAPtr
  //   ]]

  //   SListFileFindClose: [ref.types.char, [
  //     HANDLE
  //   ]]

  //   SFileEnumLocales: [ref.types.int32, [
  //     HANDLE,
  //     ref.types.CString,
  //     LCID,
  //     LPDWORD,
  //     ref.types.uint32
  //   ]]

  //   SFileCreateFile: [ref.types.char, [
  //     HANDLE,
  //     ref.types.CString,
  //     ref.types.ulonglong,
  //     ref.types.uint32,
  //     ref.types.uint32,
  //     ref.types.uint32,
  //     HANDLEPtr
  //   ]]

  //   SFileWriteFile: [ref.types.char, [
  //     HANDLE,
  //     voidPtr,
  //     ref.types.uint32,
  //     ref.types.uint32
  //   ]]

  //   SFileFinishFile: [ref.types.char, [
  //     HANDLE
  //   ]]

  //   SFileAddFileEx: [ref.types.char, [
  //     HANDLE,
  //     TCHARPtr,
  //     ref.types.CString,
  //     ref.types.uint32,
  //     ref.types.uint32,
  //     ref.types.uint32
  //   ]]

  //   SFileAddFile: [ref.types.char, [
  //     HANDLE,
  //     TCHARPtr,
  //     ref.types.CString,
  //     ref.types.uint32
  //   ]]

  //   SFileAddWave: [ref.types.char, [
  //     HANDLE,
  //     TCHARPtr,
  //     ref.types.CString,
  //     ref.types.uint32,
  //     ref.types.uint32
  //   ]]

  //   SFileRemoveFile: [ref.types.char, [
  //     HANDLE,
  //     ref.types.CString,
  //     ref.types.uint32
  //   ]]

  //   SFileRenameFile: [ref.types.char, [
  //     HANDLE,
  //     ref.types.CString,
  //     ref.types.CString
  //   ]]

  //   SFileSetFileLocale: [ref.types.char, [
  //     HANDLE,
  //     ref.types.uint32
  //   ]]

  //   SFileSetDataCompression: [ref.types.char, [
  //     ref.types.uint32
  //   ]]

  //   SFileSetAddFileCallback: [ref.types.char, [
  //     HANDLE,
  //     SFILE_ADDFILE_CALLBACK,
  //     voidPtr
  //   ]]

  //   SCompImplode: [ref.types.int32, [
  //     voidPtr,
  //     ref.refType(ref.types.int32),
  //     voidPtr,
  //     ref.types.int32
  //   ]]

  //   SCompExplode: [ref.types.int32, [
  //     voidPtr,
  //     ref.refType(ref.types.int32),
  //     voidPtr,
  //     ref.types.int32
  //   ]]

  //   SCompCompress: [ref.types.int32, [
  //     voidPtr,
  //     ref.refType(ref.types.int32),
  //     voidPtr,
  //     ref.types.int32,
  //     ref.types.uint32,
  //     ref.types.int32,
  //     ref.types.int32
  //   ]]

  //   SCompDecompress: [ref.types.int32, [
  //     voidPtr,
  //     ref.refType(ref.types.int32),
  //     voidPtr,
  //     ref.types.int32
  //   ]]

  //   SCompDecompress2: [ref.types.int32, [
  //     voidPtr,
  //     ref.refType(ref.types.int32),
  //     voidPtr,
  //     ref.types.int32
  //   ]]

  GetLastError: [int32, []]
});

module.exports.FIND_DATA = FIND_DATA;

module.exports.HANDLE = HANDLE;
module.exports.HANDLEPtr = HANDLEPtr;

module.exports.LPDWORD = LPDWORD;