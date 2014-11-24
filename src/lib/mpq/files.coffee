attr = require('attr-accessor')
ref = require('ref')
StormLib = require('./storm-lib')

class Files
  module.exports = this

  [get] = attr.accessors(this)

  constructor: (@mpq) ->

  get handle: ->
    @mpq.handle

  contains: (file) ->
    @handle && StormLib.SFileHasFile @handle, file
