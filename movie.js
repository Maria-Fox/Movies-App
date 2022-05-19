//When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.

$(document).ready(function () {
  console.log("ready");
});

let movieArr = [];
let movieId = 0;

function appendMovieData(mData) {
  return `<tr>
      <td>${mData.movieInput}</td>
      <td>${mData.movieRating}</td>
      <td><button type="button" data-delete-id="${mData.movieId}" class="removeButton" > Remove </button></td>
    </tr> `;
}

//grab movieForm input and append to reviews
$("#movieForm").on("submit", function (e) {
  e.preventDefault();

  let movieInput = $("#movieName").val();
  let movieRating = $("#rating-score").val();

  if (!movieInput) {
    alert("Please enter both a movie title and a rating between 1-10.");
  } else {
    let mData = { movieInput, movieRating, movieId };
    movieArr.push(mData);
    movieId++;
    console.log(mData);

    const $addedMovie = appendMovieData(mData);
    $("#tbody").append($addedMovie);
    $("#movieForm").trigger("reset");
  }
});

//event listener for removing a list item
$("#reviews").on("click", ".removeButton", function (e) {
  e.preventDefault();

  let locToRemove = movieArr.findIndex(
    (movie) => movie.movieId === +$(e.target).data("deleteId") //returns value that was set
  );
  movieArr.splice(locToRemove, 1); //start, delete count

  $(e.target).closest("tr").remove();
});
//do not remove below
