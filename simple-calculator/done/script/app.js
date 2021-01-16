let display = document.getElementById('display')
let result = document.getElementById('result')
let memory = 0

function add() {
    display.value = parseInt(display.value)
    result.innerText = `${memory} + ${display.value} = ${memory + display.value}`
    memory += display.value
    display.value = 0
}

function sub() {
    display.value = parseInt(display.value)
    result.innerText = `${memory} - ${display.value} = ${memory - display.value}`
    memory -= display.value
    display.value = 0
}

function mul() {
    display.value = parseInt(display.value)
    result.innerText = `${memory} * ${display.value} = ${memory * display.value}`
    memory *= display.value
    display.value = 0
}

function div() {
    display.value = parseInt(display.value)
    result.innerText = `${memory} / ${display.value} = ${memory / display.value}`
    memory /= display.value
    display.value = 0
}

function restart() {
    result.innerText = 0
    memory = 0
    display.value = 0
}
