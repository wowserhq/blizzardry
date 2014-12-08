var r, uint32le;

r = require('restructure');

uint32le = require('../types').uint32le;

module.exports = new r.Pointer(uint32le, new r.String(null), {
  type: 'global',
  relativeTo: 'parent.stringBlockOffset'
});
