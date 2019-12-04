var searchTerm = ''

$('#add-meme').on('click', function(event) {
  event.preventDefault();
  searchTerm = $('#meme-input').val();
  console.log("searchTerm", searchTerm)
  const queryUrl = "https://api.giphy.com/v1/gifs/search?q="+ searchTerm +"&api_key=X0o4KtmIAWKDT5cJNNvPLhowkrKhv1mB&limit=5"
$.ajax({
  url: queryUrl,
    method: "GET",
})
.then(function (response) {
  console.log(response)
  $(".giphy-container").empty();
for (i = 0; i < 5; i++){
  $('.giphy-container').prepend("<img src=" + response.data[i].images.fixed_height.url + "/>");

}

})

})


gsap.fromTo(".btn", {opacity: 0},{opacity: 1, duration: 5});

function tweenComplete1(){
  console.log(completebtn)
}