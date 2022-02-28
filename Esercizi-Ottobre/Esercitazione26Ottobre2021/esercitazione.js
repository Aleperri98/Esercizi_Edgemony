/* 
    Sulla base di quanto detto a lezione, creare una calcolatrice capace di svolgere diverse operazioni
    (più ne mettete meglio è!).
    La scelta dell'operazione da effettuare (per esempio somma)
    e la scelta dei numeri, deve essere specificata dell'utente.
    A tal fine, potrete utilizzare la funzione 'prompt()' per catturarne i dati.
    
    ATTENZIONE:
    L'utilizzo delle callbacks, delle arrow function e dello spread operator
    sono elementi fondamentali di questa esercitazione, mi raccomando.
    Potete chiaramete controllare il codice scritto a lezione, ma cercate di non copiare.
*/

/* Esercizio avanzato:
    Oltre alle classici funzioni somma, moltiplicazione, ecc... provate ad implementare
    l'operazione potenza e l'operazione radice quadrata.
    SUGGERIMENTO: esistono delle funzioni della libreria Math (vista a lezione).
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* Dichiaro le costanti che utilizzerò per svolgere le operazioni. Le dichiaro con const in quanto rimane costante l'istruzione 
 al suo interno, cambiano solo i valori passati ai parametri*/
const sum = (numOne, numTwo ) => numOne + numTwo;

const sub = (numOne, numTwo) => numOne - numTwo; 

const mult = (numOne, numTwo) => numOne * numTwo;
 
const div = (numOne, numTwo) => numOne / numTwo;

const pow = (numOne, numTwo) => numOne ** numTwo;

     

/*Dichiaro la funzione Calculator che va svolta previo passaggio di valore ai parametri oper0 e numbers.
 Assegno il valore 0 a totOper tramite la keywords let(non assegno const perchè è una variabile che potrebbe cambiare durante l'esecuzione del codice)
 All'interno della variabile totOper richiamo i valori dei parametri caratteristici della funzione, la variabile contenente i numeri 
 preceduta da "..." i quali indicano uno spread operator (prende gli elementi di un array e li considera uno per uno, anziche string)
 Faccio un return di funzione con la variabile totOper. */

 function calculator(oper, numbers) {
    let totOper = 0;
    totOper = oper(...numbers);
    console.log (totOper);
  }


/*Dichiaro le variabile per l'inserimento dati dell'utente tramite prompt.
Assegno la variabile numbers per riferimento a numbersChoice aggiungendo il metodo split con divisore "," (divide una stringa e restituisce
un array di valori).
Dichiaro la costante parsedNumbers come un array (al momento) vuota  */ 
let operChoice = prompt("Inserisci operazione somma, \nsottrazione, \nmoltiplicazione, \ndivisione, \npotenza, \nradice quadrata, \ncalcolare la circonferenza (var da inserire: diametro)\n numero casuale");

if ( operChoice == false || operChoice == null){
    alert ("Inserire operazione desiderata")
}

let numbersChoiche = prompt("Inserisci numeri: ");

if (numbersChoiche == false || numbersChoiche == null)   {
    alert("Inserire numeri!");
}
const numbers = numbersChoiche.split(",");
const parsedNumbers = [];



/*Inizializzo un ciclo For con X (variabile) ed il metodo OF della variabile numbers, quest'ultimo ci restituisce ogni singolo 
valore della variabile numbers.
Dopo di ciò. l'istruzione all'interno del ciclo ci permette di trasformare i valori X da stringa in numero (Parseint) e fare un .push
per aggiungere questi valori all'interno dell'array (prima vuota) parsedNumbers. */ 
for (x of numbers) {
  parsedNumbers.push(parseInt(x));
}


/*Infine con una selezione confrontiamo il valore inserito dall'utente (OperChoice) con uguaglianza stretta all'operazione somma, 
verificato ciò (True) si esegue la funzione Calculator con parametri SUM (Oper) e parsedNumbers(numbers) */

/*if (operChoice === "somma" || operChoice === "+") {
  calculator(sum, parsedNumbers);
}

 if (operChoice === "sottrazione" || operChoice === "-") {
    calculator(sub, parsedNumbers);
  }


if (operChoice === "moltiplicazione" || operChoice === "*") {
    calculator(mult, parsedNumbers);
    }

  if (operChoice === "divisione" || operChoice === "/") {
    calculator(div, parsedNumbers);
  }

 
  if (operChoice === "potenza") {
    calculator(pow, parsedNumbers);
  }

    if (operChoice === "radice quadrata") {
    console.log(sqrt, parsedNumbers);
   }

    if (operChoice === "circonferenza") {
    console.log(Math.PI*(numbers))
    }*/


  /*Facciamo la stessa cosa ma con Switch*/

  switch (operChoice){
  case "somma" ||  "+":
    calculator(sum, parsedNumbers);
    break;

    case "sottrazione" ||  "-":
    calculator(sub, parsedNumbers);
    break;
  

    case "moltiplicazione" ||  "*":
    calculator(mult, parsedNumbers);
    break;
  
    case "divisione" ||  "/":
    calculator(div, parsedNumbers);
    break;

    case "potenza":
    calculator(pow, parsedNumbers);
    break;

    case "radice quadrata":
    console.log(Math.sqrt(numbers));
    break;

    case "circonferenza":
    console.log(Math.PI*(numbers));
    break;

    case "numero casuale":
    console.log(Math.random(numbers)*100);
    break;

    default:
        console.log("Parametri non inseriti");
  }
  
    
    