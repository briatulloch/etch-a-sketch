const grid = document.querySelector(".gridContainer");
const userInput = document.getElementById("quantity");
const clear = document.querySelector(".clear");


const createGrid = () => {
    for(let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
        
        div.addEventListener("mouseenter", function () {
            div.style.backgroundColor = randomColor();
          });
    }
};

const updateGrid = () => {
    grid.innerHTML="";
    grid.style.setProperty(
        "grid-template-columns",
        `repeat(${userInput.value}, 1fr)`
    );
    grid.style.setProperty(
        "grid-template-rows",
        `repeat(${userInput.value}, 1fr)`
    );
    for (let i = 0; i< userInput.value * userInput.value; i++){
        const div=document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
        div.addEventListener("mouseenter", function () {
            div.style.backgroundColor = randomColor();
          });
    }
};

userInput.addEventListener("change", updateGrid);

function randomColor() {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    return `rgb(${randomRed}, ${randomGreen},${randomBlue})`;
  }


clear.addEventListener("click", function() {
    grid.innerHTML = "";
    userInput.value = "";
    grid.style.setProperty("grid-template-columns", `repeat(16, 1fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 1fr)`);
    createGrid();
  });

  createGrid();
  
 
