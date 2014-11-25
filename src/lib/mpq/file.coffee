attr = require('attr-accessor')
ref = require('ref')
StormLib = require('./storm-lib')

class File
  module.exports = this

  [get] = attr.accessors(this)

  constructor: (@handle) ->

  get name: ->
    if @handle
      name = new Buffer(260)
      return null unless StormLib.SFileGetFileName @handle, name
      name.readCString()

  get size: ->
    @handle && StormLib.SFileGetFileSize @handle, null
