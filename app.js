"use strict";

//                                sum function using return
// function sum(a, b){
//   return a + b;
// }
// var total = sum(10,2);

//                                long form function sum using internal var and pushing to outside arrary
// summerOutput = [];
// function summer(a, b){
//   var added = a + b;
//   summerOutput.push(added);
// }
// summer(101,9);

//                                 following example
function sum(a,b) {
  var total = a + b;
  var arr = [];
  arr.push(total);
  var msg = 'The sum of ' + a + ' and ' + b + ' is ' + total + '.';
  arr.push(msg);
  return arr;
}
var sumOutput = sum(4,7);
testSum(4, 7);

