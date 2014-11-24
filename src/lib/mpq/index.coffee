attr = require('attr-accessor')
ref = require('ref')
Files = require('./files')
StormLib = require('./storm-lib')

class MPQ
  module.exports = this

  [get, set, @get] = attr.accessors(this)

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

  @open: (path, callback) ->
    handlePtr = ref.alloc(StormLib.HANDLEPtr)

    if StormLib.SFileOpenArchive path, 0, 0, handlePtr
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
