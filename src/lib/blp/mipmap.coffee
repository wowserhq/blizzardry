attr = require('attr-accessor')
BLPLib = require('./blp-lib')

class Mipmap
  module.exports = this

  [get] = attr.accessors(this)

  constructor: (@blp, @level) ->

  get width: ->
    BLPLib.blp_width @blp.handle, @level

  get height: ->
    BLPLib.blp_height @blp.handle, @level

  get data: ->
    data = BLPLib.blp_convert @blp.file, @blp.handle, @level
    size = @width * @height * 4
    data.reinterpret(size, 0)
