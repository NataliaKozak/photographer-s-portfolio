window.onscroll = function showH() {
	var header = document.getElementById("header");

	if (window.pageYOffset > 100)
	{
		header.classList.add('menu_fixed');
	}
}

$(document).ready(function(){
      $('.slid').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 900,
      }
        );
      });


$(document).ready(function(){
  $('#btn_submit').click(function(){
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    //отправка данных
    $.ajax({
      url: "action.php",
      type: "post",
      dataType: "json",
      data: {
        "name": name,
        "email": email,
        "phone": phone
      },
      success: function(data){
        $('.messages').html(data.result);
      }
    });
  });
});

