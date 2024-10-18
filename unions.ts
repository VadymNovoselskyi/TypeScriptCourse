// let age: number | string | boolean = 18;
// age = false;
let age: number | string = 18;
age = 'Eighteen';

function printAge(age: number | string): void {
	console.log(`${age} years old`);
}

function calcTax(price: number | string, tax: number): number {
	if (typeof price === 'string') price = parseFloat(price.replace('$', ''));
	return price * tax;
}

printAge(age);

const stuff: (number | string)[] = [1, 2, 3, 'Hi'];
stuff.forEach(thing => console.log(thing));

function giveAnswer(answer: 'yes' | 'no' | 'maybe'): string {
	return `The answer is: ${answer}`;
}

console.log(giveAnswer('yes'));

type daysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday' ;
let today: daysOfWeek = "Friday";
