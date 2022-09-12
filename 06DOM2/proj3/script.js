const courses = [
  {
    name: "Complete ReactJS courses",
    price: "2.1",
  },
  {
    name: "Complete MERN courses",
    price: "2.9",
  },
  {
    name: "Complete Angular courses",
    price: "2.7",
  },
  {
    name: "Complete C++ courses",
    price: "2.9",
  },
  {
    name: "Complete Django courses",
    price: "2.4",
  },
];

function generateList() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = ""; //   hides real aaray output 
  courses.forEach((course) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(course.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");

    const price = document.createTextNode("$" + course.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
  });
}

// generateList();
window.addEventListener("load", generateList); //  passing the refrence of function generateLIST

const button = document.querySelector(".sort-btn")

button.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price);
  generateList();
})
