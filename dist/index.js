"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "Whitedog",
    age: 27,
    gender: "male",
};
const sayHi = (person) => {
    return `hello! ${person.name}, your ${person.age}, your a ${person.gender}!`;
};
console.log(sayHi(person));
//# sourceMappingURL=index.js.map