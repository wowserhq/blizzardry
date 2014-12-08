var DBC, r;

r = require('restructure');

DBC = require('./');

module.exports = function(fields) {
  var type;
  type = new r.Struct(fields);
  type.dbc = DBC["for"](type);
  return type;
};
