var MyMaps = new Map();
MyMaps.set(1, "Uno");
MyMaps.set(2, "dos");
MyMaps.set(3, "Tres");
MyMaps.set(4, "Cuartro");

console.log(MyMaps); // show the key value pair

for (let key of MyMaps.keys()) {
  //using for of loop for key

  console.log(`Key is ${key}`);
}
for (let value of MyMaps.values()) {
  console.log(`Key is ${value}`); //using for of loop for value
}

for (let [key, value] of MyMaps) {
  //using for of loop both the value of key value

  console.log(`Key is  : ${key} and value is : ${value}`);
}
//-------------------------------------------------------------

//MyMaps.forEach ((key) => console.log(`${key}`)); // in the map keys are connsidered as indexes and forEach revert the values and not the indexes
MyMaps.forEach ((value) => console.log(`${value}`)); // for value 
MyMaps.forEach((v ,k) => console.log(`${v} and the key is ${k}`)); // for both the value and the key // remember forEach is always going to give value by default



//for of loop will always gives you key first 
// for each loop  will always give you value first

MyMaps.delete(2)  // method used with maps
console.log(MyMaps);