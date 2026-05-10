let bazarLists = ["Milk", "Egg", "Suger ", " Solt"];
let mixedArray: (string | number | boolean)[] = [
  "Milk",
  2,
  false,
  "Egg",
  12,
  "Suger ",
  1,
  " Solt",
  1,
];
mixedArray.push("Apple");
// console.log(mixedArray);

// referance  type : Object
const user: {
  organization: string;
  firstName: string;
  middleName?: string; // ( ? )  optional type
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Programming Hero",
  firstName: "Muhammad ",
  lastName: "Hossain",
  isMarried: false,
};

user.organization = " Next Level Web Development";
console.log(user);
