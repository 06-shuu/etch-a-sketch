const grid = document.querySelector("#sketchpad");
const eraseBtn = document.querySelector("#erase-btn");
const randomColorBtn = document.querySelector("#rand-btn");
const resizeBtn = document.querySelector("#resize-btn");
const blackBtn = document.querySelector("#black-btn");
const reset = document.querySelector("#reset-btn");

let rows = 0;
let cols = 0;
const gridSize = 400;
let btnChoice = "black"; //initial value

createGridBoxes(16, 16); //initial grid


//set height & width of the grid to 500px
grid.style.width = `${gridSize}px`;
grid.style.height = `${gridSize}px`;

//Buttons even listener

eraseBtn.addEventListener('click', () => {
    btnChoice = "erase";
});

randomColorBtn.addEventListener('click', () => {
    btnChoice = "randomColor";
});

blackBtn.addEventListener('click', () => {
    btnChoice = "black";
});

reset.addEventListener('click', () => {
    clearGrid();
});


function createGridBoxes(rows, cols) {
    grid.innerHTML = "";
    for (let i = 0; i < (rows * cols); i++) {
        let gridDiv = document.createElement("div");
        gridDiv.classList.add("box");
        gridDiv.style.width = `${(gridSize / cols)}px`;
        gridDiv.style.height = `${(gridSize / rows)}px`;
        grid.appendChild(gridDiv);

        gridDiv.addEventListener("mouseenter", () => {
            if (btnChoice === "black") {
                gridDiv.style.backgroundColor = "black"; //default behavior
            }
            else if (btnChoice === "randomColor") {
                let red = Math.floor(Math.random() * 256);
                let green = Math.floor(Math.random() * 256);
                let blue = Math.floor(Math.random() * 256);
                let tempRandomColor = `rgb(${red}, ${green}, ${blue})`;
                gridDiv.style.backgroundColor = tempRandomColor;
            }
            else if (btnChoice === "erase"){
                gridDiv.style.backgroundColor = "white";
            }
        });

    }
};


resizeBtn.addEventListener('click', () => {
    let userInput;
    do {
        userInput = prompt("Choose grid size (max: 100)");
        if (userInput === null) return;
        userInput = parseInt(userInput);
    } while (isNaN(userInput) || userInput <= 1 || userInput > 100); 

    cols = rows = userInput;
    createGridBoxes(rows, cols);
});

function clearGrid() {
    const gridBoxes = document.querySelectorAll(".box");
    gridBoxes.forEach(box => {
        box.style.backgroundColor = "white";
    });
}
