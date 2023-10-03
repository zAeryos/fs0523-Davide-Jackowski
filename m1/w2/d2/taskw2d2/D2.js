/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
function biggerNumber(num1, num2){
  if (num1 > num2) {
    console.log(num1 + " is the bigger number");
  } else if(num1 < num2) {
    console.log(num2 + " is the bigger number");
  } else {
    console.log("The numbers are identical")
  }
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
function isNotEqualTo5(num1) {
  if (num1 != 5) {
    console.log(num1 + " is not equal to 5");
  } else {
    console.log("Grats! You chose 5, here's a cookie");
  }
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function canBeDividedBy5 (num1) {
  if (num1 % 5 == 0) {
    console.log(num1 + " can be divided by 5")
  } else {
    console.log(num1 + " cannot be divided by 5")
  }
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

function canBeEqualTo8 (num1, num2) {
  if (num1 == 8 || num2 == 8) {
    console.log("One of the numbers chosen is equal to 8")
  } else if (num1 - num2 == 8 || num2 - num1 ||num1 + num2 == 8) {
    console.log("The numbers are equal to 8 after the addition/subtraction")
  } else {
    console.log("The numbers are not equal to 8, even after the addition/subtraction")
  }
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

function totalAmountInCart () {
  let totalShoppingCart = 50;
  let shippingCost = 10;
  if(totalShoppingCart >= 50) {
    console.log("Congratulations! You're eligible for free shipping, your total will be : " + totalShoppingCart + "€");
  } else if (totalShoppingCart < 50) {
    console.log("Sadly you're not eligible for free shipping, spend " + (50 - totalShoppingCart) + "€ more to get free shipping, otherwise, the shipping cost is 10€, and your total is " + (shippingCost + totalShoppingCart) + "€")
  }
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

function totalAmountInCartDiscount () {
  let totalShoppingCart = 55.98;
  totalShoppingCart = totalShoppingCart * 0.8
  let shippingCost = 10;
  if(totalShoppingCart >= 50) {
    console.log("Congratulations! You're eligible for free shipping, your total will be : " + totalShoppingCart + "€");
  } else if (totalShoppingCart < 50) {
    console.log("Sadly you're not eligible for free shipping, spend " + (50 - totalShoppingCart) + "€ more to get free shipping, otherwise, the shipping cost is 10€, and your total is " + (shippingCost + totalShoppingCart) + "€")
  }
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

function orderByValue (num1, num2, num3) {

  if (num1 > num2 && num2 > num3) {

    console.log(num1, num2, num3);

  } else if (num1 > num3 && num3 > num2) {

    console.log(num1, num3, num2);

  } else if (num2 > num3 && num3 > num1){

    console.log(num2, num3, num1);

  } else if (num2 > num1 && num1 > num3) {

    console.log(num2, num1, num3);

  } else if (num3 > num1 && num2 > num1) {

    console.log(num3, num2, num1);

  } else {

    console.log(num3, num1, num2);

  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

{
  let randomString = "Definitely not a string";
  
  console.log(typeof randomString === "number")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function isItEven (num1) {
  if (num1 % 2 == 0) {
    console.log("Yup, the number is even!")
  } else {
    console.log("Nope, there's something ODD about this number")
  }
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

{
  let val = 7
  if (val < 5) {
      console.log("Less than 5");
    } else if (val < 10) {
      console.log("Less than 10");
    } else {
      console.log("Equal or greater than 10");
    }
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

{
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";

console.log(me.city);
}

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

{
  const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
  
  me.city = "Toronto";

  console.log(me);

  delete me.lastName;

  console.log(me);

  }

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

{
  const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
  
  me.city = "Toronto";

  delete me.lastName;

  me.skills.pop();

  console.log(me);

  }

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

{
  let numbersArray = []
  numbersArray.push(1);
  numbersArray.push(2, 3);
  numbersArray.push(4, 5, 6);
  numbersArray.push(7, 8, 9, 10);

  console.log(numbersArray);

}
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

{
  let numbersArray = []
  numbersArray.push(1);
  numbersArray.push(2, 3);
  numbersArray.push(4, 5, 6);
  numbersArray.push(7, 8, 9, 10);

  console.log(numbersArray);

  numbersArray[numbersArray.length - 1] = 100;

  console.log(numbersArray)

}
