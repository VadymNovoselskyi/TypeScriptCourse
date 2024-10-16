function square(n: number): number {
	return n * n;
}

function greet(name: string = 'stranger'): string {
	return `Hello, ${name}`;
}

//several variables
const describe = (name: string, age: number, isFunny: boolean) => {
	return `${name} is ${age} y.o and is ${isFunny ? '' : 'not'} funny`;
};
console.log(describe('Vadym', 18, false));

//void
function nun() /* :void */ {
	//do nun (void);
}

//union type
function isTrue(bool: boolean): string | boolean {
	return bool ? 'true' : false;
}

//already knows that color is a string
const colors = ['orange', 'red', 'yellow'];
colors.forEach(color => console.log(color.toUpperCase()));

//:never
const makeError = (message: string): never => {
	throw new Error(message);
};
