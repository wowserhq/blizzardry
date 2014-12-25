{floatle, uint32le, Vec3Float} = require('../types')
r = require('restructure')
Nofs = require('./nofs')
Vertex = require('./vertex')

module.exports = new r.Struct(
  signature: new r.String(4)
  version: uint32le

  names: new Nofs(new r.String())
  name: -> @names[0]

  flags: uint32le

  sequences: new Nofs(uint32le)
  animations: new Nofs()
  animationLookups: new Nofs()
  bones: new Nofs()
  keyBoneLookups: new Nofs()
  vertices: new Nofs(Vertex)

  viewCount: uint32le

  colors: new Nofs()
  textures: new Nofs()
  transparencies: new Nofs()
  uvAnimations: new Nofs()
  replacableTextures: new Nofs()
  renderFlags: new Nofs()
  boneLookups: new Nofs()
  textureLookups: new Nofs()
  textureUnits: new Nofs()
  transparencyLookups: new Nofs()
  uvAnimationLookups: new Nofs()

  minVertexBox: Vec3Float
  maxVertexBox: Vec3Float
  vertexRadius: floatle

  minBoundingBox: Vec3Float
  maxBoundingBox: Vec3Float
  boundingRadius: floatle

  boundingTriangles: new Nofs()
  boundingVertices: new Nofs()
  boundingNormals: new Nofs()
  attachments: new Nofs()
  attachmentLookups: new Nofs()
  events: new Nofs()
  lights: new Nofs()
  cameras: new Nofs()
  cameraLookups: new Nofs()
  ribbonEmitters: new Nofs()
  particleEmitters: new Nofs()

  unknown1: new r.Optional(uint32le, -> @flags == 8)
  unknown2: new r.Optional(uint32le, -> @flags == 8)
)
