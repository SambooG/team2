let = searchTerm = $('userEntry').val();
const queryUrl = "https://api.imgur.com/3/gallery/search?q="+ searchTerm
// "Authorization: Client-ID {{32366db57d27d55}}" to go in html header?

$('#GetMyMeme').on('click',function(){
    $.ajax({
        url: queryUrl,
        method: 'GET',
    })
    .then(function(response){
        var results = response.data;
            if (results === movieName){
            // creating a div for our mem result
            var memeDiv = $('<resultdiv>');
            // creating image tag
            var memeImg = $('<img>');
        }

    });
});  
