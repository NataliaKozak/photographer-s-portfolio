window.onscroll = function showH() {
      var port = document.getElementById("port");
      var lov = document.getElementById("lov");
      var wed = document.getElementById("wedd");
      var fam = document.getElementById("family");
      if (window.pageYOffset > 150)
      	{
            port.classList.add('fixed');
      	}
      if(window.pageYOffset > 1400 || window.pageYOffset < 100)
      	{
      		port.classList.remove('fixed');
      	}
      if(window.pageYOffset > 1470 )
      	{
      		lov.classList.add('fixed');
      	}
      if(window.pageYOffset > 2400 || window.pageYOffset < 1500)
      	{
      		lov.classList.remove('fixed');
      	}
      if(window.pageYOffset > 2500 )
      	{
      		wed.classList.add('fixed');
      	}
      if(window.pageYOffset > 3000 || window.pageYOffset < 2500)
      	{
      		wed.classList.remove('fixed');
      	}
      	if(window.pageYOffset > 3050 )
      	{
      		fam.classList.add('fixed');
      	}
      if( window.pageYOffset < 3050)
      	{
      		fam.classList.remove('fixed');
      	}
}


$(document).ready(function(){
      $('.slider').slick({
      	dots: true,
      	autoplay: true,
      	autoplaySpeed: 2000,
      	speed: 900,
      }
      	);
    	});
$(document).ready(function(){
      $('.slider_1').slick({
      	dots: true,
      	autoplay: true,
      	autoplaySpeed: 3000,
      	speed: 900
      }
      	);
    	});
$(document).ready(function(){
      $('.slider_l').slick({
      	dots: true,
      	autoplay: true,
      	autoplaySpeed: 2000,
      	speed: 900,
      }
      	);
    	});
$(document).ready(function(){
      $('.slider_lo').slick({
      	dots: true,
      	autoplay: true,
      	autoplaySpeed: 2500,
      	speed: 900,
      }
      	);
    	});
$(document).ready(function(){
      $('.slider_wed').slick({
      	dots: true,
      	autoplay: true,
      	autoplaySpeed: 3000,
      	speed: 900,
      }
      	);
    	});
$(document).ready(function(){
      $('.slider_fem').slick({
      	dots: true,
      	autoplay: true,
      	autoplaySpeed: 2000,
      	speed: 900,
      }
      	);
    	});