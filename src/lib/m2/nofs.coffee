r = require('restructure')

class Nofs
  module.exports = this

  constructor: (@type, @length) ->

  decode: (stream, parent) ->
    length = r.uint32le.decode(stream)
    if typeof @length == 'function'
      length = @length.call(null, length)

    if @type
      pointer = new r.Pointer(r.uint32le, new r.Array(@type, length))
      pointer.decode(stream, parent)
    else
      r.uint32le.decode(stream)
      length
