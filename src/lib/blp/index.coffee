attr = require('attr-accessor')
BLPLib = require('./blp-lib')
CLib = require('../c-lib')
Mipmap = require('./mipmap')

class BLP
  module.exports = this

  [get] = attr.accessors(this)

  constructor: (@path, @file) ->
    @handle = BLPLib.blp_processFile @file
    @mipmaps = for i in [0...@mipmapCount]
      new Mipmap(this, i)

  close: ->
    if handle = @handle
      @handle = null
      BLPLib.blp_release handle

    if file = @file
      @file = null
      CLib.fclose file

  get opened: ->
    !!@file

  get version: ->
    BLPLib.blp_version @handle

  get mipmapCount: ->
    BLPLib.blp_nbMipLevels @handle

  get smallest: ->
    @mipmaps[@mipmapCount - 1]

  get largest: ->
    @mipmaps[0]

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
