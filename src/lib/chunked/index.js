const r = require('restructure');
const xtend = require('xtend');

module.exports = function(fields) {
  const definition = xtend({
    MVER: require('./mver'),
    version: function() {
      return this.MVER.version;
    }
  }, fields);
  return new r.Struct(definition);
};
