attr = require('attr-accessor')
StormLib = require('./storm-lib')

class File
  module.exports = this

  [get] = attr.accessors(this)

  constructor: (@handle) ->

  get size: ->
    @handle && StormLib.SFileGetFileSize @handle, null
