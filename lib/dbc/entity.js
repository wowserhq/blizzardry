'use strict';

var r = require('restructure');
var DBC = require('./');

module.exports = function (fields) {
  var type = new r.Struct(fields);
  type.dbc = DBC['for'](type);
  return type;
};