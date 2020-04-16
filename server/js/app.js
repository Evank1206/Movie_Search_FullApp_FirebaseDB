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
        $(".createdBtn").on("click", function () {

            var hardCodedMovie = "Love";
            var movieURL = "https://www.omdbapi.com/?t=" + hardCodedMovie + "&apikey=trilogy";

            $.ajax({
                type: "GET",
                url: movieURL
            }).then(function (data) {
                if (data) {
                    // console.log("movie Img: " + data.Poster);
                    // console.log("movie title: " + data.Title);
                    // console.log("movie year: "+data.Year);
                    // console.log("movie genre: "+data.Genre);
                    // console.log("movie desc: "+data.Plot);
                    // console.log("movie actors: "+data.Actors);
                    // console.log("movie Director: "+data.Director);
                    

                    var img = $("<img class='ui img'>");
                        // img.addClass("ui img");
                        img.attr("src", data.Poster);
                    $(".image").append(img);
    
                    var name = $("<h3>");
                        name.addClass("header MovieName");
                        name.text("Movie Name: ");
                    $(".content").append(name);
                    $(".MovieName").append(data.Title);
         
                    



                    // $(".img").append(data.Poster);
                    // $(".movieName").append(data.Title);
                    // $(".year").append(data.Year);
                    // $(".genre").append(data.Genre);
                    // $(".description").append(data.Plot);
                    // $(".actorName").append(data.Actors);
                    // $(".directorName").append(data.Director);

                } else {
                    console.log("NOT FOUND");
                }

                // var mainDiv = $("<div>");
                //     mainDiv.addClass("ui divided items");
                // var newDiv = $("<div>");
                //     newDiv.addClass("ui item");
                // mainDiv.append(newDiv);
                // var imgDiv = $("<div>");
                //     imgDiv.addClass("ui image medium");
                // var img = $("<img>");
                //     img.addClass("img");
                //     img.src("");
                // newDiv.append(imgDiv);
                // var textDiv = $("<div>");
                //     textDiv.addClass("content");
                // newDiv.append(textDiv);

                // var spanMovieName = $("<span>");
                //     spanMovieName.addClass("movieName");
                //     spanMovieName.text()
                // textDiv.append(spanMovieName);
                // var genre = $("<p>");
                //     genre.addClass("year");
                // textDiv.append(genre);
                // var year = $("<p>");
                //     year.addClass("year");
                // textDiv.append(year);
                // var spanActorName = $("<span>");
                //     spanActorName.addClass("actorName");
                // textDiv.append(spanActorName);
                // var spanDirectorName = $("<span>");
                //     spanDirectorName.addClass("directorName");
                // textDiv.append(spanDirectorName);
                // var spanDescription = $("<span>");
                //     spanDescription.addClass("description");
                // textDiv.append(spanDescription);
                // console.log(mainDiv);









                // var imgDiv = $("<div>");
                // imgDiv.addClass("ui image medium");

                // newDiv.append(imgDiv);
               


            })


        })
    });
});
