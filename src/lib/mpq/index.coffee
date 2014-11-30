attr = require('attr-accessor')
ref = require('ref')
Files = require('./files')
StormLib = require('./storm-lib')

class MPQ
  module.exports = self = this

  [get, set, @get, @set] = attr.accessors(this)

  @OPEN = {
    READ_ONLY:        0x00000100
    WRITE_SHARE:      0x00000200
    USE_BITMAP:       0x00000400
    NO_LISTFILE:      0x00010000
    NO_ATTRIBUTES:    0x00020000
    NO_HEADER_SEARCH: 0x00040000
    FORCE_MPQ_V1:     0x00080000
    CHECK_SECTOR_CRC: 0x00100000
  }

  @CREATE = {
    LISTFILE:   0x00100000
    ATTRIBUTES: 0x00200000
    SIGNATURE:  0x00400000
    ARCHIVE_V1: 0x00000000
    ARCHIVE_V2: 0x01000000
    ARCHIVE_V3: 0x02000000
    ARCHIVE_V4: 0x03000000
  }

  constructor: (@path, @flags, @handle) ->
    @files = new Files(this)

  close: ->
    if handle = @handle
      @handle = null
      StormLib.SFileCloseArchive handle

  get opened: ->
    !!@handle

  patch: (path, prefix = null) ->
    unless @flags & self.OPEN.READ_ONLY
      throw new Error 'archive must be read-only'

    flags = 0
    StormLib.SFileOpenPatchArchive @handle, path, prefix, flags

  get patched: ->
    if @handle
      StormLib.SFileIsPatchedArchive @handle

  @get locale: ->
    StormLib.SFileGetLocale()

  @set locale: (locale) ->
    StormLib.SFileSetLocale locale

  @open: (path, flags = 0, callback) ->
    if typeof flags == 'function' && !callback?
      return @open path, null, flags

    priority = 0
    handlePtr = ref.alloc(StormLib.HANDLEPtr)
    if StormLib.SFileOpenArchive path, priority, flags, handlePtr
      handle = handlePtr.deref()
      mpq = new this(path, flags, handle)

      if callback?
        callback(mpq)
        mpq.close()
        true
      else
        mpq
    else
      errno = StormLib.GetLastError()
      throw new Error "archive could not be found or opened (#{errno})"

  @create: (path, callback) ->
    flags = 0
    maxFileCount = 0
    handlePtr = ref.alloc(StormLib.HANDLEPtr)
    if StormLib.SFileCreateArchive path, flags, maxFileCount, handlePtr
      @open(path, callback)
    else
      errno = StormLib.GetLastError()
      throw new Error "archive could not be created (#{errno})"
