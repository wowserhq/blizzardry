const r = require('restructure')
const DBC = require('./')

module.exports = function(fields) {
  const type = new r.Struct(fields)
  type.dbc = DBC.for(type)
  return type
}
