var bridge, chai, memo, sinon;

bridge = require('sinon-chai');

chai = require('chai');

memo = require('memo-is');

sinon = require('sinon');

chai.use(bridge);

module.exports = {
  expect: chai.expect,
  memo: memo,
  sinon: sinon
};

beforeEach(function() {
  return this.sandbox = sinon.sandbox.create();
});

afterEach(function() {
  return this.sandbox.restore();
});
