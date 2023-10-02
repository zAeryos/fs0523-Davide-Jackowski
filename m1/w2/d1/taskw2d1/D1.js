/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
  
  Stringa - 
    Questo tipo contiene una sequenza di caratteri, e può contenere lettere, frasi complete, simboli e così via 

  Numero - 
    Questo tipo contiene semplicemente un numero, che siano interi o decimali, per esempio 2 oppure 3.13

  Booleano - 
    Questo tipo di dato può solamente assumere i valori true (vero) o false (falso)

  Undefined -
    Questo tipo di dato rappresenta un valore che non esiste
  
  Null - 
    Il valore di questo è dato è null (vuoto), ovvero non rappresenta nessun tipo di dato
    
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
 */

  let name = "Davide";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
 */
 
   console.log(12 + 20); //Per fare l'addizione direttamente da console
 
   //OR
 
   let num1 = 12;
   let num2 = 20;
 
   console.log(num1 + num2); //Per fare l'addizione usando due variabili e mostrare la somma direttamente da console
 
   //OR
 
   let somma = num1 + num2;
 
   console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
 */

  let x = 12;

/* ESERCIZIO 5
 Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
 Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
 */
 
   name = "Jackowski";
 
   const test = 5;
   //test = 3; Uncaught TypeError: Assignment to constant variable.
   //at D1.js:69:9
 
   console.log(test);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).

 */
   console.log(4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 */

 let name1 = "john";
 let name2 = "John";
 
 console.log(name1 == name2);
 console.log(name1.toLowerCase() == name2.toLowerCase());

