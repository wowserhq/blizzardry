var bridge, chai, fixtures, memo, sinon;

bridge = require('sinon-chai');

chai = require('chai');

memo = require('memo-is');

sinon = require('sinon');

chai.use(bridge);

fixtures = 'spec/fixtures/';

module.exports = {
  expect: chai.expect,
  fixtures: fixtures,
  memo: memo,
  sinon: sinon
};

beforeEach(function() {
  return this.sandbox = sinon.sandbox.create();
});

afterEach(function() {
  return this.sandbox.restore();
});
