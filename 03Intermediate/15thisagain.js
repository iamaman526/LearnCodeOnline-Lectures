console.log(this);

var user = {
    firstName: "Hitesh",
    courseCount: 4,
    getCourseCount: function() {
        console.log("LINE 7", this);

        function sayHello() {
          console.log("hello");
          console.log("LINE 10", this);   //this a regular function therefore using this will lead to  window object
         }

           sayHello();    //this is a regular function call
    },


};
           user.getCourseCount();  //it is not a regular function call


//for all regular functions call ., this points to window object
