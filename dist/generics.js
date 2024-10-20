"use strict";
const nums = [1, 2, 3];
function identity(element) {
    console.log(typeof element);
    return element;
}
const numIdentity = identity;
console.log(numIdentity(10));
console.log(identity('ten'));
const getRandElement = (list) => list[Math.floor(Math.random() * list.length)];
console.log(getRandElement([1, 2, 3]));
function merge(object1, object2) {
    return { ...object1, ...object2 };
}
class Playlist {
    queue;
    constructor(queue) {
        this.queue = queue;
    }
    add(element) {
        this.queue.push(element);
    }
}
const songs = new Playlist([{ title: 'title1', artist: 'artist1' }]);
const videos = new Playlist([{ title: 'title2', creator: 'artist2', resolution: 1080 }]);
