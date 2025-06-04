import { Movie } from './types';

// Exercise 1: Get the array of all directors.
export const getAllDirectors = (array: Movie[]): string[] => {
	let result: string[] = [];

	result = array.map((list) => list.director);

	console.log('EXERCISE 1 ->', result);
	return result;
};

// Exercise 2: Get the films of a certain director
export const getMoviesFromDirector = (
	array: Movie[],
	director?: string
): Movie[] => {
	let result: Movie[] = [];

	result = array.filter((list) => list.director === director);

	return result;
};

// Exercise 3: Calculate the average of the films of a given director.
export const moviesAverageOfDirector = (
	array: Movie[],
	director?: string
): number => {
	let result: number = 0;

	if (array.length === 0) {
		return 0;
	}

	let initialValue: number = 0;
	let sumTotalPoints: number = array.reduce(
		(accumulator, array) => accumulator + (array.score ?? 0),
		initialValue
	);

	result = parseFloat((sumTotalPoints / array.length).toFixed(2));

	return result;
};

// Exercise 4:  Alphabetic order by title
export const orderAlphabetically = (array: Movie[]): string[] => {
	let result: Movie[];

	result = [...array].sort((a, b) => a.title.localeCompare(b.title, 'ca'));

	console.log(
		'EXERCISE 1 ->',
		result.slice(0, 20).map((m) => m.title)
	);

	return result.slice(0, 20).map((m) => m.title);
};

// Exercise 5: Order by year, ascending
// const orderByYear= () => {}

// Exercise 6: Calculate the average of the movies in a category
// const moviesAverageByCategory= () => {}

// Exercise 7: Modify the duration of movies to minutes
// const hoursToMinutes= () => {}

// Exercise 8: Get the best film of a year
// const bestFilmOfYear= () => {}
