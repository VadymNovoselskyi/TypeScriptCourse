function printName(person: { name: string; last: string }): void {
	console.log(`Name is ${person.name}, lastname ${person.last}`);
}

const me: { name: string; last: string } = { name: 'Vadym', last: 'Novoselskyi' };
printName(me);

type Point = {
	x: number;
	y: number;
	z?: number;
};

let coordinate2D: Point = { x: 100, y: 100 };
let coordinate3D: Point = { x: 100, y: 100, z: -1 };

function randomCoords(): Point {
	return { x: Math.random() * 1000, y: Math.random() * 1000 };
}

type Song = {
	readonly id: number;
	title: string;
	artist: string;
	streams: number;
	credits: { producer: string; writer: string };
};

function calcPayout(streams: Song['streams']): number {
	return streams * 0.000033;
}

function printSong(song: Song): void {
	console.log(`Title: ${song.title} --- Artist: ${song.artist} --- producer: ${song.credits.producer}`);
}

const someSong: Song = {
	id: 1,
	title: 'Unchained Melody',
	artist: 'Righteous Brothers',
	streams: 2842838,
	credits: {
		producer: 'Phil Spector',
		writer: 'Alex North',
	},
};

console.log(calcPayout(someSong.streams));
printSong(someSong);

type Circle = {
	radius: number;
};
type Color = {
	color: string;
};

type ColorfulCircle = Circle &
	Color & {
		borderColor: string;
	};

const happyFace = {
	radius: 10,
	color: 'Yellow',
	borderColor: 'Black',
};
