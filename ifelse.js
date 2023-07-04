// if-else è un costrutto che ci permette di abilitare un blocco di codice in determinate situazioni,
// vuoi per cambiare valore di una variabile in un caso particolare, aggiungere un elemento ad un array,
//modificare la proprietà di un oggetto in una determinata condizione ecc..

// VALORI che in un contesto booleano ritornano TRUE (TRUTHY)
// {}, [], 42, "0", "false", new Date(), -42, 12n, 3.14, -3.14, Infinity, -Infinity;
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy

// VALORI che in un contesto booleano ritornano FALSE (FALSY)
// null, undefined, false, NaN, 0, -0, 0n, ""
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy

if ("stefano") {
  console.log("il valore è truthy");
}
if ("") {
  // non entreremo mai qua perché il valore è sempre falsy
} else {
  console.log("entreremo qui perché stringa vuota è sempre falsy");
}

if ({}) {
  console.log("oggetto vuoto è truthy");
}
if ([]) {
  console.log("array vuoto è truthy");
}

const arr = [];
if (arr.length === 0) {
  console.log("entreremo qui quando l'array è vuoto");
  // potremmo voler pushare un nuovo elemento se l'array non ne contiene già
  arr.push(0);
}

// sta a voi determinare le condizioni per le quali finire in un blocco di codice o in un altro

let num = 51;
// in questo caso abbiamo definito delle condizioni per le quali il codice in automatico esegue un console log o un altro
// ma i differenti blocchi potevano contenere anche istruzioni diverse da semplici console.logs
if (num < 100) {
  console.log("se siamo qui è perché num è minore di 100");
} else if (num < 1000) {
  console.log("se siamo qui è perché num è miniore di 1000");
} else {
  console.log("se siamo qui è perché il valore è superiore a 1000");
}

console.log(num);

if (num === 50) {
  console.log("num è 50");
}

if (num === null || num === undefined) {
  // in questo caso ad esempio se la variabile num fosse vuota la cambieremmo a 0
  num = 0;
}
