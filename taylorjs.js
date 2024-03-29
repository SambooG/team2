searchedMovie = "";
movieInfo = {};

$('#add-meme').on('click', function(event) {
  event.preventDefault();
  $(".meme-container").empty();
  searchedMovie = $('#meme-input').val().trim();
  console.log('Movie: ' + searchedMovie);
  // $('#meme-input').val("");
  searchOMDB();
});

var searchOMDB = function(term) {

  var apiKey = '7bd2549';
  var queryURL = ' http://www.omdbapi.com/?apikey=' + apiKey + '&t=' + searchedMovie;
  $.ajax({
    url: queryURL,
    method: 'get'
  })
  .then(function(response) {
    console.log(response);
    // sets actorsOrig to Actors list from rasponse
    var actorsOrig = response.Actors;
    // takes out the space after the commas in original string (this is to make sure they are not kept 
    // in the array), and assigns to actorsOrig
    actorsOrig = actorsOrig.split(', ').join(',');
    // sets actorsArray to an array generated by splitting the Actors string (from response) at the commas
    var actorArray = actorsOrig.split(',');
    // sends array of actors to movieInfo object
    movieInfo['actors'] = actorArray;
    // sets year variable to Year from response
    var year = response.Year;
    // sends year to movieInfo object
    movieInfo['year'] = year;
    // sets posterURL to Poster from the response
    var posterURL = response.Poster;
    // sends posterURL to movieInfo object
    movieInfo['posterURL'] = posterURL;
    // sets director to Director from response
    var director = response.Director;
    // sends director to movieInfo object
    movieInfo['director'] = director;
    // sets rated to Rated from the response
    var rated = response.Rated;
    // sends rated to movieInfo object
    movieInfo['rated'] = rated;
    console.log('---movieInfo---')
    console.log(movieInfo);
    $('.meme-container').prepend("<img src=" + posterURL + "/>" );
    $('.meme-container').prepend( year + " "  + " " + rated ); 


  });
}
