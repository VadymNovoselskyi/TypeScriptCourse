let movieTitle: string = 'Amadeus';
console.log(movieTitle);
movieTitle = 'Bee Movie';

let n1 = 1;
n1 = 20;

let anything: any = 'Hello world';
anything = null;
anything = 10;
anything();
anything.something;

const movies = ['Movie 1', 'Movie 2', 'THE MOVIE'];
let theMovie: string;

for (let movie in movies) {
	if (movie === 'THE MOVIE') theMovie = movie;
}
