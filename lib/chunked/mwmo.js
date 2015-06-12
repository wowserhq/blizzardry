'use strict';

var r = require('restructure');
var Chunk = require('./chunk');

module.exports = Chunk({
  filenames: new r.Array(new r.String(null), 'size', 'bytes')
});