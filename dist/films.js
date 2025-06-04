"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesAverageOfDirector = exports.getMoviesFromDirector = exports.getAllDirectors = void 0;
// Exercise 1: Get the array of all directors.
const getAllDirectors = (array) => {
    let result = [];
    result = array.map((list) => list.director);
    console.log('EXERCISE 1 ->', result);
    return result;
};
exports.getAllDirectors = getAllDirectors;
// Exercise 2: Get the films of a certain director
const getMoviesFromDirector = (array, director) => {
    let result = [];
    result = array.filter((list) => list.director === director);
    return result;
};
exports.getMoviesFromDirector = getMoviesFromDirector;
// Exercise 3: Calculate the average of the films of a given director.
const moviesAverageOfDirector = (array, director) => {
    let result = 0;
    if (array.length === 0) {
        return 0;
    }
    let initialValue = 0;
    let sumTotalPoints = array.reduce((accumulator, array) => { var _a; return accumulator + ((_a = array.score) !== null && _a !== void 0 ? _a : 0); }, initialValue);
    result = parseFloat((sumTotalPoints / array.length).toFixed(2));
    return result;
};
exports.moviesAverageOfDirector = moviesAverageOfDirector;
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
