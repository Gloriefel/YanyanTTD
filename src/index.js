// sample
  function increment(value) {
    if (typeof value !== "number") {
      throw "not a number";
    }
    return value + 1;
  }
// prob1
  function numbertoString(num) {
    if (typeof value == "number") {
    return num.toString();
    }
    return num;
  }

// prob2
  function stringToArray(string) {
    if (typeof value !== "object") {
      return string.split(" ");
    }
    // return string;
  }
// prob3
  function reverseWords(str){
    if (typeof value == "string") {
     return str.split(" ").reverse().join(" ");
  }
}

// prob4
  function makeNegative(num) {
    if (typeof value == "number") {
        if(num <= 0) {
        return num;
        } else {
          return -num;
        } 
      }
  }




module.exports = {increment, numbertoString, stringToArray, reverseWords, makeNegative};