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

 var getUserRole =  function getUserRole(name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all the access`

            break; //this is not necessary because once the value is returned the rest of the code never execute.
        case "subadmin":
            return ` ${name} is sub admin with  access to create/delete courses`

            break;

        case "testprep":
            return ` ${name} is testprep with access to create/delete tests`
            break;
        case "user":
            return ` ${name} is  a user consumes all content`
            break;


        default:
            return ` ${name} is  a trial user`
            break;
    }
}

console.log(getUserRole("Shahbaz", "testprep"));
var getRole = getUserRole("krishna", "user");
console.log(getRole);