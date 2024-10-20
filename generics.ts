const nums: Array<number> = [1, 2, 3];

function identity<T = number>(element: T): T {
	console.log(typeof element);
	return element;
}

const numIdentity = identity;
console.log(numIdentity(10));
console.log(identity<string>('ten'));

const getRandElement = <T>(list: T[]): T => list[Math.floor(Math.random() * list.length)];

console.log(getRandElement([1, 2, 3]));

function merge<T extends object, V extends object>(object1: T, object2: V): T & V {
	return { ...object1, ...object2 };
}

//

interface Melody {
    title: string;
    artist: string;
}
interface Video {
    title: string;
    creator: string;
    resolution: number;
}

class Playlist<T> {
    constructor(public queue: T[]) {}
    add(element: T): void {
        this.queue.push(element);
    }
}

const songs = new Playlist<Melody>([ { title: 'title1', artist: 'artist1' } ]);
const videos = new Playlist<Video>([ { title: 'title2', creator: 'artist2', resolution: 1080 } ]);
