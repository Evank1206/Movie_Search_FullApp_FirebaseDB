$(document).ready(function () {
    // When user click the btn grab the value from User Input // showed in console.log

    $(".button").on("click", function (e) {
        e.preventDefault()
        var getUserData = $(".input").val().trim();
        // console.log(getUserData);
        if (getUserData == 0) {
            alert("Enter The Movie Name!")
        } else {
        // dynamic hr & spacing between elements
            var br = $("<br/>");
            $(".btn-View").prepend(br); // give a space BEFORE created button between hr

            var hr = $("<hr/>");
            $(".btn-View").prepend(hr); // same as before(); give a hr BEFORE button

            var hr = $("<hr/>");
            $(".btn-View").after(hr);   // same as append(); give a hr AFTER button

            var br = $("<br/>");
            $(".btn-View").after(br);   // give a space AFTER created button between hr

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
        /* CREATING DYNAMIC HTML ELEMENTS */
                    var img = $("<img class='ui img'>");
                        // img.addClass("ui img");
                        img.attr("src", data.Poster);
                        $(".image").append(img);
    
                    var name = $("<h3>");
                        name.addClass("ui header MovieName");
                        name.text("Movie Name: ");
                        $(".content").append(name);
                        $(".MovieName").append(data.Title);

                    var genre = $("<p class='Genre'>");
                        $(".content").append(genre);
                        $(".Genre").append(data.Genre);

                    var year = $("<p class='year'>");
                        // genre.addClass("year");
                        year.text("Year: ");
                        $(".content").append(year);
                        $(".year").append(data.Year);

                    var description = $("<span class='description'>");
                        description.text("Description:  ");
                        $(".content").append(description);
                        $(".description").append(data.Plot);

                    var actor = $("<p>");
                        actor.addClass("actors");
                        actor.text("Actors:  ");
                        $(".content").append(actor);
                        $(".actors").append(data.Actors);

                    var Director = $("<p>");
                        Director.addClass("director");
                        Director.text("Director:  ");
                        $(".content").append(Director);
                        $(".director").append(data.Director);

        /* DATA FOR HARD CODED TO DOM */
                    // $(".img").append(data.Poster);
                    // $(".movieName").append(data.Title);
                    // $(".year").append(data.Year);
                    // $(".genre").append(data.Genre);
                    // $(".description").append(data.Plot);
                    // $(".actorName").append(data.Actors);
                    // $(".directorName").append(data.Director);

                } else {
                    console.log("MOVIE NOT FOUND");
                }
            });
        });
    });
});
