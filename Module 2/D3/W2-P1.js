/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function compareNumbers(a, b) {
  if (a > b) {
    console.log(`a:${a} è maggiore di b:${b}`)
  } else if (a < b) {
    console.log(`b:${b} è maggiore di a:${a}`)
  } else {
    console.log(`I due numeri sono uguali`);
  }
}



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function isNumber(num) {
  if (num !== 5) {
    console.log(`Not equal`);
  }
}



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function isDivisibleBy5(num) {
  if (num % 5 === 0) {
    console.log(`divisibleBy5`);
  }
}



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function eightCheck(a, b) {
  if (a === 8 || b === 8 || a + b === 8 || a - b === 8 || b - a === 8) {
    console.log(`ok`);
  } else {
    console.log(`no`);
  }
}



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// PRIMO MODO
// function promo(totalShoppingCart) {
//   let shipping = 10;
//   if (totalShoppingCart > 50) {
//     shippinge = 0;
//   }
//   return totalShoppingCart + shipping;
// }

// SECONDO MODO
// function promo(totalShoppingCart) {
//  return totalShoppingCart > 50 ? totalShoppingCart : totalShoppingCart + 10;
// }



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function promo(totalShoppingCart) {
  const blackFridayDiscount = (totalShoppingCart * 20) / 100;
  return totalShoppingCart > 50
    ? totalShoppingCart - blackFridayDiscount
    : totalShoppingCart + 10 - blackFridayDiscount;
}



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function sort(a, b, c) {
  let one;
  let two;
  let three;
  if (a > b && a > c) {
    one = a;
  } else if (b > a && b > c) {
    one = b;
  } else {
    one = c;
  }
  if (a > b && a < c) {
    two = a;
  } else if (b > a && b < c) {
    two = b;
  } else {
    two = c;
  }
  if (a < b && a < c) {
    three = a;
  } else if (b < a && b < c) {
    three = b;
  } else {
    three = c;
  }
  console.log(one, two, three);
}
sort(1, 366, 25666);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function isWholeNumber(num) {
  if (typeof num === `number` && num % 1 === 0) {
    console.log(`${num} è un numero intero`);
  } else {
    console.log(`${num} non è un numero intero`);
  }
}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function isEvenNumber(num) {
  if (num % 2 === 0) {
    console.log(`${num} è un numero pari`);
  } else {
    console.log(`${num} è un numero dispari`);
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

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;

if (val < 10 && val >= 5) {
  console.log('Meno di 10');
} else if (val < 5) {
  console.log('Meno di 5');
} else {
  console.log('Uguale a 10 o maggiore');
}



/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function size(num) {
  if (num < 5) {
    console.log(`Tiny`);
  } else if (num < 10) {
    console.log(`Small`);
  } else if (num < 15) {
    console.log(`Medium`);
  } else if (num < 20) {
    console.log(`Large`);
  } else if (num >= 20) {
    console.log(`Huge`);
  }
}



/*  ESERCIZIO 12
  Usa un operatore ternario per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function isMale(gender) {
  let male = true
  return gender === male === true ? `Male` : `Female`;
}
console.log(isMale(false))



/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let i = 0;
while (i < 6) {
  console.log(i);
  i++;
}



/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let i = 0; i < 11; i++) {
  console.log(i)
}



/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let i = 0; i < 11; i++) {
  if (i === 3 || i === 8) {
    continue;
  }
  console.log(i);
}

let a = -1;
while (a < 10) {
  a++;
  if (a === 3 || a === 8) {
    continue;
  }
  console.log(a);
}



``
/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let i = 0; i < 16; i++) {
  if (i % 2 === 0) {
    console.log(`${i} è pari`);
    continue;
  } else {
    console.log(`${i} è dispari`);
    continue;
  }
  console.log(i);
}




/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(` FizzBuzz`);
    continue;
  } else if (i % 3 === 0) {
    console.log(`Fizz`);
    continue;
  } else if (i % 5 === 0) {
    console.log(`Buzz`)
    continue;
  }
  console.log(i)
}



/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let day = 2;
switch (day) {
  case 1:
    console.log('Lunedì');
    break;
  case 2:
    console.log('Martedì');
    break;
  case 3:
    console.log('Mercoledì');
    break;
  case '4':
    console.log('Giovedì');
    break;
  case '5':
    console.log('Venerdì');
    break;
  case '6':
    console.log('Sabato');
    break;
  case '7':
    console.log('Domenica');
    break;
  // no default
}