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

//Bind .gridItem HTML class to gridItems const
const gridItems = document.querySelectorAll('.gridItem');

//Grid Color function
function changeDivColor(color){
    console.log(`Color Changed to ${color}`)
     this.style.backgroundColor = "red";
}

//function to apply a mouseover event on each generated div
gridItems.forEach(function(gridItem){
    console.log('Binding gridItem');
    gridItem.addEventListener('mouseover', changeDivColor)
    gridItem.addEventListener('TouchEvent', changeDivColor)
})


