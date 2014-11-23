bridge = require('sinon-chai')
chai   = require('chai')
memo   = require('memo-is')
sinon  = require('sinon')
chai.use(bridge)

fixtures = 'spec/fixtures/'

module.exports = {
  expect: chai.expect,
  fixtures: fixtures,
  memo: memo,
  sinon:  sinon
}

beforeEach ->
  @sandbox = sinon.sandbox.create()

afterEach ->
  @sandbox.restore()
