"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type Assertion  ( as )
const kgToGram = (input) => {
    if (typeof input === "number") {
        const result = input * 1000;
        return result;
    }
    else if (typeof input === "string") {
        const [value] = input.split(" ");
        return `${Number(value) * 1000}`;
    }
};
const kgOne = kgToGram(2);
const kgTwo = kgToGram("2 kg");
console.log(kgOne);
console.log(kgTwo);
//# sourceMappingURL=typeAssertion.js.map