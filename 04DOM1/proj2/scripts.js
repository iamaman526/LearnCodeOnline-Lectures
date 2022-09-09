    const red = document.querySelector(".red");
    const cyan = document.querySelector(".cyan");
    const violet = document.querySelector(".violet");
    const orange = document.querySelector(".orange");
    const pink = document.querySelector(".pink");

    const center = document.querySelector(".center");


// console.log(window.getComputedStyle(red).backgroundColor); // TO Remember to get the rgb value of the color


const getBGColor = (SelectedElement) => {
    return window.getComputedStyle(SelectedElement).backgroundColor;

};


// console.log(getBGColor(pink));



// var color = getBGColor(pink);

// pink.addEventListener("mouseenter", () => {
//     center.style.background = color;

// });


const magicColorChanger = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;

    });
};

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));