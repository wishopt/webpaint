function drawGrid(width, height) {
    for (let i = 0; i < (width * height); i++) {
        let temp;
        temp = document.createElement("div");
        temp.classList.add("pixel");
        container.appendChild(temp);
    };
    let attributeWidth = `repeat(${width}, 1fr)` // used template literals to add user input into inline CSS
    container.setAttribute("style", `grid-template-columns: ${attributeWidth}`);
    drawColor();
};

function drawColor() {
    let pixels = document.querySelectorAll(".pixel");
    pixels.forEach( (div) => {
        div.addEventListener("mouseover", () => {
            div.setAttribute("style", "background-color: black");
        });
    });
};

function start() {
    let pixels = document.querySelectorAll(".pixel");
    pixels.forEach( (div) => {
       div.remove(); 
    });
    let width = Number(document.getElementById("inputWidth").value);
    let height = Number(document.getElementById("inputHeight").value);
     if (isNaN(width) || isNaN(height)) {
        alert("Please enter a number between 1 and 150.")
    } else if (width < 1 || height < 1 || width > 150 || height > 150) {
        alert("Please enter a number between 1 and 150.")
    } 
    else {
        drawGrid(width,height);
    }
};

const container = document.querySelector("#container");