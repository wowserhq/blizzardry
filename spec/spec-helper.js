'use strict';

var bridge = require('sinon-chai');
var chai = require('chai');
var memo = require('memo-is');
var sinon = require('sinon');

chai.use(bridge);

var fixtures = 'spec/fixtures/';

module.exports = {
  expect: chai.expect,
  fixtures: fixtures,
  memo: memo,
  sinon: sinon
};

beforeEach(function () {
  this.sandbox = sinon.sandbox.create();
});

afterEach(function () {
  this.sandbox.restore();
});