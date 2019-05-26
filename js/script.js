$(document).ready(function(){

     $('.carousel.carousel-slider').carousel({fullWidth: true});

     $('.modal').modal();
     $('#modal_login').modal('open');

     $("#entrar").click(function(){
        if (validar_login()) {
            window.location ="/casas.html";
            // location.href ="/casas.html";
            // $("#login_img").removeClass("hide");
            $("#login_error").addClass("hide");
        }else{
            $("#login_img").addClass("hide");
            $("#login_error").removeClass("hide");
        }
     });
});

function validar_login(){
    var username = $("#username").val();
    var password = $("#password").val();

    if (username == "admin" && password == "1234") return true;

    return false;
}
