'use strict';

var r = require('restructure');
var xtend = require('xtend');

module.exports = function (fields) {
  fields = xtend({
    id: new r.String(4),
    size: r.uint32le
  }, fields);
  return new r.Struct(fields);
};