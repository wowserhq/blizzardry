var r, xtend;

r = require('restructure');

xtend = require('xtend');

module.exports = function(fields) {
  fields = xtend({
    MVER: require('./mver'),
    version: function() {
      return this.MVER.version;
    }
  }, fields);
  return new r.Struct(fields);
};
