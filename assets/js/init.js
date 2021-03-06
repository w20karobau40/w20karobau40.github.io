(function ($) {

  var intervall = null;

  $(document).ready(function () {

    initMaterialize();
	
    $("#play-btn").on("click", playCarousel);
    $("#pause-btn").on("click", pauseCarousel);

    // autoplay of the banner
    setTimeout(playCarousel, 7000);

  });

  // functions 
  

  function initMaterialize() {

    $('.scrollspy').scrollSpy();
    
    M.AutoInit();

    $('.materialboxed').materialbox();
    
    $('.parallax').parallax();

    $('.sidenav').sidenav();
    $('.modal').modal();
  
    $('.pushpin').pushpin({
      top: 150,
      offset: 75
    });
	
    $("#home-carousel").carousel({
      fullWidth: true,
      indicators: true,
      duration: 500
    });
	
    $("#bausteine-carousel").carousel();
	
  }

  function triggerCarousel() {
    $("#home-carousel").carousel('next');
  }

  function pauseCarousel() {
    clearInterval(intervall);
    intervall = null;
  }

  function playCarousel() {
    if (intervall === null) {
      triggerCarousel();
      intervall = setInterval(triggerCarousel, 5500);
    }
  }
})(jQuery); // end of jQuery name space