// ts에서만 작동하는 interface
interface Human {
	name: string;
	age: number;
	gender: string;
}
const person = {
	name: "Whitedog",
	age: 27,
	gender: "male",
};

const sayHi = (person: Human): string => {
	return `hello! ${person.name}, your ${person.age}, your a ${person.gender}!`;
};

console.log(sayHi(person));

export {};
