var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
printMessage(`Twój ruch: ${getMoveName(playerInput)}`);
printMessage(displayResult(playerInput));