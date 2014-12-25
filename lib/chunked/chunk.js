var r, uint32le, xtend;

r = require('restructure');

uint32le = require('../types').uint32le;

xtend = require('xtend');

module.exports = function(fields) {
  fields = xtend({
    id: new r.String(4),
    size: uint32le
  }, fields);
  return new r.Struct(fields);
};
