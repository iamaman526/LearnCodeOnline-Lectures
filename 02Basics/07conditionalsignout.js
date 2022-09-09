// Show user a signout button if he is authenticated,
// other wise show him option to Login/Signup

var authenticated = true;

// if(authenticated){
//     console.log("show signout button");
// }
// else {
//     console.log("show login button");
// }

// long procedure
//  but by using ternary conditional operator

authenticated ? console.log("signOut Button"): console.log("login Button");
