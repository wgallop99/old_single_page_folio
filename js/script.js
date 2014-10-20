$( document ).ready(function() {

  // $(window).scroll( function() {
  //   var value = $(this).scrollTop();
  //   if ( value > 1451 )
  //       $(".workHeading").css("display", "none");
  // });

  $(window).on('scroll', function() {
    console.log( $(this).scrollTop() );
  });

  $('.homeTag').on('click', 'a', function () {
    console.log("asdfasdfa");
    event.preventDefault();
        $(".body").ScrollTo({
            duration: 1000
        });
    });

  $('.workTag').on('click', 'a', function () {
    console.log("asdfasdfa");
    event.preventDefault();
        $('#work').ScrollTo({
            duration: 1000
        });
    });

  $('.aboutTag').on('click', 'a', function () {
    console.log("asdfasdfa");
    event.preventDefault();
        $('.aboutHeader').ScrollTo({
            duration: 1000
        });
    });

    $('.contactTag').on('click', 'a', function () {
      console.log("asdfasdfa");
      event.preventDefault();
          $('.contact').ScrollTo({
              duration: 1000
          });
    });

    $('.downWrap').on('click', 'a', function () {
      console.log("asdfasdfa");
      event.preventDefault();
          $('#work').ScrollTo({
              duration: 1000
          });
    });

});
