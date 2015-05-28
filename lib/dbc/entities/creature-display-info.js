'use strict';

var r = require('restructure');
var Entity = require('../entity');
var StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  modelID: r.uint32le,
  soundID: r.uint32le,
  extraInfoID: r.uint32le,
  scale: r.floatle,
  opacity: r.uint32le,
  skin1: StringRef,
  skin2: StringRef,
  skin3: StringRef,
  portraitTexture: StringRef,

  skips: new r.Reserved(r.uint32le, 6)
});