function createGrid(number) {
    const container = document.querySelector(".container");
    for (let i = 0; i < number; i++) {
        const rowSquare = document.createElement("div");
        rowSquare.classList.add("row");
        rowSquare.textContent = "";
        container.appendChild(rowSquare);

        for (let j = 0; j < number; j++) {
            const colSquare = document.createElement("div");
            colSquare.classList.add("col");
            colSquare.classList.add("hover");
            // add event listener here instead of ^?
            colSquare.textContent = "";
            rowSquare.appendChild(colSquare);
        }
    }
    
    // or add event listener here?

}

const btn = document.querySelector(".grid-btn");
btn.addEventListener("click", btnPressed);

function checkUserInput(input) {
    if (isNaN(input)) {
        btnPressed();
    }
    if (input < 1 || input > 100) {
        btnPressed();
    }
}

function clearGrid() {
    const nodeList = document.querySelectorAll(".row");
    if (nodeList.length === 0) {
        return
    } else {
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].remove();
        }
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 255);
}

function btnPressed() {
    clearGrid();
    let userInput = prompt("How big would you like the grid? (must be positive number below 100)");
    checkUserInput(userInput);
    let nodeList = createGrid(userInput);
}

// function to get random number between 0 and 255

// add an onmouseover listener to each node

// function that changes the node background to rgb with random number function