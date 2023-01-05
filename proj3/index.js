const cards = document.querySelectorAll(".card");
console.log(cards);

var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  // console.log("Card flipped");  // shows flips in console
  // console.log(this);  // shows the refrence of html in the console of the flip class

  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);

    checkit();
  }

  function checkit() {
    // console.log("Checking...");
    if (firstCard.dataset.image === secondCard.dataset.image) {
      success();
    } else {
      fail();
    }
  }

  function success() {
    // console.log("success");

    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);
    reset();
  }

  function fail() {
    // console.log("failure");
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      reset();
    }, 1000);
  }

  function reset() {
    isFlipped = false;
    firstCard = null;
    secondCard = null;
  }
}

//Todo shuffle//


function shuffle(){
  cards.forEach((card) =>{
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;

  });
}

// Window.onload = shuffle(); one way to call the function
shuffle(); // another way