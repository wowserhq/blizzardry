{expect, fixtures, memo, sinon} = require('../spec-helper')

fs = require('fs')
r = require('restructure')

Skin = require('../../lib/m2/skin')

describe 'Skin', ->

  dummy = memo().is ->
    data = fs.readFileSync fixtures + 'Rabbit00.skin'
    stream = new r.DecodeStream data
    Skin.decode stream

  describe '#id', ->
    xit 'returns identifier'

  describe '#indices', ->
    it 'returns indices', ->
      indices = dummy().indices
      expect(indices).to.have.length 154
      expect(indices[0..3]).to.deep.eq [52, 58, 115, 0]
      expect(indices[-4..]).to.deep.eq [29, 75, 76, 23]

  describe '#triangles', ->
    it 'returns triangles', ->
      triangles = dummy().triangles
      expect(triangles).to.have.length 107
      expect(triangles[0..1]).to.deep.eq [
        [0, 1, 2]
        [3, 4, 5]
      ]
      expect(triangles[-2..]).to.deep.eq [
        [150, 137, 151]
        [152, 148, 153]
      ]

  describe '#properties', ->
    xit 'returns properties'

  describe '#submeshes', ->
    xit 'returns submeshes'

  describe '#textureUnits', ->
    xit 'returns texture units'

  describe '#bones', ->
    xit 'returns bones'
