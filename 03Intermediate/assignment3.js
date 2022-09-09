/*
Define a function that can answer the role of a user. 
A user can be on following roles:
admin - with all access
subadmin - with acccess to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role)
*/

var getUserRole = function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return ` ${name} is admin with all access`


        case "subadmin":
            return ` ${name} is sub admin with  access to create/delete courses`


        case "testprep":
            return ` ${name} is testprep with access to create/delete tests`

        case "user":
            return ` ${name} is  a user consumes all content`



        default:
            return ` ${name} is  a trial user`

    }
}

console.log(getUserRole("aman", "testprep"));
var getRole = getUserRole("krishna", "user");
console.log(getRole);

//without breaks also the switch statement works with return in the function.