{expect, fixtures, memo, sinon} = require('../spec-helper')

BLP = require('../../lib/blp')
Mipmap = require('../../lib/blp/mipmap')

describe 'BLP', ->

  dummy = memo().is ->
    BLP.open fixtures + 'RabbitSkin.blp'

  describe '#close', ->
    it 'closes this image', ->
      dummy().close()

    it 'is idempotent', ->
      dummy().close()
      dummy().close()

  describe '#opened', ->
    context 'when image is open', ->
      it 'returns true', ->
        expect(dummy().opened).to.be.true

    context 'when image is closed', ->
      it 'returns false', ->
        dummy().close()
        expect(dummy().opened).to.be.false

  describe '#version', ->
    it 'returns version identifier', ->
      expect(dummy().version).to.eq 2

  describe '#mipmapCount', ->
    it 'returns amount of mipmaps', ->
      expect(dummy().mipmapCount).to.eq 8

  describe '#mipmaps', ->
    it 'contains mipmaps', ->
      mipmaps = dummy().mipmaps
      for i in [0...8]
        expect(mipmaps[i]).to.be.an.instanceof Mipmap

  describe '#smallest', ->
    it 'returns smallest mipmap', ->
      blp = dummy()
      expect(blp.smallest).to.eq blp.mipmaps[7]
      expect(blp.smallest.width).to.eq 1
      expect(blp.smallest.height).to.eq 1

  describe '#largest', ->
    it 'returns largest mipmap', ->
      blp = dummy()
      expect(blp.largest).to.eq blp.mipmaps[0]
      expect(blp.largest.width).to.eq 128
      expect(blp.largest.height).to.eq 128

  describe '.open', ->
    context 'when omitting a callback', ->
      it 'returns a BLP instance', ->
        blp = BLP.open dummy().path
        expect(blp).to.be.an.instanceof BLP

    context 'when given a callback', ->
      it 'invokes callback with BLP instance', ->
        callback = @sandbox.spy (blp) ->
          expect(blp).to.be.an.instanceof BLP
        result = BLP.open dummy().path, callback
        expect(callback).to.have.been.called
        expect(result).to.be.true

    context 'when given a malformed or non-existent image', ->
      it 'throws an error', ->
        expect ->
          BLP.open 'non-existent.blp'
        .to.throw 'image could not be found or opened'
