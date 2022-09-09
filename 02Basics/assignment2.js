// Allow user to access course if he is:
// logged in from email
// logged in from Google
// logged in from Facebook


var email = false; //if the first statement is not true code will not fire .
var facebook = false;
var google = true;

// if (email) {
//     console.log("login in success");

//     if (facebook) {
//         console.log("login in success");

//         if (google) {
//             console.log("login in success");

//         }

//     }
// }

if (email && facebook && google){
    console.log("login in success");
}