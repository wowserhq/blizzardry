var Nofs, floatle, r, uint32le, vec3float, vertex, _ref;

_ref = require('../types'), floatle = _ref.floatle, uint32le = _ref.uint32le;

r = require('restructure');

vec3float = require('./vec3-float');

vertex = require('./vertex');

Nofs = require('./nofs');

module.exports = new r.Struct({
  signature: new r.String(4),
  version: uint32le,
  names: new Nofs(new r.String()),
  flags: uint32le,
  sequences: new Nofs(),
  animations: new Nofs(),
  animationLookups: new Nofs(),
  bones: new Nofs(),
  keyBoneLookups: new Nofs(),
  vertices: new Nofs(vertex),
  viewCount: uint32le,
  colors: new Nofs(),
  textures: new Nofs(),
  transparencies: new Nofs(),
  uvAnimations: new Nofs(),
  replacableTextures: new Nofs(),
  renderFlags: new Nofs(),
  boneLookups: new Nofs(),
  textureLookups: new Nofs(),
  textureUnits: new Nofs(),
  transparencyLookups: new Nofs(),
  uvAnimationLookups: new Nofs(),
  minVertexBox: vec3float,
  maxVertexBox: vec3float,
  vertexRadius: floatle,
  minBoundingBox: vec3float,
  maxBoundingBox: vec3float,
  boundingRadius: floatle,
  boundingTriangles: new Nofs(),
  boundingVertices: new Nofs(),
  boundingNormals: new Nofs(),
  attachments: new Nofs(),
  attachmentLookups: new Nofs(),
  events: new Nofs(),
  lights: new Nofs(),
  cameras: new Nofs(),
  cameraLookups: new Nofs(),
  ribbonEmitters: new Nofs(),
  particleEmitters: new Nofs(),
  unknown1: new r.Optional(uint32le, function() {
    return this.flags === 8;
  }),
  unknown2: new r.Optional(uint32le, function() {
    return this.flags === 8;
  })
});
