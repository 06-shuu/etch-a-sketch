const grid = document.querySelector("#sketchpad");

let rows = 16;
let cols = 16;
const gridSize = 500;

grid.style.width = `${gridSize}px`;
grid.style.height = `${gridSize}px`;

function createGridBoxes(rows, cols) {
    for (let i = 0; i < (rows * cols); i++) {
        let gridDiv = document.createElement("div");
        // gridDiv.classList.add('gridDiv');
        gridDiv.classList.add("box");
        gridDiv.style.width = `${(gridSize / cols)}px`;
        gridDiv.style.height = `${(gridSize / rows)}px`;
        grid.appendChild(gridDiv);

        gridDiv.addEventListener("mouseenter", () =>{
            gridDiv.style.backgroundColor = "black";
        })//
    }
};

createGridBoxes(rows, cols);


// function try11(){
//     const t = document.createElement("p");
//     t.innerHTML=`hi`
//     grid.appendChild(t);
// };

// try11()