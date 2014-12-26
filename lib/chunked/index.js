var r, xtend;

r = require('restructure');

xtend = require('xtend');

module.exports = function(fields) {
  fields = xtend({
    MVER: require('./mver')
  }, fields);
  return new r.Struct(fields);
};
