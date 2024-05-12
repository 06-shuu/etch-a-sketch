const grid = document.querySelector(".flexbox-grid");

let rows = 16;
let cols = 16;
const gridSize = 600;

grid.style.width = `${gridSize}px`;
grid.style.height = `${gridSize}px`;

function createGridBoxes() {
    for (let i = 0; i < (rows * cols); i++) {
        const gridDiv = document.createElement("div");

        gridDiv.style.width = `${(gridSize / cols) - 2}px`;
        gridDiv.style.height = `${(gridSize / rows) - 2}px`;
        gridDiv.classList.add("box");

        grid.appendChild(gridDiv);
    }
};

createGridBoxes();