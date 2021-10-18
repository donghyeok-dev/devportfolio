/*!
    Title: Dev Portfolio Template
    Version: 1.2.2
    Last Change: 03/25/2020
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/

(function ($) {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.top_move_button').fadeIn();
        } else {
            $('.top_move_button').fadeOut();
        }
    });

    $(".top_move_button").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

})(jQuery);
