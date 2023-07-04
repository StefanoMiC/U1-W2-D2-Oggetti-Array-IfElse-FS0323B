// ARRAY
// è una collezione o lista di elementi (simili)

const students = ["Godwin", "Valentino", "Melissa", "Alessia"];
const numbers = [5, 10, -10, 20.3];
const bools = [true, true, false, false, true];

const mixed = [true, "Stefano", 50, undefined];
const objects = [{ name: "Andrea" }, { name: "Alessandro" }, { name: "Angelo" }, { name: "Caterina" }];
const arrays = [
  [0, 1],
  [2, 3],
  [4, 5],
  [0, 0]
];

const myName = "Stefano";

// per controllare se un array è veramente un array: Array.isArray(mixed) // true

// Per accedere ai singoli elementi di un array l'unico modo è utilizzare la posizione detta anche INDICE dell'elemento nell'array
// da tenere a mente che le posizioni sono zero-based: partono da 0
// per accedere alla posizione si utilizzano le parentesi [] dopo il nome dell'array: es. array[index]

// "Godwin" posizione => 0
// "Valentino"posizione => 1
// "Melissa" posizione => 2
// "Alessia" posizione => 3
console.log(students[2]); //  "Melissa"

console.log(objects[1].name);
console.log(objects.length);

// eliminare l'ultimo elemento dell'array: .pop()
objects.pop();
console.log(objects);
// inserire un elemento in fondo all'array: .push()
objects.push({ name: "Umberto" });
console.log(objects.length);
console.log(objects);

numbers.push(50);
// eliminare il primo elemento dell'array: .shift()
objects.shift();
console.log(objects);
// aggiungere un elemento all'inizio dell'array: .unshift()
objects.unshift({ name: "Alaa" });
console.log(objects);

numbers.sort(); // fa l'ordinamento trasfromando i numeri in stringhe e mettendoli in ordine alfabetico
console.log(numbers);
// students.sort();
console.log(students);

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

const person2 = {
  firstName: "Jane",
  lastName: "Doe",
  age: 18,
  gender: "F",
  hasWebcam: true,
  parents: {
    father: "Alan",
    mother: "Ellen"
  },
  skills: ["HTML", "CSS", "JS"],
  drivingLicense: null,
  "e-mail": "jane.doe@gmail.com"
};

// creo un NUOVO ARRAY utilizzando il contenuto delle due varibili person, person2 estraendone il loro contenuto
// quindi avremo un array di due oggetti precofigurati in precedenza
const siblings = [person, person2];
console.log(siblings);

siblings.push({
  firstName: "John",
  lastName: "Wick",
  age: 45,
  gender: "M",
  hasWebcam: true,
  parents: {
    father: "Alan",
    mother: "Ellen"
  },
  skills: ["HTML", "CSS", "JS"],
  drivingLicense: null,
  "e-mail": "john.doe@gmail.com"
});

// leggere l'età del terzo oggetto (indice 2) appena inserito col push
// console.log(siblings[2].age);

// seleziona una porzione di array (2 posizione esclusa) e ritorna un nuovo array che salviamo in una variabile
const firstStudents = students.slice(0, 2);
// console.log(firstStudents);
// console.log(students);

// eliminare un elemento in una determinata posizione
students.splice(2, 1);
// console.log(students);

// accedere direttamente all'ultimo elemento di unarray
console.log(siblings[siblings.length - 1]);
