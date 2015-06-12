const {expect, fixtures, memo, sinon} = require('../spec-helper')

const BLP = require('../../lib/blp')
const Mipmap = require('../../lib/blp/mipmap')

describe('BLP.Mipmap', function() {

  const dummy = memo().is(function() {
    return BLP.open(fixtures + 'RabbitSkin.blp').largest
  })

  describe('#level', function() {
    it('returns mipmap level', function() {
      expect(dummy().level).to.eq(0)
    })
  })

  describe('#width', function() {
    it('returns texture width', function() {
      expect(dummy().width).to.eq(128)
    })
  })

  describe('#height', function() {
    it('returns texture height', function() {
      expect(dummy().height).to.eq(128)
    })
  })

  describe('#data', function() {
    it('returns pixel data', function() {
      const pixels = dummy().data
      expect(pixels.length).to.eq(65536)
      expect(pixels.slice(0, 4)).to.deep.eq(new Buffer([0xa2, 0xa2, 0xa2, 0xdd]))
      expect(pixels.slice(-4)).to.deep.eq(new Buffer([0x2c, 0x4a, 0x65, 0xdd]))
    })
  })

  describe('#bgra', function() {
    it('returns pixel data in BGRA format', function() {
      expect(dummy().bgra).to.deep.eq(dummy().data)
    })
  })

  describe('#rgba', function() {
    it('returns pixel data in RGBA format', function() {
      const pixels = dummy().rgba
      expect(pixels.length).to.eq(65536)
      expect(pixels.slice(0, 4)).to.deep.eq(new Buffer([0xa2, 0xa2, 0xa2, 0xdd]))
      expect(pixels.slice(-4)).to.deep.eq(new Buffer([0x65, 0x4a, 0x2c, 0xdd]))
    })
  })

})
