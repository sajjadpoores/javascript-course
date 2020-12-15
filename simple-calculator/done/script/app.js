let display = document.getElementById('display') // input tag
let result = document.getElementById('result') // p tag
let memory = 0 // memory of last result

function add() {
    result.innerText =  `${memory} + ${parseInt(display.value)} = ${memory + parseInt(display.value)}`
    memory = memory + parseInt(display.value) 
    display.value = 0
}

function subtract() {
    result.innerText =  `${memory} - ${parseInt(display.value)} = ${memory - parseInt(display.value)}`
    memory = memory - parseInt(display.value) 
    display.value = 0
}

function multiplication() {
    result.innerText =  `${memory} x ${parseInt(display.value)} = ${memory * parseInt(display.value)}`
    memory = memory * parseInt(display.value) 
    display.value = 0
}

function division() {
    result.innerText =  `${memory} / ${parseInt(display.value)} = ${memory / parseInt(display.value)}`
    memory = memory / parseInt(display.value) 
    display.value = 0
}

function cleanAll() {
    display.value = 0
    memory = 0
    result.innerText = 0
}
