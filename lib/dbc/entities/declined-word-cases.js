'use strict';

var r = require('restructure');
var Entity = require('../entity');
var StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  wordID: r.uint32le,
  'case': r.uint32le,
  word: StringRef
});