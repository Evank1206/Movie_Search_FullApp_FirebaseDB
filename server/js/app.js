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



    })
});
