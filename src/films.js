// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movie => movie.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 let result = array.filter(movie => movie.director === director)
 return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorMovies = getMoviesFromDirector(array, director);
  let result = directorMovies.reduce((average, movie) => (average + movie.score),0);
  result = Number((result/directorMovies.length).toFixed(2));
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = [...array];

  result = result.sort((a, b) => (a.title > b.title) ? 1 : -1)
  .map(film => film.title)
  .slice(0, 20);

  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  let result = [...array];

  result = result.sort((a, b) => {
  if (a.year > b.year) return 1;
  else if (a.year < b.year) return -1;
  else{
      if(a.title > b.title) return 1;
        else return -1;
      }
  });
  return result;
}

// Exercise 6: Calculate the average of the movies in a category

function moviesAverageByCategory(movies, chosenCategory) {

  const categoryMovies = movies.filter(movie => movie.genre.includes(chosenCategory));

 
  if (categoryMovies.length === 0) return 0.00;
  else{

  const averageScore = categoryMovies.reduce((accumulator, movie) => accumulator + movie.score, 0);

  let result = Number((averageScore / categoryMovies.length).toFixed(2));

  return result; 
}
}

// Exercise 7: Modify the duration of movies to minutes
  function hoursToMinutes(movies) {
    const peliculasConDuracionEnMinutos = movies.map(pelicula => {
      const duracionEnHoras = parseInt(pelicula.duration.match(/\dh/), 10) || 0;
      const duracionEnMinutos = parseInt(pelicula.duration.match(/\d+min/), 10) || 0;
  
      const duracionTotalEnMinutos = duracionEnHoras * 60 + duracionEnMinutos;
  
      return {
        ...pelicula,
        duration: duracionTotalEnMinutos
      };
    });
  
    return peliculasConDuracionEnMinutos;
  }


// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const moviesOfYear = movies.filter(movie => movie.year === year);

  if (moviesOfYear.length === 0) {
    return [`No hay películas registradas en el año ${year}.`];
  }

  const maxScore = Math.max(...moviesOfYear.map(movie => Number(movie.score)));

  const bestMovies = moviesOfYear.filter(movie => Number(movie.score) === maxScore);

  return bestMovies;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
