let {increment, numbertoString, stringToArray, reverseWords} = require('../src/index');
let assert = require('assert');

describe('increment, numbertoString, stringToArray, reverseWords function', function() {
 
  // SAMPLE
    it('increments a positive number', function() {
      let result = increment(1);
      assert.strictEqual(result, 2);
    });  
    it('increments a negative number', function() {
      let result = increment(-10);
      assert.strictEqual(result, -9);
    });
    it('fails on strings', function() {
      assert.throws(function() {
        increment("purple");
      });
    });

    // prob 1
    it('converting number to string', function(){
      let result01 = numbertoString(45);
      assert.strictEqual(result01, 45);

    });

    // prob 2
    it('converting string to array', function(){
      let result02 = stringToArray('hello world hellow universe');
      // assert.strictEqual(result02);
    });

    // prob 3
    it('reverse words', function(){
      let result03 = reverseWords('hello world hellow universe');
      // assert.strictEqual(result03);
    });


  });

 