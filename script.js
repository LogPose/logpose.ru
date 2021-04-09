let button1 = document.querySelector('#headButton1')
let button2 = document.querySelector('#headButton2')

button1.addEventListener('click', function() {
    console.log('То, что надо')
    location.href = 'game.html'
})
button2.addEventListener('click', function() {
    location.href = 'game21.html'
})


// Тут пишу игру

var $start = document.querySelector('#start')
var $game = document.querySelector('#game')
var score = 0
var isGameStarted = false
var $time = document.querySelector('#time')
var $result = document.querySelector('#result')
var $timeHeader = document.querySelector('#time-header')
var $resultHeader = document.querySelector('#result-header')
var $gameTime = document.querySelector('#game-time')
var colors = ['red', 'blue', 'green', 'yellow', 'pink']

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)
$gameTime.addEventListener('input', setGameTime)

function startGame() {
    setGameTime()
    score = 0
    $gameTime.setAttribute('disabled', 'true')
    isGameStarted = true
    $game.style.backgroundColor = '#fff'
    $start.classList.add('hide')
    var interval = setInterval(function() {
        var time = parseFloat($time.textContent)
        if (time <= 0) {
            endGame()
            clearInterval(interval)
            //edn game
        } else {
            $time.textContent = (time - 0.1).toFixed(1)
        }
    }, 100)
    renderBox()
}

function renderBox() {
    $game.innerHTML = ''
    var boxSize = getRandom(30, 100)
    var box = document.createElement('div')
    var gameSize = $game.getBoundingClientRect()
    var maxTop = gameSize.height - boxSize
    var maxLeft = gameSize.width - boxSize
    var randomColorIndex = getRandom(0, colors.length)

    console.log(gameSize)

    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = colors[randomColorIndex]
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')
    $game.insertAdjacentElement('afterbegin', box)
}

function handleBoxClick(event) {
    if (!isGameStarted) {
        return
    }
    if (event.target.dataset.box) {
        score++
        renderBox()
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function setGameScore() {
    $result.textContent = score.toString()
}

function endGame() {
    isGameStarted = false
    setGameScore()
    $start.classList.remove('hide')
    $game.style.backgroundColor = '#ccc'
    $game.innerHTML = ''
    $timeHeader.classList.add('hide')
    $resultHeader.classList.remove('hide')
    $gameTime.removeAttribute('disabled')
}

function setGameTime() {
    var time = +$gameTime.value
    $time.textContent = time.toFixed(1)
    $timeHeader.classList.remove('hide')
    $resultHeader.classList.add('hide')

}
