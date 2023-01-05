//importing class to another file .
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  #courseList = []; //private

  getInfo() {
    return { name: this.name, email: this.email };
  }
  enrollCourses(name) {
    // it act as setter
    this.#courseList.push(name);
  }
  getCourseList() {
    // it act as getter ,
    return this.#courseList;
  }

   login() {
    //static keyword is used make the method private after that it will not be able to inherit by child class
    return "You are logged in";
  }
}

class SubAdmin extends User {
  //extends is used inhertit the properties of the parent class
  constructor(name, email) {
    super(name, email); // super is used to take the value inside the method of the parent class
  }
  getAdminInfo() {
    return "I am subadmin";
  }
  login() {
    return "login for admin only";
  }
 
}

// let aman =  new User("aman" ,"iamamn");
// aman.enrollCourses("aman1");
// console.log(aman.#courseList);
// console.log(aman.getInfo());

// console.log(aman);

module.exports = User; // method to export file

//=====private props getters and setters in JS==================///lco08

// const rock = new User("rock", "rock@rock.com");
// console.log(rock.getInfo());
// rock.enrollCourses("Angular Bootcamp");
// console.log(rock.getCourseList());
// console.log(rock.courseList); //cannot fetch private varible directly therefore we have to use getters and setters

///Inheritance in js//-------------------------lco#09

const tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo()); //called from child class
console.log(tom.login());

console.log(tom.getInfo()); //inherited from parent class

