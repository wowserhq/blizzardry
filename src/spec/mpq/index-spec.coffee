{expect, memo, sinon} = require('../spec-helper')

MPQ = require('../../lib/mpq')

describe 'MPQ', ->

  dummy = memo().is ->
    MPQ.open 'spec/fixtures/dummy.mpq'

  describe '#path', ->
    it 'exposes path to this archive', ->
      expect(dummy().path).to.eq 'spec/fixtures/dummy.mpq'

  describe '#close', ->
    it 'closes this archive', ->
      dummy().close()

    it 'is idempotent', ->
      dummy().close()
      dummy().close()

  describe '#opened', ->
    it 'returns opened state', ->
      expect(dummy().opened).to.be.true
      dummy().close()
      expect(dummy().opened).to.be.false

  describe '#patched', ->
    it 'returns patched state', ->
      expect(dummy().patched).to.be.false

  describe '#has', ->
    xit 'returns whether archive contains given file'

  describe '.locale', ->
    it 'returns default locale', ->
      expect(MPQ.locale).to.eq 0

  describe '.open', ->
    context 'when omitting a callback', ->
      it 'returns an MPQ instance', ->
        result = MPQ.open dummy().path
        expect(result).to.be.an.instanceof MPQ

    context 'when given a callback', ->
      it 'invokes callback with MPQ instance', ->
        callback = @sandbox.spy()
        result = MPQ.open dummy().path, callback
        expect(callback).to.have.been.called
        expect(result).to.be.true

    context 'when given a malformed or non-existent archive', ->
      it 'throws an error', ->
        expect ->
          MPQ.open 'non-existent.mpq'
        .to.throw 'archive could not be found or opened'

  describe '.create', ->
    xit 'creates a new archive'
