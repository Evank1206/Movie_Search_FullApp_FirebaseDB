$(document).ready(function () {
    // When user click the btn grab the value from User Input // showed in console.log


    $(".button").on("click", function (e) {
        e.preventDefault()
        var getUserData = $(".input").val().trim();
        console.log(getUserData);
        if (getUserData == 0) {
            alert("Enter The Movie Name!")
        } else {
        //  creating the btn dynamic way to render them into html 
            var btn = $("<button>");
                btn.addClass("ui button inverted primary createdBtn");
                btn.attr("btnAttr");
                btn.text(getUserData);
            $(".btn-View").append(btn);
        }
        // when clicked on created btn console.log the message
        $(".createdBtn").on("click", function(){
            
            var hardCodedMovie = "Love";
            var movieURL = "https://www.omdbapi.com/?t="+hardCodedMovie+"&apikey=trilogy";
            
            $.ajax({
                type: "GET",
                url: movieURL
            }).then(function(data){
                if(data){
                    console.log("movie title: "+data);
                    console.log("movie Img: "+data.Poster);
                    console.log("movie title: "+data.Title);
                    console.log("movie year: "+data.Year);
                    console.log("movie genre: "+data.Genre);
                    console.log("movie desc: "+data.Plot);
                    console.log("movie actors: "+data.Actors);
                    console.log("movie Director: "+data.Director);
                }else{
                    console.log("NOT FOUND"); 
                }
            })

            
        })
    });
});
