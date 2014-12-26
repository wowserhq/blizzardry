r = require('restructure')
xtend = require('xtend')

module.exports = (fields) ->
  fields = xtend({
    MVER: require('./mver')
  }, fields)
  new r.Struct(fields)
