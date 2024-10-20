class Player {
	// readonly first: string;
	// readonly last: string;
	protected score: number = 0;
	#lives = 10;

	constructor(public readonly first: string, public readonly last: string) {
		// this.first = first;
		// this.last = last;
		this.secret();
	}

	get fullName(): string {
		return `${this.first} ${this.last}`;
	}

	get lives(): number {
		return this.lives;
	}
	set lives(lives: number) {
		lives > 0
			? (this.lives = lives)
			: lives === 0
			? console.log('You dead lol')
			: console.log('Nah');
	}

	private secret(): void {
		console.log('SECRET');
	}
}

class SuperPlayer extends Player {
	public isAdmin: boolean = true;

	private maxScore() {
		this.score = 99999;
	}
}

const player1 = new Player('Vadym', 'Novoselskyi');

//

interface Colorful {
	color: string;
}

interface Printable {
	print(): void;
}

class Bike implements Colorful, Printable {
	constructor(public color: string) {}
	print(): void {
		console.log('Brrrrr.....');
	}
}
const bike1 = new Bike('yellow');

//

abstract class Animal implements Colorful {
	constructor(public age: number, public color: string) {}
	abstract sound(): void;
    eat(): void {
        console.log('Num num');
    }
}

class Cat extends Animal {
	sound(): void {
		console.log('Meowww');
	}
    eat(): void {
        console.log('Yum yum');
    }
}

const dusia = new Cat(10, 'red');
dusia.sound();
dusia.eat();
