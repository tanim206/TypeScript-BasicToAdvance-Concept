// Genaric type

type Genaric<T> = Array<T>;

const array: Genaric<string> = ["A", "B", "C"];
const numbers: Genaric<number> = [2, 4, 6];
const isAdmin: Genaric<boolean> = [true, false];

console.log(array, numbers, isAdmin);

type Students = { name: string; age: number };
//  object
const students: Genaric<Students> = [
  {
    name: "TANIM",
    age: 21,
  },
  {
    name: "Pintu",
    age: 23,
  },
];
console.log(students);
