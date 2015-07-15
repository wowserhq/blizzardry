const r = require('restructure');
const Entity = require('../entity');

module.exports = Entity({
  raceID: r.uint8,
  classID: r.uint8
});
