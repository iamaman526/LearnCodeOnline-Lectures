const uno = () => {
  console.log(" I am one");
};

const dos = () => {
  setTimeout(() => {
    console.log("woooohoooo");
  }, 3000);
  console.log(" I am Two");
};

const tres = () => {
  console.log(" I am Three");
};

uno();

dos();
tres();