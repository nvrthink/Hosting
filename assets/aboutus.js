$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".navbar").css("background-color" , "white");
        }
  
        else{
            $(".navbar").css("background-color" , "transparent");  	
        }
    })
  });

  // Show Password
  function passFunc() {
    var x = document.getElementById("exampleInputPassword1");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
