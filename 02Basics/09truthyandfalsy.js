//TODO: falsy
// undefined
// null             /* these are all falsy values 
// 0
// ''
// NaN



// var user = null;
// if (user) {
//     console.log("condition is true");  /* it shows a falsy value because of the null keyword*/
// }

/*------------------------------------------------------------*/
// var user = "";
// if (user) {
//     console.log("condition is true");  /* it shows a falsy value because of the "" keyword*/
// }

/*------------------------------------------------------------*/


// var user = "null";
// if (user) {
//     console.log("condition is true");   /* the output will be condition is true because the value of the varible is a string*/
// }

/*------------------------------------------------------------*/

// var user = "2";
// if(2 == user){

//     console.log("Condition is true ");
// }
 // output will be condition is true . this is the example of Coercion
/*------------------------------------------------------------*/

var user = "2";
if(2 === user){

    console.log("Condition is true ");
}

//  console.log(2 + "2"); /* very importan type conversion *?

// important point refer video coercion and falsy in js