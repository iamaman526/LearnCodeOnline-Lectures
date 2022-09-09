var User = {
    name: "",
    getUserName: function () {
        console.log(`User name is : ${this.name}`);

    },

};

var aman = Object.create(User);
console.log(aman);

aman.name = "aman kumar";
aman.getUserName();

var sam = Object.create(User, {
    name: { value: "aman" },
    courseCount: { value: 3 },

});

sam.getUserName();


