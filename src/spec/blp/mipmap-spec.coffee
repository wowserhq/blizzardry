{expect, fixtures, memo, sinon} = require('../spec-helper')

BLP = require('../../lib/blp')
Mipmap = require('../../lib/blp/mipmap')

describe 'BLP.Mipmap', ->

  dummy = memo().is ->
    BLP.open(fixtures + 'RabbitSkin.blp').largest

  describe '#level', ->
    it 'returns mipmap level', ->
      expect(dummy().level).to.eq 0

  describe '#width', ->
    it 'returns texture width', ->
      expect(dummy().width).to.eq 128

  describe '#height', ->
    it 'returns texture height', ->
      expect(dummy().height).to.eq 128

  describe '#data', ->
    it 'returns pixel data', ->
      pixels = dummy().data
      expect(pixels.length).to.eq 65536
      expect(pixels[0..3]).to.deep.eq new Buffer [0xa2, 0xa2, 0xa2, 0xdd]
      expect(pixels[-4..]).to.deep.eq new Buffer [0x2c, 0x4a, 0x65, 0xdd]

  describe '#bgra', ->
    it 'returns pixel data in BGRA format', ->
      expect(dummy().bgra).to.deep.eq dummy().data

  describe '#rgba', ->
    it 'returns pixel data in RGBA format', ->
      pixels = dummy().rgba
      expect(pixels.length).to.eq 65536
      expect(pixels[0..3]).to.deep.eq new Buffer [0xa2, 0xa2, 0xa2, 0xdd]
      expect(pixels[-4..]).to.deep.eq new Buffer [0x65, 0x4a, 0x2c, 0xdd]
