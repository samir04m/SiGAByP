$(document).ready(function(){

     $('.carousel.carousel-slider').carousel({fullWidth: true});

     $('.modal').modal();
     $('select').material_select();

     $("#redirect_login").click(function() {
         location.href = this.href;
     });

     $("#entrar").click(function(){
        if (validar_login()) {
            $("#login_error").addClass("hide");
            $("#redirect_login").click();
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
