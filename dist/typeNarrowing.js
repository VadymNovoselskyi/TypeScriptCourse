"use strict";
function triple(value) {
    return typeof value === 'number' ? value * 3 : value.repeat(3);
}
function some(x, y) {
    x === y ? console.log(`"${x}" and "${y}" are strings`) : console.log('Not strings');
}
function isCat(animal) {
    return animal.color !== undefined;
}
function makeNoise(animal) {
    return isCat(animal) ? 'meow' : 'ruff;';
}
