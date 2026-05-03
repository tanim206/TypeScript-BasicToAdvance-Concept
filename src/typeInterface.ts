// type Interface : object , array,object

interface IUser {
  name: string;
  age: number;
}
// Object
const user: IUser = {
  name: "Tanim",
  age: 21,
};
console.log(user);

// Function
interface Iadd {
  (num1: number, num2: number): number;
}
const add: Iadd = (num1, num2) => num1 + num2;

// Array

interface Ifriends {
  [index: number]: string;
}
const friends: Ifriends = ["A", "B", "C"];
console.log(friends);
