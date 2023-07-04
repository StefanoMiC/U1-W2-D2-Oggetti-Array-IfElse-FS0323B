// var myName = "Stefano";

// {
//   var myName = "Giovanni";
// }
// console.log(myName); // Giovanni - la keyword var non è limitata dal suo blocco, ed è in grado di sovrascrivere variabili esterne

// ________________________________________

// let myName = "Stefano";

// {
//   let myName = "Giovanni";
// }
// console.log(myName); // Stefano - con la keyword let la variabile myName interna al blocco non è in grado di modificare il valore di myName esterno

// OGGETTI IN JS

// quando ci si ritrova ad avere un gruppo di dati appartenenti ad una stessa entità (studente, animale, macchina, edificio, servizio)
// raggruppare questi dati che descrivono un'entità si usa un'unica struttura: l'OGGETTO

const obj = {};
// ho creato un oggetto vuoto in memoria

// obj = undefined;

// per descrivere qualcosa si usano coppie chiave-valore all'interno delle {}
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  gender: "M",
  hasWebcam: true,
  parents: {
    father: "Alan",
    mother: "Ellen"
  },
  skills: ["HTML", "CSS", "JS"],
  drivingLicense: null,
  "e-mail": "john.doe@gmail.com"
};

console.log("person", person); // object

// 1) con la DOT NOTATION potrò accedere ad una qualsiasi proprietà contenuta nell'oggetto

console.log("gender:", person.gender);
console.log("age:", person.age);
console.log("mother's name:", person.parents.mother);
// console.log("e-mail:", person.e - mail); // con la dot notation non riuscimo a leggere il valore di "e-mail"

// 2) SQUARE BRACKETS NOTATION serve ad accedere a proprietà con caratteri speciali
console.log("father's name:", person["parents"].father); // non ha senso accedere alle proprietà senza caratteri speciali con le parentesi quadre
console.log("e-mail:", person["e-mail"]); // ha molto senso invece usarle per accedere a proprietà che includono spazi nel nome o caratteri speciali
const e = "e-";
console.log(person[e.concat("mail")]); // person["e-mail"]

let x = "drivingLicense";
console.log("drivingLicense", person[x]); // person["drivingLicense"]

x = "hasWebcam";
console.log("hasWebcam", person[x]); // person["hasWebcam"] // true
console.log("x", person.x); // person["x"] // undefined

// per MODIFICARE il valore di una proprietà (o chiave) utilizzeremo una modalità simile alla "lettura" con ASSEGNAZIONE
person.drivingLicense = "patente B";
console.log("drivingLicense", person.drivingLicense);

// per CREARE una nuova coppia chiave-valore lo faremo come se accedessimo ad una proprietà esistente, ma utilizzeremo l'ASSEGNAZIONE nello stesso momento
console.log(person.eyeColor); // undefined
person.eyeColor = "green"; // creo una proprietà non esistente in precedenza
console.log(person.eyeColor); // green
console.log(person.parents); // object - l'oggetto conterrà la nuova proprietà creata

// per CANCELLARE una coppia chiave-valore utilizzerò la keyword dedicata all'eliminazione di proprietà d'oggetto
delete person.parents.father;
console.log(person.parents);
delete person.parents;
console.log(person);
delete person["e-mail"];
console.log(person);

let a = 20;
let b = a;
console.log("A", a, "B", b);

a = 10;
console.log("A", a, "B", b);

// copiare valori primitivi è facile e sarà copiato il valore letterale in quanto primitiva

const objA = {
  name: "Stefano"
};

const objB = objA; // stiamo copiando la referenza, quindi l'indirizzo in memoria.
//Cambiare qualcosa ora a objB risulterebbe in una modifica all'oggetto originario objA

const objC = {};
objC.name = objA.name;
objC.parents = Object.assign({}, person.parents);

// per copiare una REFERENZA conviene utilizzare un metodo come Object.assign() o creare un nuovo oggetto a cui copiamo le singole proprietà
const objD = Object.assign({}, objA, objC);

objD.name = "Giovanni";
console.log(objA);
