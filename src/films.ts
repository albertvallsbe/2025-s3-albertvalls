import { Movie } from './types';

// Exercise 1: Get the array of all directors.
export const getAllDirectors = (array: Movie[]): string[] => {
	let result: string[] = [];

	result = array.map((list) => list.director);

	// console.log('EXERCISE 1 ->', result);
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
export const orderAlphabetically = (array: Movie[]): Movie[] => {
	let result: Movie[];

	result = [...array].sort((a, b) => a.title.localeCompare(b.title, 'ca'));

	return result.slice(0, 10);
	// .map((m) => m.title)
};

// Exercise 5: Order by year, ascending
export const orderByYear = (array: Movie[]): Movie[] => {
	let result: Movie[];

	result = [...array].sort((a, b) => a.year - b.year);

	return result;
};

// Exercise 6: Calculate the average of the movies in a category
export const moviesAverageByCategory = (
	array: Movie[],
	genre?: string
): number => {
	if (array.length === 0) {
		return 0;
	}

	let initialValue: number = 0;
	let counter: number = 0;

	let result: number = array.reduce((accumulator, array) => {
		if (!genre) {
			counter++;
			return accumulator + (array.score ?? 0);
		}

		if (array.genre.includes(genre)) {
			counter++;
			return accumulator + (array.score ?? 0);
		}
		return accumulator;
	}, initialValue);

	if (counter === 0) {
		return 0;
	}

	return parseFloat((result / counter).toFixed(2));
};

// Exercise 7: Modify the duration of movies to minutes
export const hoursToMinutes = (array: Movie[]): Movie[] => {
	let result: Movie[];

	result = [...array].map((movie) => {
		const durationInHours = movie.duration as string;
		let durationInMinutes = 0;

		const hours = durationInHours.match(/(\d+)h/);
		if (hours) {
			durationInMinutes += parseInt(hours[1], 10) * 60;
		}

		const minutes = durationInHours.match(/(\d+)min/);
		if (minutes) {
			durationInMinutes += parseInt(minutes[1], 10);
		}

		return {
			...movie,
			duration: durationInMinutes
		};
	});

	return result;
};

// Exercise 8: Get the best film of a year
export const bestFilmOfYear = (array: Movie[], year: number): Movie[] => {
	if (!year) {
		year = new Date().getFullYear();
	}

	let result: Movie = [...array]
		.filter((list) => list.year === year)
		.reduce(
			(maxScore, current) => {
				return (current.score ?? 0) > (maxScore.score ?? 0)
					? current
					: maxScore;
			},
			{ score: -Infinity } as Movie
		);

	return [result];
};
