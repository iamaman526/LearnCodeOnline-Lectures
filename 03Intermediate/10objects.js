var user = {
    firstName: "aman",
    lastName: "kumar",
    role: "admin",
    loginCount: 32,
    facebookSignedIn: true,
    userName : "aman@526"


};

console.log(user.firstName);
console.log(user.userName);
console.log(user["lastName"]); //ANOTHER WAY  accesing the object using brackets with the object name and inside it we mention the key




console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);
console.table(user);