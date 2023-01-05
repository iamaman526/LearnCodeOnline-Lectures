// import { User } from "./06classjs";  // one way to import the class

const User = require("./06classjs");

const aman = new User("aman", "iamaman526@gmail.com"); //constructor called

console.log(aman.getInfo());
aman.enrollCourses("React Bootcamp");
aman.enrollCourses("Angular Bootcamp");

console.log(aman.getCourseList());

let courses = aman.getCourseList();

courses.forEach((c) => console.log(c));
console.log(courses.length);
