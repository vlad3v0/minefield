/* Il computer deve generare 16 numeri casuali da 1 a 100. 
In seguito deve chiede all'utente di inserire
un numero da 1 a 100 alla volta, se il numero è presente nella lista
dei numeri generali, la partita termina, continua chiedendo all'utente un altro numero.
La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge
 il numero massimo di possibile di numeri consentiti
Al termine della partita il software deve comunicare il punteggio, cioè il numero
 di volte che l'utente ha inserito un numeroconsentito.

BONUS: all'inizio il software richiede anche una difficoltà all'utente
che cambia il range di numeri casuali.
Con Difficoltà 0 => da 1 a 100
con difficoltà 1 => da 1 a 80,
con difficoltà 2 => da 1 a 50 */

let fieldBomb = [];
let dimensionField = 16;
let numberUserCount = 0;
let numberUserInsert = [];
let level = selectLevel();


function selectLevel() {
    let levelType = +prompt('Che livello vuoi giocare 1, 2 , 3?')
    switch (levelType) {
        case 1:
            levelGame = 100; 
        break;
        case 2:
            levelGame = 80;
        break;
        case 3:
            levelGame = 50;
        break;
    }
    return levelGame;
}

function generateRandomNumb(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createBomb(dimensionField) {

    for (let n = 0; n < dimensionField; n++) {

        let numberCpu = generateRandomNumb(1, level);
        fieldBomb.push(numberCpu);
        
    }
}

function checkElementArray(array, element) {

    let numberCheck = false;
    for (let n = 0; n < array.length; n++) {
        if (array[n] == element) {
            numberCheck = true;
        }
    }
    return numberCheck;
}

function getResultGame() {

    let cycleContinued = true;
    while (cycleContinued == true) {

        let numberUser = +prompt('Inserisci un numero');

        let checkNumberUser = checkElementArray(numberUserInsert, numberUser); 
        let checkNumberUserTrue = checkElementArray(fieldBomb, numberUser);
        console.log(checkNumberUserTrue);

        if (checkNumberUser == true) {

            alert('Inserisci un numero valido, questo l\'hai già inserito')

        } else {

            numberUserInsert.push(numberUser);

            if (checkNumberUserTrue == true) {

                cycleContinued = false;

            } else {

                numberUserCount = numberUserCount + 1;

                if (numberUserCount >= 84) {
                    cycleContinued = false;
                }
            }
        }
    }

    if (numberUserCount == 84) {
        document.write('Hai vinto');
    } else {
        document.write('Hai perso con ' + numberUserCount + " giocate vittoriose");

    }
}

createBomb(dimensionField);
console.log(fieldBomb);

getResultGame();

console.log(fieldBomb);
console.log(numberUserInsert);
console.log(numberUserCount);

