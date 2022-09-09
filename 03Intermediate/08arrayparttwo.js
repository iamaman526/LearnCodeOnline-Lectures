    // function isEven(element){
    //     // if(element % 2 === 0){
    //     //     return true;        //* using only return as acondition to shorten the code *\
    //     // }
    //     // else false;
        
    //     return element % 2 === 0;
    // }
    // console.log(isEven(3));
//------------------------------------------------------------------------------------------------------------//
    //arrow function


// var isEven = (element) => {
//         // if (element % 2 === 0) {
//         //     return true;   // using arrow function with declared variable *\
//         // }
//         // return false;
//      return element % 2 === 0; 
// };
//  console.log(isEven(2));

//----------------------------------------------------------------------------------------------------------//
  // call back function .

// var result = [2 , 4 ,6 , 8].every(isEven);
// console.log(result);

//--------------------------------------------------------------------------------
//arrow function call back
var result = [2 , 3 ,6 , 8].every( (e)=>  (e % 2 === 0));
console.log(result);



 //----------------------------------------------------------------------------------------------------//
  // my example oof taking user input using function


// var readlineSync = require('readline-sync');
// var userInput = readlineSync.questionInt("Enter a number ?");
// function isEven(userInput){
//     if (userInput % 2 === 0){
//         return true;   // taking user input in the example *\
//     }
//     else return false;
// }
//  console.log(isEven());