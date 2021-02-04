const container = document.querySelector('.container');
const gridSize = 256
const color = 'red'

//Div Generator
function divGenerate(gridSize){
for(let i = 0; i < gridSize; i++){
    let gridItems = document.createElement('div');
    gridItems.classList.add('gridItem')
    container.appendChild(gridItems);
    console.log('genreated')
}}

//Generate Divs
divGenerate(gridSize);


const gridItems = document.querySelectorAll('.gridItem');

function changeDivColor(color){
    console.log(`Color Changed to ${color}`)
     this.style.backgroundColor = "red";
}

gridItems.forEach(function(gridItem){
    console.log('Binding gridItem');
    gridItem.addEventListener('mouseover', changeDivColor)
    gridItem.addEventListener('TouchEvent', changeDivColor)
})


// gridItems.forEach(function (gridItem){
//     gridItem.addEventListener('click', changeDivColor);

// })