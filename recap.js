// TIPI DI DATI PRIMITIVI
// string - insieme di caratteri racchiusi da apici "" '' `` (backtick: alt + 96 del tastierino numerico)
// number - numeri senza apici
// boolean - true / false
// undefined - assenza di valore
// null - assenza di valore intenzionale
// symbol
// bigInt
// ------ data type strutturali
// object - oggetti, array
// function

// creazione e assegnazione di variabile a costante
const name = "Massimiliano";
const surname = "D'orsi";

const fullName = name + " " + surname;
const fullName2 = `Il mio nome è: ${name} ${surname}`; // interpolazione di stringa (template string / template literal)

const eyeColor = "brown";
// Operatori matematici
// + - * / %

// % modulo operator - serve a ritornare il resto di una divisione
console.log(3 % 3);
console.log(52 % 6);

console.log("E' pari? ", 6 % 2 === 0);
console.log("quanti secondi rimangono per un altro minuto?", 605 % 60);

// Operatori di comparazione
// < <= > >= === !==
console.log(50 < 100); // => TRUE
console.log(50 < 20); // => FALSE

console.log(name.toLowerCase() === "massimiliano"); // => TRUE

// Operatori logici
// && - AND concatena due o più condizioni in un'unica espressione,
// la cui veridicità sarà confermata SOLAMENTE se TUTTE le condizioni sono verificate (TRUE && TRUE = TRUE)
// || - OR concatena due o più condizioni in un'unica espressione,
// la cui veridicità sarà confermata quando ALMENO UNA delle condizioni sarà verificata (FALSE || TRUE = TRUE)
// ! - NOT trasforma il valore booleano nel suo opposto !false = true

console.log("Op.Logico1: ", 5 < 10 && eyeColor === "brown");
console.log("Op.Logico2: ", 10 < 10 && eyeColor === "brown");
console.log("Op.Logico3: ", 10 < 10 || eyeColor === "brown");
console.log("Op.Logico4: ", (10 < 10 || eyeColor === "brown") && eyeColor !== "black");
// possibile raggruppare le condizioni per dargli una priorità(o ordine) di valutazione specifica

const myName = "Stefano";
// TERNARY OPERATOR - condizione ? se true : se false
const isMyNameStefano = name === "Stefano" ? "Sì" : "No";
const isMyNameStefano2 = myName === "Stefano" ? "Sì" : "No";
const isMyNameStefano3 = myName === "Stefano" ? true : false; // non ha senso usare un ternario per tornare true/false in quanto già l'operatore di comparazione ritorna un booleano
console.log(isMyNameStefano);
console.log(isMyNameStefano2);
console.log(isMyNameStefano3);

const myAge = 9;

const schoolToAttend = myAge >= 13 ? "High School" : myAge > 10 ? "Middle School" : "Elementary";
console.log(schoolToAttend);
