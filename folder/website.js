$(document).ready(function () {

    // =========================
    // HIDE CARD TEXT
    // =========================

    $(".hide-btn").click(function (e) {

        e.preventDefault();

        $(this)
            .closest(".card")
            .find(".card-text")
            .hide();

    });


    // =========================
    // SHOW CARD TEXT
    // =========================

    $(".show-btn").click(function (e) {

        e.preventDefault();

        $(this)
            .closest(".card")
            .find(".card-text")
            .show();

    });


    // =========================
    // PAGINATION
    // =========================

    let cardsPerPage = 4;

    let cards = $(".card-item");

    let totalCards = cards.length;

    let totalPages = Math.ceil(totalCards / cardsPerPage);

    let currentPage = 1;


    // =========================
    // SHOW PAGE FUNCTION
    // =========================

    function showPage(page) {

        currentPage = page;

        cards.hide();


        let start = (page - 1) * cardsPerPage;

        let end = start + cardsPerPage;


        cards.slice(start, end).show();


        // ACTIVE PAGE

        $(".page-btn")
            .parent()
            .removeClass("active");


        $('.page-btn[data-page="' + page + '"]')
            .parent()
            .addClass("active");


        // PREVIOUS BUTTON

        if (currentPage == 1) {

            $(".previous-btn")
                .parent()
                .addClass("disabled");

        } else {

            $(".previous-btn")
                .parent()
                .removeClass("disabled");

        }


        // NEXT BUTTON

        if (currentPage == totalPages) {

            $(".next-btn")
                .parent()
                .addClass("disabled");

        } else {

            $(".next-btn")
                .parent()
                .removeClass("disabled");

        }

    }


    // =========================
    // CREATE PAGINATION
    // =========================

    if ($("#pagination").length > 0 && totalCards > 0) {

        $("#pagination").empty();


        // PREVIOUS

        $("#pagination").append(`
            <li class="page-item">
                <a class="page-link previous-btn" href="#">
                    Previous
                </a>
            </li>
        `);


        // PAGE NUMBERS

        for (let i = 1; i <= totalPages; i++) {

            $("#pagination").append(`
                <li class="page-item">
                    <a
                        class="page-link page-btn"
                        href="#"
                        data-page="${i}">
                        ${i}
                    </a>
                </li>
            `);

        }


        // NEXT

        $("#pagination").append(`
            <li class="page-item">
                <a class="page-link next-btn" href="#">
                    Next
                </a>
            </li>
        `);


        // =========================
        // PAGE NUMBER CLICK
        // =========================

        $(document).on("click", ".page-btn", function (e) {

            e.preventDefault();

            let page = $(this).data("page");

            showPage(page);

        });


        // =========================
        // PREVIOUS CLICK
        // =========================

        $(document).on("click", ".previous-btn", function (e) {

            e.preventDefault();

            if (currentPage > 1) {

                showPage(currentPage - 1);

            }

        });


        // =========================
        // NEXT CLICK
        // =========================

        $(document).on("click", ".next-btn", function (e) {

            e.preventDefault();

            if (currentPage < totalPages) {

                showPage(currentPage + 1);

            }

        });


        // =========================
        // FIRST PAGE
        // =========================

        showPage(1);

    }


    // =========================
    // LOGIN FORM
    // =========================

    $("#loginForm").submit(function (event) {

        event.preventDefault();


        // GET VALUES

        let email = $("#loginEmail").val().trim();

        let password = $("#loginPassword").val();


        // REMOVE OLD ERRORS

        $("#loginEmailError").html("");

        $("#loginPasswordError").html("");


        let valid = true;


        // =========================
        // EMAIL VALIDATION
        // =========================

        if (email === "") {

            $("#loginEmailError").html("Email is required");

            valid = false;

        } else if (!email.includes("@")) {

            $("#loginEmailError").html("Enter a valid email");

            valid = false;

        }


        // =========================
        // PASSWORD VALIDATION
        // =========================

        if (password === "") {

            $("#loginPasswordError").html("Password is required");

            valid = false;

        } else if (password.length < 8) {

            $("#loginPasswordError").html(
                "Password must be at least 8 characters"
            );

            valid = false;

        }


        // =========================
        // SUCCESS
        // =========================

        if (valid) {

            alert("Login successful!");

        }

    });

});