import bridge from 'sinon-chai';
import chai   from 'chai';
import memo   from 'memo-is';
import sinon  from 'sinon';

chai.use(bridge);

const fixtures = 'spec/fixtures/';

export default {
  expect: chai.expect,
  fixtures: fixtures,
  memo: memo,
  sinon: sinon
};

beforeEach(function() {
  this.sandbox = sinon.sandbox.create();
});

afterEach(function() {
  this.sandbox.restore();
});
