"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNormal(num1, num2) {
    return num1 + num2;
}
const addArrow = (num1, num2) => {
    return num1 + num2;
};
addNormal(2, 5);
// object => function => mathoad
const poorUser = {
    name: "Tanim",
    bkashBalance: 0,
    addBkashBalance(value) {
        const newBalance = this.bkashBalance + value;
        return newBalance;
    },
};
// console.log(poorUser)
// console.log(poorUser.addBkashBalance(100));
// call back function used
const array = [2, 4, 6];
const sqrArray = array.map((element) => element * element);
console.log(sqrArray);
//# sourceMappingURL=function.js.map