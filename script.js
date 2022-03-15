//script

var defaultColor = "black"

const container = document.querySelector(".container")
const clear = document.createElement("button")
const resize = document.createElement("button")
const erase = document.createElement("button")
clear.textContent = "Clear"
resize.textContent = "Resize"
erase.textContent = "Erase"

let move = false
var size = 64
var width = 500/size
console.log(width)
makeSquares(size)

document.body.addEventListener("mousedown", () => {
    move = true
})

document.body.addEventListener("mouseup", () => {
    move = false
})

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
        square.style.width = width + "px"
        square.style.height = width + "px"
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
