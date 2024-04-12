let gridSize = 0 

document.addEventListener("DOMContentLoaded", () => {
    let gridSize = document.getElementById("gridSize");
    gridSize.addEventListener("click", gridSizePrompt);

    createGrid();
})


function gridSizePrompt(){
    try{
        gridSize = prompt("input Grid size: ");
        createGrid(parseInt(gridSize));
    }
    catch(e){
        console.log(e);
    }
}

function createGrid(size=3400){

    let container = document.querySelector(".container");

    container.innerHTML = "";

    for (let i=0; i<size; i++) {


        let color = getRandomColor();
        let divs = document.createElement("div");
        divs.className = "divs";
        divs.addEventListener("mouseover", ()=>{
            console.log("hover")
            divs.style.backgroundColor = color;
        })
        container.append(divs);
    }
}


function getRandomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    // Convert decimal values to hexadecimal and concatenate them
    var hex = "#" + red.toString(16) + green.toString(16) + blue.toString(16);

    return hex;
}