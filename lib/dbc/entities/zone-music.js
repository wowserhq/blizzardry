var Entity, StringRef, r;

r = require('restructure');

Entity = require('../entity');

StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  name: StringRef,
  silenceIntervalMinDay: r.uint32le,
  silenceIntervalMinNight: r.uint32le,
  silenceIntervalMaxDay: r.uint32le,
  silenceIntervalMaxNight: r.uint32le,
  dayMusicID: r.uint32le,
  nightMusicID: r.uint32le
});
