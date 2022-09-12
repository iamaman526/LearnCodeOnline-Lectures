// // destructuring

// // concept : whatever data type are on right hand side , similar data type should be on left hand side //

const user = ["Aman", 3, "admin"];
// // console.log(user[0]); one way to access the Array.

// // var role = user[2];  other way to access Array.
// // var name = user[0];
// // console.log(role , name);
//------------------------------------------------------------

// var [name ,courseCount , role] = user; // another way to access ARRay using destructuring
// console.log(courseCount);

//---------------------------------------------------------------------------

const MyUser = {
  name: "Aman",
  courseCount: 5,
  role: "Admin",
};

// console.log(MyUser.courseCount);

// const {name , mycourseCount , role} = MyUser; // another way to access object using destructuring
// console.log(role);
