//script

const defaultColor = "black"
const defaultSize = 16
let sizeIsNum = true

const container = document.querySelector(".container")
const clear = document.querySelector(".clear")
const resize = document.querySelector(".resize")


let move = false
var size = defaultSize
var width = 500/size
makeSquares(size)

const allSquares = document.querySelector(".square")

document.body.addEventListener("mousedown", () => {
    move = true
})

document.body.addEventListener("mouseup", () => {
    move = false
})

function makeSquares(size){
    width = 500/size
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
        
    }
}

clear.addEventListener("click", () => {
    container.innerHTML = " "
    makeSquares(size)
})

resize.addEventListener("click", () => {
    size = parseInt(Math.floor(prompt("Pick a size from 1-100")))
    console.log(size)
    if (size <= 100 && size >= 1){
    container.innerHTML = " "
    makeSquares(size)
    return size
    }
    else 
    container.innerHTML = " "
    makeSquares(defaultSize)
    return defaultSize
})

function startDrawing(e) {
    e.target.style.backgroundColor = defaultColor
}
