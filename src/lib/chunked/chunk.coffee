r = require('restructure')
{uint32le} = require('../types')
xtend = require('xtend')

module.exports = (fields) ->
  fields = xtend({
    id: new r.String(4)
    size: uint32le
  }, fields)
  new r.Struct(fields)
