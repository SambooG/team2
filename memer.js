let searchTerm = $('userEntry').val();
const queryUrl = "https://api.giphy.com/v1/gifs/search?q="+ searchTerm +"&api_key=X0o4KtmIAWKDT5cJNNvPLhowkrKhv1mB"
const giphyResults = {};

$('#add-meme').on('click', function(event) {
  event.preventDefault();
$.ajax({
  url: queryUrl,
    method: "GET",
    success: function(response){
      console.log("RESPONSE:! ", response)
      const giphyResults = response.data;
    }
})
})