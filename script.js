// let gridItems = document.createElement('div');
// gridItems.classList.add('gridItem')

const gridElement = document.querySelector('.grid');
const gridSize = 256

// console.log(gridItems)
// gridElement.appendChild(gridItems);


//Create multiple divs
function divGenerate(gridSize){
for(let i = 0; i < gridSize; i++){
    let gridItems = document.createElement('div');
    gridItems.classList.add('gridItem')
    gridElement.appendChild(gridItems);
    console.log('genreated')
}

}
divGenerate(gridSize);
