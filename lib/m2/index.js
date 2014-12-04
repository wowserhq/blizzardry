var Nofs, Vec3Float, float2, float3, floatle, r, uint32le, vertex;

r = require('restructure');

Nofs = require('./nofs');

uint32le = new r.Number('UInt32', 'LE');

floatle = new r.Number('Float', 'LE');

float2 = new r.Array(floatle, 2);

float3 = new r.Array(floatle, 2);

Vec3Float = new r.Struct({
  x: floatle,
  y: floatle,
  z: floatle
});

vertex = new r.Struct({
  position: float3,
  boneWeights: new r.Array(r.uint8, 4),
  boneIndices: new r.Array(r.uint8, 4),
  normal: float3,
  textureCoords: float2,
  random: float2
});

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
  minVertexBox: Vec3Float,
  maxVertexBox: Vec3Float,
  vertexRadius: floatle,
  minBoundingBox: Vec3Float,
  maxBoundingBox: Vec3Float,
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
