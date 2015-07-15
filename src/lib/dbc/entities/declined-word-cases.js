const r = require('restructure');
const Entity = require('../entity');
const StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  wordID: r.uint32le,
  case: r.uint32le,
  word: StringRef
});
