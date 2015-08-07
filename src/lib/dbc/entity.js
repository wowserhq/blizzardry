const r = require('restructure');
const DBC = require('./');

module.exports = function(fields) {
  const entity = new r.Struct(fields);
  entity.dbc = DBC.for(entity);
  return entity;
};
