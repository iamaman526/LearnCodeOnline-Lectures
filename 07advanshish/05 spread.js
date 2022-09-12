// var returnedValue = Math.max(2, 5, 7, 4, 2, 8);
// console.log(returnedValue);

// var myObj = {};

// Object.assign(myObj , {a: 1, b:2 ,c:3}, {z:9 , y:8, x:7});
// console.log(myObj);
//-------------------------------------------------------------------

function sumOne(a, b) {
  return a + b;
}
var myA = [5, 4];
// console.log(sumOne(...myA));  // spread operator // it is used to take the group and try to spread it in multiple value .
//----------------------------------------------------------------------------------------------------------------------------------

// function sumTwo(...args) {
//   console.log(args);

//   let sum = 0;
//   for (const arg of args) {
//     //    sum = sum + arg; // sort hand notation of same declaration is given below
//     sum += arg;
//   }
//   return sum;
// }

// console.log(sumTwo(2, 3, 1, 5, 7)); // REST operator // it is used to take the individual value and try to spread out in group or bunch of values.
//------------------------------------------------------------------

// ignored arguments
function sumTwo(a, b, ...args) {
  console.log(args);
  let multi = a * b;
  let sum = 0;

  for (const arg of args) {
    sum += arg;
  }
  return [sum, multi];
}

console.log(sumTwo(2, 3, 1, 1, 1));
