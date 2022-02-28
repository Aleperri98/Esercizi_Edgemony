/*  
  ESERCIZI SULLO SCOPE
  ATTENZIONE: provare a prima dare prima la risposta e solo dopo testare il codice!!
  Giustificatene il motivo con un commento, subito accanto a 'RISPOSTA:'.
*/

// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log?
// RISPOSTA: Il risultato dei console.log è la stampa in console per due volte di 3.14. 
// La prima stampa in console è dovuta al console.log(PI) della costante. 
// La seconda stampa in console è dovuta alla funzione di selezione IF che verificatasi la condizione PI>=3 (vera) esegue 
// l'istruzione contenuta al suo interno, console.log(PI). 

const PI = 3.14;

console.log(PI);

if (PI >= 3) {
  console.log(PI);
}

// Es. 2: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA: Il risultato dei console.log è "Il mio colore preferito è: violet" ed "Ci sono 12 mesi in un anno."
// Il primo risultato è dovuto alla stampa contenuto all'interno della selezione IF che verificata vera ha stampato in console
// "Il mio colore preferito è: " concatenando la costante dichiarata globalmente favColour.
// Il secondo risultato è dovuto alla stampa in console di "Ci sono" [...] "mesi in un anno", con all'interno la variabile 
// let monthsinAYear dichiarata localmente.

var favColour = "violet";
let monthsInAYear = 12;

if (true) {
  var favColour = "violet";
  console.log("Il mio colore preferito è:", favColour);
}

console.log("Ci sono", monthsInAYear, "mesi in un anno.");

// Es. 3: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA: Il risultato dei console.log è la stampa in console di solo "Sugo di pomodoro freschissimo, rucola, prosciutto crudo e scaglie di grana."
// Si parte dalla selezione if che verificatasi richiama la function makepizza passando i valori al parametro moreIngredients di
// "rucola, prosciutto crudo e scaglie di grana.". Dopo di ciò si esegue la funzione in cui si assegna una variabile let a livello locale
// e poi si stampa in console tramite console.log quest'ultima concatenando il caratte "," e i parametri passati tramite IF.
// Il console.log all'interno della selezione IF non verrà stampato in console in quanto va a richiamare la variabile let che è stata 
// dichiarata all'interno della function makePizza, ed in quanto contrassegnata con let non può agire a livello globale (se fosse stata 
// dichiarata con VAR il console.log della selezione IF avrebbe funzionato).

function makePizza(moreIngredients) {
  let theSecond = "Sugo di pomodoro freschissimo";
  // { ... }
  console.log(theSecond + ", " + moreIngredients);
  return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!)
}

if (true) {
  makePizza("rucola, prosciutto crudo e scaglie di grana.");
  console.log("Il secondo ingrediente necessario: ", theSecond);
}