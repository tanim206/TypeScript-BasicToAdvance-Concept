function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}
const addArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};
addNormal(2, 5);

// object => function => mathoad

const poorUser = {
  name: "Tanim",
  bkashBalance: 0,
  addBkashBalance(value: number): number {
    const newBalance = this.bkashBalance + value;
    return newBalance;
  },
};
// console.log(poorUser)
// console.log(poorUser.addBkashBalance(100));


// call back function used
const array :number[] = [2, 4, 6];

const sqrArray = array.map((element: number): number => element * element);
console.log(sqrArray)
