const uid ="abc123";

// uid = "abcd234"   * this cannot be done because of the const keyword*

var fullName = "aman kumar";
var email = "iamaman526@gmail.com";
var password = "123456";
var confirmpassword = "123456";
var courseCount = 0;
var isLoggedInFromGoogle = false;


//fullName =prompt {"Enter your name "};  *it is one of the way to input from user for that i have to attach it with the webpag*

console.log(fullName);
console.log(email);
console.log(uid);
console.log(`

With Unique ID: ${uid}
User is : ${fullName}
and the email is: ${email}
and uses the password : ${password}

`);