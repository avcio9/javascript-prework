var buttonPaper, buttonRock, buttonScissors;
// tu będą wymienione pozostałe zmienne guzików, np. buttonRock

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

// tu będą kolejne linie kodu, w których do zmiennych będą przypisane elementy znalezione po id

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    printMessage(displayResult(argButtonName));
}

buttonRock.addEventListener('click', function () {
    buttonClicked('kamień')
});
buttonPaper.addEventListener('click', function () {
    buttonClicked('papier')
});
buttonScissors.addEventListener('click', function () {
    buttonClicked('nożyce')
});

// tu będą kolejne powiązania guzików z funkcją buttonClicked
// (każda z innym argumentem)