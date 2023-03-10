// Business Logic for Ticket ---------
function Ticket() {
  this.movies = {};
  this.currentId = 0;
}
Ticket.prototype.addMovie = function (movie) {
  movie.id = this.assignId();
  this.movies[movie.id] = movie;
};
Ticket.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};
Ticket.prototype.findMovie = function (id) {
  if (this.movies[id] != undefined) {
    return this.movies[id];
  }
  return false;
};
Ticket.prototype.deleteMovie = function (id) {
  if (this.movies[id] === undefined) {
    return false;
  }
  delete this.movies[id];
  return true;
};

// Business Logic for Contacts ---------
function Movie(movieName, movieSeat, movieTime) {
  this.movieName = movieName;
  this.movieSeat = movieSeat;
  this.movieTime = movieTime;
}

Movie.prototype.movieDetails = function () {
  return this.movieName + " " + this.movieSeat + " " + this.movieTime;
  
};
// User Interface Logic ---------
let ticket = new Ticket();
function displayMovieDetails(ticketToDisplay) {
  let movieList = $("ol#movies");
  let htmlForMovieInfo = "";
  Object.keys(ticketToDisplay.movies).forEach(function (key) {
    const movie = ticketToDisplay.findMovie(key);
    htmlForMovieInfo += "<li id=" + movie.id + ">" + movie.movieName + " " + movie.movieSeat + " " + movie.movieTime + "</li>";
  });
  console.log(htmlForMovieInfo);
  movieList.html(htmlForMovieInfo);
}
