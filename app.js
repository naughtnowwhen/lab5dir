// remember to go back and create branches

'use strict';

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

//                                  Multiplication test Goal:
//                                 "The product of 5 and 9 is 45."




//                                   imperative Multiply
function multiply (a,b) {
  var total = a * b;
  var myArr = [];
  myArr.push(total);
  var msg = 'The product of ' + a + ' and ' + b + ' is ' + myArr + '.';
  myArr.push(msg);
  return myArr;
}

// // pass args and store result
// var MultOutput = multiply(5,9);

//
//                                    sudo code
// function sumAndMultiply (a,b,c){        make sure to spell and capitalize correctly
//    Arr=[]
//    [0] = sum of all three numbers
//    [1] = product of all three
//    [2] =  "4 and 7 and 5 sum to 16." - dont forget the period.
//    [3] =  "The product of 4 and 7 and 5 is 140."
//    Don's use logical operators - use the sum() and multiply() from before
// }

// well we need 3 numbers inputted but our need sum() fun only takes in 2 at a time. So, how about passing in the sum () for our first two nums and then pass it again but this time only with one index?

//                                          Firststab

// function sumAndMultipy (a,b,c){
//   var firstArr = [];
//   firstArr.push(sum(a,b));
//   var secondArr = [];
//   secondArr.push(sum(c));
//   var mergeArr = [];
//   mergeArr.push(firstArr, secondArr);

//   return mergeArr;



// }
// var summedAndMulted = sumAndMultipy(4,7,5);

                                          // 2nd write



// going to copy and paste so, kind of like branching, realized I need to strip my arrays into parts

// the sum and mult arrays contain two elements, [0] contains the ints, [1] contains the strings. I just want the nums. I can make a new string later.

//no, this I got this wrong, each just has one element with the numbers and strings separated by commas. 
// But that's ok, I can just unshift the first part from each array which will just get me the nums, right?




//   var firstArr = [];
//   firstArr.push(sum(4,7));
//   // var firstArrStripped = firstArr[0];
//   var firstArrStripped = [];
//   firstArrStripped.push(firstArr[0]);
//   return firstArrStripped;

// }
// var summedAndMulted = sumAndMultipy(4,7,5);

//                                    Afterthought

//                                      