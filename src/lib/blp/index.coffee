attr = require('attr-accessor')
BLPLib = require('./blp-lib')
CLib = require('../c-lib')

class BLP
  module.exports = this

  [get] = attr.accessors(this)

  constructor: (@path, @file) ->
    @handle = BLPLib.blp_processFile @file

  close: ->
    if file = @file
      @file = null
      CLib.fclose file

  get opened: ->
    !!@file

  @open: (path, callback) ->
    file = CLib.fopen path, 'r'
    if !file.isNull()
      blp = new this(path, file)

      if callback?
        callback(blp)
        blp.close()
        true
      else
        blp
    else
      throw new Error 'image could not be found or opened'
