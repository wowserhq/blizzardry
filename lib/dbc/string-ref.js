var r;

r = require('restructure');

module.exports = new r.Pointer(r.uint32le, new r.String(null), {
  type: 'global',
  relativeTo: 'parent.stringBlockOffset'
});
