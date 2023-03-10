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
