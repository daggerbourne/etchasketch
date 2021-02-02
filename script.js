const gridElement = document.querySelector('.grid');
const gridSize = 256


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
