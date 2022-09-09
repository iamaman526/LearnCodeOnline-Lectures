// calling function inside a variable

// var sayHello = function(){
//     console.log("I say hello");
// }
// sayHello();


//--------------------------------------------------------------//

//normal way of calling a function

// function sayHello(){
//     console.log("I say hello");
//     console.log("I again say Hello");
// }
// sayHello();

//----------------------------------------------------------//

//self executing anonymus function also known as IIFE


(function () {
  console.log("I say hello");
  console.log("I say hello again");
})();

