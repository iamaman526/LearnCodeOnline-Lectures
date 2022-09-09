const myStates = [
    "Rajasthan",
    "Delhi",
    "Assam",
    1947,
    "Tamil Nadu",
    "Maharastra",
];

// var i = 0;

// // for loop syntax for (dec; cheker; incr/decre)
// for (;;) {
//     if (i > 3) break;
//     console.log(i);
//     i++;
// }

//-----------------------------------------------------------------------------------

myStates.forEach((s) => (console.log(s)));
myStates.forEach(s => console.log(s));  //deleting bracekts and making it more simpler


//using for each method without the loop condition to print the data

// for each is used for array when the size are fixed.

//for each is mainly considered as a method in a function and not as loop !