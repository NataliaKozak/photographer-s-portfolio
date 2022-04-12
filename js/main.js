window.onscroll = function showH() {
	var header = document.getElementById("header");

	if (window.pageYOffset > 600)
	{
		header.classList.add('menu_fixed');
	}
}

$(document).ready(function(){
      $('.slider').slick({
      	slidesToShow: 3,
      	slidesToScroll: 1,
      	autoplay: true,
      	autoplaySpeed: 1000,
      	speed: 900,
      	centerMode: true,
      	centerPadding: '0px',
      	zindex: 0,
      	pauseOnHover: true,
            responsive: [
            {
                  breakpoint: 501,
                  settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '40px'
                  }
            }]
      });
    	});
