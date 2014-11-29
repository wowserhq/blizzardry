attr = require('attr-accessor')
ref = require('ref')
File = require('./file')
StormLib = require('./storm-lib')

class Files
  module.exports = self = this

  [get] = attr.accessors(this)

  @FROM_MPQ   = 0x00000000
  @FROM_LOCAL = 0xFFFFFFFF

  constructor: (@mpq) ->

  get handle: ->
    @mpq.handle

  contains: (file) ->
    !!@handle && StormLib.SFileHasFile @handle, file

  get: (file) ->
    if @handle
      fileHandlePtr = ref.alloc(StormLib.HANDLEPtr)
      if StormLib.SFileOpenFileEx @handle, file, self.FROM_MPQ, fileHandlePtr
        return new File(fileHandlePtr.deref())
    null
