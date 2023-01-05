const uno = () => {
  return " I am one";
};

// const dos = async () => {
//   setTimeout(() => {
//     return " I am Two";
//   }, 3000)
// };

const dos = () => {
  return new Promise((resolve, reject) => {
    //using promise for run time execution of asynchronus calls
    setTimeout(() => {
      resolve(" I am Two");
    }, 3000);
  });
};

const tres = () => {
  return " I am Three";
};

const callMe = async () => {
  //using async for the promise
  let valOne = uno();
  console.log(valOne);

  let valTwo = await dos(); //using awaits for the promise
  console.log(valTwo);

  let valThree = tres();
  console.log(valThree);
};

callMe();

