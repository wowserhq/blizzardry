{expect, fixtures, memo, sinon} = require('../spec-helper')

fs = require('fs')

BLP = require('../../lib/blp')

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
