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

function showMovie(movieId) {
  const movie = ticket.findMovie(movieId);
  $("#show-movie").show();
  $(".movie-name").text(movie.movieName);
  $(".movie-seat").html(movie.movieSeat);
  $(".movie-time").html(movie.movieTime);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton btn btn-danger' id=" + " " + movie.id + ">Delete</button>");
  if (movie.movieName === "Top Gun Maverick") {
    $(".movie-price").html("$" + 3000 * movie.movieSeat);
  } else if (movie.movieName === "Wakanda Forever") {
    $(".movie-price").html("$" + 2500 * movie.movieSeat);
  } else if (movie.movieName === "Adams Project") {
    $(".movie-price").html("$" + 1500 * movie.movieSeat);
  } else if (movie.movieName === "Woman King") {
    $(".movie-price").html("$" + 3500 * movie.movieSeat);
  } else if (movie.movieName === "Enola Holmes2") {
    $(".movie-price").html("$" + 2000 * movie.movieSeat);
  } else if (movie.movieName === "Black Adam") {
    $(".movie-price").html("$" + 4000 * movie.movieSeat);
  } else if (movie.movieName === "Avatar2") {
    $(".movie-price").html("$" + 4500 * movie.movieSeat);
  }
  else {
    $(".movie-price").html("$0000");
  }
}

function attachContactListeners() {
  $("ol#movies").on("click", "li", function () {
    showMovie(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function () {
    ticket.deleteMovie(this.id);
    $("#show-movie").hide();
    displayMovieDetails(ticket);
  });
  $(".s-movie").on("click", function () {
    window.location.href = "ticket.html"
  });
}


$(document).ready(function () {
  attachContactListeners();
  $("form").submit(function (event) {
    event.preventDefault();
    const inputtedMovieName = $("select#movie-name").val();
    const inputtedMovieTime = parseInt($("select#movie-seat").val());
    const inputtedSeatNumber = $("select#movie-time").val();
    console.log(inputtedMovieName);
    $("select#movie-name").val("");
    $("select#movie-seat").val("");
    $("select#movie-time").val("");
    let newMovie = new Movie(inputtedMovieName, inputtedMovieTime, inputtedSeatNumber);
    ticket.addMovie(newMovie);
    displayMovieDetails(ticket);
    console.log(ticket.movies);

    if (inputtedMovieName === "Top Gun Maverick") {
      $("#image1").show("<li >" + inputtedMovieName + " " + inputtedMovieTime + " " + inputtedSeatNumber + "$3000" + "</li>");
    } else if (inputtedMovieName === "Wakanda Forever") {
      $("#image2").show("<li >" + inputtedMovieName + " " + inputtedMovieTime + " " + inputtedSeatNumber + "$2500" + "</li>");
    } else if (inputtedMovieName === "Adams Project") {
      $("#image3").show("<li >" + inputtedMovieName + " " + inputtedMovieTime + " " + inputtedSeatNumber + "$1500" + "</li>");
    } else if (inputtedMovieName === "Woman King") {
      $("#image4").show("<li >" + inputtedMovieName + " " + inputtedMovieTime + " " + inputtedSeatNumber + "$3500" + "</li>");
    } else if (inputtedMovieName === "Enola Holmes2") {
      $("#image5").show("<li >" + inputtedMovieName + " " + inputtedMovieTime + " " + inputtedSeatNumber + "$2000" + "</li>");
    } else if (inputtedMovieName === "Black Adam") {
      $("#image6").show("<li >" + inputtedMovieName + " " + inputtedMovieTime + " " + inputtedSeatNumber + "$4000" + "</li>");
    } else if (inputtedMovieName === "Avatar2") {
      $("#image7").show("<li >" + inputtedMovieName + " " + inputtedMovieTime + " " + inputtedSeatNumber + "$4500" + "</li>");
    } else {

    }
  });

  $("#button").click(function () {
    $("form").hide();
    $("#last-form").show();
  });
});
