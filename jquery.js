$(document).ready(function () {
    $("#toggle").click(function () {

        $("body").toggleClass("dark");

        if ($("body").hasClass("dark")) {
            $(this).text("white");
        } else {
            $(this).text("Dark Mode");
        }

    });
});