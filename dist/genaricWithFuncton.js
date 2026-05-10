"use strict";
// genaric With Functon
Object.defineProperty(exports, "__esModule", { value: true });
// const createArrString = (value: string) => {
//   return [value];
// };
// const createArrNumber = (value: number) => {
//   return [value];
// };
// const createArrObject = (value: object) => {
//   {
//     return [value];
//   }
// };
const genaricWithArr = (value) => {
    return [value];
};
const ArrString = genaricWithArr("Tanim");
const ArrNumber = genaricWithArr(222);
const ArrObject = genaricWithArr({
    id: 222,
    name: "Tanim",
});
console.log(ArrString);
console.log(ArrNumber);
console.log(ArrObject);
// type Object = {
//   name: string;
//   phone: number;
// };
const GenaricWithTouple = (value1, value2, value3) => {
    return [value1, value2, value3];
};
const result1 = GenaricWithTouple("Tanim", 21, {
    name: "TANIM",
});
console.log({ result1 });
const ProDeveolper = (studentInfo) => {
    return {
        Deveolper: "Yes",
        ...studentInfo,
    };
};
const student1 = {
    id: 323,
    name: "TANIM",
    Developer: true,
};
const student2 = {
    id: 323,
    name: "JOY DAS",
    Developer: true,
    AppDeveloper: true,
    isMarried: false,
    phone: 1232323,
};
const result = ProDeveolper(student1);
console.log(result);
//# sourceMappingURL=genaricWithFuncton.js.map