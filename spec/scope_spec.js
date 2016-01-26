var Scope = require('../src/scope');

describe('Scope', function(){
  it('it can construct and be used as an object', function(){
    var scope = new Scope();
    scope.aProperty = 1;
    expect(scope.aProperty).toEqual(1);
  });

  describe('digest', function(){
    var scope;
    beforeEach(function(){
      scope = new Scope();
    });

    it('calls the listener function of a watch on first digest', function(){
      var watchFn = function(){
        return 'wat';
      }
      var listenerFn = jasmine.createSpy();
      scope.$watch(watchFn, listenerFn);
      scope.$digest();
      expect(listenerFn).toHaveBeenCalled();
    });

    it('calls the watch function with the scope as argument', function(){
      var watchFn = jasmine.createSpy();
      console.log(watchFn);
      var listenerFn = function(){

      };
      scope.$watch(watchFn, listenerFn);
      scope.$digest();
      expect(watchFn).toHaveBeenCalledWith(scope);
    });

    it('calls the listenerFn when watched value has changed', function(){
      scope.someValue = 'a';
      scope.counter = 0;

      scope.$watch(
        function(scope){
          return scope.someValue;
        },
        function(newValue, oldValue, scope){
          console.log(scope);
          scope.counter++;
        }
      );

      expect(scope.counter).toBe(0);

      scope.$digest();
      expect(scope.counter).toBe(1);

      scope.$digest();
      expect(scope.counter).toBe(1);

      scope.someValue = 'b';
      expect(scope.counter).toBe(1);
      scope.$digest();
      expect(scope.counter).toBe(2);

    })
  });
});
