/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area (l1, l2) {
    let area = l1 * l2;
    return area;
}

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum (num1, num2) {
    let sum = 0;
    if(num1 == num2) {
        sum = num1 + num2, sum = sum * 3;
        return sum;
    } else {
        sum = num1 + num2;
        return sum;
    }
}

// you can save deleted stuff with pop by doing let anyName = arrayName.pop();

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff (n=0) { 
    let diff = Math.abs(n - 19);
    if(diff > 19) {
        diff = diff * 3;
    }
    return diff;
}



/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary (n) {
    if (n >= 20 && n <= 100 || n == 400) {
        return true;
    } else {
        return false;
    }
}
// or return del controllo

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify (string) {
    if(string.startsWith("EPICODE")) { //or .include?
        return string;
    } else {
        return "EPICODE " + string; 
    }

}

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7 (n) {
    if (n % 3 == 0 || n % 7 == 0) {
        return true;
    } else {
        return false;
    }
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString (string) {
    let tempString = string.split('').reverse().join('');
    return tempString;
}

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(string) {
    let capString = string.toLowerCase().split(' ');
    for (i = 0; i < capString.length; i++) {
        capString[i] = capString[i].charAt(0).toUpperCase() + capString[i].substring(1);
    }
    return capString.join(' ');
}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(string) {
    let trin = string.slice(1, -1);
    return trin;
}

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
    let randomNumbers = []
    for(i=0;i < n;i++) {
        randomNumbers.push(Math.floor(Math.random() * 11));
    }
    return randomNumbers;
}
