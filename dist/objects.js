"use strict";
function printName(person) {
    console.log(`Name is ${person.name}, lastname ${person.last}`);
}
const me = { name: 'Vadym', last: 'Novoselskyi' };
printName(me);
let coordinate2D = { x: 100, y: 100 };
let coordinate3D = { x: 100, y: 100, z: -1 };
function randomCoords() {
    return { x: Math.random() * 1000, y: Math.random() * 1000 };
}
function calcPayout(streams) {
    return streams * 0.000033;
}
function printSong(song) {
    console.log(`Title: ${song.title} --- Artist: ${song.artist} --- producer: ${song.credits.producer}`);
}
const someSong = {
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
const happyFace = {
    radius: 10,
    color: 'Yellow',
    borderColor: 'Black',
};
