function increment(value) {
    if (typeof value !== "number") {
      throw "not a number";
    }
    return value + 1;
  }

  function numbertoString(num) {
    if (typeof value == "number") {
    return num.toString();
    }
    return num;
  }
  
  function stringToArray(string) {
    if (typeof value !== "object") {
      return string.split(" ");
    }
    // return string;
  }

  function reverseWords(str){
    if (typeof value == "string") {
     return str.split(" ").reverse().join(" ");
  }
}





module.exports = {increment, numbertoString, stringToArray, reverseWords};