r = require('restructure')
{uint32le} = require('../types')
StringRef = require('./string-ref')

class LocalizedStringRef
  module.exports = new(this)

  constructor: ->
    @strings = new r.Array(StringRef, 17)

  decode: (stream, parent) ->
    # TODO: Add support for multiple locales
    @strings.decode(stream, parent)[0]
