// $(window).on("load", function(){
//     $(".preloader").fadeOut();
// })

$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $("#top").fadeIn(1000);
        }
        else{
            $("#top").fadeOut();
        }
    })

    $("#top").click(function(){
        $("html, body").animate({
            scrollTop:0
        },2000);
    })

})

