'use strict';

var r = require('restructure');
var Nofs = require('./nofs');

module.exports = function (type) {
  return new r.Struct({
    interpolationType: r.uint16le,
    globalSequenceID: r.int16le,
    timestamps: new Nofs(new Nofs(r.uint32le)),
    values: new Nofs(new Nofs(type))
  });
};