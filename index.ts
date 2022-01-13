const name = "Whitedog",
	age = 27,
	gender = "male";

const sayHi = (name, age, gender?) => {
	console.log(`hello! ${name}, your ${age}, your a ${gender}`);
};

sayHi(name, age);

export {};
