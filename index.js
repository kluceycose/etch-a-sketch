/*Initial setup*/
// Constant initializations
const AREA_HEIGHT = "800px";
const AREA_WIDTH = "800px";
const grid = document.querySelector(".draw-area");
const reset_btn = document.querySelector(".reset");
const resolution_btn = document.querySelector(".resolution-submit");

// Variable declarations
let color;
let boxesPerSide;

// Initialize the page 
function initialize(){
    color = "#000000";
    setResolution();
    createGrid();

}
// Fill drawable area with boxes based on user input
// Establish "mouseenter" listener on each box
function createGrid(){
    let box = grid.lastElementChild;
    while(box){
        grid.removeChild(box);
        box = grid.lastElementChild;
    }
    grid.style.cssText = `grid-template-columns: repeat(${boxesPerSide}, calc(${AREA_WIDTH}/${boxesPerSide}));
            grid-template-rows: repeat(${boxesPerSide}, calc(${AREA_HEIGHT}/${boxesPerSide}))`;
    for(let i = 0; i < boxesPerSide*boxesPerSide; i++){
        box = document.createElement("div");
        box.classList.add("box");
        box.addEventListener('mouseenter', colorBox);
        grid.appendChild(box);
    }
}

// Color a box 
function colorBox(e) {
    e.target.style.cssText = `background: ${color}`;
}

// Set the resolution
function setResolution(){
    boxesPerSide = document.querySelector("#resolution").value;
    createGrid();
}

// Establish "click" listener for reset button
reset_btn.addEventListener('click', (e)=>{
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) =>{
        box.style.cssText = "background: #ffffff;";
    })
});

// Establick "click" listener for resolution submit button
resolution_btn.addEventListener("click", setResolution);

// Initial values
initialize();



