"use strict";
// let age: number | string | boolean = 18;
// age = false;
let age = 18;
age = 'Eighteen';
function printAge(age) {
    console.log(`${age} years old`);
}
function calcTax(price, tax) {
    if (typeof price === 'string')
        price = parseFloat(price.replace('$', ''));
    return price * tax;
}
printAge(age);
const stuff = [1, 2, 3, 'Hi'];
stuff.forEach(thing => console.log(thing));
function giveAnswer(answer) {
    return `The answer is: ${answer}`;
}
console.log(giveAnswer('yes'));
let today = "Friday";
