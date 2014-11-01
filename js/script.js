$(document).ready(function() {

  $(window).on('scroll', function() {
    console.log( $(this).scrollTop() );
  });

  $('.homeTag').on('click', 'a', function () {
        $(".body").ScrollTo({
            duration: 1000
        });
    });

  $('.workTag').on('click', 'a', function () {
        $('#work').ScrollTo({
            duration: 1000
        });
    });

  $('.aboutTag').on('click', 'a', function () {
        $('.aboutHeader').ScrollTo({
            duration: 1000
        });
    });

    $('.contactTag').on('click', 'a', function () {
          $('.contact').ScrollTo({
              duration: 1000
          });
    });

    $('.downWrap').on('click', 'a', function () {
          $('#work').ScrollTo({
              duration: 1000
          });
    });

});
