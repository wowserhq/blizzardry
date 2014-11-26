attr = require('attr-accessor')
ref = require('ref')
StormLib = require('./storm-lib')

class File
  module.exports = self = this

  [get, set] = attr.accessors(this)

  @FILE_BEGIN   = 0
  @FILE_CURRENT = 1
  @FILE_END     = 2

  @MAX_PATH = 260

  constructor: (@handle) ->

  get name: ->
    if @handle
      name = new Buffer(self.MAX_PATH)
      return null unless StormLib.SFileGetFileName @handle, name
      name.readCString()

  get size: ->
    @handle && StormLib.SFileGetFileSize @handle, null

  get data: ->
    if @handle
      data = new Buffer(@size)
      @position = 0
      return null unless StormLib.SFileReadFile @handle, data, @size, null, null
      data

  set position: (offset) ->
    StormLib.SFileSetFilePointer @handle, offset, null, self.FILE_BEGIN
