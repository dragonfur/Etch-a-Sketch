//script

const container = document.querySelector(".container")
let move = false
var size = 16
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
    }
}

function startDrawing(e) {
    e.target.style.backgroundColor = "blue"
}


