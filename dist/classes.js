"use strict";
class Player {
    first;
    last;
    // readonly first: string;
    // readonly last: string;
    score = 0;
    #lives = 10;
    constructor(first, last) {
        this.first = first;
        this.last = last;
        // this.first = first;
        // this.last = last;
        this.secret();
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get lives() {
        return this.lives;
    }
    set lives(lives) {
        lives > 0
            ? (this.lives = lives)
            : lives === 0
                ? console.log('You dead lol')
                : console.log('Nah');
    }
    secret() {
        console.log('SECRET');
    }
}
class SuperPlayer extends Player {
    isAdmin = true;
    maxScore() {
        this.score = 99999;
    }
}
const player1 = new Player('Vadym', 'Novoselskyi');
class Bike {
    color;
    constructor(color) {
        this.color = color;
    }
    print() {
        console.log('Brrrrr.....');
    }
}
const bike1 = new Bike('yellow');
//
class Animal {
    age;
    color;
    constructor(age, color) {
        this.age = age;
        this.color = color;
    }
    eat() {
        console.log('Num num');
    }
}
class Cat extends Animal {
    sound() {
        console.log('Meowww');
    }
    eat() {
        console.log('Yum yum');
    }
}
const dusia = new Cat(10, 'red');
dusia.sound();
dusia.eat();
