$( document ).ready(function() {

  $('#workTag').on('click', 'a', function () {
    console.log("asdfasdfa");
    event.preventDefault();
        $('#work').ScrollTo({
            duration: 1000
        });
    });

  $('#aboutTag').on('click', 'a', function () {
    console.log("asdfasdfa");
    event.preventDefault();
        $('.aboutHeader').ScrollTo({
            duration: 1000
        });
    });

    $('#contactTag').on('click', 'a', function () {
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
