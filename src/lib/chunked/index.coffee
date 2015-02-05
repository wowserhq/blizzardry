r = require('restructure')
xtend = require('xtend')

module.exports = (fields) ->
  fields = xtend({
    MVER: require('./mver')
    version: -> @MVER.version
  }, fields)
  new r.Struct(fields)
