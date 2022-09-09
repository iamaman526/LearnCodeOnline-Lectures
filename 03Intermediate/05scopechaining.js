
var name = "aman";
console.log("Line number 3", name);

function sayName() {
    var name = "Mr A";
    console.log("Line number 7", name);
    sayNameTwo();

    function sayNameTwo() {
        var name = "Mr AG"
        console.log("Line number 12", name);
    }
}
sayName();

