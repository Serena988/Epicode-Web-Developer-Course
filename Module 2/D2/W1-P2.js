/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
 I datatype sono un metodo di archiviazione e organizzazione dei dati per consentire
 accesso e manipolazione di questi ultimi da parte di utenti e dispositivi, e consentono
 nello stesso tempo agli algoritmi di utilizzare i dati archiviati nel computer
 per eseguire un'attività specifica definita passo dopo passo dall'algoritmo stesso.

 Le categorie principali di datatype in Javascript comprendono primitive and structural type.
 Primitive types sono immutabili e includono i seguenti datatype: string, number, bigint,
 boolean, undefined, null e symbol.
 • String: rappresenta una sequrnza di caratteri.
 • Number: rappresenta valori numerici.
 • BigInt: comprende valori numerici troppo grandi per essere rappresentati dal number datatype.
 • Boolean: un tipo di dati logico che può avere solo i valori true o false.
 • Undefined: rappresenta un valore non ancora definito.
 • Null: rappresenta un tipo di dati senza valore, definito esplicitamente come null.
 • Symbol: rappresenta un identificatore univoco.
 
 Structural types comprendono objects, arrays e functions.
 • Objects: utilizzati per memorizzare raccolte di dati ed entità più complesse.
 • Arrays: utilizzati per memorizzare raccolte ordinate.
 • Functions: utilizzati per racchiudere ed eseguire blocchi di codice. 
*/




/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
 Un oggetto è una variabile che contiene un insieme di valori. 
 Gli oggetti in JavaScript possono essere definiti come una raccolta non ordinata
 di dati correlati. 
*/


   
/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 12;
let b = 20;
let sum = a + b;
console.log(sum);



/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;



/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = 'Serena';



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x1 = 12;
x1 -= 4;
console.log(x1);



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = `john`;
let name2 = `John`;
console.log(name1 !== name2);

name2 = name2.toLowerCase();
console.log(name2.toLowerCase() === name1);