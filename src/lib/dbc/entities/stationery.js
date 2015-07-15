const r = require('restructure');
const Entity = require('../entity');
const StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  itemID: r.uint32le,
  texture: StringRef,
  flags: r.uint32le
});
