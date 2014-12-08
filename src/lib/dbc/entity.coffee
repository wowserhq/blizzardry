r = require('restructure')
DBC = require('./')

module.exports = (fields) ->
  type = new r.Struct(fields)
  type.dbc = DBC.for(type)
  type
