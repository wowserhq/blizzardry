var Entity, StringRef, r;

r = require('restructure');

Entity = require('../entity');

StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  languageID: r.uint32le,
  text: StringRef
});
