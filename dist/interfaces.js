"use strict";
const pt = { x: 10, y: 10 };
const thomas = {
    first: 'Thomas',
    last: 'Hardy',
    height: 180,
    greet: function (name) { return `Hi ${name}, my name is ${this.first}`; },
};
