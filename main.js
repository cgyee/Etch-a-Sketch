let whitetoBlack = 0;

function createGrid(dimensions) {
    const container = document.querySelector('#gridContainer');
    container.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;
    for(i = 0; i < Math.pow(dimensions, 2); i++) {
        gridItem = document.createElement('div');
        gridItem.id = i;
        //gridItem.classList.add('lineblock')
        gridItem.addEventListener('mouseover', function(e) {
            colorGridItem(this, getBlacKColor());
        });
        gridItem.className = 'gridItem'
        container.appendChild(gridItem);
    }
}

function clearGrid() {
    let gridItems = document.querySelectorAll('.gridItem');
    gridItems = Array.from(gridItems);
    gridItems = gridItems.forEach(element => {
        element.style.backgroundColor = "white";
    });
}

function promptGridDimension() {
    keepGoing = true
    let dimensions; 

    while(keepGoing) {
        dimensions = parseInt(prompt("Please enter the the grid size less than 100 that you would like to use: "));
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

function colorGridItem(ts, color) {
    console.log(color)
    ts.style.backgroundColor = color; 

}

function getBlacKColor() {
    return "rgb(0, 0, 0)";
}

function getRandomColor() {
    let color  = Math.floor(Math.random() * 360);
    return `hsl(${color}, 100%, 50%)`;
}

function getwhitetoBlacktoBlack() {
    if(whitetoBlack>=250) {
        whitetoBlack=0;
    }
    whitetoBlack+=25;
    return `rgb(${whitetoBlack}, ${whitetoBlack}, ${whitetoBlack})`;
}

createGrid(promptGridDimension())
const clearBtn = document.querySelector('#clearBtn');
const blackColorBtn = document.querySelector('#blackColorBtn');
const randomColorBtn = document.querySelector('#randomColorBtn');

clearBtn.addEventListener('click', clearGrid);