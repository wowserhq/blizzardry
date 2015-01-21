r = require('restructure')
xtend = require('xtend')

module.exports = (fields) ->
  fields = xtend({
    id: new r.String(4)
    size: r.uint32le
  }, fields)
  new r.Struct(fields)
