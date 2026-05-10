"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    mobile: true,
};
const result = ProDeveolper(student2);
console.log(result);
//# sourceMappingURL=constraint.js.map