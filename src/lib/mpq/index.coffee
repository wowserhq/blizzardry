attr = require('attr-accessor')
ref = require('ref')
Files = require('./files')
StormLib = require('./storm-lib')

class MPQ
  module.exports = this

  [get, set, @get] = attr.accessors(this)

  @READ_ONLY        = 0x00000100
  @WRITE_SHARE      = 0x00000200
  @USE_BITMAP       = 0x00000400
  @NO_LISTFILE      = 0x00010000
  @NO_ATTRIBUTES    = 0x00020000
  @NO_HEADER_SEARCH = 0x00040000
  @FORCE_MPQ_V1     = 0x00080000
  @CHECK_SECTOR_CRC = 0x00100000

  constructor: (@path, @handle) ->
    @files = new Files(this)

  close: ->
    if handle = @handle
      @handle = null
      StormLib.SFileCloseArchive handle

  get opened: ->
    !!@handle

  get patched: ->
    if @handle
      StormLib.SFileIsPatchedArchive @handle

  @get locale: ->
    StormLib.SFileGetLocale()

  @open: (path, flags = 0, callback) ->
    if typeof flags == 'function' && !callback?
      return @open path, null, flags

    priority = 0
    handlePtr = ref.alloc(StormLib.HANDLEPtr)
    if StormLib.SFileOpenArchive path, priority, flags, handlePtr
      handle = handlePtr.deref()
      mpq = new this(path, handle)

      if callback?
        callback(mpq)
        mpq.close()
        return true
      else
        return mpq
    else
      errno = StormLib.GetLastError()
      throw new Error "archive could not be found or opened (#{errno})"

  @create: (path, callback) ->
    handlePtr = ref.alloc(StormLib.HANDLEPtr)
    if StormLib.SFileCreateArchive path, 0, 0, handlePtr
      @open(path, callback)
    else
      errno = StormLib.GetLastError()
      throw new Error "archive could not be created (#{errno})"
