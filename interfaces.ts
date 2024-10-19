interface Point {
	x: number;
	y: number;
}

const pt: Point = { x: 10, y: 10 };

interface Person {
	first: string;
	last: string;
	nickname?: string;
	greet(name: string): string;
}

const thomas: Person = {
	first: 'Thomas',
	last: 'Hardy',
    height: 180,
	greet: function(name: string): string { return `Hi ${name}, my name is ${this.first}`},
};

interface Person {
	height?: number;
}

interface Worker extends Person {
    job: string;
}
