{expect, sinon} = require('../spec-helper')

MPQ = require('../../lib/mpq')

describe 'MPQ', ->

  describe '.locale', ->
    it 'returns default locale', ->
      expect(MPQ.locale).to.eq 0

  describe '.open', ->
    dummy = 'spec/fixtures/dummy.mpq'

    context 'when omitting a callback', ->
      it 'returns an MPQ instance', ->
        result = MPQ.open dummy
        expect(result).to.be.an.instanceof MPQ

    context 'when given a callback', ->
      it 'invokes callback with MPQ instance', ->
        callback = @sandbox.spy()
        result = MPQ.open dummy, callback
        expect(callback).to.have.been.called
        expect(result).to.be.true

    context 'when given a malformed or non-existent archive', ->
      it 'throws an error', ->
        expect ->
          MPQ.open 'non-existent.mpq'
        .to.throw 'archive could not be found or opened'

  describe '.create', ->
    xit 'creates a new archive'
