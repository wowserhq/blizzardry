var Entity, StringRef, r;

r = require('restructure');

Entity = require('../entity');

StringRef = require('../string-ref');

module.exports = Entity({
  name: StringRef,
  slotIcon: StringRef,
  slotNumber: r.uint32le
});
