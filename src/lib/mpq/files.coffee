attr = require('attr-accessor')
ref = require('ref')
File = require('./file')
StormLib = require('./storm-lib')

class Files
  module.exports = this

  [get] = attr.accessors(this)

  constructor: (@mpq) ->

  get handle: ->
    @mpq.handle

  contains: (file) ->
    !!@handle && StormLib.SFileHasFile @handle, file

  get: (file) ->
    if @handle
      fileHandlePtr = ref.alloc(StormLib.HANDLEPtr)
      if StormLib.SFileOpenFileEx @handle, file, 0, fileHandlePtr
        return new File(fileHandlePtr.deref())
    return null
