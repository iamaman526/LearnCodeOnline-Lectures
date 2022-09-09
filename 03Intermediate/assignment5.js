var user = {
    firstName: "aman",
    lastName: "kumar",
    role: "admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);


    },
    getCourseCount: function () {

        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    },
    userInfo: function () {
        return console.table(user);
    },


};
// console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JD course");
user.buyCourse("Angular JS course");
console.log(user.getCourseCount());
console.log(user.userInfo());

