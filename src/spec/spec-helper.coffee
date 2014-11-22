bridge = require('sinon-chai')
chai   = require('chai')
memo   = require('memo-is')
sinon  = require('sinon')
chai.use(bridge)

module.exports = {
  expect: chai.expect,
  memo: memo,
  sinon:  sinon
}

beforeEach ->
  @sandbox = sinon.sandbox.create()

afterEach ->
  @sandbox.restore()
