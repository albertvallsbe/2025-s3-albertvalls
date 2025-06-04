import { Movie } from '../src/types';
import movies from '../src/data';
import {
	getAllDirectors,
	getMoviesFromDirector,
	moviesAverageOfDirector,
	orderAlphabetically
	// orderByYear,
	// moviesAverageByCategory,
	// hoursToMinutes,
	// bestFilmOfYear
} from '../src/films';

// Exercise 1
describe('Function "getAllDirectors"', () => {
	it('should be declared', () => {
		expect(typeof getAllDirectors).toBe('function');
	});

	it('should return an array', () => {
		expect(getAllDirectors(movies) instanceof Array).toBe(true);
	});

	it('should return a new array, not update the original one', () => {
		expect(getAllDirectors(movies)).not.toEqual(movies);
	});

	it('should return a new array with the same length as the original one', () => {
		const testArr: Movie[] = [
			{
				title: 'Paths of Glory',
				year: 1957,
				director: 'Stanley Kubrick',
				duration: '1h 28min',
				genre: ['Drama', 'War'],
				score: 8.4
			},
			{
				title: 'Django Unchained',
				year: 2012,
				director: 'Quentin Tarantino',
				duration: '2h 45min',
				genre: ['Drama', 'Western'],
				score: 8.4
			}
		];
		expect(getAllDirectors(testArr)).toEqual([
			'Stanley Kubrick',
			'Quentin Tarantino'
		]);
	});
});

// // Exercise 2
describe('Function "getMoviesFromDirector"', () => {
	it('should be declared', () => {
		expect(typeof getMoviesFromDirector).toBe('function');
	});

	it('should return an array', () => {
		expect(getMoviesFromDirector(movies) instanceof Array).toBe(true);
	});

	it('should return a new array, not update the original one', () => {
		expect(getMoviesFromDirector(movies)).not.toEqual(movies);
	});

	it('should return a new array with the movies from director', () => {
		const testArr: Movie[] = [
			{
				title: 'Paths of Glory',
				year: 1957,
				director: 'Stanley Kubrick',
				duration: '1h 28min',
				genre: ['Drama', 'War'],
				score: 8.4
			},
			{
				title: 'Django Unchained',
				year: 2012,
				director: 'Quentin Tarantino',
				duration: '2h 45min',
				genre: ['Drama', 'Western'],
				score: 8.4
			}
		];
		expect(getMoviesFromDirector(testArr, 'Quentin Tarantino')).toEqual([
			{
				title: 'Django Unchained',
				year: 2012,
				director: 'Quentin Tarantino',
				duration: '2h 45min',
				genre: ['Drama', 'Western'],
				score: 8.4
			}
		]);
	});
});

// // Exercise 3
describe('Function "moviesAverageOfDirector"', () => {
	it('should be declared', () => {
		expect(typeof moviesAverageOfDirector).toBe('function');
	});

	it('should return a number', () => {
		expect(typeof moviesAverageOfDirector(movies, 'Stanley Kubrick')).toBe(
			'number'
		);
	});

	it('should be different from NaN', () => {
		expect(
			moviesAverageOfDirector(movies, 'Stanley Kubrick')
		).not.toBeNaN();
	});

	it(' should return the average score of movies selecting only the director films. With 2 decimals! ', () => {
		expect(
			moviesAverageOfDirector(
				[
					{
						title: 'Django Unchained',
						year: 2012,
						director: 'Quentin Tarantino',
						duration: '2h 45min',
						genre: ['Drama', 'Western'],
						score: 8.4
					},
					{
						title: 'Pulp Fiction',
						year: 1994,
						director: 'Quentin Tarantino',
						duration: '2h 34min',
						genre: ['Crime', 'Drama'],
						score: 8.9
					}
				],
				'Quentin Tarantino'
			)
		).toBe(8.65);
	});
});

// // Exercise 4
describe('Function "orderAlphabetically"', () => {
	it('should be declared', () => {
		expect(typeof orderAlphabetically).toBe('function');
	});

	it('should return an array', () => {
		expect(typeof orderAlphabetically([])).toBe('object');
	});

	it('should not mutate the original array', () => {
		const arr: Movie[] = [
			{
				title: '12 Angry Men',
				year: 1957,
				director: 'Sidney Lumet',
				duration: '1h 36min',
				genre: ['Crime', 'Drama'],
				score: 8.9
			},
			{
				title: 'Fight Club',
				year: 1999,
				director: 'David Fincher',
				duration: '2h 19min',
				genre: ['Drama'],
				score: 8.8
			}
		];
		orderAlphabetically(arr);
		expect(arr[0]).toEqual({
			title: '12 Angry Men',
			year: 1957,
			director: 'Sidney Lumet',
			duration: '1h 36min',
			genre: ['Crime', 'Drama'],
			score: 8.9
		});
	});

	it('should only return the title of the movies, each value should be a string', () => {
		expect(
			typeof orderAlphabetically([
				{
					title: 'The Shawshank Redemption',
					year: 1994,
					director: 'Frank Darabont',
					duration: '2h 22min',
					genre: ['Crime', 'Drama'],
					score: 9.3
				}
			])[0]
		).toBe('object');
	});

	it('should return all of items when the array passed has fewer than 10 items', () => {
		const moviesArr: Movie[] = [
			{
				title: 'The Shawshank Redemption',
				year: 1994,
				director: 'Frank Darabont',
				duration: '2h 22min',
				genre: ['Crime', 'Drama'],
				score: 9.3
			},
			{
				title: 'The Godfather',
				year: 1972,
				director: 'Francis Ford Coppola',
				duration: '2h 55min',
				genre: ['Crime', 'Drama'],
				score: 9.2
			},
			{
				title: 'The Godfather: Part II',
				year: 1974,
				director: 'Francis Ford Coppola',
				duration: '3h 22min',
				genre: ['Crime', 'Drama'],
				score: 9
			}
		];
		expect(orderAlphabetically(moviesArr)).toHaveLength(3);
	});

	it('should order them alphabetically.', () => {
		const moviesArr: Movie[] = [
			{
				title: 'The Shawshank Redemption',
				year: 1994,
				director: 'Frank Darabont',
				duration: '2h 22min',
				genre: ['Crime', 'Drama'],
				score: 9.3
			},
			{
				title: 'The Godfather',
				year: 1972,
				director: 'Francis Ford Coppola',
				duration: '2h 55min',
				genre: ['Crime', 'Drama'],
				score: 9.2
			},
			{
				title: 'The Godfather: Part II',
				year: 1974,
				director: 'Francis Ford Coppola',
				duration: '3h 22min',
				genre: ['Crime', 'Drama'],
				score: 9
			},
			{
				title: 'The Dark Knight',
				year: 2008,
				director: 'Christopher Nolan',
				duration: '2h 32min',
				genre: ['Action', 'Crime', 'Drama', 'Thriller'],
				score: 9
			},
			{
				title: '12 Angry Men',
				year: 1957,
				director: 'Sidney Lumet',
				duration: '1h 36min',
				genre: ['Crime', 'Drama'],
				score: 8.9
			}
		];

		expect(orderAlphabetically(moviesArr)).toEqual([
			{
				title: '12 Angry Men',
				year: 1957,
				director: 'Sidney Lumet',
				duration: '1h 36min',
				genre: ['Crime', 'Drama'],
				score: 8.9
			},
			{
				title: 'The Dark Knight',
				year: 2008,
				director: 'Christopher Nolan',
				duration: '2h 32min',
				genre: ['Action', 'Crime', 'Drama', 'Thriller'],
				score: 9
			},
			{
				title: 'The Godfather',
				year: 1972,
				director: 'Francis Ford Coppola',
				duration: '2h 55min',
				genre: ['Crime', 'Drama'],
				score: 9.2
			},
			{
				title: 'The Godfather: Part II',
				year: 1974,
				director: 'Francis Ford Coppola',
				duration: '3h 22min',
				genre: ['Crime', 'Drama'],
				score: 9
			},
			{
				title: 'The Shawshank Redemption',
				year: 1994,
				director: 'Frank Darabont',
				duration: '2h 22min',
				genre: ['Crime', 'Drama'],
				score: 9.3
			}
		]);
	});

	it('should return the top 10 after ordering them alphabetically.', () => {
		const moviesArr: Movie[] = [
			{
				title: 'The Shawshank Redemption',
				year: 1994,
				director: 'Frank Darabont',
				duration: '2h 22min',
				genre: ['Crime', 'Drama'],
				score: 9.3
			},
			{
				title: 'The Godfather',
				year: 1972,
				director: 'Francis Ford Coppola',
				duration: '2h 55min',
				genre: ['Crime', 'Drama'],
				score: 9.2
			},
			{
				title: 'The Godfather: Part II',
				year: 1974,
				director: 'Francis Ford Coppola',
				duration: '3h 22min',
				genre: ['Crime', 'Drama'],
				score: 9
			},
			{
				title: 'The Dark Knight',
				year: 2008,
				director: 'Christopher Nolan',
				duration: '2h 32min',
				genre: ['Action', 'Crime', 'Drama', 'Thriller'],
				score: 9
			},
			{
				title: '12 Angry Men',
				year: 1957,
				director: 'Sidney Lumet',
				duration: '1h 36min',
				genre: ['Crime', 'Drama'],
				score: 8.9
			},
			{
				title: 'Schindler"s List',
				year: 1993,
				director: 'Steven Spielberg',
				duration: '3h 15min',
				genre: ['Biography', 'Drama', 'History'],
				score: 8.9
			},
			{
				title: 'Pulp Fiction',
				year: 1994,
				director: 'Quentin Tarantino',
				duration: '2h 34min',
				genre: ['Crime', 'Drama'],
				score: 8.9
			},
			{
				title: 'The Lord of the Rings: The Return of the King',
				year: 2003,
				director: 'Peter Jackson',
				duration: '3h 21min',
				genre: ['Adventure', 'Drama', 'Fantasy'],
				score: 8.9
			},
			{
				title: 'Il buono, il brutto, il cattivo',
				year: 1966,
				director: 'Sergio Leone',
				duration: '3h 2min',
				genre: ['Western'],
				score: 8.9
			},
			{
				title: 'Fight Club',
				year: 1999,
				director: 'David Fincher',
				duration: '2h 19min',
				genre: ['Drama'],
				score: 8.8
			}
		];

		expect(orderAlphabetically(moviesArr)).toEqual([
			{
				title: '12 Angry Men',
				year: 1957,
				director: 'Sidney Lumet',
				duration: '1h 36min',
				genre: ['Crime', 'Drama'],
				score: 8.9
			},
			{
				title: 'Fight Club',
				year: 1999,
				director: 'David Fincher',
				duration: '2h 19min',
				genre: ['Drama'],
				score: 8.8
			},
			{
				title: 'Il buono, il brutto, il cattivo',
				year: 1966,
				director: 'Sergio Leone',
				duration: '3h 2min',
				genre: ['Western'],
				score: 8.9
			},
			{
				title: 'Pulp Fiction',
				year: 1994,
				director: 'Quentin Tarantino',
				duration: '2h 34min',
				genre: ['Crime', 'Drama'],
				score: 8.9
			},
			{
				title: 'Schindler"s List',
				year: 1993,
				director: 'Steven Spielberg',
				duration: '3h 15min',
				genre: ['Biography', 'Drama', 'History'],
				score: 8.9
			},
			{
				title: 'The Dark Knight',
				year: 2008,
				director: 'Christopher Nolan',
				duration: '2h 32min',
				genre: ['Action', 'Crime', 'Drama', 'Thriller'],
				score: 9
			},
			{
				title: 'The Godfather',
				year: 1972,
				director: 'Francis Ford Coppola',
				duration: '2h 55min',
				genre: ['Crime', 'Drama'],
				score: 9.2
			},
			{
				title: 'The Godfather: Part II',
				year: 1974,
				director: 'Francis Ford Coppola',
				duration: '3h 22min',
				genre: ['Crime', 'Drama'],
				score: 9
			},
			{
				title: 'The Lord of the Rings: The Return of the King',
				year: 2003,
				director: 'Peter Jackson',
				duration: '3h 21min',
				genre: ['Adventure', 'Drama', 'Fantasy'],
				score: 8.9
			},
			{
				title: 'The Shawshank Redemption',
				year: 1994,
				director: 'Frank Darabont',
				duration: '2h 22min',
				genre: ['Crime', 'Drama'],
				score: 9.3
			}
		]);
	});
});

// // Exercise 5
// describe('Function "orderByYear"', () => {
// 	it('should be declared', () => {
// 		expect(typeof orderByYear).toBe('function');
// 	});

// 	it('should return an array', () => {
// 		expect(typeof orderByYear(movies)).toBe('object');
// 	});

// 	it('should return a new array', () => {
// 		const arr = [];
// 		expect(orderByYear(arr)).not.toBe(arr);
// 	});

// 	it('should return the element in a single element array', () => {
// 		expect(orderByYear([{ year: 1982 }])).toEqual([{ year: 1982 }]);
// 	});

// 	it('should return the new array in ascending order', () => {
// 		expect(
// 			orderByYear([{ year: 2002 }, { year: 1982 }, { year: 1995 }])
// 		).toEqual([{ year: 1982 }, { year: 1995 }, { year: 2002 }]);
// 	});

// 	it('should order movies with the same year by their title, alphabetically', () => {
// 		expect(
// 			orderByYear([
// 				{ title: 'abc', year: 2002 },
// 				{ title: 'bac', year: 1982 },
// 				{ title: 'aab', year: 1982 }
// 			])
// 		).toEqual([
// 			{ title: 'aab', year: 1982 },
// 			{ title: 'bac', year: 1982 },
// 			{ title: 'abc', year: 2002 }
// 		]);
// 	});
// });

// // Exercise 6
// // YOUR CODE HERE. Test moviesAverageByCategory()
// describe('Function "moviesAverageByCategory"', () => {
// 	it('ADD YOUR CODE IN films.spec.js file', () => {
// 		expect(typeof hoursToMinutes).toBe('coffee');
// 	});
// });

// // Exercise 7
// describe('Function "hoursToMinutes"', () => {
// 	it('should be declared', () => {
// 		expect(typeof hoursToMinutes).toBe('function');
// 	});

// 	it('should return an array', () => {
// 		expect(hoursToMinutes(movies) instanceof Array).toBe(true);
// 	});

// 	it('should return a new array, not update the original one', () => {
// 		expect(hoursToMinutes(movies)).not.toEqual(movies);
// 	});

// 	it('should return an array of movies with duration as a number', () => {
// 		expect(typeof hoursToMinutes(movies)[0].duration).toBe('number');
// 	});

// 	it('should return an array of movies with the correct duration for a 31 minute movie', () => {
// 		const movieTry = [{ duration: '0h 31min' }];
// 		expect(hoursToMinutes(movieTry)[0].duration).toBe(31);
// 	});

// 	it('should return an array of movies with the correct duration for a 341 minute movie', () => {
// 		const movieTry = [{ duration: '5h 41min' }];
// 		expect(hoursToMinutes(movieTry)[0].duration).toBe(341);
// 	});

// 	it('should return an array of movies with the correct duration for a 2 hour movie', () => {
// 		const movieTry = [{ duration: '2h' }];
// 		expect(hoursToMinutes(movieTry)[0].duration).toBe(120);
// 	});
// });

// // Exercise 8
// describe('Function "bestFilmOfYear"', () => {
// 	it('should be declared', () => {
// 		expect(typeof bestFilmOfYear).toBe('function');
// 	});

// 	it('should return an array', () => {
// 		expect(bestFilmOfYear(movies, 1999) instanceof Array).toBe(true);
// 	});

// 	it('should return a new array, not update the original one', () => {
// 		expect(bestFilmOfYear(movies, 1999)).not.toEqual(movies);
// 	});

// 	it('should return the best film of a year, searching in an array', () => {
// 		const testArr = [
// 			{
// 				title: 'Film1',
// 				year: 1957,
// 				director: 'Stanley Kubrick',
// 				duration: '1h 28min',
// 				genre: ['Drama', 'War'],
// 				score: 6
// 			},
// 			{
// 				title: 'Film2',
// 				year: 1957,
// 				director: 'Stanley Kubrick',
// 				duration: '1h 28min',
// 				genre: ['Drama', 'War'],
// 				score: 8.4
// 			},
// 			{
// 				title: 'Film3',
// 				year: 1957,
// 				director: 'Stanley Kubrick',
// 				duration: '1h 28min',
// 				genre: ['Drama', 'War'],
// 				score: 5
// 			}
// 		];
// 		expect(bestFilmOfYear(testArr, 1957)).toEqual([
// 			{
// 				title: 'Film2',
// 				year: 1957,
// 				director: 'Stanley Kubrick',
// 				duration: '1h 28min',
// 				genre: ['Drama', 'War'],
// 				score: 8.4
// 			}
// 		]);
// 	});
// });
