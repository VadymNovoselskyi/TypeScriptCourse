function triple(value: number | string) : number | string {
    return typeof value === 'number' ? value * 3 : value.repeat(3);
}

function some(x: string | number, y: string | boolean): void {
    x === y ? console.log(`"${x}" and "${y}" are strings`) : console.log('Not strings');
}

interface Cat {
    name: string;
    color: string;
}

interface Dog {
    name: string;
    breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).color !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
    return isCat(animal) ? 'meow' : 'ruff;'
}

