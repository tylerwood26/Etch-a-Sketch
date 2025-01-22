function createGrid(number) {
    const container = document.querySelector(".container");
    for (let i = 0; i < number; i++) {
        const rowSquare = document.createElement("div");
        rowSquare.classList.add("row");
        rowSquare.textContent = "";
        container.appendChild(rowSquare);

        for (let j = 0; j < number - 1; j++) {
            const colSquare = document.createElement("div");
            colSquare.classList.add("col");
            colSquare.classList.add("hover");
            colSquare.textContent = "";
            rowSquare.appendChild(colSquare);
        }
    }
}

const btn = document.querySelector(".grid-btn");
btn.addEventListener("click", () => {
    let userInput = prompt("How big would you like the grid?")
    createGrid(userInput);

});

// make sure userInput is number
// max 100
// if buttons pressed after grid made
    // delete current grid and make new one