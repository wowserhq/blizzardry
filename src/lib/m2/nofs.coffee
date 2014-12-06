r = require('restructure')
{uint32le} = require('../types')

class Nofs
  module.exports = this

  constructor: (@type, @length) ->

  decode: (stream, parent) ->
    length = uint32le.decode(stream)
    if typeof @length == 'function'
      length = @length.call(null, length)

    if @type
      pointer = new r.Pointer(uint32le, new r.Array(@type, length))
      pointer.decode(stream, parent)
    else
      uint32le.decode(stream)
      length
