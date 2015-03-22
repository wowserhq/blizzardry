var Entity, r;

r = require('restructure');

Entity = require('../entity');

module.exports = Entity({
  id: r.uint32le,
  movieID: r.uint32le,
  fileDataID: r.uint32le
});
