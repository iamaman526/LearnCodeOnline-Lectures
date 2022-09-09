//  closure flow 1 ----------------------------------------------

// function init() {
//   var firstName = "aman";
//   function sayFirstName() {
//     console.log(firstName);
//   }
//   return sayFirstName; // passing the refrence
// }
// var value = init(); //  init excuted but it does not anythin to print !

// closure flow 2 ---------------------------------------------------

// function init() {
//   var firstName = "aman";
//   console.log("I am init"); // value to print for init

//   function sayFirstName() {
//     console.log(firstName);
//   }
//   return sayFirstName; // but sayFirstfn doesnt exicuted yet !
// }

// var value = init(); // exceuting and showing the output for init

// value();   // this serves as function sayFirstName in the memory therefore exicuting value 

//------------------------------------------------------------------

// example to understand closure 

function doAddition(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = doAddition(4);
console.log(add5(5));

console.log(doAddition(5)(5));
// //doAddition()()() //curring
