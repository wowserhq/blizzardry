attr = require('attr-accessor')
crypto = require('crypto')
fs = require('fs')
path = require('path')
temp = require('temp')
BLPLib = require('./blp-lib')
CLib = require('../c-lib')
Mipmap = require('./mipmap')

class BLP
  module.exports = self = this

  [get] = attr.accessors(this)

  @TMP_PREFIX = "blp-#{crypto.randomBytes(6).toString('hex')}-"

  constructor: (@path, @handle, @file) ->
    @mipmaps = for i in [0...@mipmapCount]
      new Mipmap(this, i)

  close: ->
    if handle = @handle
      @handle = null
      BLPLib.blp_release handle

    if file = @file
      @file = null
      CLib.fclose file

      if @path.match self.TMP_PREFIX
        fs.unlinkSync @path

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
      handle = BLPLib.blp_processFile file
      if !handle.isNull()
        blp = new this(path, handle, file)

        if callback?
          callback(blp)
          blp.close()
          true
        else
          blp
      else
        throw new Error 'image could not be opened'
    else
      throw new Error 'image could not be found'

  @from: (buffer, callback) ->
    tmp = temp.path prefix: @TMP_PREFIX
    fs.writeFileSync tmp, buffer
    try
      @open tmp, callback
    catch e
      fs.unlinkSync tmp
      throw e
