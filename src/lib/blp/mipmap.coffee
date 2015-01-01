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

  get bgra: ->
    @data

  get rgba: ->
    pixels = @data
    for blue, i in pixels by 4
      red = pixels[i + 2]
      pixels[i] = red
      pixels[i + 2] = blue
    pixels
