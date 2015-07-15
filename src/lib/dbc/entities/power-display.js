const r = require('restructure');
const Entity = require('../entity');
const StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  type: r.uint32le,
  name: StringRef,
  rgb: new r.Array(r.uint8, 3)
});
