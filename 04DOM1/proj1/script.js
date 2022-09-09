// var counter = document.querySelector(".counter");
// var followers = document.querySelector(".followers");

// counter.innerHTML = 1001;

// let count = 1;

// setInterval( () => {
//    if (count < 1000) {
//        count++;
//        counter.innerText = count;

//    }
// }, 1);

// setTimeout(()=> {
//     followers.innerText = "followers in Insagram !"
// }, 5000);



var counter = document.getElementsByClassName("counter");
var followers = document.getElementsByClassName("followers");


let count = 1;

setInterval(() => {
    if (count < 1000) {
        count++;
        counter[0].innerText = count;

    }
}, 1);

setTimeout(() => {
    followers[0].innerText = "followers in Insagram !"
}, 4450);