let hasChoose = false
function playerChoice(playerHand) {
    if (hasChoose === false) {
        hasChoose = true
        const resultTag = document.getElementById('result-tag')

        let opponentHand = oppHand()
        resultTag.innerText = winnerCheck(opponentHand, playerHand)

        let playerElement = playerHand + '-player'
        let opponentElement = opponentHand + '-opponent'

        document.getElementById(playerElement).style.opacity = '1'
        document.getElementById(opponentElement).style.opacity = '1'
        document.getElementById('new-Game').style.opacity = '1'
    }
}

function oppHand() {
    let randomHand = Math.floor(Math.random() * 3)

    if (randomHand === 0) {
        return 'Rock'
    } else if (randomHand === 1) {
        return 'Paper'
    } else {
        return 'Scissor'
    }
}

function winnerCheck(opponentHand, playerHand) {
    //Draw
    if (playerHand == opponentHand) {
        return 'Draw'
    }

    //Player lost
    if (
        (playerHand == 'Rock' && opponentHand == 'Paper') ||
        (playerHand == 'Paper' && opponentHand == 'Scissor') ||
        (playerHand == 'Scissor' && opponentHand == 'Rock')
    ) {
        return 'Lost'
    }

    //Player Won
    if (
        (playerHand == 'Rock' && opponentHand == 'Scissor') ||
        (playerHand == 'Paper' && opponentHand == 'Rock') ||
        (playerHand == 'Scissor' && opponentHand == 'Paper')
    ) {
        return 'Won'
    }
}

function newGame() {
    document.getElementById('Rock-opponent').style.opacity = '0'
    document.getElementById('Paper-opponent').style.opacity = '0'
    document.getElementById('Scissor-opponent').style.opacity = '0'
    document.getElementById('Rock-player').style.opacity = '0'
    document.getElementById('Paper-player').style.opacity = '0'
    document.getElementById('Scissor-player').style.opacity = '0'
    document.getElementById('new-Game').style.opacity = '0'
    hasChoose = false
    document.getElementById('result-tag').innerText = ""
}
