//script

var defaultColor = "black"

const container = document.querySelector(".container")
const clear = document.createElement("button")
const resize = document.createElement("button")
const erase = document.createElement("button")
clear.textContent = "Clear"
resize.textContent = "Resize"
erase.textContent = "Erase"

const tds = document.querySelectorAll('.square');
tds.forEach((square) => {
  square.style.setProperty('--td-background-color', '#00ff00');
});

let move = false
var size = 64
makeSquares(size)

document.addEventListener("mousedown", () => {
    move = true
})

document.addEventListener("mouseup", () => {
    move = false
})

function boardSize() {
    size = parseInt(Math.floor(prompt("Pick a number between 1-100.")))
    makeSquares(size)
}

function makeSquares(size){
    
    for (let i = 0; i < (size * size); i++){
        const square = document.createElement("div")
        square.classList.add("square")
        container.appendChild(square)
        square.addEventListener("click", function (e) {
            startDrawing(e)
        })
        square.addEventListener("mouseenter", function (e) {
            if (move === true){
                startDrawing(e)
            }
        })
        menuButtons()
        
        //clear action
        clear.addEventListener("click", () => {
            square.style.backgroundColor = "white"
        })
    }
}

function startDrawing(e) {
    e.target.style.backgroundColor = defaultColor
}

function menuButtons(){
    document.body.appendChild(erase).classList.add("menu")
    document.body.appendChild(resize).classList.add("menu")
    document.body.appendChild(clear).classList.add("menu")
}

//resize and erase actions
resize.addEventListener("click", () => {
    size = prompt("Pick a number")
    const squares = document.getElementsByClassName("square")
    squares.container.remove(squares)
    makeSquares(size)
})
