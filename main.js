let whitetoBlack = 0;
let userInput = document.getElementById("optionInput");
userInput.value = 16;

function promptGridDimension() {
    keepGoing = true
    while(keepGoing) {
    let dimensions = parseInt(prompt("Please enter the the grid size less than 100 that you would like to use: "));
        if(!(Number.isNaN(dimensions))) {
            if(dimensions <= 0) {
                alert("Please use a number > 0");
            }
    
            else if(dimensions >= 100) {
                alert("Please use a grid size < 100");
            }

            else {
                keepGoing = false;
            }
            
        }
        else {
            alert("Please enter a valid number")
        }
    }
    return Math.floor(dimensions) > 0 ? Math.floor(dimensions) : 1;
    
}

function checkInputValue(e) {
    keepGoing = true;
    while(keepGoing) {
        if(!(Number.isNaN(e.target.value))) {
            if(e.target.value <= 0) {
                alert("Please use a number > 0");
                e.target.value = 16
                createGrid(16)
            }
    
            else if(e.target.value >= 100) {
                alert("Please use a grid size < 100");
                e.target.value = 16
                createGrid(16)
            }

            else {
                keepGoing = false;
            }
            
        }
        else {
            alert("Please enter a valid number")
        }
    }
    return true;
}

function setInputListner() {
     userInput.addEventListener('focus', setGridDimensions);
}

function setGridDimensions(e) {
    if(checkInputValue(e)){ clearGrid(); }
}
function createGrid(dimensions) {
    
    const container = document.querySelector('#gridContainer');
    container.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;
    for(i = 0; i < Math.pow(dimensions, 2); i++) {
        gridItem = document.createElement('div');
        gridItem.className = 'gridItem'
        container.appendChild(gridItem);
    }
   updateColor("black");
}

function setColor(e, color) {
    e.target.style.backgroundColor = color;
}

function updateColor(color) {
    let gridItems = document.querySelectorAll('.gridItem');
    gridItems = Array.from(gridItems);
    gridItems = gridItems.forEach(element => {
        switch(color){
            case "random":
                element.addEventListener('mouseover', function(e) {setColor(e, getRandomColor());});
                break;
            case "gray":
                element.addEventListener('mouseover', function(e) {setColor(e, getwhitetoBlacktoBlack());});
                break;
            case "black":
                element.addEventListener('mouseover', function(e) {setColor(e, getBlacKColor());});
                break;
            default:
                element.addEventListener('mouseover', function(e) {setColor(e, getBlacKColor());});
                break;
        }
    });
}

function clearGrid() {
    const container = document.querySelector('#gridContainer');
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(userInput.value)
}

function getBlacKColor() {
    return "rgb(0, 0, 0)";
}

function getRandomColor() {
    let color  = Math.floor(Math.random() * 360);
    console.log(`hsl(${color}, 100%, 50%)`)
    return `hsl(${color}, 100%, 50%)`;
}

function getwhitetoBlacktoBlack() {
    if(whitetoBlack<=0) {
        whitetoBlack=255;
    }
    whitetoBlack-=25;
    return `rgb(${whitetoBlack}, ${whitetoBlack}, ${whitetoBlack})`;
}

createGrid(document.getElementById("optionInput").value);

const clearBtn = document.querySelector('#clearBtn');
const blackColorBtn = document.querySelector('#blackColorBtn');
const randomColorBtn = document.querySelector('#randomColorBtn');
const graytoBlackBtn = document.querySelector('#graytoBlackBtn');

clearBtn.addEventListener('click', clearGrid);
blackColorBtn.addEventListener('click', function(e) {updateColor("black")});
randomColorBtn.addEventListener('click', function(e) {updateColor("random")});
graytoBlackBtn.addEventListener('click', function(e) {updateColor("gray")});
setInputListner();
