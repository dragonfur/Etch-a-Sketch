//script

const defaultColor = "black"
const defaultSize = 16
let sizeIsNum = true

const container = document.querySelector(".container")
const clear = document.querySelector(".clear")
const resize = document.querySelector(".resize")
const erase = document.querySelector(".erase")
const rainbow = document.querySelector(".rainbow")


var randomR
var randomG
var randomB

let move = false
let erasing = false
let rainbowing = false
let isColor = true
var color = defaultColor
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
            if (erasing === false){
            startDrawing(e, defaultColor)
            }
            else if (erasing === false && rainbowing === true){
                rainbowDraw()
                startDrawing(e, "rgb(" + randomR +", " + randomG + ", " + randomB +")")
            }
            else
            startDrawing(e, "white")
        })
        square.addEventListener("mouseenter", function (e) {
            if (move === true){
                if (erasing === false && rainbowing === false){
                startDrawing(e, defaultColor)
                }
                else if (erasing === false && rainbowing === true){
                    rainbowDraw()
                    startDrawing(e, "rgb(" + randomR +", " + randomG + ", " + randomB +")")
                }
                else
                startDrawing(e, "white")
            }
        })

        square.style.width = width + "px"
        square.style.height = width + "px"  
    }
}

function rainbowDraw() {
    randomR = Math.floor(Math.random() * 256)
    randomG = Math.floor(Math.random() * 256)
    randomB = Math.floor(Math.random() * 256)
    return randomR, randomG, randomB
}

erase.addEventListener("click", () => {
    erasing = !erasing
})

rainbow.addEventListener("click", () => {
    rainbowing = !rainbowing
    isColor = !isColor
    if (isColor === true){
        rainbow.textContent = "Color"
    }
    else if (isColor === false){
        rainbow.textContent = "Rainbow"
    }
})

function reset(){
    isColor = true
    rainbowing = false
    erasing = false
}

clear.addEventListener("click", () => {
    container.innerHTML = " "
    isColor = true
    rainbowing = false
    erasing = false
    makeSquares(size)
})

resize.addEventListener("click", () => {
    size = parseInt(prompt("Pick a size from 1-100"))
    console.log(size)
    if (size <= 100 && size >= 1){
    container.innerHTML = " "
    reset()
    makeSquares(size)
    return size
    }
    else 
    container.innerHTML = " "
    reset()
    makeSquares(defaultSize)
    return defaultSize
})

function startDrawing(e, color) {
    e.target.style.backgroundColor = color
}
