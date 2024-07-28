var exDiv = document.getElementById("content");

var counter = 0; 
while(counter < 16) {
    addElement();
    counter++;  // increment counter each time a new div is added
}

var boxes = document.getElementsByClassName("box"); 
for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseenter", mouseEnter);
}

document.getElementById("newGrid").onclick = function() {gridPrompt()};

function addElement() {
    //create a new div element 
    const newDiv = document.createElement("div");
    newDiv.className = 'box';

    //add to DOM 
    exDiv.appendChild(newDiv);
}

function mouseEnter() {
    this.style.backgroundColor = "black";
}

function gridPrompt() {
    numberOfSides = prompt("What are the number of squares per side?: ");
    exDiv.innerHTML = "";  // clear previous content
    var newCount = 0; 
    while (newCount < (numberOfSides * numberOfSides)) {
        addElement();
        newCount++;
    }
}