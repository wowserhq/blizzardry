const r = require('restructure');
const Entity = require('../entity');

module.exports = Entity({
  id: r.uint32le,
  emoteTextID: r.uint32le,
  raceID: r.uint32le,
  gender: r.uint32le,
  soundID: r.uint32le
});
