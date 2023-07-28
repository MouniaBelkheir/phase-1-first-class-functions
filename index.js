function receivesAFunction(callback) {
    // Call the provided callback function
    callback();
  }
  
  function returnsANamedFunction() {
    // Return a named function
    function namedFunction() {
      // Some code here...
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
      // Some code here...
    };
  }
  