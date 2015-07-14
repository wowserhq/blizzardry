const bridge = require('sinon-chai');
const chai   = require('chai');
const memo   = require('memo-is');
const sinon  = require('sinon');

chai.use(bridge);

const fixtures = 'spec/fixtures/';

module.exports = {
  expect: chai.expect,
  fixtures: fixtures,
  memo: memo,
  sinon:  sinon
};

beforeEach(function() {
  this.sandbox = sinon.sandbox.create();
});

afterEach(function() {
  this.sandbox.restore();
});
