var Entity, r;

r = require('restructure');

Entity = require('../entity');

module.exports = Entity({
  fileDataID: r.uint32le,
  resolution: r.uint32le
});
