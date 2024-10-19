"use strict";
function square(n) {
    return n * n;
}
function greetPerson(name = 'stranger') {
    return `Hello, ${name}`;
}
//several variables
const describe = (name, age, isFunny) => {
    return `${name} is ${age} y.o and is ${isFunny ? '' : 'not'} funny`;
};
console.log(describe('Vadym', 18, false));
//void
function nun() {
    //do nun (void);
}
//union type
function isTrue(bool) {
    return bool ? 'true' : false;
}
//already knows that color is a string
const someColors = ['orange', 'red', 'yellow'];
someColors.forEach(color => console.log(color.toUpperCase()));
//:never
const makeError = (message) => {
    throw new Error(message);
};
