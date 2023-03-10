// Business Logic for Ticket ---------
function Ticket() {
  this.movies = {};
  this.currentId = 0;
}
Ticket.prototype.addMovie = function (movie) {
  movie.id = this.assignId();
  this.movies[movie.id] = movie;
};
icket.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};
