const r = require('restructure');
const Entity = require('../entity');
const StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  name: StringRef,
  raceID: r.uint32le,
  gender: r.uint32le
});
