import { Movie } from './types';

// Exercise 1: Get the array of all directors.
export const getAllDirectors = (array: Movie[]): string[] => {
	let result: string[] = [];

	result = array.map((m) => m.director);

	console.log('EXERCISE 1 ->', result);
	return result;
};

// Exercise 2: Get the films of a certain director
// const getMoviesFromDirector= (array, director) => {}

// Exercise 3: Calculate the average of the films of a given director.
// const moviesAverageOfDirector= (array, director) => {}

// Exercise 4:  Alphabetic order by title
// const orderAlphabetically= (array) => {}

// Exercise 5: Order by year, ascending
// const orderByYear= () => {}

// Exercise 6: Calculate the average of the movies in a category
// const moviesAverageByCategory= () => {}

// Exercise 7: Modify the duration of movies to minutes
// const hoursToMinutes= () => {}

// Exercise 8: Get the best film of a year
// const bestFilmOfYear= () => {}
