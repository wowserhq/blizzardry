{expect, fixtures, memo, sinon} = require('../spec-helper')

fs =require('fs')
r = require('restructure')

M2 = require('../../lib/m2')

describe 'M2', ->

  dummy = memo().is ->
    data = fs.readFileSync fixtures + 'Rabbit.m2'
    stream = new r.DecodeStream data
    M2.decode stream

  describe '#signature', ->
    it 'returns MD20', ->
      expect(dummy().signature).to.eq 'MD20'

  describe '#version', ->
    it 'returns version number', ->
      expect(dummy().version).to.eq 264

  describe '#names', ->
    it 'returns all names', ->
      expect(dummy().names).to.deep.eq [
        'Rabbit', '', '', '', '', '', ''
      ]

  describe '#name', ->
    it 'returns first name', ->
      expect(dummy().name).to.eq 'Rabbit'

  describe '#flags', ->
    it 'returns flags', ->
      expect(dummy().flags).to.eq 1

  describe '#sequences', ->
    it 'returns sequences', ->
      expect(dummy().sequences).to.deep.eq [0]

  describe '#animations', ->
    xit 'returns animations'

  describe '#animationLookups', ->
    xit 'returns animation lookups'

  describe '#bones', ->
    xit 'returns bones'

  describe '#keyBoneLookups', ->
    xit 'returns key bone lookups'

  describe '#vertices', ->
    xit 'returns vertices'

  describe '#viewCount', ->
    it 'returns view count', ->
      expect(dummy().viewCount).to.eq 1

  describe '#colors', ->
    xit 'returns colors'

  describe '#textures', ->
    xit 'returns textures'

  describe '#transparencies', ->
    xit 'returns transparencies'

  describe '#uvAnimations', ->
    xit 'returns UV animations'

  describe '#replacableTextures', ->
    xit 'returns replacable textures'

  describe '#renderFlags', ->
    xit 'returns render flags'

  describe '#boneLookups', ->
    xit 'returns bone lookups'

  describe '#textureLookups', ->
    xit 'returns texture lookups'

  describe '#textureUnits', ->
    xit 'returns texture units'

  describe '#transparencyLookups', ->
    xit 'returns transparency lookups'

  describe '#uvAnimationLookups', ->
    xit 'returns UV animation lookups'

  describe '#minVertexBox', ->
    it 'returns minimum vertex box', ->
      expect(dummy().minVertexBox).to.deep.eq {
        x: -0.6340768337249756
        y: -0.3105764091014862
        z: -0.15670306980609894
      }

  describe '#maxVertexBox', ->
    it 'returns maximum vertex box', ->
      expect(dummy().maxVertexBox).to.deep.eq {
        x: 0.47685110569000244
        y: 0.47006168961524963
        z: 0.8000571727752686
      }

  describe '#vertexRadius', ->
    xit 'returns vertex radius'

  describe '#minBoundingBox', ->
    it 'returns minimum bounding box', ->
      expect(dummy().minBoundingBox).to.deep.eq {
        x: -0.3055555522441864
        y: -0.3055555522441864
        z: 0
      }

  describe '#maxBoundingBox', ->
    it 'returns maximum bounding box', ->
      expect(dummy().maxBoundingBox).to.deep.eq {
        x: 0.3055555522441864
        y: 0.3055555522441864
        z: 2.031277894973755
      }

  describe '#boundingRadius', ->
    xit 'returns bounding radius'

  describe '#boundingTriangles', ->
    xit 'returns bounding triangles'

  describe '#boundingVertices', ->
    xit 'returns bounding vertices'

  describe '#boundingNormals', ->
    xit 'returns bounding normals'

  describe '#attachments', ->
    xit 'returns attachments'

  describe '#attachmentLookups', ->
    xit 'returns attachment lookups'

  describe '#events', ->
    xit 'returns events'

  describe '#lights', ->
    xit 'returns lights'

  describe '#cameras', ->
    xit 'returns cameras'

  describe '#cameraLookups', ->
    xit 'returns camera lookups'

  describe '#ribbonEmitters', ->
    xit 'returns ribbon emitters'

  describe '#particleEmitters', ->
    xit 'returns particle emitters'
