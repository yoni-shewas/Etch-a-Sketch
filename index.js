let gridSize = 0 

document.addEventListener("DOMContentLoaded", () => {
    createGrid();
})


function gridSizePrompt(){
    
}

function createGrid(size=3400){

    let container = document.querySelector(".container");

    for (let i=0; i<size; i++) {
        let divs = document.createElement("div");
        divs.className = "divs";
        divs.addEventListener("mouseover", ()=>{
            console.log("hover")
            divs.style.backgroundColor = "black";
        })
        container.append(divs);
    }
}