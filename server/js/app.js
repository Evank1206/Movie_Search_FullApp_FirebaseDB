$(document).ready(function () {

    $(".button").on("click", function (e) {
        e.preventDefault()
        var getUserData = $(".input").val().trim();
        console.log(getUserData);

        var btn = $("<button>");
            btn.addClass("ui button inverted primary createdBtn");
            btn.attr("btnAttr");
            btn.text(getUserData)
        $(".btn-View").append(btn)


        // $(".btn-View").append(getUserData);

    })
});
