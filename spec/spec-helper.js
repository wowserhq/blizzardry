var bridge, chai, sinon;

chai = require('chai');

sinon = require('sinon');

bridge = require('sinon-chai');

chai.use(bridge);

module.exports = {
  expect: chai.expect,
  sinon: sinon
};

beforeEach(function() {
  return this.sandbox = sinon.sandbox.create();
});

afterEach(function() {
  return this.sandbox.restore();
});
