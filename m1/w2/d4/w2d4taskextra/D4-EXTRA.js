// Esercizi aggiuntivi (facoltativi) per D4
let randomNumbers = []

function giveMeRandom(n) {
    let randomNumbers = []
    for(i=0;i < n;i++) {
        randomNumbers.push(Math.floor(Math.random() * 11));
    }
    return randomNumbers;
}


/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

function checkArray(array) {
    let sum = 0;
    for(i=0; i < array.length;i++) {
        let value = array[i];
        if (value > 5) {
            console.log(value + " is greater than 5");
            sum += value;
        } else if (value < 5){
            console.log(value + " is smaller than 5")
        } else {
            console.log(value + " is equal to 5")
        }
    }
    return sum;
}

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

let shoppingCart = [
{   price: '129.99',
    name: 'monitor',
    id: '00',
    quantity: '2'
},
{   price: '699.99',
    name: 'computer',
    id: '01',
    quantity: '2'
},
{   price: '89.99',
    name: 'mouse',
    id: '02',
    quantity: '2'
},
{   price: '59.99',
    name: 'joystick',
    id: '03',
    quantity: '4'
},
{   price: '399.99',
    name: 'washing-machine',
    id: '04',
    quantity: '1'
},
{   price: '39.99',
    name: 'toaster',
    id: '05',
    quantity: '1'
},
{   price: '9.99',
    name: 'screen-protector',
    id: '06',
    quantity: '2'
}
]

function shoppingCartTotal (shoppingCart) {
    let total=0;
    for(let i=0;i < shoppingCart.length;i++) {
        let item = shoppingCart[i];
        total += item.price * item.quantity;
    }
    return total;
}
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

function addToShoppingCart(item) {
    
    if(item.toLowerCase() === shoppingCart.name) {
        return shoppingCart.quantity + 1;
    }
}

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

//.reduce -- .find

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

//.filter .findIndex()

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
