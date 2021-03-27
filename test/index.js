let {increment, numbertoString, 
  stringToArray, reverseWords, 
  makeNegative} = require('../src/index');
let assert = require('assert');

describe('increment, numbertoString, stringToArray, reverseWords, makeNegative function', function() {
 
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
      // assert.strictEqual(result01, '45');
    });

    // prob 2
    it('converting string to array', function(){
      let result02 = stringToArray('hello world hellow universe');
      // assert.strictEqual(result02, "hello world hellow");
    });

    // prob 3
    it('reverse words', function(){
      let result03 = reverseWords('hello world hello universe');
      // assert.strictEqual(result03, "hello world!");
    }); 

     // prob 4
     it('make number negative', function(){
      let result04 = makeNegative(42);
      // assert.strictEqual(result04, 45);
    });

    // // prob 5
    //  it('make number negative', function(){
    //   let result05 = makeNegative('hello world hellow universe');
    //   // assert.strictEqual(result05);
    // });
  });

 