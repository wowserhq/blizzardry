ffi = require('ffi')
ArrayType = require('ref-array')
Struct = require('ref-struct')
ref = require('ref')

{bool, int32, uint32} = ref.types
string = ref.types.CString

voidPtr = ref.refType(ref.types.void)

HANDLE = voidPtr
HANDLEPtr = ref.refType(HANDLE)

LPDWORD = voidPtr

module.exports = new ffi.Library 'libstorm',

  SFileGetLocale: [uint32, []]

  # SFileSetLocale: [uint32, [
  #   uint32
  # ]]

  SFileOpenArchive: [bool, [
    string,
    uint32,
    uint32,
    HANDLEPtr
  ]]

  SFileCreateArchive: [ref.types.char, [
    string,
    uint32,
    uint32,
    HANDLEPtr
  ]]

#   SFileCreateArchive2: [ref.types.char, [
#     TCHARPtr,
#     _SFILE_CREATE_MPQPtr,
#     HANDLEPtr
#   ]]

#   SFileSetDownloadCallback: [ref.types.char, [
#     HANDLE,
#     SFILE_DOWNLOAD_CALLBACK,
#     voidPtr
#   ]]

#   SFileFlushArchive: [ref.types.char, [
#     HANDLE
#   ]]

#   SFileCloseArchive: [ref.types.char, [
#     HANDLE
#   ]]

#   SFileAddListFile: [ref.types.int32, [
#     HANDLE,
#     ref.types.CString
#   ]]

#   SFileSetCompactCallback: [ref.types.char, [
#     HANDLE,
#     SFILE_COMPACT_CALLBACK,
#     voidPtr
#   ]]

#   SFileCompactArchive: [ref.types.char, [
#     HANDLE,
#     ref.types.CString,
#     ref.types.char
#   ]]

#   SFileGetMaxFileCount: [ref.types.uint32, [
#     HANDLE
#   ]]

#   SFileSetMaxFileCount: [ref.types.char, [
#     HANDLE,
#     ref.types.uint32
#   ]]

#   SFileGetAttributes: [ref.types.uint32, [
#     HANDLE
#   ]]

#   SFileSetAttributes: [ref.types.char, [
#     HANDLE,
#     ref.types.uint32
#   ]]

#   SFileUpdateFileAttributes: [ref.types.char, [
#     HANDLE,
#     ref.types.CString
#   ]]

#   SFileOpenPatchArchive: [ref.types.char, [
#     HANDLE,
#     TCHARPtr,
#     ref.types.CString,
#     ref.types.uint32
#   ]]

#   SFileIsPatchedArchive: [ref.types.char, [
#     HANDLE
#   ]]

  SFileHasFile: [bool, [
    HANDLE,
    string
  ]]

  SFileOpenFileEx: [bool, [
    HANDLE,
    string,
    uint32,
    HANDLEPtr
  ]]

  SFileGetFileSize: [uint32, [
    HANDLE,
    LPDWORD
  ]]

#   SFileSetFilePointer: [ref.types.uint32, [
#     HANDLE,
#     ref.types.int32,
#     LONG,
#     ref.types.uint32
#   ]]

#   SFileReadFile: [ref.types.char, [
#     HANDLE,
#     voidPtr,
#     ref.types.uint32,
#     LPDWORD,
#     LPOVERLAPPED
#   ]]

#   SFileCloseFile: [ref.types.char, [
#     HANDLE
#   ]]

#   SFileGetFileInfo: [ref.types.char, [
#     HANDLE,
#     ref.types.uint32,
#     voidPtr,
#     ref.types.uint32,
#     LPDWORD
#   ]]

#   SFileGetFileName: [ref.types.char, [
#     HANDLE,
#     ref.types.CString
#   ]]

#   SFileFreeFileInfo: [ref.types.char, [
#     voidPtr,
#     ref.types.uint32
#   ]]

#   SFileExtractFile: [ref.types.char, [
#     HANDLE,
#     ref.types.CString,
#     TCHARPtr,
#     ref.types.uint32
#   ]]

#   SFileGetFileChecksums: [ref.types.char, [
#     HANDLE,
#     ref.types.CString,
#     LPDWORD,
#     ref.types.CString
#   ]]

#   SFileVerifyFile: [ref.types.uint32, [
#     HANDLE,
#     ref.types.CString,
#     ref.types.uint32
#   ]]

#   SFileVerifyRawData: [ref.types.int32, [
#     HANDLE,
#     ref.types.uint32,
#     ref.types.CString
#   ]]

#   SFileVerifyArchive: [ref.types.uint32, [
#     HANDLE
#   ]]

#   SFileFindFirstFile: [HANDLE, [
#     HANDLE,
#     ref.types.CString,
#     SFILE_FIND_DATAPtr,
#     ref.types.CString
#   ]]

#   SFileFindNextFile: [ref.types.char, [
#     HANDLE,
#     SFILE_FIND_DATAPtr
#   ]]

#   SFileFindClose: [ref.types.char, [
#     HANDLE
#   ]]

#   SListFileFindFirstFile: [HANDLE, [
#     HANDLE,
#     ref.types.CString,
#     ref.types.CString,
#     SFILE_FIND_DATAPtr
#   ]]

#   SListFileFindNextFile: [ref.types.char, [
#     HANDLE,
#     SFILE_FIND_DATAPtr
#   ]]

#   SListFileFindClose: [ref.types.char, [
#     HANDLE
#   ]]

#   SFileEnumLocales: [ref.types.int32, [
#     HANDLE,
#     ref.types.CString,
#     LCID,
#     LPDWORD,
#     ref.types.uint32
#   ]]

#   SFileCreateFile: [ref.types.char, [
#     HANDLE,
#     ref.types.CString,
#     ref.types.ulonglong,
#     ref.types.uint32,
#     ref.types.uint32,
#     ref.types.uint32,
#     HANDLEPtr
#   ]]

#   SFileWriteFile: [ref.types.char, [
#     HANDLE,
#     voidPtr,
#     ref.types.uint32,
#     ref.types.uint32
#   ]]

#   SFileFinishFile: [ref.types.char, [
#     HANDLE
#   ]]

#   SFileAddFileEx: [ref.types.char, [
#     HANDLE,
#     TCHARPtr,
#     ref.types.CString,
#     ref.types.uint32,
#     ref.types.uint32,
#     ref.types.uint32
#   ]]

#   SFileAddFile: [ref.types.char, [
#     HANDLE,
#     TCHARPtr,
#     ref.types.CString,
#     ref.types.uint32
#   ]]

#   SFileAddWave: [ref.types.char, [
#     HANDLE,
#     TCHARPtr,
#     ref.types.CString,
#     ref.types.uint32,
#     ref.types.uint32
#   ]]

#   SFileRemoveFile: [ref.types.char, [
#     HANDLE,
#     ref.types.CString,
#     ref.types.uint32
#   ]]

#   SFileRenameFile: [ref.types.char, [
#     HANDLE,
#     ref.types.CString,
#     ref.types.CString
#   ]]

#   SFileSetFileLocale: [ref.types.char, [
#     HANDLE,
#     ref.types.uint32
#   ]]

#   SFileSetDataCompression: [ref.types.char, [
#     ref.types.uint32
#   ]]

#   SFileSetAddFileCallback: [ref.types.char, [
#     HANDLE,
#     SFILE_ADDFILE_CALLBACK,
#     voidPtr
#   ]]

#   SCompImplode: [ref.types.int32, [
#     voidPtr,
#     ref.refType(ref.types.int32),
#     voidPtr,
#     ref.types.int32
#   ]]

#   SCompExplode: [ref.types.int32, [
#     voidPtr,
#     ref.refType(ref.types.int32),
#     voidPtr,
#     ref.types.int32
#   ]]

#   SCompCompress: [ref.types.int32, [
#     voidPtr,
#     ref.refType(ref.types.int32),
#     voidPtr,
#     ref.types.int32,
#     ref.types.uint32,
#     ref.types.int32,
#     ref.types.int32
#   ]]

#   SCompDecompress: [ref.types.int32, [
#     voidPtr,
#     ref.refType(ref.types.int32),
#     voidPtr,
#     ref.types.int32
#   ]]

#   SCompDecompress2: [ref.types.int32, [
#     voidPtr,
#     ref.refType(ref.types.int32),
#     voidPtr,
#     ref.types.int32
#   ]]

  GetLastError: [int32, []]

module.exports.HANDLE = HANDLE
module.exports.HANDLEPtr = HANDLEPtr

module.exports.LPDWORD = LPDWORD
