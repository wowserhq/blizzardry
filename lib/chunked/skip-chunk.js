'use strict';

var r = require('restructure');
var Chunk = require('./chunk');

module.exports = Chunk({
  skip: new r.Reserved(r.uint8, 'size')
});