
// Write a program using a loop that will ask the user for the name of the movie (first prompt)
// and its rating from www.imdb.com (second prompt)

// Each element of the array will be an object, consisting of two fields: title and imdb.

// The program will allow you to enter as many movies as you want into the movies array.

// Then the program should first print out to the console all movies that have a rating of less than 7, 
// then those whose rating is greater than or equal to 7. 
// Write the name of the movie and its rating next to each other, e.g.:

let movies = [];

while (true) {

  let movieName = prompt("Name of the movie:");
  if (!movieName) break;

  let rating = prompt("rating:");
  if (!rating) break;

  // object
  let movie = {
    title: movieName,
    imdb: rating
  }
  // push
  movies.push(movie);
}

for (let film of movies) {
  if (film.imdb < 7) {
    console.log(`rating of less than 7: ${film.title}`)
  }
}

for (let film of movies) {
  if (film.imdb >= 7) {
    console.log(`title: ${film.title}, rating: ${film.imdb}`);
  }
}