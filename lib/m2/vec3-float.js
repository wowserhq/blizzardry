var floatle, r;

r = require('restructure');

floatle = require('../types').floatle;

module.exports = new r.Struct({
  x: floatle,
  y: floatle,
  z: floatle
});
