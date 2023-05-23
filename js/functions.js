function printMessage(msg) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

function getRandomMove() {
    return (Math.floor(Math.random() * 3 + 1)).toString();
}

function getMoveName(argMoveId) {
    switch (argMoveId) {
        case '1':
            return 'kamień';
        case '2':
            return 'papier';
        case '3':
            return 'nożyce';
        default:
            if (argMoveId == 'kamień' || argMoveId == 'papier' || argMoveId == 'nożyce') return argMoveId
            printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
}

function displayResult(argPlayerMove) {
    const argComputerMove = getRandomMove();
    if (getMoveName(argPlayerMove) == 'papier' && getMoveName(argComputerMove) == 'kamień') {
        printMessage('Wygrywasz!');
    } else if (getMoveName(argPlayerMove) == 'kamień' && getMoveName(argComputerMove) == 'nożyce') {
        printMessage('Wygrywasz!');
    }else if (getMoveName(argPlayerMove) == 'nożyce' && getMoveName(argComputerMove) == 'papier') {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == getMoveName(argComputerMove)) {
        printMessage('Remis :)');
    } else {
        printMessage('Przegrywasz :(');
    }
    return `Zagrałem ${getMoveName(argComputerMove)}, a Ty ${getMoveName(argPlayerMove)}`
}