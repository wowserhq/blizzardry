attr = require('attr-accessor')
ref = require('ref')
StormLib = require('./storm-lib')

class MPQ
  module.exports = this

  [get, set, @get] = attr.accessors(@)

  constructor: (@handle) ->

  @get locale: ->
    StormLib.SFileGetLocale()

  @open: (path, callback) ->
    handlePtr = ref.alloc(StormLib.HANDLEPtr)

    if StormLib.SFileOpenArchive path, 0, 0, handlePtr
      handle = handlePtr.deref()
      mpq = new this(handle)

      if callback?
        callback(mpq)
        return true
      else
        return mpq
    else
      errno = StormLib.GetLastError()
      throw new Error "archive could not be found or opened (#{errno})"

  @create: (path, callback) ->
    handlePtr = ref.alloc(StormLib.HANDLEPtr)
    StormLib.SFileCreateArchive path, 0, 0, handlePtr
    @open(path, callback)
