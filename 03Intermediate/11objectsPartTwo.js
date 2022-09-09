var user = {
    firstName: "aman",
    lastName: "kumar",
    role: ["admin"],
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {  //method in a object
        this.courseList.push(courseName); //this simply refers same scope inside 

    },
    getCourseCount: function () {

        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    },
    changeRoles: function (newRole){
        this.role.push(newRole);
    }
};
var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JD course");
user.buyCourse("Angular JS course");
console.log(user.getCourseCount());
user.changeRoles("User");
console.log(user.role.length);
console.log(user.role[1]);
