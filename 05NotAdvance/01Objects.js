var User = function (firstName, courseCount) {  //using prototype
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(` Course count is: ${this.courseCount}`);

    };

};

User.prototype.getFirstName = function () {
    console.log(`Your firstname is : ${this.firstName}`);

};

var aman = new User("aman", 2);  //while using new , this is not regular function because we ae using new  keyword 
aman.getCourseCount();
// aman.getFirstName();

if (aman.hasOwnProperty("firstNamee")) {
    aman.getFirstName();

}
                                                   // console.log(aman.firstName);

// console.log(aman);

var krishna = new User("krishna", 1);

// console.log(krishna);
krishna.getCourseCount();
krishna.getFirstName();