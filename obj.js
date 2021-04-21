// Кнопки и инпуты
const $logButton = document.querySelector('#logButton') // Главная кнопка в меню - возврат на главную страницу
const $characterName = document.querySelector('#playerNameInput') // Инпут для введения имени персонажа
const $starButton = document.querySelector('#gameButton1') // Кнопка, которая позволяет ввести имя игрока
const $moneyInput = document.querySelector('#moneyInput') // Инпут для введения количества денег
const $moneyButton = document.querySelector('#moneyButton') // Кнопка, которая принимает общее количество денег
const $startGameButton = document.querySelector('#startGameButton') // Кнопка запуска тела игры
const $beginButton = document.querySelector('#setBet')
const $enough = document.querySelector('#enough') // Забираю кнопку хватит
const $anotherCard = document.querySelector('#anotherCard') // Забираю кнопку новой карты
const $newGame = document.querySelector('#newGame') // Забираю кнопку для начала новой игры
const $stopGame = document.querySelector('#stopGame') // Кнопка завершения игры
const $exit = document.querySelector('#exit') // Забираю кнопку выхода
// Забираю кнопки ставок
let $buttonBetTen = document.querySelector('#betTen')
let $buttonBetFifty = document.querySelector('#betFifty')
let $buttonBetOneHundred = document.querySelector('#betOneHundred')
let $buttonBetFiveHundred = document.querySelector('#betFiveHundred')

// Элементы дизайна
const $nextStep = document.querySelector('#nextStep')  // Блок со второй частью вхождения в игру
const $playerName = document.querySelector('#playerName') // Отображение имени персонажа в приветствии 
const $gameStart = document.querySelector('#gameStart') 
const $gameBody = document.querySelector('#gameBody')
const $gamerName = document.querySelector('#gamerName')
const $betBlock = document.querySelector('#bet') // Блок с вводом ставки и подтверждением
const $bank = document.querySelector('#bank') // Забираю блок с банком раунда
const $roundScope = document.querySelector('#roundScope') // Забираю спан, который мне считает очки
const $gameBar = document.querySelector('#gameBar') // Забираю див с геймбаром
const $firsBotRoundScope = document.querySelector('#firstBotRoundScope') // для вывода текущих очков бота 1
const $secondBotRoundScope = document.querySelector('#secondBotRoundScope') // для вывода текущих очков бота 2
const $gamerRoundScope = document.querySelector('#gamerRoundScope') // Чтобы показывать очки игрока
const $winBoxPlayer1 = document.querySelector('#winBoxPlayer1') // Для показа винбокса у первого бота
const $winBoxGamer = document.querySelector('#winBoxGamer') // Для показа винбокса у игрока
const $winBoxPlayer2 = document.querySelector('#winBoxPlayer2') // Для показа винбокса у второго игрока
const $secondBotRoundBar = document.querySelector('#secondBotRoundBar') // Отображение счёта второго бота
const $firsBotRoundBar = document.querySelector('#firsBotRoundBar') // Отображение счёта у первого бота
const $player2 = document.querySelector('#player2') // Забираю весь отсек со вторым ботом
const $loserBoxPlayer2 = document.querySelector('#loserBoxPlayer2') // Для показа лузбокса второго бота
const $loserBoxPlayer1 = document.querySelector('#loserBoxPlayer1') // Для показа лузбокса первого бота
const $loserBoxGamer = document.querySelector('#loserBoxGamer') // Для показа лузбокса у игрока
const $betThirty = document.querySelector('#betThirty') // Картинка со ставкой в 30 бачей
const $bet150 = document.querySelector('#bet150') // Ставка 150
const $bet300 = document.querySelector('#bet300') // Ставка 300
const $bet1500 = document.querySelector('#bet1500') // Ставка 1500
const $betImage = document.querySelector('#betImage') // Картинка с банком
const $moneyGone = document.querySelector('#moneyGone') // Когда проиграны все деньги
const $lowMoney = document.querySelector('#lowMoney') // Когда входишь в игру без денег
const $noBotMoney = document.querySelector('#noBotMoney') // Когда у ботов нет денег
const $welcome = document.querySelector('#welcome') // Встречающая надпись
const $getBetImage = document.querySelector('#getBetImage') // Картинка "Сделайте ставку"
const $gamerWin = document.querySelector('#gamerWin') // Победа игрока
const $dirtyWin = document.querySelector('#dirtyWin') // Победа Бота1
const $cleanWin = document.querySelector('#cleanWin') // Победа Бота2
const $draw = document.querySelector('#draw') // Ничья
// Забираю отображение карт второго бота
const $firstCardBot2 = document.querySelector('#firsCardBot2') // Первая карта
const $secondCardBot2 = document.querySelector('#secondCardBot2') // Вторая карта
const $thirdCardBot2 = document.querySelector('#thirdCardBot2') // Третья карта
const $fourthCardBot2 = document.querySelector('#fourthCardBot2') // Четвёртая карта
// Забираю оторажение карт первого бота
const $firstCardBot1 = document.querySelector('#firsCardBot1') // Первая карта
const $secondCardBot1 = document.querySelector('#secondCardBot1') // Вторая карта
const $thirdCardBot1 = document.querySelector('#thirdCardBot1') // Третья карта
const $fourthCardBot1 = document.querySelector('#fourthCardBot1') // Четвёртая карта
// Забираю карты игрок
const $firstCardGamer = document.querySelector('#firstCardGamer') // Первая карта
const $secondCardGamer = document.querySelector('#secondCardGamer') // Вторая карта
const $thirdCardGamer = document.querySelector('#thirdCardGamer') // Третья карта

// Счётчики
let $playerScore = document.querySelector('#playerScore')
let $player1score = document.querySelector('#player1score')
let $player2score = document.querySelector('#player2score')
let $part = document.querySelector('#part') // Забираю значение текущего раунда
let roundBank = 0 // Переменная для суммы банка раунда
let moneyPlayer = 0 // Изначальные деньги игрока
let moneyPlayer1 = 0 // Изначальные деньги Бота1
let moneyPlayer2 = 0 // Изначальные деньги Бота2
let firstBotScope = 0 // Первоначальные очки первого бота
let playerRoundScope = 0 // Первоначальные очки игрок
let secondBotScope = 0 // Первоначальные очки второго бота

// Массив карточной колоды
let cards = [{name: 'Ace of Spades', value: 1}, {name: 'Ace of Clubs',value: 1}, {name: 'Ace of Hearts',value: 1}, {name: 'Ace of Diamonds  ',value: 1},
            {name: 'King of Spades',value: 10}, {name: 'King of Clubs',value: 10}, {name: 'King of Hearts',value: 10}, {name: 'King of Diamonds',value: 10},
            {name: 'Queen of Spades',value: 10}, {name: 'Queen of Clubs',value: 10}, {name: 'Queen of Hearts',value: 10}, {name: 'Queen of Diamonds',value: 10},
            {name: 'Jack of Spades',value: 10}, {name: 'Jack of Clubs',value: 10}, {name: 'Jack of Hearts',value: 10}, {name: 'Jack of Diamonds',value: 10},
            {name: 'Ten of Spades',value: 10}, {name: 'Ten of Clubs',value: 10}, {name: 'Ten of Hearts',value: 10}, {name: 'Ten of Diamonds',value: 10},
            {name: 'Nine of Spades',value: 9}, {name: 'Nine of Clubs',value: 9}, {name: 'Nine of Hearts',value: 9}, {name: 'Nine of Diamonds',value: 9},
            {name: 'Eigth of Spades',value: 8}, {name: 'Eigth of Clubs',value: 8}, {name: 'Eigth of Hearts',value: 8}, {name: 'Eigth of Diamonds',value: 8},
            {name: 'Seven of Spades',value: 7}, {name: 'Seven of Clubs',value: 7}, {name: 'Seven of Hearts',value: 7}, {name: 'Seven of Diamonds',value: 7},
            {name: 'Six of Spades',value: 6}, {name: 'Six of Clubs',value: 6}, {name: 'Six of Hearts',value: 6}, {name: 'Six of Diamonds',value: 6},
            {name: 'Five of Spades',value: 5}, {name: 'Five of Clubs',value: 5}, {name: 'Five of Hearts',value: 5}, {name: 'Five of Diamonds',value: 5},
            {name: 'Four of Spades',value: 4}, {name: 'Four of Clubs',value: 4}, {name: 'Four of Hearts',value: 4}, {name: 'Four of Diamonds',value: 4},
            {name: 'Three of Spades',value: 3}, {name: 'Three of Clubs',value: 3}, {name: 'Three of Hearts',value: 3}, {name: 'Three of Diamonds', value: 3},
            {name: 'Two of Spades', value: 2}, {name: 'Two of Clubs', value: 2}, {name: 'Two of Hearts', value: 2}, {name: 'Two of Diamonds', value: 2}

]


// Добавляю активности кнопкам
$starButton.addEventListener('click', nextStep)
$characterName.addEventListener('input', getName)
$moneyInput.addEventListener('input', setMoney)
$moneyInput.addEventListener('input', setMoneyPlayer1)
$moneyInput.addEventListener('input', setMoneyPlayer2)
$moneyButton.addEventListener('click', beforeStart)
$startGameButton.addEventListener('click', gameStart)
$beginButton.addEventListener('click', partStart) // Начинает новый раунд 
$enough.addEventListener('click', stopRound)
$anotherCard.addEventListener('click', anotherCard)
$newGame.addEventListener('click', newRound)
$stopGame.addEventListener('click', stopGame)
$exit.addEventListener('click', stopGame)
$logButton.addEventListener('click', function() {
    location.href = 'index.html'
})

// Выбор суммы на ставку
$buttonBetTen.addEventListener('click', betTenRound)
$buttonBetFifty.addEventListener('click', betFiftyRound)
$buttonBetOneHundred.addEventListener('click', betOneHudred)
$buttonBetFiveHundred.addEventListener('click', betFiveHudred)


function stopGame() {
    $gameStart.classList.remove('hide')
    $gameBody.classList.add('hide')
    $characterName.removeAttribute('disabled')
    $starButton.removeAttribute('disabled')
    $moneyInput.removeAttribute('disabled')
    $moneyButton.removeAttribute('disabled')
    $startGameButton.setAttribute('disabled', 'true')
    $nextStep.classList.add('hide')
    $gamerRoundScope.textContent = ''
    $beginButton.removeAttribute('disabled')
    $moneyGone.classList.add('hide')
    $lowMoney.classList.add('hide')
    $characterName.value = ('')
    newRound()
}

function newRound() {
    $gamerWin.classList.add('hide')
    $draw.classList.add('hide')
    $dirtyWin.classList.add('hide')
    $cleanWin.classList.add('hide')
    $betImage.classList.add('hide')
    $getBetImage.classList.remove('hide')
    $noBotMoney.classList.add('hide')
    $beginButton.removeAttribute('disabled')
    $loserBoxGamer.classList.add('hide')
    $loserBoxPlayer1.classList.add('hide')
    $loserBoxPlayer2.classList.add('hide')
    $firsBotRoundBar.classList.add('hide')
    $secondBotRoundBar.classList.add('hide')
    $buttonBetTen.removeAttribute('disabled')
    $buttonBetFifty.removeAttribute('disabled')
    $buttonBetOneHundred.removeAttribute('disabled')
    $buttonBetFiveHundred.removeAttribute('disabled')
    $anotherCard.removeAttribute('disabled')
    $anotherCard.classList.remove('hide')
    $enough.removeAttribute('disabled')
    $enough.classList.remove('hide')
    $betBlock.classList.remove('hide') // Убираю центровой блок со ставкой
    $bank.classList.add('hide') // Делаю видимым блок с банком раунда
    $part.textContent = +roundBank // Вывожу ставку раунда видимой в блок
    $gameBar.classList.add('hide')
    $newGame.classList.add('hide')
    $exit.classList.add('hide')
    $winBoxPlayer1.classList.add('hide')
    $winBoxGamer.classList.add('hide')
    $winBoxPlayer2.classList.add('hide')
    if (moneyPlayer < 500 || moneyPlayer1 < 500 || moneyPlayer2 < 500) {
        $buttonBetFiveHundred.setAttribute('disabled', 'true')
    }
    if (moneyPlayer < 100 || moneyPlayer1 < 100 || moneyPlayer2 < 100) {
        $buttonBetOneHundred.setAttribute('disabled', 'true')
    }
    if (moneyPlayer < 50 || moneyPlayer1 < 50 || moneyPlayer2 < 50) {
        $buttonBetFifty.setAttribute('disabled', 'true')
    }
    if (moneyPlayer < 10) {
        $buttonBetTen.setAttribute('disabled', 'true')
        $moneyGone.classList.remove('hide')
        $betImage.classList.add('hide')
        $beginButton.setAttribute('disabled', 'true')
        $welcome.classList.add('hide')
        $getBetImage.classList.add('hide')

    } else if (moneyPlayer1 < 10 || moneyPlayer2 < 10) {
    $buttonBetTen.setAttribute('disabled', 'true')
    $buttonBetFifty.setAttribute('disabled', 'true')
    $buttonBetOneHundred.setAttribute('disabled', 'true')
    $buttonBetFiveHundred.setAttribute('disabled', 'true')
    $beginButton.setAttribute('disabled', 'true')
    $betImage.classList.add('hide')
    $noBotMoney.classList.remove('hide')
    $getBetImage.classList.add('hide')
    }
}

function setMoney() {
    moneyPlayer = $moneyInput.value
    $playerScore.textContent = +moneyPlayer
    console.log(moneyPlayer)
    return moneyPlayer
}

function setMoneyPlayer1() {
    moneyPlayer1 = $moneyInput.value
    $player1score.textContent = +moneyPlayer1
    console.log(moneyPlayer1)
    return moneyPlayer1
}

function setMoneyPlayer2() {
    moneyPlayer2 = $moneyInput.value
    $player2score.textContent = +moneyPlayer2
    console.log(moneyPlayer2)
    return moneyPlayer2
}

function betTenRound(){
    moneyPlayer = moneyPlayer - 10
    moneyPlayer1 = moneyPlayer1 - 10
    moneyPlayer2 = moneyPlayer2 - 10
    $playerScore.textContent = moneyPlayer
    $player1score.textContent = moneyPlayer1
    $player2score.textContent = moneyPlayer2
    $buttonBetTen.setAttribute('disabled', 'true')
    $buttonBetFifty.setAttribute('disabled', 'true')
    $buttonBetOneHundred.setAttribute('disabled', 'true')
    $buttonBetFiveHundred.setAttribute('disabled', 'true')
    roundBank = 30
    $betThirty.classList.remove('hide')
    return moneyPlayer, moneyPlayer1, moneyPlayer2
}

function betFiftyRound() {
    moneyPlayer = moneyPlayer - 50
    moneyPlayer1 = moneyPlayer1 - 50
    moneyPlayer2 = moneyPlayer2 - 50
    $playerScore.textContent = moneyPlayer
    $player1score.textContent = moneyPlayer1
    $player2score.textContent = moneyPlayer2
    $buttonBetTen.setAttribute('disabled', 'true')
    $buttonBetFifty.setAttribute('disabled', 'true')
    $buttonBetOneHundred.setAttribute('disabled', 'true')
    $buttonBetFiveHundred.setAttribute('disabled', 'true')
    roundBank = 150
    $bet150.classList.remove('hide')
    return moneyPlayer, moneyPlayer1, moneyPlayer2
}

function betOneHudred() {
    moneyPlayer = moneyPlayer - 100
    moneyPlayer1 = moneyPlayer1 - 100
    moneyPlayer2 = moneyPlayer2 - 100
    $playerScore.textContent = moneyPlayer
    $player1score.textContent = moneyPlayer1
    $player2score.textContent = moneyPlayer2
    $buttonBetTen.setAttribute('disabled', 'true')
    $buttonBetFifty.setAttribute('disabled', 'true')
    $buttonBetOneHundred.setAttribute('disabled', 'true')
    $buttonBetFiveHundred.setAttribute('disabled', 'true')
    roundBank = 300
    $bet300.classList.remove('hide')
    return moneyPlayer, moneyPlayer1, moneyPlayer2
}

function betFiveHudred() {
    moneyPlayer = moneyPlayer - 500
    moneyPlayer1 = moneyPlayer1 - 500
    moneyPlayer2 = moneyPlayer2 - 500
    $playerScore.textContent = moneyPlayer
    $player1score.textContent = moneyPlayer1
    $player2score.textContent = moneyPlayer2
    $buttonBetTen.setAttribute('disabled', 'true')
    $buttonBetFifty.setAttribute('disabled', 'true')
    $buttonBetOneHundred.setAttribute('disabled', 'true')
    $buttonBetFiveHundred.setAttribute('disabled', 'true')
    roundBank = 1500
    $bet1500.classList.remove('hide')
    return moneyPlayer, moneyPlayer1, moneyPlayer2
}

console.log(moneyPlayer)

function partStart(){
    $gamerWin.classList.add('hide')
    $draw.classList.add('hide')
    $dirtyWin.classList.add('hide')
    $cleanWin.classList.add('hide')
    $getBetImage.classList.add('hide')
    $welcome.classList.add('hide')
    $betImage.classList.remove('hide')
    $betBlock.classList.add('hide') // Убираю центровой блок со ставкой
    $bank.classList.remove('hide') // Делаю видимым блок с банком раунда
    $part.textContent = +roundBank // Вывожу ставку раунда видимой в блок
    game()
}

function beforeStart() {
    $moneyInput.setAttribute('disabled', 'true')
    $moneyButton.setAttribute('disabled', 'true')
    $startGameButton.removeAttribute('disabled')
    setMoneyPlayer2()
    setMoneyPlayer1()
    setMoney()
}

function gameStart() {
    $getBetImage.classList.add('hide')
    $welcome.classList.remove('hide')
    $noBotMoney.classList.add('hide')
    $buttonBetTen.removeAttribute('disabled')
    $buttonBetFifty.removeAttribute('disabled')
    $buttonBetOneHundred.removeAttribute('disabled')
    $buttonBetFiveHundred.removeAttribute('disabled')
    $beginButton.removeAttribute('disabled')
    $moneyGone.classList.add('hide')
    $gameStart.classList.add('hide')
    $gameBody.classList.remove('hide')
    if (moneyPlayer < 500) {
        $buttonBetFiveHundred.setAttribute('disabled', 'true')
    }
    if (moneyPlayer < 100) {
        $buttonBetOneHundred.setAttribute('disabled', 'true')
    }
    if (moneyPlayer < 50) {
        $buttonBetFifty.setAttribute('disabled', 'true')
    }
    if (moneyPlayer < 10) {
        $buttonBetTen.setAttribute('disabled', 'true')
        $moneyGone.classList.add('hide')
        $lowMoney.classList.remove('hide')
        $beginButton.setAttribute('disabled', 'true')
        $getBetImage.classList.add('hide')
        $welcome.classList.add('hide')

    }
}


// Функция присвоении имени персонажа
function getName() {
    let name = $characterName.value
    $playerName.textContent = name.toString()
    $gamerName.textContent = name.toString()
}


// Функция для перехода на следующий этап игры
function nextStep(){
    $nextStep.removeAttribute('hidden')
    $characterName.setAttribute('disabled', 'true')
    $starButton.setAttribute('disabled', 'true')
    $startGameButton.setAttribute('disabled', 'true')
    $nextStep.classList.remove('hide')
}


function game() {
    bot1Scope()
    bot2Scope()
    playerPart()
}

// Ход первого бота
function bot1Scope() {
    let card1 = cards[getRandom(0, cards.length - 1)]
    let card1Value = card1.value
    $firstCardBot1.classList.remove('hide')
    let card2 = cards[getRandom(0, cards.length - 1)]
    let card2Value = card2.value
    $secondCardBot1.classList.remove('hide')
    if ((card1Value + card2Value) < 15) {
        let card3 = cards[getRandom(0, cards.length - 1)]
        let card3Value = card3.value
        $thirdCardBot1.classList.remove('hide')
        document.getElementsByClassName('.firstCardBot1').left = 75 + 'px'
        document.getElementsByClassName('.secondCardBot1').left = 85 + 'px'
        if ((card1Value + card2Value + card3Value) < 15) {
            let card4 = cards[getRandom(0, cards.length - 1)]
            let card4Value = card4.value
            $fourthCardBot1.classList.remove('hide')
            document.getElementsByClassName('.thirdCardBot1').left = 95 + 'px'
            if ((card1Value + card2Value + card3Value + card4Value) > 21) {
                firstBotScope = card1Value + card2Value + card3Value + card4Value
            } else firstBotScope = card1Value + card2Value + card3Value + card4Value
        } else if ((card1Value + card2Value + card3Value) > 21) {
            firstBotScope = card1Value + card2Value + card3Value
        } else firstBotScope = card1Value + card2Value + card3Value
    } else if ((card1Value + card2Value) > 21) {
        firstBotScope = card1Value + card2Value
    } else firstBotScope = card1Value + card2Value
    console.log(firstBotScope)
    $firsBotRoundScope.textContent = +firstBotScope
    if (firstBotScope > 21) {
        firstBotScope = 0   
        $firsBotRoundScope.textContent = 'Перебор!'
    }
    return firstBotScope
    }  

    // Ход второго бота
    function bot2Scope() {
        let card1 = cards[getRandom(0, cards.length - 1)]
        let card1Value = card1.value
        $firstCardBot2.classList.remove('hide')
        let card2 = cards[getRandom(0, cards.length - 1)]
        let card2Value = card2.value
        $secondCardBot2.classList.remove('hide')
        if ((card1Value + card2Value) < 15) {
            let card3 = cards[getRandom(0, cards.length - 1)]
            let card3Value = card3.value
            document.getElementsByClassName('.firstCardBot2').left = 75 + 'px'
            document.getElementsByClassName('.secondCardBot2').left = 85 + 'px'
            $thirdCardBot2.classList.remove('hide')
            if ((card1Value + card2Value + card3Value) < 15) {
                let card4 = cards[getRandom(0, cards.length - 1)]
                let card4Value = card4.value
                $fourthCardBot2.classList.remove('hide')
                document.getElementsByClassName('.thirdCardBot3').left = 95 + 'px'
                if ((card1Value + card2Value + card3Value + card4Value) > 21) {
                    secondBotScope = card1Value + card2Value + card3Value + card4Value
                } else secondBotScope = card1Value + card2Value + card3Value + card4Value
            } else if ((card1Value + card2Value + card3Value) > 21) {
                secondBotScope = card1Value + card2Value + card3Value
            } else secondBotScope = card1Value + card2Value + card3Value
        } else if ((card1Value + card2Value) > 21) {
            secondBotScope = card1Value + card2Value
        } else secondBotScope = card1Value + card2Value
        console.log(secondBotScope)
        $secondBotRoundScope.textContent = +secondBotScope
        if (secondBotScope > 21) {
            secondBotScope = 0
            $secondBotRoundScope.textContent = 'Перебор!'
        } 
        return secondBotScope
        }  

function playerPart() {
    let card1 = cards[getRandom(0, cards.length - 1)]
    let card1Value = card1.value
    $firstCardGamer.classList.remove('hide')
    let card2 = cards[getRandom(0, cards.length - 1)]
    let card2Value = card2.value
    $secondCardGamer.classList.remove('hide')
    playerRoundScope = card1Value + card2Value
    $roundScope.textContent = +playerRoundScope
    console.log(playerRoundScope)
    $gameBar.classList.remove('hide')
    $gamerRoundScope.textContent = +playerRoundScope
    return playerRoundScope
}

function anotherCard() {
    let playerCard3 = cards[getRandom(0, cards.length - 1)]
    let playerCard3Value = playerCard3.value
    console.log(playerCard3Value)
    playerRoundScope = playerRoundScope + playerCard3Value
    $roundScope.textContent = +playerRoundScope
    $gamerRoundScope.textContent = +playerRoundScope
    $thirdCardGamer.classList.remove('hide') 
    if (playerRoundScope > 21) {
        $anotherCard.setAttribute('disabled', 'true')
        playerRoundScope = 0
        $gamerRoundScope.textContent = 'Перебор!'
        $roundScope.textContent = 'перебор'
    }
    return playerRoundScope
}

function stopRound() {
    $anotherCard.setAttribute('disabled', 'true')
    $anotherCard.classList.add('hide')
    $enough.setAttribute('disabled', 'true')
    $enough.classList.add('hide')
    $newGame.classList.remove('hide')
    $exit.classList.remove('hide')

    // Скрыть карты у второго бота
    $firstCardBot2.classList.add('hide')
    $secondCardBot2.classList.add('hide')
    $thirdCardBot2.classList.add('hide')
    $fourthCardBot2.classList.add('hide')

    // Скрыть карты второго бота
    $firstCardBot1.classList.add('hide')
    $secondCardBot1.classList.add('hide')
    $thirdCardBot1.classList.add('hide')
    $fourthCardBot1.classList.add('hide')

    // Скрыть карты игрока
    $firstCardGamer.classList.add('hide')
    $secondCardGamer.classList.add('hide')
    $thirdCardGamer.classList.add('hide')

    // Скрыть суммы ставок
    $betThirty.classList.add('hide')
    $bet150.classList.add('hide')
    $bet300.classList.add('hide')
    $bet1500.classList.add('hide')

    // Высчитать победителя
    if (playerRoundScope > firstBotScope && playerRoundScope > secondBotScope) {
        console.log('Победил Игрок')
        moneyPlayer = moneyPlayer + roundBank
        $playerScore.textContent = moneyPlayer
        roundBank = 0
        $part.textContent = +roundBank
        $winBoxGamer.classList.remove('hide')
        $secondBotRoundBar.classList.remove('hide')
        $firsBotRoundBar.classList.remove('hide')
        $loserBoxPlayer1.classList.remove('hide')
        $loserBoxPlayer2.classList.remove('hide')
        $gamerWin.classList.remove('hide')
        $betImage.classList.add('hide')
    } else if (firstBotScope > playerRoundScope && firstBotScope > secondBotScope) {
        console.log('Победил Грязный Гарри')
        moneyPlayer1 = moneyPlayer1 + roundBank
        $player1score.textContent = +moneyPlayer1
        roundBank = 0
        $part.textContent = +roundBank
        $winBoxPlayer1.classList.remove('hide')
        $secondBotRoundBar.classList.remove('hide')
        $firsBotRoundBar.classList.remove('hide')
        $loserBoxPlayer2.classList.remove('hide')
        $loserBoxGamer.classList.remove('hide')
        $dirtyWin.classList.remove('hide')
        $betImage.classList.add('hide')
    } else if (secondBotScope > playerRoundScope && secondBotScope > firstBotScope) {
        console.log('Победил Чистый Гарри')
        moneyPlayer2 = moneyPlayer2 + roundBank
        $player2score.textContent = +moneyPlayer2
        roundBank = 0
        $part.textContent = +roundBank
        $winBoxPlayer2.classList.remove('hide')
        $secondBotRoundBar.classList.remove('hide')
        $firsBotRoundBar.classList.remove('hide')
        $loserBoxGamer.classList.remove('hide')
        $loserBoxPlayer1.classList.remove('hide')
        $cleanWin.classList.remove('hide')
        $betImage.classList.add('hide')
    } else if (playerRoundScope == firstBotScope && playerRoundScope > secondBotScope) {
        console.log('Ничья между игроком и Грязным Гарри!')
        moneyPlayer = moneyPlayer + (roundBank / 2)
        moneyPlayer1 = moneyPlayer1 + (roundBank / 2)
        $playerScore.textContent = + moneyPlayer
        $player1score.textContent = + moneyPlayer1
        roundBank = 0
        $part.textContent = +roundBank
        $winBoxGamer.classList.remove('hide')
        $winBoxPlayer1.classList.remove('hide')
        $secondBotRoundBar.classList.remove('hide')
        $firsBotRoundBar.classList.remove('hide')
        $loserBoxPlayer2.classList.remove('hide')
        $draw.classList.remove('hide')
        $betImage.classList.add('hide')
    } else if (playerRoundScope == secondBotScope && playerRoundScope > firstBotScope) {
        console.log('Ничья между игроком и Чистым Гарри!')
        moneyPlayer = moneyPlayer + (roundBank / 2)
        moneyPlayer2 = moneyPlayer2 + (roundBank / 2)
        $playerScore.textContent = +moneyPlayer
        $player2score.textContent = +moneyPlayer2
        roundBank = 0
        $part.textContent = +roundBank
        $winBoxGamer.classList.remove('hide')
        $winBoxPlayer2.classList.remove('hide')
        $secondBotRoundBar.classList.remove('hide')
        $firsBotRoundBar.classList.remove('hide')
        $loserBoxPlayer1.classList.remove('hide')
        $draw.classList.remove('hide')
        $betImage.classList.add('hide')
    } else if (firstBotScope == secondBotScope && firstBotScope > playerRoundScope) {
        console.log('Ничья между братьями Грязным и Чистым Гарри!')
        moneyPlayer1 = moneyPlayer1 + (roundBank / 2)
        moneyPlayer2 = moneyPlayer2 + (roundBank / 2)
        $player1score.textContent = +moneyPlayer1
        $player2score.textContent = +moneyPlayer2
        roundBank = 0
        $part.textContent = +roundBank
        $winBoxPlayer1.classList.remove('hide')
        $winBoxPlayer2.classList.remove('hide')
        $secondBotRoundBar.classList.remove('hide')
        $firsBotRoundBar.classList.remove('hide')
        $loserBoxGamer.classList.remove('hide')
        $draw.classList.remove('hide')
        $betImage.classList.add('hide')
    } else if (playerRoundScope > 21 && firstBotScope > 21 && secondBotScope > 21) {
        console.log('Никто из игроков не знает меры! Проиграли все!')
        roundBank = 0
        $part.textContent = +roundBank
        $loserBoxGamer.classList.remove('hide')
        $loserBoxPlayer1.classList.remove('hide')
        $loserBoxPlayer2.classList.remove('hide')
        $draw.classList.remove('hide')
        $betImage.classList.add('hide')
    } else if (playerRoundScope == firstBotScope && playerRoundScope == secondBotScope) {
        console.log('У всех равное количество очков! Ничья!')
        moneyPlayer += (roundBank / 3)
        moneyPlayer1 += (roundBank / 3)
        moneyPlayer2 += (roundBank / 3)
        roundBank = 0
        $winBoxGamer.classList.remove('hide')
        $winBoxPlayer1.classList.remove('hide')
        $winBoxPlayer2.classList.remove('hide')
        $draw.classList.remove('hide')
        $betImage.classList.add('hide')
    }
}


