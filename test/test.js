var expect = require('chai').expect;
var Scope = require('../src/scope');

describe('Scope', function(){
  it('it can construct and be used as an object', function(){
    var scope = new Scope();
    scope.aProperty = 1;
    expect(scope.aProperty).to.equal(1);
  });
});
