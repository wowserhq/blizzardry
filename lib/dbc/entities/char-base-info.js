var Entity, r;

r = require('restructure');

Entity = require('../entity');

module.exports = Entity({
  raceID: r.uint8,
  classID: r.uint8
});
