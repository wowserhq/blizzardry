r = require('restructure')
{uint32le} = require('../types')

class Nofs
  module.exports = this

  constructor: (@type) ->
    @count = uint32le

  decode: (stream, parent) ->
    length = @count.decode(stream)
    if @type
      pointer = new r.Pointer(uint32le, new r.Array(@type, length))
      pointer.decode(stream, parent)
    else
      uint32le.decode(stream)
      length
