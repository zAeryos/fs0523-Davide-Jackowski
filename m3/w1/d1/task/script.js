"use strict";
function guessingGame(p1Number, p2Number) {
    let randomNum = Math.floor(Math.random() * (100 - 1) + 1);
    let restP1Number = Math.abs(p1Number - randomNum);
    let restP2Number = Math.abs(p2Number - randomNum);
    console.log(restP1Number, restP2Number);
    if (p1Number < 1 || p1Number > 100 || p2Number < 1 || p2Number > 100) {
        return 'One of the players chose a number that is not between 1 and 100, try again!';
    }
    else if (p1Number == randomNum && p2Number == randomNum) {
        return 'Both players guessed the number, it was ' + randomNum + "!";
    }
    else if (p1Number == randomNum) {
        return 'Player 1 guessed the number, it was ' + randomNum + "!";
    }
    else if (p2Number == randomNum) {
        return 'Player 2 guessed the number, it was ' + randomNum + "!";
    }
    else if (restP1Number % randomNum < restP2Number % randomNum) {
        return 'No one guessed the number, it was ' + randomNum + ', but player 1 was the closest with the number ' + p1Number + '!';
    }
    else if (restP1Number % randomNum > restP2Number % randomNum) {
        return 'No one guessed the number, it was ' + randomNum + ', but player 2 was the closest with the number ' + p2Number + '!';
    }
    else if (restP1Number % randomNum == restP2Number % randomNum) {
        return 'No one guessed the number, it was ' + randomNum + ', but both players were equally as close to guessing it!';
    }
    return 'One of the parameters is not a number';
}
