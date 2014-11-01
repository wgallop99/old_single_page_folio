$(document).ready(function() {

  $('.homeTag').on('click', 'a', function () {
    $('html, body').animate({
        scrollTop: $('body').offset().top }, 1000);
    });

  $('.workTag').on('click', 'a', function () {
    $('html, body').animate({
        scrollTop: $('#work').offset().top }, 1000);
    });

  $('.aboutTag').on('click', 'a', function () {
    $('html, body').animate({
        scrollTop: $('.aboutHeader').offset().top }, 1000);
    });

  $('.contactTag').on('click', 'a', function () {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top }, 1000);
    });

  $('.downWrap').on('click', 'a', function () {
    $('html, body').animate({
        scrollTop: $("#work").offset().top }, 1000);
    });

});
