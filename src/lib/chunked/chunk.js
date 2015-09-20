const r = require('restructure');
const xtend = require('xtend');

module.exports = function(fields) {
  const definition = xtend({
    id: new r.String(4),
    size: r.uint32le
  }, fields);
  return new r.Struct(definition);
};
