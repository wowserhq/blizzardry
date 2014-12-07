r = require('restructure')
{uint32le} = require('../types')
DBC = require('./')

class StringRef
  module.exports = this

  constructor: ->
    @string = new r.String(null)

  decode: (stream, parent) ->
    offset = uint32le.decode(stream, parent)
    pos = stream.pos
    header = parent.parent
    offset += DBC.HEADER_SIZE + header.recordCount * header.recordSize
    stream.pos = offset
    string = @string.decode(stream, parent)
    stream.pos = pos
    string
