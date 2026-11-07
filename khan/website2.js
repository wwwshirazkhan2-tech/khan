
$(document).ready(function () {

    $("#myform").submit(function (event) {

        event.preventDefault();

        var name = $("#username").val().trim();
        var email = $("#email").val().trim();
        var contact = $("#contactt").val().trim();
        var password = $("#password").val();


        if (name === "") {
            $("#usernameError").text("please enter a valid name").show();
        } else {
            $("#usernameError").hide();
        }


        if (email === "") {
            $("#emailError").text("Email is required").show();
        } else {
            $("#emailError").hide();
        }


        var contactRegex = /^03[0-9]{9}$/;

        if (contact === "") {
            $("#contacttError").text("please enter a contact").show();
        } else if (!contactRegex.test(contact)) {
            $("#contacttError").text("please enter a valid pakistani number").show();
        } else {
            $("#contacttError").hide();
        }


        if (password === "") {
            $("#passwordError").text("please enter a valid password").show();
        } else {
            $("#passwordError").hide();
        }

    });

});