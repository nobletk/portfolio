$(".js-scroll-trigger").click(function(event) {
    event.preventDefault();

    var targetId = $(this).attr("href");

    setTimeout(function() {
        $(".navbar-collapse").collapse("hide");
    }, 300);

    $("html, body").animate(
        {
            scrollTop: $(targetId).offset().top,
        },
        500,
        "easeInOutExpo"
    );
});

$(document).ready(function() {
    const footerPlaceholder = $("#footer-placeholder");
    if (footerPlaceholder.length) {
        const filepath = footerPlaceholder.data("filepath");

        footerPlaceholder.load(filepath, function() {

            const yearSpan = document.getElementById("current-year");
            if (yearSpan) {
                yearSpan.textContent = new Date().getFullYear();
            }

        });
    }

    const navbarPlaceholder = $("#navbar-placeholder");
    if (navbarPlaceholder.length) {
        const filepath = navbarPlaceholder.data("filepath");
        navbarPlaceholder.load(filepath);
    }
});
