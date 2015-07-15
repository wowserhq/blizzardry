const r = require('restructure');
const Entity = require('../entity');
const StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  name: StringRef,
  soundID: r.uint32le,
  priority: r.uint32le,
  minDelay: r.uint32le
});
