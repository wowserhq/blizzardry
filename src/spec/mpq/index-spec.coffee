{expect, memo, sinon} = require('../spec-helper')

MPQ = require('../../lib/mpq')

describe 'MPQ', ->

  dummy = memo().is ->
    MPQ.open 'spec/fixtures/dummy.mpq'

  describe '#close', ->
    it 'closes archive', ->
      dummy().close()

  describe '.locale', ->
    it 'returns default locale', ->
      expect(MPQ.locale).to.eq 0

  describe '.open', ->
    context 'when omitting a callback', ->
      it 'returns an MPQ instance', ->
        result = MPQ.open 'spec/fixtures/dummy.mpq'
        expect(result).to.be.an.instanceof MPQ

    context 'when given a callback', ->
      it 'invokes callback with MPQ instance', ->
        callback = @sandbox.spy()
        result = MPQ.open 'spec/fixtures/dummy.mpq', callback
        expect(callback).to.have.been.called
        expect(result).to.be.true

    context 'when given a malformed or non-existent archive', ->
      it 'throws an error', ->
        expect ->
          MPQ.open 'non-existent.mpq'
        .to.throw 'archive could not be found or opened'

  describe '.create', ->
    xit 'creates a new archive'
