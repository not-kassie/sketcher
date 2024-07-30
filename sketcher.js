//set up variables
var exDiv = document.getElementById("content");
const START_SIZE = 16;

//create opening grid
makeGrid(START_SIZE);

//button to make new grid
document.getElementById("newGrid").onclick = function() {gridPrompt()};

//creating a grid 
function makeGrid(size) {
    let boxNumber = size * size; 
    for (let i = 0; i < boxNumber; i++) {
        let newDiv = document.createElement("div");
        newDiv.className = 'box';
        newDiv.classList.add('grid');
        exDiv.appendChild(newDiv);  //add to DOM
    }

    //set up size of the boxes 
    let height = (560 / size);
    let width = (560 / size); 
    console.log(height, width);
    const newBox = document.querySelectorAll('.grid');
    newBox.forEach(element => {
        element.style.height = height.toString() + "px";
        element.style.width = width.toString() + "px";
    })


    //allow for coloring of grid
    var boxes = document.getElementsByClassName("box"); 
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mouseenter", mouseEnter);
    }
}

//create a new grid with input, won't allow for more than 100
function gridPrompt() {
    numberOfSides = prompt("What are the number of squares per side? (value cannot be higher than 100): ");
    console.log(numberOfSides);
    if (numberOfSides <= 100) {
        exDiv.innerHTML = "";  // clear previous content
        makeGrid(numberOfSides);
    } else {
        gridPrompt();
    }
}

//the sketch portion of the function? makes the drawing 
function mouseEnter() {
    this.style.backgroundColor = getRandomColor();
}

//pull random colors! 
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}